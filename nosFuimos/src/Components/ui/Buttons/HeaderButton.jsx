import React from 'react'
import styles from "../../../styles/headerButton.module.css"

const HeaderButton = ({ title }) => {
  return (
    <a href="#" className={styles.header__buttons}>
        {title}
    </a>
  )
}

export default HeaderButton