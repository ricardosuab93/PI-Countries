const { Country, Activity } = require ('../db.js');
const axios = require('axios');
const { getInfoApi } = require('../getDataApi.js');

const getDataDb = async () => {
    return await Country.findAll({ include : Activity })
};

const getAllCountries = async () => {
    const dbData = await getDataDb();
    if(!dbData.length) {
        await getInfoApi();
        return await getDataDb();
    }
    return dbData;
};

const getCountries = async (req, res) => {
    const { name } = req.query;
    try {
        let countries = await getAllCountries();
        if(name){
            let country = countries.filter((fl) => fl.name.toLowerCase().includes(name.toLowerCase()));
            (country.length) ? res.status(200).json(country) : res.status(404).json(['Ningun pais coincide']);
        }else{
            countries.length ? res.status(200).json(countries) : res.status(404).send('Ningun pais encontrado')
        }

    }catch(e){
        console.log(e);
    }
};

const getCountryById = async (req, res) => {
    const { id } = req.params;
    let countries = await getAllCountries(); 
    if (id) {
        try {
            let country = countries.filter((fl) => fl.id.toLowerCase() === id.toLowerCase());
            country ? res.status(200).json(country) : res.status(404).send('Ningun pais coincide');            
            console.log(country)
        }catch (e){
            res.status(500).send(e);
        }      
    }else{
        res.status(404).send('Escribe un codigo');
    }
};


module.exports = {
    getCountries,
    getCountryById
}