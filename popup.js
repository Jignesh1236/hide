var button = document.getElementById("hide");

chrome.storage.local.get(["mode"], function (data) {

  if (data.mode == "hide") {
    button.innerText = "Show";
  } else {
    button.innerText = "Hide";
  }

});

button.onclick = function () {

  if (button.innerText == "Hide") {

    chrome.storage.local.set({
      mode: "hide"
    });

    button.innerText = "Show";

  } else {

    chrome.storage.local.set({
      mode: "show"
    });

    button.innerText = "Hide";

  }

};
