import React from 'react';
import { colors } from './tokens';

type Props = React.ButtonHTMLAttributes<HTMLButtonElement> & { variant?: 'primary' | 'ghost' };

export const Button: React.FC<Props> = ({ children, variant = 'primary', ...rest }) => {
  const style = {
    backgroundColor: variant === 'primary' ? colors.primary : 'transparent',
    color: variant === 'primary' ? '#fff' : colors.primary,
    padding: '8px 12px',
    borderRadius: 6,
    border: `1px solid ${colors.primary}`,
  } as React.CSSProperties;
  return (
    <button style={style} {...rest}>
      {children}
    </button>
  );
};

export default Button;
