import Snackbar from '@mui/material/Snackbar';
import { FC } from "react";
import Alert from '@mui/material/Alert';
import { IPropsSnack } from '../types';
 
const Snack:FC<IPropsSnack> = ({isOpen, handleClose}):JSX.Element=> {

   return (
      <>
      <Snackbar  open={isOpen} onClose={handleClose} autoHideDuration={3000}>
         <Alert severity="success">Товар добавлен в корзину!</Alert>
      </Snackbar>
      </>
   )
}

export default Snack;