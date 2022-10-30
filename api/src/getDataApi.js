const axios = require('axios');
const { Country } = require('./db.js');
const apiUrl = 'https://restcountries.com/v3/all';

const getDataApi = async() => {
    const apiUrl = await axios.get('https://restcountries.com/v3/all');
    const apiDb = await apiUrl.data.map((c) => {
        return {
            id: c.cca3,
            name: c.name.common,
            flag: c.flags[0],
            continent: c.continents[0],
            capital: c.capital ? c.capital[0] : 'Sin Capital',
            subregion: c.subregion,
            area: c.area,
            population: c.population,
        }
    });
    //console.log('apidb '+apiDb.length)
    return apiDb;
};

async function getInfoApi () {
    try {
        const countries = await getDataApi();
        console.log('countries '+ countries.length)
        await Promise.all(
            countries.map(async (c) => {
                //console.log(c);
                await Country.create(c);
            })
        );
        console.log('se cargo la api')
    }catch (error){
        console.log(error)
    };
};

module.exports = { getInfoApi };