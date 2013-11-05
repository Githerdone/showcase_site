$(document).ready(function() {


  var bullet = new Array("Move from spreadsheets to online data managment", 'hello there', 'yes i am here', 'Take a look at a custome built project -->')
  var count = -1
  for (var i=0; i < bullet.length; i++){
    // setTimeout(function(){
      count += 1
      bulletPoint('#hero-banner' + count.toString(), bullet[count], count, bullet.length)
    // }, 1000 * count)
  }

 bulletPoint('#hero-banner' + count.toString(), bullet[count], count)

});

function bulletPoint(element, bullet, count, totaltimes){

  console.log('we got here')
  
  console.log('count is ' + count)
  console.log('bullet length is ' + bullet.length)
  if(count <= totaltimes){
    setTimeout(function(){
      removeCursor('#typed-cursor')
      appendBullet(count.toString())
      $(element).typed({
        strings: [bullet],
        typeSpeed: 40,
      });
    }, (5000 * count) + bullet.length)
  }else{
    return
  }
}

function appendBullet(count){
  $('#hero-banner').append("</br><span style='font-size: 20px;'>> </span><span style='font-size: 20px;' id='hero-banner"+ count + "''></span>")
}

function removeCursor(element){
  $(element).remove();
}