function rotateImage(a) {
  var newImg = []
  var img = a.length 
  
  for (var i = 0; i < img; i++) {
    var tempImg = []
    for (var j =0; j < img; j++) {
      var moveImg = a[j][i]
      tempImg.unshift(moveImg)
    }
    newImg.push(tempImg)
  }
  return newImg
}