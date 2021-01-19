import express from 'express';
import {getPosts, createPost, updatePost} from '../controllers/posts.js'

// setup router
const router = express.Router();

//inital route
router.get('/', getPosts);
router.post('/', createPost);
router.patch('/:id', updatePost); //retrieve dynamic id

//export router to be used in index.js
export default router;