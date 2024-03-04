import express from 'express';
import { createListing,updateListing,getAllListings,getListingById,deleteListing } from '../../controllers/listings/index.js';
import { roles } from '../../middlewares/roles.js';
import { auth } from '../../middlewares/auth.js';

  const router = express.Router();

  /**
   * routes for all listing endpoints with authentication and authorization
   */
  router.post('/',auth,roles(['Business Owner','Admin']), createListing);
  router.get('/',auth,roles(['Business Owner','User','Admin']), getAllListings);
  router.get('/:listingId',auth,roles(['Business Owner','User','Admin']), getListingById);
  router.put('/:listingId',auth,roles(['Business Owner','Admin']), updateListing);
  router.delete('/:listingId',auth,roles(['Admin']),deleteListing);

  export { router as listingRoutes };