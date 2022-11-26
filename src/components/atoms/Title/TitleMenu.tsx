import React from 'react'
import styles from './Title.module.scss'

interface MenuProps<T> {
  menuItems :Array<T>;
}

interface MenuItem {
  id :number;
  content :string;
  href? :boolean;
  img? :string;
  divide? :boolean;
}

const TitleMenu = ({menuItems} :MenuProps<MenuItem>) => {
  return (
    <ul className={styles.menu__items}>
      {menuItems.map((menu)=>
        <li 
          key={menu.id}
          className={menu.divide && menu.href 
          ? `${styles.divide}` 
          : null}
        >
            {menu.content}
        </li>
      )}
    </ul>
  )
}

export { TitleMenu }