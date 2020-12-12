const WeddingService = require('../services/WeddingService');

class weddingController{
    constructor(){
        this.weddingService = new WeddingService();
        this.init();
    }

    init(){
        this.setCheckInGuest = this.setCheckInGuest.bind(this);
        this.getAllChekedGuests = this.getAllChekedGuests.bind(this);
        this.getAllPendingsGuests = this.getAllPendingsGuests.bind(this);
        this.setManuallyGuest = this.setManuallyGuest.bind(this);
    }

    async setCheckInGuest(req, res, next){
        const { query: { code } } = req;
        try{
            const data = await this.weddingService.setCheckInGuest(code);
            res.json(data);
        }catch(err){
            next(err);
        }
    }

    async getAllChekedGuests(req, res, next){
        try{
            const data = await this.weddingService.getAllChekedGuests();
            res.json(data);
        }catch(err){
            next(err);
        }
    }

    async getAllPendingsGuests(req, res, next){
        try{
            const data = await this.weddingService.getAllPendingsGuests();
            res.json(data);
        }catch(err){
            next(err);
        }
    }
    
    async setManuallyGuest(req, res, next){
        const { query: { id } } = req;
        try{
            const data = await this.weddingService.setManuallyGuest(id);
            res.json(data);
        }catch(err){
            next(err);
        }
    }

}

module.exports = weddingController;