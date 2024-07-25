import express from 'express';
import cacheMiddleware from '../middleware/cacheData.js';
import getSpeciesData from '../controller/controller.js';
const router = express.Router();

router.get('/fish/:species', cacheMiddleware, async (req, res) => {
    return await getSpeciesData(req, res);
});

export default router;
