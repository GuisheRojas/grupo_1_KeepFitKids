import '../assets/css/app.css'
import ContentWrapper from './ContentWrapper'
import Sidebar from './Sidebar'
import {Link, Route, Routes} from 'react-router-dom'


function App() {
  return (
      <div id='wrapper'>
        <Sidebar/>
        <ContentWrapper/>
      </div>
  )
}

export default App
