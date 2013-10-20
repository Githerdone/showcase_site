var setSelectors = function(){

  $("select[name='patient[]info[]maritalstatus']").selectpicker({style: 'btn-info'});
  $("select[name='patient[]emergencycontact[]relationship']").selectpicker({style: 'btn-info'});
}

//The below code is to recomplile javascript for rails turbolink action
$(document).ready(setSelectors);
$(document).on('page:load', setSelectors);
