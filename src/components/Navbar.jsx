import logo from '../assets/logo.png'

const Navbar = () => {
    return (
        <div className='flex items-center justify-between px-6 py-4 bg-black'>
            <img src={logo} alt="Antenna Feed Logo" className='w-44 cursor-pointer' />
            <div className="nav-btns text-xl">
                <ul className='flex'>
                    <li className='px-4 transition-all cursor-pointer hover:underline hover:text-green-300'>About</li>
                    <li className='px-4 transition-all cursor-pointer hover:underline hover:text-green-300'>Features</li>
                </ul>
            </div>
        </div>
    )
}

export default Navbar
