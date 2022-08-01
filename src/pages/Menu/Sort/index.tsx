import styles from './Sort.module.scss';
import options from './options.json';

export default function Sort() {
  return (
    <button className={styles.sort}>
      <span>Ordenar Por</span>
      <div className={styles.sort__options}>
        {options.map((option) => (
          <div className={styles.sort__option} key={option.value}>
            {option.name}
          </div>
        ))}
      </div>
    </button>
  );
}
