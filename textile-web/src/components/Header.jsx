import { Component, TextAlignJustify } from 'lucide-react';

const Header = () => {
  return (
    <nav className="flex items-center justify-between shadow py-3">
      <h1 className='flex gap-3 text-center font-extrabold'><Component /><span className="block">MARIMUTHU</span>TEXTILES</h1>

      <ul className="hidden font-bold lg:flex lg:items-center lg:gap-5">
        <li>Products</li>
        <li>About</li>
        <li>Contact</li>
      </ul>

      <div className='flex items-center gap-5'>
        <button className='lg:hidden'><TextAlignJustify /></button>

        <button className='px-5 py-2 rounded bg-blue-800 text-white font-bold'>Get a Quote</button>
      </div>
    </nav>
  )
}

export default Header