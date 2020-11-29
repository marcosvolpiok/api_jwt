class photoController{
    constructor() {
        this.jwt=require('jsonwebtoken');
        this.config = require('../config/config');
        this.fetch = require('node-fetch');
      }

   list = async (req, res) => { 
    try{
      
        const photosRes=await this.fetch('https://jsonplaceholder.typicode.com/photos/');
        let photosJson = await photosRes.text();

        res.json(JSON.parse(photosJson));
    }catch(e){
      res.status(500).json({message: e.message})
    }
  }
}
  
  
  module.exports = photoController;