var $firstButton = $(".first"),
  $secondButton = $(".second"),
  $input = $("input"),
  $name = $("#name"),
  $phone = $("#phone"),
  $age = $("#age"),
  $team = $("#team"),
  $more = $(".more"),
  $yourname = $(".yourname"),
  $yourphone = $(".yourphone"),
  $modifyBtn = $("#modify-btn");
($reset = $(".reset")), ($ctr = $(".container"));

var $nameValidation = $("#name-valid"),
  $phoneValidation = $("#phone-valid"),
  $ageValidation = $("#age-valid"),
  $teamValidation = $("#team-valid");

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
      $age = $age.val();
      $team = $team.val();
      $nameValidation.val($name);
      $phoneValidation.val($phone);
      $ageValidation.val($age);
      $teamValidation.val($team);

      $yourname.html($name + " !");
      $yourphone.html($phone + " !");

      if ($name == "") {
        $yourname.html("Anonymous!");
      } else {
      }
    });
  e.preventDefault();
});

$modifyBtn.on("click", function (e) {
  $(this)
    .text("Canceling...")
    .delay(900)
    .queue(function () {
      location.reload();
    });
  e.preventDefault();
});
