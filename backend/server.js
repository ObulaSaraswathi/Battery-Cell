const express = require('express');
const multer  = require('multer');
const fs = require('fs');
const app = express();
const generateUniqueId = require('generate-unique-id');
app.get("/", (req,res)=> res.send("Server home page"));

// Set up multer for handling file uploads
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'uploads/')
    },
    filename: function (req, file, cb) {
        cb(null, file.originalname)
    }
});
const upload = multer({ storage: storage });

// Endpoint to handle battery cell information submission
app.post('/submitBatteryInfo', upload.single('image'), (req, res) => {
    const { manufacturer, capacity } = req.body;
    
    // Generate unique Cell_ID and Barcode
    const Cell_ID = generateUniqueId({ length: 10 });
    const Barcode = generateUniqueId({ length: 10 });
    
    // Store or process the uploaded image (req.file)
    // For simplicity, just move the uploaded file to a directory
    const uploadedImagePath = `uploads/${req.file.filename}`;
    const newImagePath = `uploads/${Cell_ID}_${req.file.filename}`;
    fs.renameSync(uploadedImagePath, newImagePath);
    
    // You can store the meta-information and identifiers in a database here
    
    // Respond with the generated identifiers
    res.json({ Cell_ID, Barcode });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port http://localhost ${PORT}`);
});
