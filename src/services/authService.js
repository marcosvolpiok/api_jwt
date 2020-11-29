class authService {
    constructor(jwt, config) {
        this.jwt=jwt;
        this.config=config;
    }
    
    login = async (req) => {
        if(req.body.user=='demo' && req.body.pwd=='demo'){
            const payload = {
                check:  true,
                user: 'test'
            };

            const token = this.jwt.sign(payload, this.config.key, {
                expiresIn: 1440
            });
            
            return {
                status: 200,
                message: 'Authentication successful',
                token: token
            };
        }else{
            return {
                status: 403,
                message: 'Authentication failed'
            };
        }
    }
}

module.exports = authService;