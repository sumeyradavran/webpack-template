import './App.scss'
import Image from '../public/assets/icon.png'

export const App = () => {
  console.log(process.env.REACT_APP_S)
  return (
    <div className='scss'>
      <img src={Image} alt="image" />
    </div>
  )
}
