import React from 'react';
import { Nav } from 'react-bootstrap';
import { Link, useLocation } from 'react-router-dom';

const Tabs = () => {
    const location = useLocation()

    return (
        <nav className='menu-nav'>
            <ul className="nav justify-content-around">
                <li className={location.pathname == '/' ? 'nav-link is-active' : 'nav-link'} >
                    <Link class="nav-link" aria-current="page" to={'/'}>All</Link>
                </li>
                <li className={location.pathname == '/active' ? 'nav-link is-active' : 'nav-link'}>
                    <Link className="nav-link" to={'/active'}>Active</Link>
                </li>
                <li className={location.pathname == '/completed' ? 'nav-link is-active' : 'nav-link'}>
                    <Link className="nav-link" to="/completed">Completed</Link>
                </li>
            </ul>
        </nav>
    )

}

export default Tabs;