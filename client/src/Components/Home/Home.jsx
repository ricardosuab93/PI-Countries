import './Home.css'
import React, { Component } from 'react';
import { connect } from 'react-redux';

import * as actions from '../../Redux/actions';
import CountryCard from '../CountryCard/CountryCard.jsx';

export class Home extends Component {

  componentDidMount(){
    this.props.getAllCountries();
  }
  render() {
    return (
      <div className='cardsContainer'>
        {
          this.props.countries?.map((country) => (
            <CountryCard
              key={country.id}
              flag={country.flag}
              name={country.name}
              continent={country.continent}
            />
          ))
        }
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