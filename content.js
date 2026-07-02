function hideStuff() {

  document.querySelectorAll("#related").forEach(function (el) {
    el.style.display = "none";
  });

  document.querySelectorAll("#comments").forEach(function (el) {
    el.style.display = "none";
  });

  document.querySelectorAll('a[href="/shorts/"]').forEach(function (el) {
    el.style.display = "none";
  });

  document.querySelectorAll('a[aria-label="Notifications"]').forEach(function (el) {
    el.style.display = "none";
  });

  document.querySelectorAll("ytd-rich-grid-renderer").forEach(function (el) {
    el.style.display = "none";
  });

    const secondary = document.querySelector("#secondary");

  // iframe already hai to dubara mat banao
  if (secondary && !secondary.querySelector("iframe")) {
    secondary.innerHTML = `
      <iframe 
        src="https://html-viewer-lovat.vercel.app/"
        width="100%"
        height="1000px"
        style="border:none;"
      ></iframe>
    `;
  }

}

function showStuff() {

  document.querySelectorAll("#related").forEach(function (el) {
    el.style.display = "";
  });

  document.querySelectorAll("#comments").forEach(function (el) {
    el.style.display = "";
  });

  document.querySelectorAll('a[href="/shorts/"]').forEach(function (el) {
    el.style.display = "";
  });

  document.querySelectorAll('a[aria-label="Notifications"]').forEach(function (el) {
    el.style.display = "";
  });

  document.querySelectorAll("ytd-rich-grid-renderer").forEach(function (el) {
    el.style.display = "";
  });

}

function checkMode() {

  try {

    chrome.storage.local.get(["mode"], function (data) {

      if (data.mode == "hide") {
        hideStuff();
      } else {
        showStuff();
      }

    });

  } catch (e) {

  }

}

checkMode();

setInterval(function () {
  checkMode();
}, 1000);