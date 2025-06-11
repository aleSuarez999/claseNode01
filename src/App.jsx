
import './styles/App.css'
import Text from './components/Text'
import Button from './components/Button'
import Counter from './components/Counter'

function App() {
 
  const handleClick = () => console.log("soy un boton solid primary")

  return (
    <>
      <div>
      <Text as="h1" text="Hola, soy un h1" />
      <Text as="h2" text="Hola, soy un h2" />
      <Text as="h3" text="Hola, soy un h3" />
      <Text as="p" text="Hola, soy un p" />
      
      </div>
      <div className='button-container'>
        <Button label="Primary Solid" 
                color='primary'  
                onClick={handleClick}  />
        <Button label="Secondary Solid" 
                color='secondary' 
                onClick={() => console.log(`soy un boton solid secondary`) }  />
        <Button label="Primary outline" 
                color='primary' 
                variant='outline' 
                onClick={() => console.log(`soy un boton outline primary`) }  />
        <Button label="Secondary outline"
                color="secondary" 
                variant="outline" 
                onClick={() => console.log(`soy un boton outline secondary`) }  />
      </div>
      <Counter />
    </>
  )
}

export default App
