class authController{
    constructor(authService) {
       this.authService=authService;
      }

   login = async (req, res) => { 
    try{
        const result = await this.authService.login(req);
        console.log('*********result', result);
        res.status(result.status).send(result);
    }catch(e){
      res.status(500).json({message: e.message})
    }
  }
}
  
  
  module.exports = authController;