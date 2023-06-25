
import PropTypes from "prop-types";
import ListGroup from "react-bootstrap/ListGroup";

const MenuItem = (props) => {
 


  const onItemClick = () => {
    props.onClick(props.character);
  };

  return (
   
      <ListGroup.Item as="li"  
      onClick={onItemClick} 
      active={props.isSelected}>
        {props.character.name}
      </ListGroup.Item>
 
  );
};

export default MenuItem;

MenuItem.propTypes = {
  onClick: PropTypes.func,
  character: PropTypes.object,
  isSelected: PropTypes.bool,
};
