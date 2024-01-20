import { useAppSelector, useThunkDispatch } from '../store/hooks';
import { fetchUsers, selectUsers } from '../store/usersSlice';
import { SortBy } from '../types/enums';
import { User } from '../types/type';
import { useSearchParams } from './useSearchParams';
import { useState, useEffect } from 'react';

export const useUsers = () => {
  const [usersFiltered, setUsers] = useState<User[]>([]);
  const { sort, order, filter } = useSearchParams();
  const users = useAppSelector(selectUsers);

  const dispatch = useThunkDispatch();

  useEffect(() => {
    let newUsers = [...users];

    const currentOrder = order ? -1 : 1;

    console.log({ sort, order, newUsers });

    switch (sort) {
      case SortBy.Name:
        newUsers.sort((a, b) => {
          return (
            a[sort].toLowerCase().localeCompare(b[sort].toLowerCase()) *
            currentOrder
          );
        });

        break;

      case SortBy.City:
        newUsers.sort((a, b) => {
          console.log({
            'a.address[sort]': a.address[sort],
            'a.address': a.address,
          });
          return (
            a.address[sort]
              .toLowerCase()
              .localeCompare(b.address[sort].toLowerCase()) * currentOrder
          );
        });

        break;

      default:
        break;
    }

    if (filter) {
      newUsers = newUsers.filter((user) =>
        user.name.toLocaleLowerCase().includes(filter.toLocaleLowerCase())
      );
    }

    setUsers(newUsers);
  }, [users, sort, order, filter]);

  useEffect(() => {
    if (!users.length) {
      dispatch(fetchUsers());
    }
  }, []);

  return { users: usersFiltered };
};
