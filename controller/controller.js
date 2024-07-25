import dotenv from 'dotenv';
import client from '../config/redis-connect.js';
import fetchApiData from '../service/service.js';

dotenv.config();

const getSpeciesData = async (req, res) => {
    const species = req.params.species;
    console.log(species);
    let results;

    try {
        results = await fetchApiData(species);
        if (results.length === 0) {
            throw "API returned an empty array";
        }
        await client.set(species, JSON.stringify(results), {
            EX: 1, // validity in seconds
            NX: true,
        });

        res.send({
            fromCache: false,
            data: results,
        });
    } catch (error) {
        console.error(error);
        res.status(404).send("Data unavailable");
    }



}

export default getSpeciesData;