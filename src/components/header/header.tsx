import styles from './header.module.scss';
export default function Header() {
  return (
    <header className={styles.header}>
      <nav>
        <ul>
          <li><a href="/about">About</a></li>
          <li><a href="/projects">Projects</a></li>
          <li><a href="/">Home</a></li>
          <li><a href="/contact">Contact</a></li>
        </ul>
      </nav>
      <hr />
    </header>
  );
}