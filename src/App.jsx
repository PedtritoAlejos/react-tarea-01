import { useState } from 'react'
import MenuList from './components/MenuList/MenuList'
import DisplayCharacter from './components/DisplayCharacter/DisplayCharacter'
import s from './style.module.css'

function App() {

  const [currentCharacter,setCurrentCharacter] = useState({})

  const onMenuListItemClick = (character) => {
    setCurrentCharacter(character)
  }

  return (
    <div>
     <h1 style={{ textAlign:'center' }}>Select your favorite character </h1>
     <div className={ s.workspace }>
        <MenuList 
          onItemClick={onMenuListItemClick}
          character={currentCharacter}
        />

        <DisplayCharacter character={currentCharacter} />
        

     </div>
    
    </div>
  )
}

export default App