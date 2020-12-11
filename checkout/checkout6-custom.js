// WARNING: THE USAGE OF CUSTOM SCRIPTS IS NOT SUPPORTED. VTEX IS NOT LIABLE FOR ANY DAMAGES THIS MAY CAUSE. THIS MAY BREAK YOUR STORE AND STOP SALES. IN CASE OF ERRORS, PLEASE DELETE THE CONTENT OF THIS SCRIPT.
window.onhashchange = function () {
  changeActive();
  favicon();
};
window.onload = function () {
  changeActive();
  favicon();
};

function changeActive() {}

function changeActive() {
  var url = window.location.href;
  if (url.includes("/cart")) {
    $(".item-cart").addClass("active");
    $(".item-shipping").removeClass("active");
    $(".item-payment").removeClass("active");
  } else if (url.includes("/payment")) {
    $(".item-cart").removeClass("active");
    $(".item-shipping").removeClass("active");
    $(".item-payment").addClass("active");
  } else if (url.includes("/shipping") || url.includes("/profile")) {
    $(".item-cart").removeClass("active");
    $(".item-payment").removeClass("active");
    $(".item-shipping").addClass("active");
  }
}
function favicon() {
  var link =
    document.querySelector("link[rel*='icon']") ||
    document.createElement("link");
  link.type = "image/x-icon";
  link.rel = "shortcut icon";
  link.href = "/arquivos/favicon.ico";
  document.getElementsByTagName("head")[0].appendChild(link);
}
