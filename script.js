/**
 * This function close the menu automatically
 */

function automatic_closeMenu() {
  let x = window.matchMedia("(max-width: 1000px)");

  setInterval(function () {
    if (!x.matches) {
      closeMenu();
    }
  }, 50);
}

/**
 * This function show the menu
 */

function showMenu() {
  document.getElementById("overlay-menu").classList.add("show-overlay-menu");
  document.getElementById("overlay-menu").classList.remove("d-none");
  document.getElementById("burger-menu").classList.add("d-none-important");
  document.getElementById("close-btn").classList.remove("d-none");
}

/**
 * This function close the menu
 */

function closeMenu() {
  document.getElementById("overlay-menu").classList.remove("show-overlay-menu");
  document.getElementById("overlay-menu").classList.add("d-none");
  document.getElementById("burger-menu").classList.remove("d-none-important");
  document.getElementById("close-btn").classList.add("d-none");
}

/**
 * This function get the parameter to open the popup menu
 */

function getParameter() {
  let message;
  try {
    var url_string = window.location.href.toLowerCase();
    var url = new URL(url_string);

    message = url.searchParams.get("message");

    if (message == "email_send") {
      openPopup();
    }
  } catch (err) {
    console.log("Issues with Parsing URL Parameter's - " + err);
  }
}

/**
 * This function open the popup menu
 */

function openPopup() {
  document.getElementById("popup-1").classList.toggle("active");
}

/**
 * This function close the popup menu
 */

function closePopup() {
  document.getElementById("popup-1").classList.remove("active");
}
