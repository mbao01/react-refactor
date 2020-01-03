/**
* This React class is intended to query an endpoint that will return an alphanumeric string, after clicking a button.
* This component is passed a prop "apiQueryDelay", which delays the endpoint request by N milliseconds. There is a 
* second button to disable this functionality and have the endpoint request run immediately after button click.
* This data is then to be displayed inside a simple container.
* The "queryAPI" XHR handler will return the endpoint response in the form of a Promise (such as axios, fetch).
* The response object will look like the following: {data: "A0B3HCJ"}
* The containing element ref isn't used, but should remain within the class.
* Please identify, correct and comment on any errors or bad practices you see in the React component class below.
* Additionally, please feel free to change the code style as you see fit.
* Please note - React version for this exercise is 15.5.4
*/

// Component is exported as part of the React object and not a default export in the reack library.
// So Component must be imported using the named import syntax.
import React, { Component } from 'react';
import queryAPI from 'queryAPI';
import PropTypes from 'prop-types';

// Component should not be invoked here because ShowResultsFromAPI class extend the methods and properties in Component.
class ShowResultsFromAPI extends Component {
  // Props must be passed in constructor
  // ShowResultsFromAPI props must be passed through the constructor. And the constructor of the extended Component invoked with the props.
  constructor(props) {
    super(props);

    this.container = null;

    this.state = { apiQueryDelay: this.props.apiQueryDelay }
  }

  handleDisableDelay = () => {
      this.setState({ apiQueryDelay: 0 })
  }

  handleDataRequest = () => {
    let delay = this.state.apiQueryDelay;

    if (typeof delay === 'number' && !isNaN(delay)) {
      setTimeout(() => {
        this.fetchData();
      }, delay);
    }
  }

  fetchData() {
    queryAPI().then((response) => {
        if (response && response.data) {
          this.setState({
            data: response.data,
            error: false
          });
        }
      });
  }

  render() {
    return (
        <div>
            <div class="content-container" ref={this.container}>
                <p>{ this.state.error ? 'Sorry - there was an error with your request.': this.state.data }</p>
            </div>
            <button onClick={this.handleDisableDelay}>Disable request delay</button>
            <button onClick={this.handleDataRequest}>Request data from endpoint</button>
        </div>
    );
  }
}

ShowResultsFromAPI.displayName = {
  name: "ShowResultsFromAPI"
};
ShowResultsFromAPI.defaultProps = {
  apiQueryDelay: 0
};
ShowResultsFromAPI.propTypes = {
  apiQueryDelay: PropTypes.number
};

export default ShowResultsFromAPI;