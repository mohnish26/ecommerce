import React, { useState } from 'react'
import MyContext from './Mycontext'

const Mystate = (props) => {

    const [mode, setMode] = useState(true)
    
    
    const toggel = () => {
      if(mode === true){
        
        document.body.style.backgroundColor = 'black'
        
        setMode(false)
      }
      else{
        
        document.body.style.backgroundColor = 'white'
        
        setMode(true)
      }

    }

  return (
    <MyContext.Provider value={{mode,toggel}}>
        {props.children}
    </MyContext.Provider>
  )
}

export default Mystate