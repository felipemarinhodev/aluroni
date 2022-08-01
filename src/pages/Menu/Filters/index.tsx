import filters from './filters.json';
import styles from './Filters.module.scss';

type IOption = typeof filters[0];

interface Props {
  filter: number | null;
  setFilter: React.Dispatch<React.SetStateAction<number | null>>;
}

export default function Filters({ filter, setFilter }: Props) {
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
