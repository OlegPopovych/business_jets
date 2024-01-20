import { useAppSelector } from '../../../store/hooks';
import { LoadingStatus } from '../../../types/enums';
import { selectUsersLoadingStatus } from '../../../store/usersSlice';
import { UserList } from '../../components/UserList/UserList';
import { UserListLoader } from '../../components/SkeletonLoader/UserListLoader';
import { useUsers } from '../../../hooks/useUsers';
import { Error } from '../../components/Error/Error';

export const HomePage = () => {
  const loadingStatus = useAppSelector(selectUsersLoadingStatus);
  const { users } = useUsers();

  return (
    <>

      {loadingStatus === LoadingStatus.Loading && <UserListLoader />}

      {loadingStatus === LoadingStatus.Pending && users && <UserList users={users} />}

      {loadingStatus === LoadingStatus.Error && <Error />}
    </>
  );
};
