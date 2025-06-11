import React, { createElement } from 'react'
// props es un objeto 
function Text( {as, text} ) {
  return (
    createElement(as, {children: text})
  )
}

export default Text