class photoService {
    constructor(fetch) {
        this.fetch = fetch;
    }
    
    list = async () => {
        const photosRes=await this.fetch('https://jsonplaceholder.typicode.com/photos/');
        const photosJson = await photosRes.text();
        
        return JSON.parse(photosJson);
    }
}

module.exports = photoService;