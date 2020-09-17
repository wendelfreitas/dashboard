import React from 'react';
import * as S from './styles';
import { AnchorHTMLAttributes, ButtonHTMLAttributes } from 'react';

type ButtonTypes =
  | AnchorHTMLAttributes<HTMLAnchorElement>
  | ButtonHTMLAttributes<HTMLButtonElement>;

export type ButtonProps = {
  /**
   * How large should the button be?
   */
  size?: 'small' | 'medium' | 'large';
  /**
   * In the case of the button, have the maximum size of the container
   */
  fullWidth?: boolean;
  /**
   * An optional icon
   */
  icon?: React.ReactNode;
  /**
   * Optional click handler
   */
  onClick?: () => (event: React.MouseEvent<HTMLButtonElement>) => void;
  as?: React.ElementType;
} & ButtonTypes;

/**
 * Primary UI component for user interaction
 */
const Button = ({
  children,
  icon,
  size = 'medium',
  fullWidth = false,
  ...props
}: ButtonProps) => (
  <S.Wrapper size={size} fullWidth={fullWidth} hasIcon={!!icon} {...props}>
    {icon}
    {!!children && <span>{children}</span>}
  </S.Wrapper>
);

export default Button;
