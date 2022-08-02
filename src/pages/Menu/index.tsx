import { useState } from 'react';
import { ReactComponent as Logo } from 'assets/logo.svg';
import styles from './Menu.module.scss';
import SearchEngine from './SearchEngine';
import Filters from './Filters';
import Sort from './Sort';

export default function Menu() {
  const [search, setSearch] = useState('');
  const [filter, setFilter] = useState<number | null>(null);
  const [sort, setSort] = useState('');
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
        <div className={styles.cardapio__filtros}>
          <Filters filter={filter} setFilter={setFilter} />
          <Sort sort={sort} setSort={setSort} />
        </div>
      </section>
    </main>
  );
}
