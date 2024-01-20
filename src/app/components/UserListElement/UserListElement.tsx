import { useNavigate } from 'react-router-dom';
import { User } from '../../../types/type';

interface UserListElementProps {
  user: User;
}

export const UserListElement: React.FC<UserListElementProps> = ({ user }) => {
  const navigate = useNavigate();

  const onSelectUser = () => {
    navigate(`user/${user.id}`);
  };

  return (
    <tr onClick={onSelectUser} data-cy="user">
      <td>{user.name}</td>

      <td>{user.email}</td>

      <td>{user.company.name}</td>

      <td>{user.address.city}</td>
    </tr>
  );
};
