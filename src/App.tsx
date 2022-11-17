import './App.css'
import { right, left } from './images'

const imageDimensions = {
  height: '100px',
  width: '100px'
}

function App() {
  return (
    <div id='container'>
      <div id='left-pane'>
        <img {...imageDimensions} src={right.src} />
        <img {...imageDimensions} src={left.src} />
      </div>
      <div id='right-pane'>
        <h2>Some of my favorite projects</h2>
        <button className='project-button'>Asteroids</button>
      </div>
    </div>
  )
}

export default App
