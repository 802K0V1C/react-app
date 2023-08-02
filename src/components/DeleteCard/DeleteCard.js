import styles from './DeleteCard.module.scss';
import { useDispatch } from 'react-redux';
import { removeCard } from '../../redux/cardsRedux';

const DeleteCard = props => {

const dispatch = useDispatch();

const handleRemove = (e) => {
    e.preventDefault();
    dispatch(removeCard(props.id)); 
};

return (
    <button className={styles.removeButton} onClick={handleRemove}><i className={'fa fa-trash'}/></button>
);
};

export default DeleteCard;