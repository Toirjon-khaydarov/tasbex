function formatVaqt(minutlar, soniyalar) {
  return `${String(minutlar).padStart(2, "0")}:${String(soniyalar).padStart(
    2,
    "0"
  )}`;
}

let taymerInterval;
let taymerVaqt;
function taymernStart() {
  const vaqtKiritish = document.getElementById("vaqtKiritish");
  taymerVaqt = parseInt(vaqtKiritish.value) * 60;
  const taymerDispley = document.getElementById("taymerDispley");

  if (isNaN(taymerVaqt) || taymerVaqt <= 0) return;

  taymerInterval = setInterval(() => {
    const minutlar = Math.floor(taymerVaqt / 60);
    const soniyalar = taymerVaqt % 60;
    taymerDispley.textContent = formatVaqt(minutlar, soniyalar);
    taymerVaqt--;

    if (taymerVaqt < 0) {
      clearInterval(taymerInterval);
      taymerDispley.textContent = "00:00";
    }
  }, 1000);
}

function stopTimer() {
  clearInterval(taymerInterval);
}

function restartTimer() {
  clearInterval(taymerInterval);
  document.getElementById("taymerDispley").textContent = "00:00";
}

let sekundomerInterval;
let sekundomerVaqt = 0;
function sekundomerStart() {
  const sekundomerDispley = document.getElementById("sekundomerDispley");

  clearInterval(sekundomerInterval);

  sekundomerInterval = setInterval(() => {
    const minutlar = Math.floor(sekundomerVaqt / 60);
    const soniyalar = sekundomerVaqt % 60;
    sekundomerDispley.textContent = formatVaqt(minutlar, soniyalar);
    sekundomerVaqt++;
  }, 1000);
}

function stopSekundomer() {
  clearInterval(sekundomerInterval);
}
