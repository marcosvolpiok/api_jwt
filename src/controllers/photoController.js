class photoController{
    constructor(photoService) {
        this.photoService = photoService;
    }

   list = async (req, res) => { 
    try{
        const result=await this.photoService.list();
        res.json(result);
    }catch(e){
      res.status(500).json({message: e.message})
    }
  }
}
  
  
  module.exports = photoController;