
exports.distanceCalculator = function (passengerLat, passengerLong, cabLat, cabLong, unit) {
  var radlat1 = Math.PI * passengerLat/180
  var radlat2 = Math.PI * cabLat/180
  var theta = passengerLong-cabLong
  var radtheta = Math.PI * theta/180
  var dist = Math.sin(radlat1) * Math.sin(radlat2) + Math.cos(radlat1) * Math.cos(radlat2) * Math.cos(radtheta);
  if (dist > 1) {
      dist = 1;
  }
  dist = Math.acos(dist)
  dist = dist * 180/Math.PI
  dist = dist * 60 * 1.1515
  if (unit=="K") { dist = dist * 1.609344 }
  if (unit=="N") { dist = dist * 0.8684 }
  return dist;
}
