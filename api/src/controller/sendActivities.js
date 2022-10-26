const { Country, Activity } = require ('../db.js');

const addActivity = async(req, res) => {
    const { name, difficulty, duration, season, countryId } = req.body;
    try {
        const validateActivity = await Activity.findOne({
            where: {
                name: name,
            }
        });

        if (!name || !difficulty || !duration || !season || !countryId) {
            res.status(404).json('Llena todos los campos');
        }
        if (validateActivity) {
            res.status(404).json('Ya existe');
        }
        const newActivity = await Activity.create({
            id,
            name,
            difficulty,
            duration,
            season,
        });

        for (const cId of countryId) {
            await newActivity.addCountry(cId);
        }
    
        res.status(200).send('Añadido');

    }catch(err) {
        res.status(500).send(err)

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
    addActivity,
    getActivities
}