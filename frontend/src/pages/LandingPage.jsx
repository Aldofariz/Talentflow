import React from 'react'
import Navbar from '../components/navbar'
import TableList from '../components/TableList'

const LandingPage = () => {
    return (
        <section>
            <div className="navbar bg-base-100 shadow-sm flex justify-between">
                <a className="btn btn-ghost text-xl">Talentflow</a>
                <div className='navbar-end'>
                    <button className="btn">
                        <a href="/admin">Admin Dashboard</a>
                    </button>
                    {/* <button className="btn">Register</button> */}
                </div>
            </div>
        </section>
    )
}

export default LandingPage