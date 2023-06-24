import PropTypes from 'prop-types'
import MenuItem from '../MenuItem/MenuItem'

import s from './style.module.css'
const CHARACTERS = [
    {
        id:1,
        name:"Goku Developer",
        profile:"goku-dev.png"
    },
    {
        id:2,
        name:"Batman Developer",
        profile:"batman-dev.jpeg"
    },
    {
        id:3,
        name:"Cat Develper",
        profile:"cat-dev.jpeg"
    },
    {
        id:4,
        name:"Dog Develper",
        profile:"dog-dev.jpeg"
    }
]
// Staless
 const MenuList = ( props) => (
  
    <div  className={ s.container}>

        { CHARACTERS.map((character) => (
            <MenuItem
                key={character.id+"_character"}
                onClick={props.onItemClick}
                isSelected={props.character.id === character.id}
                character={character}
            />
            
            
        ))}
    

    </div>
 )

 export default MenuList

 MenuList.propTypes = {
    onItemClick: PropTypes.func,
    difficulty: PropTypes.object,
  }