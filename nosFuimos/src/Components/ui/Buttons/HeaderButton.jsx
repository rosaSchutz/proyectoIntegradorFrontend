import React from 'react'
import "../../../styles/headerButton.css"

const HeaderButton = ({ title }) => {
  return (
    <a href="#" class="header__auth--buttons">
        {title}
    </a>
  )
}

export default HeaderButton