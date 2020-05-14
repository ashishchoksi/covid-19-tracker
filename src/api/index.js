import axios from 'axios';

const url = "https://covid19.mathdro.id/api";

export const fetchData = async (country) => {

    let changableUrl = url;  

    if(country) {
        changableUrl = `${url}/countries/${country}`;
    }

    try {
        const { data: { confirmed, recovered, deaths, lastUpdate } } = await axios.get(changableUrl);

        // if key val same dont need write twice ex= confirmed : confirmed         
        const modifiedData = { confirmed, recovered, deaths, lastUpdate };
        // we directly return above { } 
        return modifiedData;

    } catch (error) {

    }
}

export const fetchDailydata = async () => {
    try {
        const { data } = await axios.get(`${url}/daily`);
        const modifiedData = data.map((dailyData) => ({
            confirmed: dailyData.confirmed.total,
            deaths: dailyData.deaths.total,
            date: dailyData.reportDate
        }));

        return modifiedData;
    } catch (error) {

    }
};


export const fetchCountries = async () => {
    try {
        const {data : {countries}} = await axios.get(`${url}/countries`);
        
        return countries.map( (country) => country.name );

    } catch (error) {

    }
};
