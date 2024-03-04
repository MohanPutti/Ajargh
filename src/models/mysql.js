
import Listings from "./listing.js";
import Users from "./user.js";
import Reviews from "./review.js";
import Replies from "./replies.js";
import { Op } from "sequelize";

/**
 * function to get user based on username and password
 * @param {*} param0 
 * @returns 
 */
const getUser = async ({userName,password}) => {
    try{
    let res= await Users.findOne({
    where:{username:userName,
            password:password
        }
    });
    return res;
    }
    catch(err){
        console.log(err)
    }
}

/**
 * function to create listing
 * @param {} param0 
 * @returns 
 */
const createListing = async({name,phone,city,address,user_id}) => {
    try{
        let res = await Listings.create({
            name:name,
            phone:phone,
            city:city,
            address:address,
            user_id:user_id
        })
        return res;
    }
    catch(err){
        console.log(err);
    }
}

/**
 * function to delete listing
 * @param {*} param0 
 * @returns 
 */
const deleteListing = async({listingId}) => {
    let res = await Listings.destroy({
        where:{
            listing_id:listingId
        }
    });
    return res;
}



/**
 * function to update listing
 * @param {*} param0 
 * @returns 
 */
const updateListing = async ({listingId,name,phone,city,address,image}) => {
    try{
        let updateValues ={
            name:name,
            phone:phone,
            city:city,
            address:address
        }
        let res= await Listings.update(
            updateValues,{
        where:{
            listing_id:listingId
        }});
        return res;
        }
        catch(err){
            console.log(err)
        }
}

/**
 * function to get listing based on listing id
 * @param {*} param0 
 * @returns 
 */
const getListing = async ({listingId}) => {
    try{
    let res= await Listings.findOne({
    where:{
        listing_id:listingId
        }
    });
    return res;
    }
    catch(err){
        console.log(err)
    }
}

/**
 * function to get all listings
 * @returns 
 */
const getAllListing = async () => {
    try{
    let res= await Listings.findAll({
    where:{
        }
    });
    return res;
    }
    catch(err){
        console.log(err)
    }
}

/**
 * function to create review
 * @param {*} param0 
 * @returns 
 */
const createReview = async({listing_id,text,rating,user_id}) => {
    try{
        let res = await Reviews.create({
            listing_id:listing_id,
            text:text,
            rating:rating,
            user_id:user_id
        })
        return res;
    }
    catch(err){
        console.log(err);
    }
}

/**
 * function to delete review
 * @param {*} param0 
 * @returns 
 */
const deleteReview = async({reviewId}) => {
    let res = await Reviews.destroy({
        where:{
            review_id:reviewId
        }
    });
    return res;
}



/**
 * function to update review
 * @param {*} param0 
 * @returns 
 */
const updateReview = async ({reviewId,text,rating}) => {
    try{
        let updateValues ={
            text:text,
            rating:rating
        }
        let res= await Reviews.update(
            updateValues,{
        where:{
            review_id:reviewId
        }});
        return res;
        }
        catch(err){
            console.log(err)
        }
}

/**
 * function to get review
 * @param {*} param0 
 * @returns 
 */
const getReview = async ({reviewId}) => {
    try{
    let res= await Reviews.findOne({
    where:{
        review_id:reviewId
        }
    });
    return res;
    }
    catch(err){
        console.log(err)
    }
}

/**
 * function to get all reviews
 * @returns 
 */
const getAllReviews = async () => {
    try{
    let res= await Reviews.findAll({
    where:{
        }
    });
    return res;
    }
    catch(err){
        console.log(err)
    }
}

/**
 * function to add reply to review
 * @param {*} param0 
 * @returns 
 */
const replyReview = async({review_id,text,user_id}) => {
    try{
        let res = await Replies.create({
            review_id:review_id,
            text:text,
            user_id:user_id
        })
        return res;
    }
    catch(err){
        console.log(err);
    } 
}

/**
 * returns reviews by listing id
 */
const getReviewByListingId = async ({listingId}) =>{
    try{
        let res= await Reviews.findAll({
        where:{
            listing_id:listingId    
        }
        });
        return res;
        }
        catch(err){
            console.log(err)
        }
}

export default {
     getUser,
     createListing, 
     getListing,
     getAllListing,
     updateListing,
     deleteListing,
     createReview,
     getReview,
     getAllReviews,
     updateReview,
     deleteReview,
     replyReview,
     getReviewByListingId
}