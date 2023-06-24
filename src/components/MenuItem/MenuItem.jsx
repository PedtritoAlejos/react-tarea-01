import { useState } from 'react'
import PropTypes from 'prop-types'
import s from './style.module.css'

const MenuItem = ( props) =>{
    const [isHovered,setIsHover] = useState(false)

    const activate = () =>{
        setIsHover(true)
    }

    const desactivate = () => {
        setIsHover(false)
    }

    const getBackgroundColor = () => {
        if (isHovered) {
          return '#a5e9ff'
        } else {
          if (props.isSelected) {
            return '#26baea'
          } else {
            return '#eff0ef'
          }
        }
    }

    const onItemClick = () => {
        props.onClick(props.character)
      }

    return (
        <div
            className={s.container}
            onClick={onItemClick}
            onMouseEnter={activate}
            onMouseLeave={desactivate}
            style={{ backgroundColor: getBackgroundColor()}}
        >
            Name is {props.character.name}
        </div>
    )

    

}

export default MenuItem

MenuItem.propTypes = {
    onClick: PropTypes.func,
    character: PropTypes.object,
    isSelected: PropTypes.bool,
  }