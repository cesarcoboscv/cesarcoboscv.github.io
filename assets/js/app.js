let topZIndex = 20;

// ================= RELOJ EN TIEMPO REAL =================
function updateClock() {
  const clockEl = document.getElementById('liveClock');
  if (clockEl) {
    const now = new Date();
    clockEl.innerText = now.toTimeString().split(' ')[0];
  }
}
setInterval(updateClock, 1000);
updateClock();

// ================= GESTOR DE VENTANAS Y TASKBAR =================
function openWindow(winId) {
  const win = document.getElementById(winId);
  if (!win) return;
  
  win.classList.remove('hidden');
  bringToFront(win);
  updateTaskbar();
}

function closeWindow(winId) {
  const win = document.getElementById(winId);
  if (!win) return;
  win.classList.add('hidden');
  updateTaskbar();
}

function bringToFront(winElement) {
  topZIndex++;
  winElement.style.zIndex = topZIndex;
}

function updateTaskbar() {
  const taskbar = document.getElementById('taskbarItems');
  if (!taskbar) return;
  taskbar.innerHTML = '';

  const windows = [
    { id: 'win-browser', label: 'proyectos.app' },
    { id: 'win-blog-browser', label: 'blog.reader' },
    { id: 'win-perfil', label: 'perfil.sh' },
    { id: 'win-contacto', label: 'contacto.json' },
    { id: 'win-skills', label:'skills.config'}
  ];

  windows.forEach(w => {
    const el = document.getElementById(w.id);
    if (el && !el.classList.contains('hidden')) {
      const btn = document.createElement('button');
      btn.className = "px-2.5 py-1 rounded bg-terminal border border-borderc text-textc text-xs hover:border-borderDark flex items-center gap-1.5 shadow-sm";
      btn.innerHTML = `<span class="w-1.5 h-1.5 rounded-full bg-emerald-500"></span> ${w.label}`;
      btn.onclick = () => bringToFront(el);
      taskbar.appendChild(btn);
    }
  });
}

// ================= DRAG AND DROP HANDLERS =================
function setupDragAndDrop() {
  document.querySelectorAll('.window').forEach(win => {
    const header = win.querySelector('.window-header');
    if (!header) return;

    let isDragging = false;
    let startX, startY, initialLeft, initialTop;

    win.addEventListener('mousedown', () => bringToFront(win));

    header.addEventListener('mousedown', (e) => {
      if (e.target.tagName === 'BUTTON') return;
      isDragging = true;
      startX = e.clientX;
      startY = e.clientY;
      initialLeft = win.offsetLeft;
      initialTop = win.offsetTop;
      bringToFront(win);

      function onMouseMove(e) {
        if (!isDragging) return;
        const dx = e.clientX - startX;
        const dy = e.clientY - startY;
        win.style.left = `${Math.max(10, initialLeft + dx)}px`;
        win.style.top = `${Math.max(10, initialTop + dy)}px`;
      }

      function onMouseUp() {
        isDragging = false;
        window.removeEventListener('mousemove', onMouseMove);
        window.removeEventListener('mouseup', onMouseUp);
      }

      window.addEventListener('mousemove', onMouseMove);
      window.addEventListener('mouseup', onMouseUp);
    });
  });
}
// Lógica Drag and Drop 
document.querySelectorAll('.window').forEach(win => {
  const header = win.querySelector('.window-header');
  let isDragging = false;
  let startX, startY, initialLeft, initialTop;

  win.addEventListener('mousedown', () => bringToFront(win));
  win.addEventListener('touchstart', () => bringToFront(win), { passive: true });

  function startDrag(clientX, clientY) {
    isDragging = true;
    startX = clientX;
    startY = clientY;
    initialLeft = win.offsetLeft;
    initialTop = win.offsetTop;
    bringToFront(win);
  }

  function onMove(clientX, clientY) {
    if (!isDragging) return;
    const dx = clientX - startX;
    const dy = clientY - startY;
    win.style.left = `${Math.max(10, initialLeft + dx)}px`;
    win.style.top = `${Math.max(10, initialTop + dy)}px`;
  }

  function endDrag() {
    isDragging = false;
  }


  // --- Eventos Táctiles (Tablets / Celulares) ---
  header.addEventListener('touchstart', (e) => {
    if (e.target.tagName === 'BUTTON') return;
    const touch = e.touches[0];
    startDrag(touch.clientX, touch.clientY);

    function touchMoveHandler(e) {
      const touchMove = e.touches[0];
      onMove(touchMove.clientX, touchMove.clientY);
    }
    function touchEndHandler() {
      endDrag();
      window.removeEventListener('touchmove', touchMoveHandler);
      window.removeEventListener('touchend', touchEndHandler);
    }

    window.addEventListener('touchmove', touchMoveHandler, { passive: false });
    window.addEventListener('touchend', touchEndHandler);
  }, { passive: false });
});

// ================= INICIALIZACIÓN =================
window.addEventListener('DOMContentLoaded', () => {
  setupDragAndDrop();
  openWindow('win-perfil');
});
const form = document.getElementById("contactForm");
    
    async function handleSubmit(event) {
      event.preventDefault();
      const status = document.getElementById("formStatus");
      const btn = document.getElementById("submitBtn");
      
      btn.innerText = "Enviando...";
      btn.disabled = true;

      const data = new FormData(event.target);
      
      fetch(event.target.action, {
        method: form.method,
        body: data,
        headers: {
            'Accept': 'application/json'
        }
      }).then(response => {
        if (response.ok) {
          status.innerHTML = "¡Mensaje enviado con éxito! Te responderé pronto.";
          status.className = "text-xs text-center font-medium mt-2 text-emerald-600 block";
          form.reset();
        } else {
          response.json().then(data => {
            if (Object.hasOwn(data, 'errors')) {
              status.innerHTML = data["errors"].map(error => error["message"]).join(", ");
            } else {
              status.innerHTML = "Oops! Ocurrió un error al enviar el mensaje.";
            }
            status.className = "text-xs text-center font-medium mt-2 text-red-600 block";
          })
        }
        btn.innerText = "Enviar Mensaje";
        btn.disabled = false;
      }).catch(error => {
        status.innerHTML = "Oops! Error de conexión con el servidor.";
        status.className = "text-xs text-center font-medium mt-2 text-red-600 block";
        btn.innerText = "Enviar Mensaje";
        btn.disabled = false;
      });
    }
    
    form.addEventListener("submit", handleSubmit);

document.addEventListener("contextmenu", evt => evt.preventDefault(), false);
document.addEventListener("copy", evt => {
  evt.clipboardData.setData("text/plain", "No está permitido copiar el contenido");
  evt.preventDefault();
}, false);