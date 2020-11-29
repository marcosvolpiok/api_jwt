class authController{
    constructor(jwt, config) {
       this.jwt=jwt;
       this.config=config;
      }

   login = (req, res) => { 
    try{
        if(req.body.user=='demo' && req.body.pwd=='demo'){
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
        }else{
            console.log('auth failed');

            res.status(403).send({
                mensaje: 'Authentication failed'
            });
        }
    }catch(e){
      res.status(500).json({message: e.message})
    }
  }
}
  
  
  module.exports = authController;