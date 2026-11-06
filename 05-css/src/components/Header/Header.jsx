import styles from './Header.module.css';

const Header = () => {
  return (
    <div className={styles.Header}>
      <h1>My App</h1>
      <button className={styles.btn}>login</button>
    </div>
  );
};

export default Header;