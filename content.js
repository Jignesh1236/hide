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


  if (document.getElementById("ext-drawer")) {
    return;
  }


  const drawer = document.createElement("div");

  drawer.innerHTML = `
  <div id="ext-drawer"
  style="
  position:fixed;
  top:0;
  right:-320px;
  width:320px;
  min-width:220px;
  max-width:90vw;
  height:100vh;
  background:#18181b;
  z-index:999999;
  transition:right 0.3s;
  box-shadow:-2px 0 10px rgba(0,0,0,.3);
  overflow:visible;
  ">

    <button id="ext-toggle"
    style="
    position:absolute;
    right:100%;
    top:50%;
    transform:translateY(-50%);
    height:80px;
    border:none;
    background:#18181b;
    color:white;
    cursor:pointer;
    border-radius:9px 0 0 9px;
    font-size:15px;
    padding:0 5px;
    white-space:nowrap;
    writing-mode:vertical-lr;
    ">
    Editor
    </button>

    <div id="ext-resizer"
    style="
    position:absolute;
    left:0;
    top:0;
    width:6px;
    height:100%;
    cursor:ew-resize;
    background:transparent;
    z-index:9999999;
    ">
    </div>

    <div style="padding:5px;color:white;height:100%;">
      <iframe
        src="https://html-viewer-lovat.vercel.app/"
        width="100%"
        height="100%"
        style="border:none;"
      ></iframe>
    </div>

  </div>
  `;

  document.body.appendChild(drawer);


  const panel = document.getElementById("ext-drawer");
  const toggle = document.getElementById("ext-toggle");
  const resizer = document.getElementById("ext-resizer");
  const iframe = panel.querySelector("iframe");


  panel.style.right = `-${panel.offsetWidth}px`;


  let open = false;


  toggle.onclick = function () {

    open = !open;

    if (open) {

      panel.style.right = "0px";
      toggle.innerHTML = "▶";

    } else {

      panel.style.right = `-${panel.offsetWidth}px`;
      toggle.innerHTML = "Editor";

    }

  };


  let isResizing = false;


  resizer.onmousedown = function () {

    isResizing = true;

    document.body.style.userSelect = "none";

    if (iframe) {
      iframe.style.pointerEvents = "none";
    }

  };


  document.addEventListener("mousemove", function (e) {

    if (!isResizing) {
      return;
    }

    const newWidth = window.innerWidth - e.clientX;

    if (newWidth >= 220 && newWidth <= window.innerWidth * 0.9) {
      panel.style.width = newWidth + "px";
    }

  });


  document.addEventListener("mouseup", function () {

    isResizing = false;

    document.body.style.userSelect = "";

    if (iframe) {
      iframe.style.pointerEvents = "auto";
    }

  });

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