const CarController = require('../controllers/car.controller');
module.exports = function(app){

    app.get('/api/cars', CarController.allCar);
    app.post('/api/cars', CarController.createCar);
    app.get('/api/cars/random', CarController.getRandomCar);
    app.get('/api/cars/:id', CarController.getCar);
    app.put('/api/cars/:id', CarController.updateCar);
    app.delete('/api/cars/:id', CarController.deleteCar);
    app.put('/api/cars/like/:id', CarController.likeCar);
    app.get('/api/cars/search/:query', CarController.searchCar)

}
