import React, { useState } from 'react'
// import PropTypes from 'prop-types';
import { useHistory } from "react-router-dom";

import './style.scss';

import logo from "../../assets/images/Logo_ML.png";

export const SearchNavBar = ({ value }) => {

    const [inputValue, setInputValue] = useState('');

    const handleInputChange = ( e ) => {
        setInputValue( e.target.value );
    }

    let history = useHistory();

    const handleSubmit = (e) => {
        e.preventDefault();
        
        if ( inputValue.trim().length > 2 ) {
            // value( inputValue );
            // setInputValue('');
            history.push(`/items?search=${inputValue}`);
        }
    }

    return (
        <header className="meli-search-navbar">
            <div className="meli-container">
                <div className="meli-grid meli-flex-middle">
                    <div className="meli-width-auto">
                        <a className="meli-search-navbar-logo" href="/">
                            <img src={logo} alt="Mercadolibre" width="56" height="36" />
                        </a>
                    </div>
                    <div className="meli-width-expand">
                        <div>
                            <form className="meli-search-navbar-form" onSubmit={ handleSubmit }>
                                <input 
                                    type="text" 
                                    value={ inputValue } 
                                    onChange={ handleInputChange } 
                                    placeholder="Nunca dejes de buscar"
                                    className="meli-search-input"
                                />
                                <button className="meli-search-button" type="submit"></button>
                            </form>
                        </div>
                    </div>
                </div>
                
                
            </div>
        </header>
    )
}

// SearchNavBar.propTypes = {
//     value: PropTypes.func.isRequired
// }

export default SearchNavBar;