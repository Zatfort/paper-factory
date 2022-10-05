// CARRO LOGO
import LocalMallIcon from '@mui/icons-material/LocalMall';
import { useContext } from 'react';
import { CartContext } from '../../Context/CartContext';


const CartWidget = () => {
    const {Cart} = useContext(CartContext)
    return (  
        <>
            <LocalMallIcon   sx={{ fontSize: 35 }}  />
            <span>{Cart.lenght}</span>
        </>

            
        
    );
}
 
export default CartWidget
