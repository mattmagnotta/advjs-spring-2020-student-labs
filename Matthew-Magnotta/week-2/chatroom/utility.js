
exports.dateToTime = function () {
  addZero = function (i) {
    if (i < 10) {
      i = '0' + i
    }
    return i
  }
  var d = new Date()
  var h = addZero(d.getHours())
  var m = addZero(d.getMinutes())
  var s = addZero(d.getSeconds())
  return h + ':' + m + ':' + s
}
exports.addZero = function (i) {
  if (i < 10) {
    i = '0' + i
  }
  return i
}
