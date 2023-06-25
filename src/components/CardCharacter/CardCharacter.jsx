import Card from 'react-bootstrap/Card';
import PropTypes from 'prop-types'

const CardCharacter = ( props) => (
    <Card style={{ width: '18rem' }}>
        <Card.Img 
            variant='top' 
            width={300} 
            height={300}  
            src={props.character.profile}
        />
        <Card.Body>
        <Card.Title>{props.character.name}</Card.Title>
        <Card.Text>
          {props.character.description}
        </Card.Text>
       
      </Card.Body>


    </Card>
)

export default CardCharacter


CardCharacter.propTypes = {
    character: PropTypes.object,
  }