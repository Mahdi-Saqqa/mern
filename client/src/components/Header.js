import React from 'react'
import { Link } from 'react-router-dom'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const Header = () => {
    const [search, setSearch] = useState('')
    const navigate = useNavigate()
    const searchHandler = (e) => {
        e.preventDefault()
        navigate('/search/' + search)
    }
    return (
        <div className='d-flex w-100 mt-3 '>
            <div className='w-25'></div>
            <div className='navbar navbar-expand-lg navbar-light bg-light w-50 align-self-center border'>
                <div className="container">
                <Link to="/">Dashboard</Link>
                <Link to="/list">Cars List</Link>
                <Link to="/add">Add a Car</Link>
                </div>
            </div>
            <div className="d-flex justify-content-end">
                <div className="form-outline w-50">
                    <input type="search" className="form-control" value={search} onChange={e=>setSearch(e.target.value)}/>
                </div>
                <button type="button" className="btn btn-primary" onClick={searchHandler}>
                    <i >search</i>
                </button>
            </div>
        </div>
    )
}

export default Header