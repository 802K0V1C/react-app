import styles from './CardForm.module.scss';
import { useState } from 'react';
import Button from '../Button/Button';
import TextInput from '../TextInput/TextInput';
import { useDispatch } from 'react-redux';
import { addCard } from '../../redux/cardsRedux';
import shortid from 'shortid';

const CardForm = (props) => {

  const dispatch = useDispatch();

  const [title, setTitle] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    dispatch(addCard({id: shortid(), title, columnId: props.columnId}));
    setTitle('');
  };

  return <form className={styles.cardForm} onSubmit={handleSubmit}>
    <TextInput type="text" value={title} onChange={e => setTitle(e.target.value)} className={styles.inputStyle}/>
    <Button>Add card</Button>
  </form>;
};

export default CardForm;