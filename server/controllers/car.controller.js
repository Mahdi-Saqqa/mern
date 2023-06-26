const Car = require('../models/car.model');

module.exports.allCar = (request, response) => {
    Car.find({}).sort({ likes: -1 })
        .then(cars => response.json(cars))
        .catch(err => response.status(400).json(err))
}
module.exports.createCar = (request, response) => {
    const { name, imgUrl, desc} = request.body;
    Car.create({
        name,
        imgUrl,
        desc,
    })
        .then(car => response.json(car))
        .catch(err => response.status(400).json(err));
}

module.exports.deleteCar = (request, response) => {
    console.log("delete route")
    console.log(request.params.id)
    Car.deleteOne({ _id: request.params.id })
        .then(deleteConfirmation => response.json(deleteConfirmation))
        .catch(err => response.status(400).json(err))
}
module.exports.updateCar = (request, response) => {
    const { id } = request.params;
    const updatedCarData = request.body;
      Car.findOneAndUpdate({ _id: id }, updatedCarData, { new: true, runValidators: true })
      .then(updatedCar => response.json(updatedCar))
      .catch(err => response.status(400).json(err));
  }

module.exports.getCar = (request, response) => {
    Car.findOne({_id: request.params.id})
        .then(car => response.json(car))
        .catch(err => response.status(400).json(err))
}
module.exports.likeCar = (request, response) => {
    Car.findOneAndUpdate({_id: request.params.id}, {$inc: {likes: 1}}, {new:true})
        .then(car => response.json(car))
        .catch(err => response.status(400).json(err))
}

module.exports.getRandomCar = (request, response) => {
    let randomCar
        let cars=Car.find({})
        .then(cars => {
            randomCar = cars[Math.floor(Math.random() * cars.length)];
            console.log(randomCar)
            response.json(randomCar)
            }
        )
        .catch(err => response.status(400).json(err))

}

module.exports.searchCar = (request, response) => {
    const { query } = request.params;
    console.log("search route")
    console.log(query)
    Car.find({ name: { $regex: query }})
        .then(cars => {
            console.log(cars)
            response.json(cars)})
        .catch(err => response.status(400).json(err));
    }
