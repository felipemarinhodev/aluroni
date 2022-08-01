import React from 'react';
import filters from './filters.json';
import styles from './Filters.module.scss';

type IOption = typeof filters[0];

interface Props {
  filter: number | null;
  setFilter: React.Dispatch<React.SetStateAction<number | null>>;
}

export default function Filters({ filter, setFilter }: Props) {
  function selectFilter(option: IOption): void {
    if (filter === option.id) {
      return setFilter(null);
    }
    return setFilter(option.id);
  }
  return (
    <div className={styles.filtros}>
      {filters.map((option: IOption) => (
        <button
          className={`${styles.filtros__filtro} ${
            filter === option.id ? styles['filtros__filtro--ativo'] : ''
          }`}
          key={option.id}
          onClick={() => selectFilter(option)}
        >
          {option.label}
        </button>
      ))}
    </div>
  );
}
