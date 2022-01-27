$(function() {
  // Handler for .ready() called.

  $('#btnSubmit').prop('disabled',true);
  $('#inputText').keyup(function(){
      $('#btnSubmit').prop('disabled', this.value == "" ? true : false);     
  })

  function notify() {
    alert( $("#inputText").val() );
  }
  $( "#btnSubmit" ).on( "click", notify );

});



