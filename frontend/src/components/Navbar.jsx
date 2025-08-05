import React, { useContext } from 'react'
import { useModalContext } from '../context/Modalcontext'

const Navbar = ({}) => {
    const { handleOpen } = useModalContext()
    
  return (
    <div className="navbar bg-base-100 shadow-sm">
        <div className="navbar-start">
            <a className="btn btn-ghost text-xl" href='/' >Clients</a>
        </div>
    <div className="navbar-center">
        <div className='form-control'>
            <input type="text" placeholder="Search" className="input input-bordered w-full max-w-xs" />
        </div>
    </div>
        <div className="navbar-end">
            <a className="btn" onClick={() => handleOpen('add')}>Add Client</a>
        </div>
    </div>
)
}

export default Navbar