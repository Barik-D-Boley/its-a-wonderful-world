const DevCard = require('../schemas/devCards')

const getAllDevCards = async (req, res) => {
    try {
        const devCards = await DevCard.find({});
        res.status(201).json({devCards});
    } catch (error) { res.status(500).json({msg: error}) }
}

const deleteAllDevCards = async (req, res) => {
    try {
        const devCards = await DevCard.deleteMany({});
        res.status(201).json({devCards});
    } catch (error) { res.status(500).json({msg: error}) }
}

const createDevCard = async (req, res) => {
    try {
        const devCard = await DevCard.create(req.body);
        res.status(201).json({devCard});
    } catch (error) { res.status(500).json({msg: error}) }
}

const getDevCard = async (req, res) => {
    try {
        const devCard = await DevCard.findById(req.params.id).exec();
        res.status(201).json({devCard});
    } catch (error) { res.status(500).json({msg: error}) }
}

const updateDevCard = async (req, res) => {
    try {
        const {id} = req.params;
        const newDevCard = req.body;
        const devCards = await DevCard.findOneAndUpdate({_id: id}, newDevCard);
        res.status(201).json({devCards});
    } catch (error) { res.status(500).json({msg: error}) }
}

const deleteDevCard = async (req, res) => {
    try {
        const devCard = await DevCard.findByIdAndRemove(req.params.id);
        res.status(201).json({devCard});
    } catch (error) { res.status(500).json({msg: error}) }
}

module.exports = { getAllDevCards, deleteAllDevCards, createDevCard, getDevCard, updateDevCard, deleteDevCard };