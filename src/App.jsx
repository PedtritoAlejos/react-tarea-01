import { useState } from 'react'
import MenuList from './components/MenuList/MenuList'
import DisplayCharacter from './components/DisplayCharacter/DisplayCharacter'
import Badge from 'react-bootstrap/Badge';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';

function App() {

  const [currentCharacter,setCurrentCharacter] = useState({})

  const onMenuListItemClick = (character) => {
    setCurrentCharacter(character)
  }

  return (
    <Container>
   
      <h1 > <Badge bg="secondary"> Select your favorite character </Badge>  </h1>

      <Row>

        <MenuList 
          onItemClick={onMenuListItemClick}
          character={currentCharacter}
        />

        <DisplayCharacter character={currentCharacter} />

      </Row>


    
    </Container>
  )
}

export default App