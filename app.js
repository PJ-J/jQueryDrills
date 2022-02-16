$(function () {
  // Handler for .ready() called.

  let div = $("<div>");
  let h2 = $("<h2>");
  let ul = $("<ul>");
  // let li = $('<li>');

  div.appendTo("body");
  ul.appendTo("body");

  $("#btnSubmit").prop("disabled", true);
  $("#inputText").keyup(function () {
    $("#btnSubmit").prop("disabled", this.value == "" ? true : false);
  });

  // $("#btnSubmit").on("click", function() {
  //   alert($("#inputText").val());
  // });

  $("#btnSubmit").on("click", function (event) {
    event.preventDefault();

    let randColor =
      "rgb(" +
      Math.floor(Math.random() * 255) +
      "," +
      Math.floor(Math.random() * 255) +
      "," +
      Math.floor(Math.random() * 255) +
      ")";

    // h2.append($("#inputText").val());
    // div.append(h2);

    const li = $("<li>" + $("#inputText").val() + "</li>");
    ul.append(li);

    li.click(function () {
      $(this).css("color", randColor);
      // console.log($(this));
    });

    li.on("dblclick", function () {
      $(this).remove();
      // $(this).css("border-radius", "10px");
    });
  });
});
