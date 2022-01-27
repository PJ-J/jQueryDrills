$(function () {
  // Handler for .ready() called.

  let div = $("<div>");
  let h2 = $("<h2>");
  let ul = $("<ul>");
  let li = $("<li>");

  div.appendTo("body");
  ul.appendTo("body");

  $("#btnSubmit").prop("disabled", true);
  $("#inputText").keyup(function () {
    $("#btnSubmit").prop("disabled", this.value == "" ? true : false);
  });

  $("#btnSubmit").on("click", function (event) {
    event.preventDefault();

    // h2.append($("#inputText").val());
    // div.append(h2);

    // the problem here now is that every time i click submit it just adds text to the already existing li element. i need to make the function create a new li every click

    li.append($("#inputText").val());
    ul.append(li);
  });


  h2.on("mouseover", function() {
    $(this).css("background-color", "red");
    $(this).css("border-radius", "10px");
  });

 
  let randColor = ("rgb("+Math.floor(Math.random() * 255)+","+Math.floor(Math.random() * 255)+","+Math.floor(Math.random() * 255)+")");
  
  li.on("click", function() {

    $(this).css("color", randColor);
    $(this).css("border-radius", "10px");
  });
});
