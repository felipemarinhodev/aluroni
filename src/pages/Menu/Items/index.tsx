import { useEffect, useState } from 'react';
import Item from './Item';
import menu from './items.json';
import styles from './Items.module.scss';

interface Props {
  search: string;
  filter: number | null;
  sort: string;
}

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

  useEffect(() => {
    const newList = menu.filter(
      (item) => testSearch(item.title) && testFilter(item.category.id)
    );
    setList(newList);
  }, [search, filter]);

  return (
    <div className={styles.items}>
      {list.map((item) => (
        <Item key={item.id} {...item} />
      ))}
    </div>
  );
}
