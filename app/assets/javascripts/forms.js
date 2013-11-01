var setSelectors = function(){
  $("select[name='patient[]info[]maritalstatus']").selectpicker({style: 'btn-info'});
  $("select[name='patient[]hstore[]emergencycontact[]relationship']").selectpicker({style: 'btn-info'});

  var $products = $('#patient_list_body tr');
  $('#search-query-1').keyup(function() {
      var re = new RegExp($(this).val(), "i"); // "i" means it's case-insensitive
      $products.show().filter(function() {
          return !re.test($(this).find('td').text());
      }).hide();
  });

  $('#patient_list_body tr').click(function(e){
    var request = $.get('/patients', { id: $(this).first('td').find('span').text() });
    request.done(function(request){

      $('#profile-body').empty().append(HandlebarsTemplates['patient']({'patient': request.patient, 'info': request.data[0]}));

      $('.tabrow li').removeClass('selected');
      $('.tabrow li a').removeClass('selected');
      $('.tab').css("display", "none");
      $('.tabrow li').eq(2).addClass('selected');
      $('.tabrow li').eq(2).find('a').addClass('selected');
      $('#tab3').css('display', 'block');

      $('#tab3 input').dblclick(function(){
        if($(this).data('value').length == 2){
          var patient_data = request[$(this).data('value')[0].toString()][$(this).data('value')[1].toString()]
        }else{
   
          var patient_data =  request.data[0][$(this).data('value')[0].toString()][$(this).data('value')[1].toString()]
        }
        // console.log($(this).data('value'))
        // var primer = $(this).data('value')[0].toString();
        // var key = [$(this).data('value')[1].toString()][$(this).data('value')[2].toString()]
        // console.log(key)
        // var test = $(this).data('value')[1].toString() + "." + $(this).data('value')[2].toString()
        // console.log(test)
        console.log(patient_data)
        if($(this).is(':focus')){
          $(this).prop('readonly', false);
          $(this).addClass('input-change')

          // $(this).keyup(function(){
          //   if($(this).val().toLowerCase() == request[primer][key].toLowerCase()){
          //     $(this).removeClass('input-change')
          //     if($('.input-change').length == 0){
          //       $('#patient_profile div').fadeOut(600)
          //     }
          //   }else{
          //     $(this).addClass('input-change')
          //     $('#patient_profile div').fadeIn(600)
          //   }
          // });
        }
        $(this).blur(function(){
          $(this).prop('readonly', true);
          if($(this).val().toLowerCase() == patient_data.toLowerCase()){
              $(this).removeClass('input-change')
              if($('.input-change').length == 0){
                $('#patient_profile div').fadeOut(600)
              }
            }else{
              $(this).addClass('input-change')
              $('#patient_profile div').fadeIn(600)
            }
        });
        
      });
    });  
  });
}

//The below code is to recomplile javascript for rails turbolink action
$(document).ready(setSelectors);
$(document).on('page:load', setSelectors);

