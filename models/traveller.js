const Traveller = function(journeys) {
  this.journeys = journeys;
};

Traveller.prototype.getJourneyStartLocations = function() {
  const startLocations = this.journeys.map((journey) => {
    return journey.startLocation;
  });
  return startLocations;
};

Traveller.prototype.getJourneyEndLocations = function () {
  const endLocations = this.journeys.map((journey) => {
    return journey.endLocation;
  });
  return endLocations;
};

Traveller.prototype.getJourneysByTransport = function (transport) {
  const journeysByTransport = this.journeys.filter((journey) => {
    return journey.transport === transport;
  })
  return journeysByTransport;
};

Traveller.prototype.getJourneysByMinDistance = function (minDistance) {
  const result = this.journeys.filter((journey) => {
    return journey.distance >= minDistance;
  });
  return result;
};

Traveller.prototype.calculateTotalDistanceTravelled = function () {
  let result = this.journeys.reduce((runningResult, journey) => {
    return runningResult + journey.distance
  }, 0);
  return result;
};

// Traveller.prototype.getUniqueModesOfTransport = function () {
//   const result = this.journeys.filter((journey) => {
//     return journey.transport;
//   });
//   return result;
// };


module.exports = Traveller;
