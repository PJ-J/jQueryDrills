$(function() {
  // Handler for .ready() called.

  function notify() {
    alert( "clicked" );
  }
  $( "#btnSubmit" ).on( "click", notify );

});



