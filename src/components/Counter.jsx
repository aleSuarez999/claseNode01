import React, { useState } from 'react'
import Text from './Text'
import Button from './Button'




function Counter() {
    console.log(useState(0))
  const [count, setCount] = useState(0)
  return (
    <>
        <Text as="h3" text="Contador" />
        <div className='d-flex justify-center gap-24'>
            <Button label="-" color="primary" variant="outline" onClick={() => setCount(count - 1)} />
            <Text as="span" text={count} />
            <Button label="+" color="primary" variant="outline"  onClick={() => setCount(count + 1)} />
         </div>
    </>
  )
}

export default Counter