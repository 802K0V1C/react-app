import styles from './SearchForm.module.scss'
import TextInput from '../TextInput/TextInput';
import Button  from '../Button/Button';
import { useDispatch } from 'react-redux';
import { useState } from 'react';

    const SearchForm = () => {
        const [searchCard, setSearchCard] = useState('');

        const dispatch = useDispatch();
    
        const handleSubmit = (e) => {
        e.preventDefault();
        dispatch({ type: 'SEARCH_UPDATE', updateSearchString: searchCard });
        setSearchCard('');
        };
    return (
        <form className={styles.searchForm} onSubmit={handleSubmit}>
        <TextInput value={searchCard} onChange={(e) => setSearchCard(e.target.value)}>...Search</TextInput>
        <Button type="submit"><span className="fa fa-search" /></Button>
        <span className="fa fa-search" />
        </form>
    );
};

export default SearchForm;