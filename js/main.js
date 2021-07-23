var $firstButton = $(".first"),
  $secondButton = $(".second"),
  $input = $("input"),
  $name = $("#name"),
  $phone = $("#phone"),
  $age = $("#age"),
  $more = $(".more"),
  $yourname = $(".yourname"),
  $modifyBtn = $("#modify-btn");
($reset = $(".reset")), ($ctr = $(".container"));

var $nameValidation = $("#name-valid"),
  $phoneValidation = $("#phone-valid");

$firstButton.on("click", function (e) {
  if ($name.val().length >= 1 && $phone.val().length >= 1 && $phone.val().length <= 8) {
    console.log("pass");
    $(this)
      .text("Saving...")
      .delay(900)
      .queue(function () {
        $ctr.addClass("center slider-two-active").removeClass("full slider-one-active");
      });
  } else {
    console.log("fail");
    alert("fail");
  }

  e.preventDefault();
});

$secondButton.on("click", function (e) {
  $(this)
    .text("Saving...")
    .delay(900)
    .queue(function () {
      $ctr.addClass("full slider-three-active").removeClass("center slider-two-active slider-one-active");
      $name = $name.val();
      $phone = $phone.val();
      $nameValidation.val($name);
      $phoneValidation.val($phone);
      if ($name == "") {
        $yourname.html("Anonymous!");
      } else {
        $yourname.html($name + "!");
      }
    });
  e.preventDefault();
});

$modifyBtn.on("click", function (e) {
  $ctr.addClass("slider-one-active").removeClass("full slider-three-active");
  e.preventDefault();
});
