const multer = require('multer');
const router = require('express').Router();
const { createNewPost, getAllPost, getPostByUsername, getVideoForStream, getSinglePost } = require('../controllers/video');

// Set up Multer storage configuration
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'uploads/'); 
  },
  filename: (req, file, cb) => {
    cb(null, file.originalname); 
  },
});

// Create a multer upload instance
const upload = multer({ storage });

router.post("/", upload.single('videoURL'), createNewPost);
router.get("/", getAllPost);
router.get("/user/:username", getPostByUsername);
router.get("/video/:filename", getVideoForStream);
router.get("/:id", getSinglePost);

module.exports = router;