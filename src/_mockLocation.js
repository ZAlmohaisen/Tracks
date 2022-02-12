import * as Location from 'expo-location';

const tenMeteresWithDegrees = 0.0001;

const getLocation = increment => {
  return {
    tiemstamp: 1000000,
    coords: {
      speed: 0,
      heading: 0,
      accuracy: 5,
      altitudeAccuracy: 5,
      altitude: 5,
      longitude: 24.4435169 + increment * tenMeteresWithDegrees,
      latitude:   39.6596595 + increment * tenMeteresWithDegrees
    },
  };
};

let counter = 0;
setInterval(() => {
  Location.EventEmitter.emit('Expo.locationChanged', {
    watchId: Location._getCurrentWatchId(),
    location: getLocation(counter)
  });
  counter++;
}, 1000);
