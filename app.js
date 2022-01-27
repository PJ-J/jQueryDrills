$(function () {
  // Handler for .ready() called.

  let div = $("<div>");
  let h2 = $("<h2>");
  let inputText = $("#inputText").val();

  div.appendTo('body');

  $("#btnSubmit").prop("disabled", true);
  $("#inputText").keyup(function () {
    $("#btnSubmit").prop("disabled", this.value == "" ? true : false);
  });

  $("#btnSubmit").on("click", function (event) {
    event.preventDefault();
    
    h2.append(inputText);
    div.append(h2);
  });
});


