import { useSearchParams as useRouterSearchParams } from 'react-router-dom';
import { SearchParams } from '../types/enums';

export const useSearchParams = () => {
  const [searchParams, setSearchParams] = useRouterSearchParams();

  const sort = searchParams.get(SearchParams.Sort) || '';
  const order = searchParams.get(SearchParams.Order) || '';
  const filter = searchParams.get(SearchParams.Filter) || '';

  return {
    searchParams,
    setSearchParams,
    sort,
    order,
		filter,
  };
};
