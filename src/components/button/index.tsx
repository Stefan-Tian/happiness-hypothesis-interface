import styles from './button.module.scss';

interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary';
  className?: string;
}

const Button = ({
  variant = 'primary',
  children,
  className = '',
  ...buttonProps
}: React.PropsWithChildren<Props>) => {
  return (
    <button
      className={`${styles.button} ${styles[variant]} ${className} 
      ${buttonProps.disabled ? styles.disabled : ''}
      `}
      {...buttonProps}
    >
      {children}
    </button>
  );
};

export default Button;
