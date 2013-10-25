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
      $('.tabrow li').eq(2).addClass('selected')
      $('.tabrow li').eq(2).find('a').addClass('selected')
      $('#tab3').css('display', 'block');

      $('#tab3 input').dblclick(function(){
        var primer = $(this).data('value')[0].toString();
        var key = $(this).data('value')[1].toString();
        $(this).addClass('input-change').prop('readonly', false)
        $(this).keyup(function(){
          console.log($(this).val())
          console.log(request[primer][key])
          if($(this).val().toLowerCase() == request[primer][key].toLowerCase()){
            console.log('equal')
          }else{
            console.log('no longer equal')
          }
        })
       

        
        $('#patient_profile div').fadeIn(600)
      });
    });
  });
}

//The below code is to recomplile javascript for rails turbolink action
$(document).ready(setSelectors);
$(document).on('page:load', setSelectors);

