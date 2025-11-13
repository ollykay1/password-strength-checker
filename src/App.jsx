import React from 'react'
 import StrengthMeter from './components/StrengthMeter'
import PasswordChecker from './pages/PasswordChecker'
// import passwordUtils from './utils/passwordUtils'
const App = () => {
  return (
    <div>
     <StrengthMeter/>
    
      <PasswordChecker/>
      {/* <passwordUtils/> */}
    </div>
  )
}

export default App
