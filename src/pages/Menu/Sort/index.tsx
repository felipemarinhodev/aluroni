import React, { useState } from 'react';
import classNames from 'classnames';
import { MdKeyboardArrowDown, MdKeyboardArrowUp } from 'react-icons/md';
import options from './options.json';
import styles from './Sort.module.scss';

interface Props {
  sort: string;
  setSort: React.Dispatch<React.SetStateAction<string>>;
}

export default function Sort({ sort, setSort }: Props) {
  const [open, setOpen] = useState(false);
  const nameSort =
    sort && options.find((option) => option.value === sort)?.name;

  return (
    <button
      className={classNames({
        [styles.sort]: true,
        [styles['sort--active']]: sort !== '',
      })}
      onClick={() => setOpen(!open)}
      onBlur={() => setOpen(false)}
    >
      <span>{nameSort || 'Ordenar Por'}</span>
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
          <div
            className={classNames({
              [styles.sort__option]: true,
              [styles['sort__option--active']]: sort === option.value,
            })}
            key={option.value}
            onClick={() => setSort(option.value)}
          >
            {option.name}
          </div>
        ))}
      </div>
    </button>
  );
}
