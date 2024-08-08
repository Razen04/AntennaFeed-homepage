import logo from '../assets/logo.png'
import downLogo from '../assets/down.svg'
import './Main.css'

const Main = () => {
    return (
        <div >
            <div className='flex justify-center mt-40'>
                <img src={logo} alt="" className='h-40' />
            </div>
            <div className="btn flex justify-center mt-10">
                <button className='border-none'><span>Get Started</span></button>
            </div>
            <div className='scroll flex flex-col'>Scroll Down
            <img src={downLogo} alt="" />
            </div>
        </div>
    )
}

export default Main