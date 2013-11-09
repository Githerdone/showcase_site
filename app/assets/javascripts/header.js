$(document).ready(function() {


  var bullet = new Array("Move from spreadsheets to online data managment", 'hello there', 'yes i am here', 'Take a look at a custome built project -->')
  var count = -1
  for (var i=0; i < bullet.length; i++){
    count += 1
    bulletPoint('#hero-banner' + count.toString(), bullet[count], count, bullet.length)
  }


});

function bulletPoint(element, bullet, count, totaltimes){

  if(count <= totaltimes){
    setTimeout(function(){
      removeCursor('#typed-cursor')
      appendBullet(count.toString())
      $(element).typed({
        strings: [bullet],
        typeSpeed: 40,
        callback: buttonShow(count)
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

function buttonShow(count){
  console.log(count)
  if(count == 3 ){
    setTimeout(function(){
    $('#hero-button').fadeIn(500);
    }, 3600)
  }
}