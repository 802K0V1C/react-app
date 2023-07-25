import PageTitle from '../PageTitle/PageTitle';
import styles from './PageNotFound.module.scss';

const NotFound = () => {
return (
    <div className={styles.NotFoundContainer}>
    <h1 className={styles.NotFoundError}>404</h1>
    <p className={styles.NotFound}>Page not found</p>
    <a href="/" className="fa-solid fa-heart-crack"></a>
    </div>
);
};

export default NotFound;