const multer = require('multer')

const storage = multer.diskStorage({
    destination: function (req,file,cb) {
        cb(null, './uploads')
    },
    filename: function (req, file, cb) {
        const filename = `images-${Date.now()}${path.extname(file.originalname)}`
        cb(null, filename)
    }
})



app.use(express.static(__dirname + '/public'));
app.use('/uploads', express.static('uploads'));

