const multer = require('multer');

// Define the storage engine
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'uploads/');
        // Ensure the 'uploads' folder exists
    },
    filename: (req, file, cb) => {
        // Create a unique filename using Date.now() and the original file extension
        const uniqueSuffix = `${Date.now()}-${Math.round(Math.random() * 1e9)}`;
        const fileExtension = file.originalname.split('.').pop();
        cb(null, `${file.fieldname}-${uniqueSuffix}.${fileExtension}`);
    },
});

// Initialize `multer` with the storage engine
const upload = multer({ storage });

module.exports = upload;
