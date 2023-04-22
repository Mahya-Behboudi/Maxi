import style from './CartButton.module.css';
import { uiActions } from '../../store/ui-slice';
import { useDispatch ,useSelector } from 'react-redux';

const CardButton = props =>{
    const dispatch = useDispatch();
    const cartTotalQuantity = useSelector(state =>state.cart.totalQuantity)
    const toggleHandler = () =>{
        dispatch(uiActions.toggle());
    }
    return(
        <button className={style.button} onClick={toggleHandler}>
            <span>My Cart</span>
            <span className={style.badge}>{cartTotalQuantity}</span>
        </button>
    )
}
export default CardButton;