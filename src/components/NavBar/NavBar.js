import styles from './NavBar.module.scss';
import { Link } from 'react-router-dom';
import { NavLink } from 'react-router-dom';

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
                <NavLink className={({ isActive }) => (isActive ? styles.linkActive : undefined)} to="/">Home</NavLink>
                <NavLink className={({ isActive }) => (isActive ? styles.linkActive : undefined)} to="/favorite">Favorites</NavLink>
                <NavLink className={({ isActive }) => (isActive ? styles.linkActive : undefined)} to="/about">About</NavLink>
            </li>
            </ul>
        </div>
        </div>
    </div>
    </nav>
);
};

export default NavBar;