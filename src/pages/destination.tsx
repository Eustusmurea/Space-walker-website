import React from 'react';
import '../App.css';
import { Link } from 'react-router-dom';
const Destination = () => {
    return(
        <div className='destination'>
        <div className='main-content'>
            <div className='content'>
                <h1 className='body-xs'>O1 PICK YOUR DESTINATION</h1>
                    <div className='destination-heading'>
                    <nav>
                        <ul className='navbar-list'>
                             <li>
                                <Link to="/moon">01 MOON</Link>
                            </li>
                            <li>
                                 <Link to="/mars">02 MARS</Link>
                            </li>
                             <li>
                                <Link to="/europa">03 EUROPA</Link>
                            </li>
                            <li>
                                <Link to="/titan">04 TITAN</Link>
                            </li>
                        </ul>
                    </nav>
                    
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Destination;
