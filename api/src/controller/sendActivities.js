const { UUIDV4 } = require('sequelize');

const { v4: uuidv4 } = require('uuid');

const { Country, Activity } = require ('../db.js');

const postActivities = async(req, res) => {
    const { name, difficulty, duration, season, countries } = req.body;
    try {
        const validateActivity = await Activity.findOne({
            where: {
                name: name,
            }
        });

        if (!name || !difficulty || !duration || !season || !countries) {
            res.status(404).json('Datos incompletos');
        }
        if (validateActivity) {
            res.status(404).json('This activity already exist.');
        
        } else {
                
            Activity.create({ name, difficulty, duration, season }).then(activity => {
                countries.forEach(id => {
                    Country.findByPk(id).then(async Country => {
                        await Country.addActivity(activity);
                    }).catch(error => {
                        console.log(error);
                    });    
                
                });
            })
        }
        
        res.status(200).send('Añadido');

    }catch(err) {
        //if (err.code === '23505') return res.status(404).send('Activity already exists.');
        res.status(500).send(err)
        console.log(err)
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
