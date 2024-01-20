import { useNavigate, useParams } from 'react-router-dom';
import useSWR from 'swr';
import {
  getUserById,
  usersUrlEndpoint as usersCacheKey,
} from '../../api/usersApi';

import './userPage.scss';
import { UserCardLoader } from '../../components/SkeletonLoader/UserCardLoader';
import { Button } from '../../components/Button/Button';
import { Error } from '../../components/Error/Error';
import { UserCard } from '../../components/UserCard/UserCard';

export const UserPage = () => {
  const navigate = useNavigate();
  const { userId } = useParams();

  const {
    data: user,
    error,
    isLoading,
  } = useSWR([usersCacheKey, userId], ([url, userId]) =>
    getUserById(url, userId)
  );

	if (error) {
		return <Error />;
	}

  return (
    <>
      <div className='userPage__header' data-cy="user-page">
        <h1 className='userPage__title'>User info</h1>

        <Button title='go back' handler={() => navigate(-1)} />
      </div>

      {isLoading && <UserCardLoader />}

      {user && <UserCard user={user} />}

			{!user?.name && !user?.username && !isLoading && <h1 data-cy="user-page-no-data">No user data</h1>}
    </>
  );
};
