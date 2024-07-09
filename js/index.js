// sideBar 

$(".menu-icon").click((e) => {
  e.preventDefault();
  console.log($("nav").outerWidth());
  if ($("nav").css("left") == "-180px") {
    $("nav").animate({ left: "0px" }, 1000);
    $(".menu-icon").animate({ left: "200px" }, 1000);
  } else {
    $("nav").animate({ left: `-${$("nav").outerWidth()}px` }, 1000);
    $(".menu-icon").animate({ left: "2px" }, 1000);
  }
});

$(".fa-xmark").click((e) => {
  e.preventDefault();
  $("nav").animate({ left: `-${$("nav").outerWidth()}px` }, 1000);
  $(".menu-icon").animate({ left: "2px" }, 1000);
});



let singersTitle = $(".singer h3");

$(".singer h3").click(function () {
  console.log($(this).next());
  $(this).next().slideToggle(500);
  $(".singer p").not($(this).next()).slideUp(500);
});

// countDown 

function countDown() {
  let openningDate = new Date("Jan 1 , 2025 00:00:00").getTime();
  console.log(openningDate);
  let currentData = new Date().getTime();
  let difference = openningDate - currentData;
  let day = Math.floor(difference / (1000 * 60 * 60 * 24));
  let hours = Math.floor(
    (difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
  );
  let minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
  let seconds = Math.floor((difference % (1000 * 60)) / 1000);
  document.querySelector(".day").innerHTML = day + "d";
  document.querySelector(".hour").innerHTML = hours + "h";
  document.querySelector(".minute").innerHTML = minutes + "m";
  document.querySelector(".second").innerHTML = seconds + "s";
}

setInterval(countDown, 1000);

$("textarea").keyup(function () {
  let myLength = $(this).val().length;
  let remaining = 100 - myLength;
  $(".num").text(remaining);
  if (remaining === 0) {
    $("h5").html(
      '<span class="text-danger text-small">your available character finished</span>'
    );
  } else {
    $("h5").html(`<span class="num">${remaining}</span> Character Reamining`);
  }
});
