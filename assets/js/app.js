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

// // ================= METADATOS Y PESTAÑAS: PROYECTOS =================
// const projectMetadata = {
//   'p1': { title: 'ENG-01: HVAC Proceso', url: 'https://portfolio.local/proyectos/hvac-proceso' },
//   'p2': { title: 'ENG-02: Mezzanine LRFD', url: 'https://portfolio.local/proyectos/mezzanine-industrial' },
//   'p3': { title: 'DEV-01: coboscv.com', url: 'https://portfolio.local/proyectos/coboscv-web' },
//   'p4': { title: 'DEV-02: Python CLI', url: 'https://portfolio.local/proyectos/python-cli-engine' },
//   'p5': { title: 'ENG-03: Plant Layout', url: 'https://portfolio.local/proyectos/plant-layout-cad' },
//   'p6': { title: 'DEV-03: AutoLISP Tool', url: 'https://portfolio.local/proyectos/autolisp-batch-extractor' }
// };

// function openProjectTab(pId) {
//   openWindow('win-browser');
//   const tabId = `tab-${pId}`;
//   const meta = projectMetadata[pId];

//   if (!document.getElementById(`btn-${tabId}`)) {
//     const header = document.getElementById('browserTabsHeader');
//     const btn = document.createElement('div');
//     btn.id = `btn-${tabId}`;
//     btn.className = "browser-tab-btn px-3 py-1.5 rounded-t text-xs font-mono font-bold bg-slate-200 border-t border-x border-borderc text-slate-600 flex items-center gap-2 cursor-pointer shadow-sm";
//     btn.innerHTML = `
//       <span onclick="switchBrowserTab('${tabId}')">${meta.title}</span>
//       <button onclick="closeBrowserTab('${pId}', event)" class="hover:text-accentc font-bold ml-1 text-slate-400">✕</button>
//     `;
//     header.appendChild(btn);
//   }

//   switchBrowserTab(tabId);
// }

// function switchBrowserTab(tabId) {
//   document.querySelectorAll('#win-browser .browser-tab-view').forEach(el => el.classList.add('hidden'));
//   const target = document.getElementById(tabId);
//   if (target) target.classList.remove('hidden');

//   document.querySelectorAll('#win-browser .browser-tab-btn').forEach(btn => {
//     btn.classList.remove('bg-white', 'text-textc');
//     btn.classList.add('bg-slate-200', 'text-slate-600');
//   });

//   const activeBtn = document.getElementById(`btn-${tabId}`);
//   if (activeBtn) {
//     activeBtn.classList.remove('bg-slate-200', 'text-slate-600');
//     activeBtn.classList.add('bg-white', 'text-textc');
//   }

//   const urlText = document.getElementById('browserUrlText');
//   if (urlText) {
//     if (tabId === 'tab-home') {
//       urlText.innerText = 'https://portfolio.local/proyectos';
//     } else {
//       const pId = tabId.replace('tab-', '');
//       urlText.innerText = projectMetadata[pId]?.url || 'https://portfolio.local/proyectos';
//     }
//   }
// }

// function closeBrowserTab(pId, event) {
//   if (event) event.stopPropagation();
//   const tabId = `tab-${pId}`;
//   const btn = document.getElementById(`btn-${tabId}`);
//   if (btn) btn.remove();

//   const view = document.getElementById(tabId);
//   if (view) view.classList.add('hidden');

//   switchBrowserTab('tab-home');
// }

// function filterCatalog(category) {
//   document.querySelectorAll('.project-card').forEach(card => {
//     if (category === 'all' || card.getAttribute('data-category') === category) {
//       card.classList.remove('hidden');
//     } else {
//       card.classList.add('hidden');
//     }
//   });
// }

// // ================= METADATOS Y PESTAÑAS: BLOG =================
// const blogMetadata = {
//   'b1': { title: 'Ductería SMACNA', url: 'https://portfolio.local/blog/smacna-duct-sizing' },
//   'b2': { title: 'Placas Base AISC', url: 'https://portfolio.local/blog/aisc-base-plates' },
//   'b3': { title: 'Python Memorias', url: 'https://portfolio.local/blog/python-report-automation' },
//   'b4': { title: 'Capas CAD Planta', url: 'https://portfolio.local/blog/cad-automotive-standards' }
// };

// function openBlogTab(bId) {
//   openWindow('win-blog-browser');
//   const tabId = `blog-tab-${bId}`;
//   const meta = blogMetadata[bId];

//   if (!document.getElementById(`btn-${tabId}`)) {
//     const header = document.getElementById('blogTabsHeader');
//     const btn = document.createElement('div');
//     btn.id = `btn-${tabId}`;
//     btn.className = "blog-tab-btn px-3 py-1.5 rounded-t text-xs font-mono font-bold bg-slate-200 border-t border-x border-borderc text-slate-600 flex items-center gap-2 cursor-pointer shadow-sm";
//     btn.innerHTML = `
//       <span onclick="switchBlogTab('${tabId}')">${meta.title}</span>
//       <button onclick="closeBlogTab('${bId}', event)" class="hover:text-amber-700 font-bold ml-1 text-slate-400">✕</button>
//     `;
//     header.appendChild(btn);
//   }

//   switchBlogTab(tabId);
// }

// function switchBlogTab(tabId) {
//   document.querySelectorAll('#win-blog-browser .blog-tab-view').forEach(el => el.classList.add('hidden'));
//   const target = document.getElementById(tabId);
//   if (target) target.classList.remove('hidden');

//   document.querySelectorAll('#win-blog-browser .blog-tab-btn').forEach(btn => {
//     btn.classList.remove('bg-white', 'text-textc');
//     btn.classList.add('bg-slate-200', 'text-slate-600');
//   });

//   const activeBtn = document.getElementById(`btn-${tabId}`);
//   if (activeBtn) {
//     activeBtn.classList.remove('bg-slate-200', 'text-slate-600');
//     activeBtn.classList.add('bg-white', 'text-textc');
//   }

//   const urlText = document.getElementById('blogUrlText');
//   if (urlText) {
//     if (tabId === 'blog-tab-index') {
//       urlText.innerText = 'https://portfolio.local/blog';
//     } else {
//       const bId = tabId.replace('blog-tab-', '');
//       urlText.innerText = blogMetadata[bId]?.url || 'https://portfolio.local/blog';
//     }
//   }
// }

// function closeBlogTab(bId, event) {
//   if (event) event.stopPropagation();
//   const tabId = `blog-tab-${bId}`;
//   const btn = document.getElementById(`btn-${tabId}`);
//   if (btn) btn.remove();

//   const view = document.getElementById(tabId);
//   if (view) view.classList.add('hidden');

//   switchBlogTab('blog-tab-index');
// }

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
    { id: 'win-contacto', label: 'contacto.json' }
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

// ================= INICIALIZACIÓN =================
window.addEventListener('DOMContentLoaded', () => {
  setupDragAndDrop();
  openWindow('win-perfil');
});

// ================= CORREO =================

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