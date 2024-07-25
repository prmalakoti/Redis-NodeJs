import axios from 'axios';
import dotenv from 'dotenv';

dotenv.config();

const fetchApiData = async (species) => {
    const apiResponse = await axios.get(
        `${process.env.API_URL}${species}`
    );

    console.log("Request sent to the API");
    return apiResponse.data;
}


export default fetchApiData;