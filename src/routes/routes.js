import { userRoutes } from './users/users.route.js';
import { getAllListings } from '../controllers/listings/getAllListings.controller.js';
import { listingRoutes } from './listings/listings.route.js';
import { reviewRoutes } from './reviews/reviews.route.js';
import express from 'express';
const allRoutes = (app) => {
    console.log("came here");
    app.use('/user',userRoutes);
    app.use('/listings',listingRoutes);
    app.use('/review',reviewRoutes)
};

export default allRoutes;

