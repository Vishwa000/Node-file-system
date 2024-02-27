const fs = require('fs');
const path = require('path');

const folderPath = path.join(__dirname, '../files');

const createFile = () => {
    return new Promise((resolve, reject) => {
        const fileName = 'current date-time.txt';
        const filePath = path.join(folderPath, fileName);
        const content = new Date().toString();

        fs.writeFile(filePath, content, (err) => {
            if (err) {
                reject(err);
            } else {
                resolve(fileName);
            }
        });
    });
};

const getAllFiles = () => {
    return new Promise((resolve, reject) => {
        fs.readdir(folderPath, (err, files) => {
            if (err) {
                reject(err);
            } else {
                resolve(files);
            }
        });
    });
};

module.exports = {
    createFile,
    getAllFiles
};
