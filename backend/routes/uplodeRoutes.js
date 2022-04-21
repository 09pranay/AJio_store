import path from 'path';
import express from 'express';
import multer from 'multer';
const router = express.Router()

const storage = multer.diskStorage({
    description(req,file,cb){
        cb(null,"uplodes/")
    },
    filename(req,file,cb){
        cb(null,`${field.fieldname}-${Date.now()}${path.extname(file.originalname)}`)
    }
})

function checkFileType(file,cb) {
    const filetype = /jpg|png|jpeg/
    const extname= filetype.test(path.extname(file.originalname).toLowerCase)
    const mimetype = filetype.test(file.mimetype)

    if (extname && mimetype) {
        return cb(null,true) 
    }else{
        cb('Image only')
    }
}

const uplode = multer({
    storage,
    fileFilter: function(req,file,cb) {
        checkFileType(file,cb)
    }
})

router.post('/',uplode.single('image'),(req,res) => {
    res.send(`${req.file.path}`)
})

export default router