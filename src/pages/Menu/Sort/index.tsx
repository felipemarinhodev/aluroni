import classNames from 'classnames';
import { useState } from 'react';
import { MdKeyboardArrowUp, MdKeyboardArrowDown } from 'react-icons/md';
import options from './options.json';
import styles from './Sort.module.scss';

export default function Sort() {
  const [open, setOpen] = useState(false);

  return (
    <button
      className={styles.sort}
      onClick={() => setOpen(!open)}
      onBlur={() => setOpen(false)}
    >
      <span>Ordenar Por</span>
      {open ? (
        <MdKeyboardArrowUp size={20} />
      ) : (
        <MdKeyboardArrowDown size={20} />
      )}
      <div
        className={classNames({
          [styles.sort__options]: true,
          [styles['sort__options--active']]: open,
        })}
      >
        {options.map((option) => (
          <div className={styles.sort__option} key={option.value}>
            {option.name}
          </div>
        ))}
      </div>
    </button>
  );
}
