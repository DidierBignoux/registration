var current_fs, next_fs, previous_fs;
var left, opacity, scale;
var animating;

$(".next").click(function () {
  let $name = $("#name"),
    $phone = $("#phone"),
    $chekbox = $("#checkbox"),
    $yourname = $(".yourname"),
    $yourphone = $(".yourphone");

  if ($name.val().length >= 1 && $phone.val().length >= 1 && $phone.val().length <= 8 && $chekbox.is(":checked")) {
    if (animating) return false;
    animating = true;

    current_fs = $(this).parent();
    next_fs = $(this).parent().next();
    $("#progressbar li").eq($("fieldset").index(next_fs)).addClass("active");
    next_fs.show();
    current_fs.animate(
      { opacity: 0 },
      {
        step: function (now, mx) {
          scale = 1 - (1 - now) * 0.2;
          left = now * 50 + "%";
          opacity = 1 - now;
          current_fs.css({
            transform: "scale(" + scale + ")",
            position: "absolute",
          });
          next_fs.css({ left: left, opacity: opacity });
        },
        duration: 800,
        complete: function () {
          current_fs.hide();
          animating = false;
        },
        easing: "easeInOutBack",
      }
    );

    $name = $name.val();
    $phone = $phone.val();
    $yourname.html($name + " !");
    $yourphone.html($phone);
  } else {
    console.log("fail");
    alert("Please insert a valid phone number or verify your age");
  }
});

$(".previous").click(function () {
  if (animating) return false;
  animating = true;

  current_fs = $(this).parent();
  previous_fs = $(this).parent().prev();
  $("#progressbar li").eq($("fieldset").index(current_fs)).removeClass("active");

  previous_fs.show();
  current_fs.animate(
    { opacity: 0 },
    {
      step: function (now, mx) {
        scale = 0.8 + (1 - now) * 0.2;
        left = (1 - now) * 50 + "%";
        opacity = 1 - now;
        current_fs.css({ left: left });
        previous_fs.css({
          transform: "scale(" + scale + ")",
          opacity: opacity,
        });
      },
      duration: 800,
      complete: function () {
        current_fs.hide();
        animating = false;
      },
      easing: "easeInOutBack",
    }
  );
});
