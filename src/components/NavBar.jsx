import {NavLink} from 'react-router-dom'

const NavBar = () => {
  return (
    <>
      <ul className='bg-slate-950 text-slate-50 flex place-content-around gap-4 text-[16px]'>
        <li>
          <NavLink to='/'>Home</NavLink>
        </li>
        <li>
          <NavLink to='/landing-one'>Landing 1</NavLink>
        </li>
        <li>
          <NavLink to='/landing-two'>Landing 2</NavLink>
        </li>
      </ul>
    </>
  )
}

export default NavBar