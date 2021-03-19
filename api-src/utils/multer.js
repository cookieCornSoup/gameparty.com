const multer = require('multer');
const randomstring = require('randomstring');
const path = require('path');

const imageUpload = multer({
    storage: multer.diskStorage({
        destination: (req, file, cb) => {
            cb(null, `${__dirname}/../images`); //  
        },
        filename: (req, file, cb) => {
            const fileName = randomstring.generate(25);
            const mimeType = '-';
            if (file.mimetype == 'image/png') { 
                mimeType = 'png'
            }
            if (file.mimetype == 'image/jpeg') { 
                mimeType = 'jpg'
            }
            cb(null, fileName + '.' + mimeType);
        }
  
    }),
    limits: {
		fileSize: 5 * 1024 * 1024, // 크기제한입니다. 기준은 byte 입니다.
	}
});

module.exports = imageUpload;