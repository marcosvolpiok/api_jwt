class authController{
    constructor() {
        this.jwt=require('jsonwebtoken');
        this.config = require('../config/config');
      }
    
    /*
    constructor(messageService) {
      this.messageService=messageService;
    }
  
    list = async (req, res) => { 
      try{
        const messages=await this.messageService.list();
        res.json(messages);
      }catch(e){
        res.status(500).json({message: e.message})
      }
    }
    */

   login = async (req, res) => { 
    try{
        const payload = {
            check:  true,
            user: 'test'
        };

        const token = this.jwt.sign(payload, this.config.key, {
            expiresIn: 1440
        });
        res.json({
            mensaje: 'Authentication successful',
            token: token
        });
    }catch(e){
      res.status(500).json({message: e.message})
    }
  }
}
  
  
  module.exports = authController;