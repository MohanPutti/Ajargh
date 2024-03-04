import express from 'express';
import { createReview,updateReview,getAllReviews,getReviewById,deleteReview } from '../../controllers/reviews/index.js';
import { roles } from '../../middlewares/roles.js';
import { auth } from '../../middlewares/auth.js';
import { replyReview } from '../../controllers/reviews/replyReview.controller.js';
import { getAverageReview } from '../../controllers/reviews/getAverage.controller.js';


const router = express.Router();

  /**
   * routes for all review endpoints with authentication and authorization
   */
router.post('/',auth,roles(['User','Admin']), createReview);
router.get('/average',auth,roles(['Business Owner','User','Admin']),getAverageReview);
router.get('/', auth,roles(['Business Owner','User','Admin']),getAllReviews);
router.get('/:reviewId',auth,roles(['Business Owner','User','Admin']), getReviewById);
router.put('/:reviewId',auth,roles(['Business Owner','User','Admin']), updateReview);
router.delete('/:reviewId',auth,roles(['User','Admin']),deleteReview);
router.post('/reply',auth,roles(['Business Owner']),replyReview);


export { router as reviewRoutes };