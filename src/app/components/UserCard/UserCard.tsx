import { User } from '../../../types/type';
import './userCard.scss';

type Props = {
  user: User;
};

export const UserCard: React.FC<Props> = ({ user }) => {
  return (
    <section className='card' data-cy="user-card">
      <h2 className='card__label'>{user.name}</h2>

      <ul className='card__list'>
        <li className='card__item'>
          <p>Username:</p>

          <p data-cy="user-card-name">{user.username}</p>
        </li>

        <li>
          <p>Email:</p>

          <p>{user.email}</p>
        </li>

        <li>
          <p>Address:</p>

          <p>
            {`${user.address.suite}, ${user.address.street}, ${user.address.city}, ${user.address.zipcode}`}
          </p>
        </li>

        <li>
          <p>Phone:</p>

          <p>{user.phone}</p>
        </li>

        <li>
          <p>Website:</p>

          <p>{user.website}</p>
        </li>

        <li>
          <p>Company:</p>

          <p>{user.company.name}</p>
        </li>

        <li>
          <p>Catchphrase:</p>

          <p>{user.company.catchPhrase}</p>
        </li>

        <li>
          <p>Business:</p>

          <p>{user.company.bs}</p>
        </li>
      </ul>
    </section>
  );
};
