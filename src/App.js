import React from 'react';

// import all
import { Chart, Cards, CountryPicker } from './components';
import styles from './App.module.css';
import { fetchData } from './api';

import corona from './images/image.png'

class App extends React.Component {

    state = {
        data: {},
        country: ''
    };

    async componentDidMount() {
        // for passing this data to Cards module we use this data into state and pass
        const fetchedData = await fetchData();
        // console.log("fd : " + fetchData);
        this.setState({
            data: fetchedData // setting data to the state
        });
    }

    handleCountryChange = async (country) => {
        const fetchedData = await fetchData(country);
        this.setState({data : fetchedData, country : country}); 
    };

    render() {
        return (

            <div className={styles.container} >
                <img className={styles.image} src={corona} alt="corona image" />

                <Cards data={this.state.data} />
                <CountryPicker handleCountryChange={this.handleCountryChange} />
                <Chart data={this.state.data} country={this.state.country} />
            </div>
        );
    }
}

export default App;
