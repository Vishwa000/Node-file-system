const fileService = require('../services/fileService');

const createFile = async (req, res) => {
    try {
        const fileName = await fileService.createFile();
        res.status(201).json({ status: true, message: `File ${fileName} created successfully` });
    } catch (error) {
        res.status(500).json({ status: false, message: 'Somrthing went wrong', error: error.message });
    }
};

const getAllFiles = async (req, res) => {
    try {
        const files = await fileService.getAllFiles();
        res.json({ status: true, message: 'File retrieved successfully', data: files });
    } catch (error) {
        res.status(500).json({ status: false, message: 'Somrthing went wrong', error: error.message });
    }
};

module.exports = {
    createFile,
    getAllFiles
};
