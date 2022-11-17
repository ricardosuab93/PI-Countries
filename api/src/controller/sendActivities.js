const { UUIDV4 } = require('sequelize');
const { Op } = require('sequelize');
 
const { v4: uuidv4 } = require('uuid');

const { Country, Activity } = require ('../db.js');

const postActivities = async(req, res) => {
    const { name, difficulty, duration, season, countries } = req.body;
    console.log(name, difficulty, duration, season, countries);
    try {
        if(name && difficulty && duration && season && countries){
            const activity = await Activity.create({
                    name,
                    difficulty,
                    duration,
                    season         
            });
            
            
            countries.forEach(async (id) => {
                const country = await Country.findOne({
                    where: {id: {[Op.iLike]:`%${id}%`}}
                     })
                await country?.addActivity(activity);
            })
       
        return res.status(200).send(activity)

        }else{
            return res.status(404).json('Missing data')
        }       
    }catch(err) {
        //if (err.code === '23505') return res.status(404).send('Activity already exists.');
        //res.status(500).send(err)
        console.log('post activities '+err)
    }
};


const getActivities = async (req, res) => {
    try{
        let activity = await Activity.findAll();
        res.status(200).send(activity);
    }catch(e){
        res.status(404).send('notfound')
    }
};

module.exports = {
    postActivities,
    getActivities
}
