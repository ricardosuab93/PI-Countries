
import React, { Component } from 'react';
import { connect } from 'react-redux';

import * as actions from '../../Redux/actions';
import CountryCard from '../CountryCard/CountryCard.jsx';
import NavBar from '../NavBar/NavBar';

export class Home extends Component {

  componentDidMount(){
    this.props.getAllCountries();
  }
  render() {
    return (
      <div className='containerPrincipal'>
        <NavBar />
        <div className='cardsContainer'>
        {
          this.props.countries?.map((country) => (
            <CountryCard
              key={country.id}
              id={country.id}
              flag={country.flag}
              name={country.name}
              continent={country.continent}
            />
          ))
        }
        </div>
      </div>      
    )
  }
}

export const mapStateToProps = (state) => {
  return {
    countries: state.countries
  };
};

export const mapDispatchToProps = (dispatch) => {
  return {
      getAllCountries: () => {dispatch(actions.getAllCountries())}
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Home)