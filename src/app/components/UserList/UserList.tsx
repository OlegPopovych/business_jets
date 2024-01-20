import { User } from '../../../types/type';
import cl from 'classnames';

import './userList.scss';
import { UserListElement } from '../UserListElement/UserListElement';
import { useSearchParams } from '../../../hooks/useSearchParams';
import { useListControl } from '../../../hooks/useListControl';
import { SortBy } from '../../../types/enums';

interface UserListProps {
  users: User[];
}

export const UserList: React.FC<UserListProps> = ({ users }) => {
  const { sort, order, filter } = useSearchParams();
  const { hadndleFilterUsers, handleSortParams } = useListControl();

  return (
    <section className='list' data-cy='list'>
      <h1 className='list__title'>Users list</h1>

      <div>
        <input
          type='text'
          value={filter}
          className='list__filter1'
          placeholder='Enter user name'
          onChange={hadndleFilterUsers}
          data-cy='list-input'
        />
      </div>

      <table className='list__table'>
        <thead>
          <tr>
            <th
              data-col={SortBy.Name}
              onClick={handleSortParams}
              data-cy='sort-by-name'
            >
              Name
              <span className='list__order-icon'>
                <i
                  className={cl(
                    'fas',
                    { 'fa-sort': sort !== SortBy.Name },
                    { 'fa-sort-up': sort === SortBy.Name && !order },
                    { 'fa-sort-down': sort === SortBy.Name && order }
                  )}
                  style={{ color: '#85C1FF' }}
                />
              </span>
            </th>

            <th>Email</th>

            <th>Company name</th>

            <th
              data-col={SortBy.City}
              onClick={handleSortParams}
              style={{ cursor: 'pointer' }}
              data-cy='sort-by-city'
            >
              City
              <span className='list__order-icon'>
                <i
                  className={cl(
                    'fas',
                    { 'fa-sort': sort !== SortBy.City },
                    { 'fa-sort-up': sort === SortBy.City && !order },
                    { 'fa-sort-down': sort === SortBy.City && order }
                  )}
                  style={{ color: '#85C1FF' }}
                />
              </span>
            </th>
          </tr>
        </thead>

        <tbody>
          {users.length ? (
            users.map((user) => {
              return <UserListElement key={user.id} user={user} />;
            })
          ) : (
            <tr>
              <td data-cy='list-no-users'>No users</td>
            </tr>
          )}
        </tbody>
      </table>
    </section>
  );
};
