import './button.scss';

type Props = {
  title: string;
  handler(): void;
};

export const Button: React.FC<Props> = ({ title, handler }) => {
  return (
    <button
      className='return-button'
      onClick={handler}
      data-cy={title === 'go back' ? 'user-go-back' : 'go-home'}
    >
      {title}
    </button>
  );
};
