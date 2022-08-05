import { useEffect, useState } from 'react';
import Item from './Item';
import menu from 'data/menu.json';
import styles from './Items.module.scss';

interface Props {
  search: string;
  filter: number | null;
  sort: string;
}

type Items = typeof menu;

export default function Items({ search, filter, sort }: Props) {
  const [list, setList] = useState(menu);

  function testSearch(title: string) {
    const regex = new RegExp(search, 'i');
    return regex.test(title);
  }

  function testFilter(id: number): boolean {
    if (filter !== null) {
      return filter === id;
    }
    return true;
  }

  function sortTo(list: Items): Items {
    switch (sort) {
      case 'porcao':
        return list.sort((a, b) => (a.size > b.size ? 1 : -1));
      case 'qtd_pessoas':
        return list.sort((a, b) => (a.serving > b.serving ? 1 : -1));
      case 'preco':
        return list.sort((a, b) => (a.price > b.price ? 1 : -1));
      default:
        return list;
    }
  }

  useEffect(() => {
    const newList = menu.filter(
      (item) => testSearch(item.title) && testFilter(item.category.id)
    );
    setList(sortTo(newList));
  }, [search, filter, sort]);

  return (
    <div className={styles.items}>
      {list.map((item) => (
        <Item key={item.id} {...item} />
      ))}
    </div>
  );
}
