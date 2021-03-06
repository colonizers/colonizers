'use strict';

var template = require('./html-templates').players;
var observableProps = require('./../game/observable-properties');

function PlayersModel(roomModel) {
  this.roomModel = roomModel;

  observableProps.defineProperties(this, {
    players: this.getPlayers
  });
}

PlayersModel.prototype.getPlayers = function() {
  return this.roomModel.otherPlayersOrdered;
};

module.exports = {
  viewModel: PlayersModel,
  template: template
};
