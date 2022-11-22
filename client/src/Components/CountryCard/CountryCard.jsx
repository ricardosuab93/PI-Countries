import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class CountryCard2 extends Component {
    render() {
        return (
            <div className='cardCountry'>
                <Link className='cardLink' to={`/countries/${this.props.flag}`}>
                    <img src={this.props.flag} alt="country_flag" />
                    <h3>{this.props.name}</h3>
                    <h4>{this.props.flag}</h4>
                </Link>
            </div>
        );
    }
}

export default CountryCard2;
