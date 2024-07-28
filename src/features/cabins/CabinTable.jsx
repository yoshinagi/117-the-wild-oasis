import Spinner from '../../ui/Spinner';
import CabinRow from './CabinRow';
import { useCabin } from './useCabin';
import Table from '../../ui/Table';
import Menus from '../../ui/Menus';
import { useSearchParams } from 'react-router-dom';

function CabinTable() {
  const { isPending, cabins } = useCabin();
  const [searchParams] = useSearchParams();

  if (isPending) return <Spinner />;

  // 1) Filter
  const filterValue = searchParams.get('discount') || 'all';

  let filteredCabins;
  if (filterValue === 'all') filteredCabins = cabins;
  if (filterValue === 'no-discount')
    filteredCabins = cabins.filter((cabin) => cabin.discount === 0);
  if (filterValue === 'with-discount')
    filteredCabins = cabins.filter((cabin) => cabin.discount > 0);

  // 2) Sort
  const sortBy = searchParams.get('sortBy') || 'name-asc';
  const [field, direction] = sortBy.split('-');
  const modifier = direction === 'asc' ? 1 : -1;
  const sortCabins = filteredCabins.sort(
    (a, b) => (a[field] - b[field]) * modifier
  );

  return (
    <Menus>
      <Table columns={'0.6fr 1.8fr 2.2fr 1fr 1fr 1fr'}>
        <Table.Header role="row">
          <div></div>
          <div>Cabin</div>
          <div>Capacity</div>
          <div>Price</div>
          <div>Discount</div>
          <div></div>
        </Table.Header>

        <Table.Body
          data={sortCabins}
          render={(cabin) => <CabinRow cabin={cabin} key={cabin.id} />}
        />
      </Table>
    </Menus>
  );
}

export default CabinTable;
