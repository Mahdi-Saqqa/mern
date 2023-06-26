const Player = require('../models/player.model');

module.exports.allPlayer = (request, response) => {
    Player.find({})
        .then(players => response.json(players))
        .catch(err => response.status(400).json(err))
}
module.exports.createPlayer = (request, response) => {
    const { name, position} = request.body;
    Player.create({
        name,
        position,
    })
        .then(player => response.json(player))
        .catch(err => response.status(400).json(err));
}
module.exports.deletePlayer = (request, response) => {
    console.log("delete route")
    console.log(request.params.id)
    Player.deleteOne({ _id: request.params.id })
        .then(deleteConfirmation => response.json(deleteConfirmation))
        .catch(err => response.status(400).json(err))
}
module.exports.updatePlayer = (request, response) => {
        if (request.body.name.length < 2) {
            return response.status(400).json({errors: "Name must be at least 2 characters long"})
        }
        Player.findOneAndUpdate({_id: request.params.id}, request.body, {new:true})
        .then(updatedPlayer => response.json(updatedPlayer))
        .catch(err => response.status(400).json(err))
}
module.exports.getPlayer = (request, response) => {
    Player.findOne({_id: request.params.id})
        .then(player => response.json(player))
        .catch(err => response.status(400).json(err))
}