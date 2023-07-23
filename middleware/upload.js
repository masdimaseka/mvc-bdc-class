const multer = require("multer");
const mime = require("mime-types");
const path = require("path");

const multerStorageData = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, path.join(__dirname, "../public/uploads"));
  },
  filename: function (req, file, cb) {
    const uniqueSuffix = Date.now() + "-" + Math.round(Math.random() * 1e9);
    cb(
      null,
      `${file.fieldname}-${uniqueSuffix}.${mime.extension(file.mimetype)}`
    );
  },
});

const upload = multer({ storage: multerStorageData });

module.exports = upload;
