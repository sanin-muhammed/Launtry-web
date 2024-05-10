import './style.css'
import frame2 from '../../assets/Frame2.png'
import { Link } from 'react-router-dom'
const Home = () => {
  return (
    <div className='Home_container'>
        <img src={frame2} className='frame2_img' alt="background img" />
        <header>
            <h1>Hello John Doe</h1>
            <Link to='/authPage' className='login_btn' >Join</Link>
        </header>

    </div>
  )
}

export default Home