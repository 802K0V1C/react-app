import styles from './NavBar.module.scss';

const NavBar = () => {
return (
    <nav>
    <div className={styles.navContainer}>
        <div className={styles.navWrapper}>
        <div className={styles.navIcon}>
            <a href="/" className="fa fa-tasks"></a>
        </div>
        <div className={styles.navList}>
            <ul>
            <li>
                <a href="/">Home</a>
                <a href="/favorite">Favourites</a>
                <a href="/about">About</a>
            </li>
            </ul>
        </div>
        </div>
    </div>
    </nav>
);
};

export default NavBar;