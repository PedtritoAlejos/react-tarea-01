import PropTypes from 'prop-types'
import MenuItem from '../MenuItem/MenuItem'
import { CHARACTERS } from './constants'
import Col from 'react-bootstrap/Col';
import ListGroup from 'react-bootstrap/ListGroup';


// Staless
 const MenuList = ( props) => (
  
    <>
         <Col sm={4}>
         <ListGroup as="ul"  style={{marginBottom:30}}>
            { CHARACTERS.map((character) => (
                <MenuItem
                    key={character.id+"_character"}
                    onClick={props.onItemClick}
                    isSelected={props.character.id === character.id}
                    character={character}
                />
                
            ))}
         </ListGroup>
        </Col>
         <Col md={{ span: 3, offset: 2 }}></Col>
        
         </>

 )

 export default MenuList


 MenuList.propTypes = {
    onItemClick: PropTypes.func,
    difficulty: PropTypes.object,
  }