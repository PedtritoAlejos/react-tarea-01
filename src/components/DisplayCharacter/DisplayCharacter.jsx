import PropTypes from "prop-types";
import Col from 'react-bootstrap/Col';
import CardCharacter from "../CardCharacter/CardCharacter";


const DisplayCharacter = (props) => {

  let url =  "https://t4.ftcdn.net/jpg/03/08/68/19/240_F_308681935_VSuCNvhuif2A8JknPiocgGR2Ag7D1ZqN.jpg"
  if( props.character.profile ){
    url =  props.character.profile
  }
  props.character.profile = url
  
  return (
    <Col>
    
      <CardCharacter character={props.character} />
  
    </Col>
  );
};
export default DisplayCharacter;

DisplayCharacter.prototype = {
  character: PropTypes.object,
};
