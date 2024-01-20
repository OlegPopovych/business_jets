import { SearchParams, SortBy } from '../types/enums';
import { useSearchParams } from './useSearchParams';

export const useListControl = () => {
	const { sort, order, filter, setSearchParams } = useSearchParams();

  const hadndleFilterUsers = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;

    if (value) {
      setSearchParams((searchParams) => {
        searchParams.set(SearchParams.Filter, value);
        return searchParams;
      });
    } else {
      setSearchParams((searchParams) => {
        searchParams.delete(SearchParams.Filter);
        return searchParams;
      });
    }
  };

  const handleSortParams = (event: React.MouseEvent) => {
    const target = event.currentTarget as HTMLElement;

    const dataColValue = target.dataset.col;
    console.log({ sort, order, filter });

    if (dataColValue) {
      if (sort === dataColValue && !order) {
        setSearchParams((searchParams) => {
          searchParams.set(SearchParams.Order, SortBy.OrderDesc);
          return searchParams;
        });
      }

      if (sort !== dataColValue) {
        setSearchParams((searchParams) => {
          searchParams.set(SearchParams.Sort, dataColValue);
          searchParams.delete(SearchParams.Order);
          return searchParams;
        });
      }

      if (sort === dataColValue && order) {
        setSearchParams((searchParams) => {
          searchParams.delete(SearchParams.Order);
          return searchParams;
        });
      }

      if (sort === dataColValue && order) {
        setSearchParams((searchParams) => {
          searchParams.delete(SearchParams.Order);
          searchParams.delete(SearchParams.Sort);
          return searchParams;
        });
      }
    }
  };

	return {hadndleFilterUsers, handleSortParams};
}