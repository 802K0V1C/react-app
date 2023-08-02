import styles from './Card.module.scss';
import clsx from 'clsx';
import { useDispatch } from 'react-redux';
import { toggleCardFavorite } from '../../redux/cardsRedux';
import DeleteCard from '../DeleteCard/DeleteCard';

const Card = (props) => {

    const dispatch = useDispatch();

    const handleFavorite = (e) => {
    e.preventDefault();
    dispatch(toggleCardFavorite(props.id));
    };

    return (
        <div>
    <li className={styles.card}>
        <span className={styles.cardTitle}>{props.title}</span>
        <div>
        <button className={clsx(styles.button, props.isFavorite && styles.isActive)} onClick={handleFavorite}>
            <i className={'fa fa-star-o'} />
        </button>
        <DeleteCard id={props.id} />
        </div>
    </li>
    </div>
    );
};

export default Card;