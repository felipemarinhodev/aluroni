import { useState } from 'react';
import { ReactComponent as Logo } from 'assets/logo.svg';
import styles from './Menu.module.scss';
import SearchEngine from './SearchEngine';

export default function Menu() {
  const [search, setSearch] = useState('');
  return (
    <main>
      <nav className={styles.menu}>
        <Logo />
      </nav>
      <header className={styles.header}>
        <div className={styles.header__text}>A casa do código da massa!</div>
      </header>

      <section className={styles.cardapio}>
        <h3 className={styles.cardapio__titulo}>Menu</h3>
        <SearchEngine search={search} setSearch={setSearch} />
      </section>
    </main>
  );
}
