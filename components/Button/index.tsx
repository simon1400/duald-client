import { FC } from 'react';
import { ButtonS } from './styled';
import { ButtonProps } from '@mui/material';

interface IButton extends ButtonProps {
  
}

const Button: FC<IButton> = ({children, ...rest}) => {
  return (
    <ButtonS variant="contained" size="small" {...rest} >
      {children}
    </ButtonS>
  )
}

export default Button