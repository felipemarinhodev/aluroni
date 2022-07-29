import filters from './filters.json';
import styles from './Filters.module.scss';

type IOption = typeof filters[0];

export default function Filters() {
  function selectFilter(option: IOption): void {
    throw new Error('Function not implemented.');
  }
  return (
    <div className={styles.filtros}>
      {filters.map((option: IOption) => (
        <button
          className={styles.filtros__filtro}
          key={option.id}
          onClick={() => selectFilter(option)}
        >
          {option.label}
        </button>
      ))}
    </div>
  );
}
