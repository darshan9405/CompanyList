import './App.css'
import DisplayList from './Components/DisplayList'
import Search from './Components/Search'
import React, { useState } from 'react'

function App () {
  const [keyword, setkeyword] = useState('')

  return (
    <>
      <div className='navbar'>Navbar</div>
      <div className='container'>
        <div className='main_container'>
          <div className='Header'>COMPANY TABLE</div>
          <Search keywordHandler={setkeyword} />
          <DisplayList keyword={keyword}/>
        </div>
      </div>
      <div className='footer'>Footer</div>
    </>
  )
}
export default App
