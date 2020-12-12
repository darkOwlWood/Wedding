const express = require('express');
const router = express.Router();
const WeddingController = require('../controllers/WeddingController');
const weddingController = new WeddingController();

const WeddingRoute = (app) =>{
    app.use('/wedding',router);

    router.get('/chekedIn',weddingController.setCheckInGuest);
    router.get('/cormfirm',weddingController.getAllChekedGuests);
    router.get('/wating',weddingController.getAllPendingsGuests);
    router.get('/manually',weddingController.setManuallyGuest);
};

module.exports = { WeddingRoute };