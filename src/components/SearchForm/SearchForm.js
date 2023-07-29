import styles from './SearchForm.module.scss'
import TextInput from '../TextInput/TextInput';
import Button  from '../Button/Button';
import { useDispatch } from 'react-redux';
import { useState } from 'react';
import { searchUpdate } from '../../redux/store';

    const SearchForm = () => {
        const [searchString, setSearchString] = useState('');

        const dispatch = useDispatch();
    
        const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(searchUpdate( searchString ));
        setSearchString('');

        dispatch(searchUpdate(''));

        };
    return (
        <form className={styles.searchForm} onSubmit={handleSubmit}>
        <TextInput value={searchString} onChange={(e) => setSearchString(e.target.value)}>...Search</TextInput>
        <Button type="submit"><span className="fa fa-search" /></Button>
        <span className="fa fa-search" />
        </form>
    );
};

export default SearchForm;