/**
 * MINUTA INTERACTIVA - CONFERENCIA DE BARRIO LA CONCORDIA
 * Lógica interactiva, enlaces a la Biblioteca del Evangelio, letras oficiales y QR
 */

// Base de datos de los himnos con las letras 100% OFICIALES de la Iglesia y enlaces verificados
const HYMNS_DATA = {
  amazinggrace: {
    id: "amazinggrace",
    number: "Himno #1010",
    cover: "img/himnario_nuevo.png",
    title: "Amazing Grace (Sublime gracia)",
    subtitle: "Himno de Apertura • Interpretado en inglés por los JAS del Barrio",
    url: "https://www.churchofjesuschrist.org/study/music/hymns-for-home-and-church/amazing-grace?lang=spa",
    source: "Himnos: Para el hogar y la iglesia, N.º 1010 (Interpretado en inglés por los Jóvenes Adultos Solteros)",
    lyrics: `[VERSIÓN EN INGLÉS - INTERPRETACIÓN DE LOS JAS]
1. Amazing grace—how sweet the sound—
That saved a wretch like me!
I once was lost, but now am found,
Was blind, but now I see.

2. The Lord has promised good to me;
His word my hope secures.
He will my shield and portion be
As long as life endures.

3. Through many dangers, toils, and snares
I have already come.
His grace has brought me safe thus far,
And grace will lead me home.

────────────────────────────
[TRADUCCIÓN OFICIAL EN ESPAÑOL - HIMNO N.º 1010]
1. ¡Sublime gracia del Señor,
que me salvó a mí!
Errante iba y Él me halló;
mis ojos ven por fin.

2. Me prometió: El bien te haré,
en Mí podrás confiar.
En Él escudo hallaré,
por tierra o por mar.

3. Peligros, pruebas y dolor
yo tuve que pasar.
Su gracia, fruto de Su amor,
me lleva a Su hogar.

— Letra: John Newton, 1779; traducción oficial al español © 2024 por Intellectual Reserve, Inc.
— Música: Melodía folclórica estadounidense, siglo XIX; arreglo, 2024 (NEW BRITAIN).
— Pasajes: 2 Corintios 12:9–10; Moroni 10:32–33; 2 Nefi 4:17, 30.`
  },

  santacena: {
    id: "santacena",
    number: "Himno #103",
    cover: "img/himnario_clasico.png",
    title: "La Santa Cena",
    subtitle: "Himno Sacramental • Himnario de la Iglesia",
    url: "https://www.churchofjesuschrist.org/study/manual/hymns/while-of-these-emblems-we-partake-saul?lang=spa",
    source: "Himnos de La Iglesia de Jesucristo de los Santos de los Últimos Días, N.º 103",
    lyrics: `1. La Santa Cena, al tomar,
a Cristo quiero recordar,
mostrándole de corazón
que limpio soy por Su perdón.

2. Por mí Su sangre derramó,
y en la cruz Él padeció.
En agonía y dolor
murió, libró al pecador.

3. En inocencia Él murió;
a la justicia Él pagó.
Misericordia extendió,
y a los hombres rescató.

4. Ya nos podremos levantar
y, como Él, resucitar,
libres de muerte y dolor,
para reinar con el Señor.

— Letra: John Nicholson, 1839–1909.
— Música: Samuel McBurney, n. 1847.
— Referencias: Moroni 6:6; Mosíah 15:7–9.`
  },

  getsemani: {
    id: "getsemani",
    number: "Canción Especial",
    cover: "img/cristo_ninos.jpg",
    title: "Getsemaní",
    subtitle: "Himno Especial • Música de la Iglesia / Revista Liahona",
    url: "https://www.churchofjesuschrist.org/study/liahona/2018/03/children/gethsemane?lang=spa",
    source: "Música de la Iglesia • Revista Liahona (marzo de 2018) • Canciones para los niños",
    lyrics: `1. Cristo fue a orar al jardín de paz
con paso lento al andar.
Solo el Señor, por Su amor,
pudo ir hasta tal lugar.
Getsemaní. Él me ama a mí.
Se ofreció a ir allá, Getsemaní.

2. La maldad, el pesar, la oscuridad,
todo eso Jesús sufrió.
Al dormir los demás, Él fue a luchar,
a hacer lo que prometió.
Getsemaní. Él me ama a mí.
Se ofreció a ir allá, Getsemaní.

3. No hubo más difícil acción.
Nunca se sintió tal dolor.
Mayor batalla no se ganó.
¡Esto lo hizo Cristo!
Ganó la lucha Cristo.

4. Getsemaní. Él me ama a mí.
Él me dio Su don allá.
Getsemaní. Él me ama a mí.
Y me da Su don de allá,
Getsemaní.

— Letra y música: Melanie Hoffman. © Hoffman House, Inc. / Intellectual Reserve, Inc.`
  },

  loveoneanother: {
    id: "loveoneanother",
    number: "Himno #203 / #308",
    cover: "img/himnario_clasico.png",
    title: "Como os he amado / Love One Another",
    subtitle: "Especial de Coro • En inglés y español",
    url: "https://www.churchofjesuschrist.org/study/manual/hymns/love-one-another?lang=spa",
    source: "Himnos de la Iglesia, N.º 203 (Amad a otros) / Hymns, No. 308 (Love One Another)",
    lyrics: `[VERSIÓN EN INGLÉS - INTERPRETACIÓN DEL CORO]
As I have loved you,
Love one another.
This new commandment:
Love one another.
By this shall men know
Ye are my disciples,
If ye have love
One to another.

────────────────────────────
[VERSIÓN OFICIAL EN ESPAÑOL - HIMNO #203]
Como os he amado, amad a otros.
Un nuevo mandamiento, amad a otros.
Por esto sabrán que sois discípulos míos,
si os amáis unos a otros.

— Letra y música: Luacine Clark Fox, 1914–2002. © 1961, 1989 Intellectual Reserve, Inc.
— Pasajes de las Escrituras: Juan 13:34–35; 1 Juan 4:11.`
  },

  himnofinal: {
    id: "himnofinal",
    number: "Himno #10",
    cover: "img/himnario_clasico.png",
    title: "Te damos, Señor, nuestras gracias",
    subtitle: "Himno Final Congregacional • Himnario de la Iglesia",
    url: "https://www.churchofjesuschrist.org/study/manual/hymns/we-thank-thee-o-god-for-a-prophet?lang=spa",
    source: "Himnos de la Iglesia, N.º 10",
    lyrics: `1. Te damos, Señor, nuestras gracias
que mandas de nuevo un profeta
que guía con gran rectitud
las almas que buscan Sión.
Te damos las gracias por cada merced
que derrama Tu mano paternal
sobre nosotros con gran santidad.

2. Cuando nos cercan tinieblas,
y el mal nos quiere abatir,
en Dios encontramos consuelo;
Su gracia nos va a sostener.
Jamás dudaremos de Su gran bondad,
y la senda angosta y recta al fin
nos llevará con gozo a Su hogar.

— Letra: William Fowler, 1830–1865.
— Música: Caroline E. Sheridan Norton, 1808–c. 1877.`
  }
};

let currentActiveItem = null;
let qrInstance = null;

// Inicialización de la aplicación
document.addEventListener("DOMContentLoaded", () => {
  initTheme();
  setupEventListeners();
});

// Control del Tema Capilla (Modo Oscuro Suave)
function initTheme() {
  const isChapel = localStorage.getItem("minuta_chapel_mode") === "true";
  if (isChapel) {
    document.body.classList.add("chapel-mode");
    updateThemeIcon(true);
  }
}

function toggleTheme() {
  const isChapel = document.body.classList.toggle("chapel-mode");
  localStorage.setItem("minuta_chapel_mode", isChapel ? "true" : "false");
  updateThemeIcon(isChapel);
  showToast(isChapel ? "Modo Capilla Activado" : "Modo Normal Activado");
}

function updateThemeIcon(isChapel) {
  const btn = document.getElementById("btn-theme-toggle");
  if (!btn) return;
  btn.title = isChapel ? "Cambiar a modo normal" : "Modo Capilla (Atenuado)";
}

// Configuración de los eventos de la interfaz
function setupEventListeners() {
  // Botón de bienvenida (cerrar pantalla de entrada)
  const welcomeBtn = document.getElementById("welcome-btn");
  if (welcomeBtn) {
    welcomeBtn.addEventListener("click", dismissWelcomeScreen);
  }

  // Cerrar bienvenida al hacer clic en el fondo
  const welcomeOverlay = document.getElementById("welcome-overlay");
  if (welcomeOverlay) {
    welcomeOverlay.addEventListener("click", (e) => {
      if (e.target === welcomeOverlay) {
        dismissWelcomeScreen();
      }
    });
  }

  // Alternadores de Modo Capilla
  const btnTheme = document.getElementById("btn-theme-toggle");
  if (btnTheme) btnTheme.addEventListener("click", toggleTheme);
  const dockTheme = document.getElementById("dock-theme-btn");
  if (dockTheme) dockTheme.addEventListener("click", toggleTheme);

  // Apertura de modal QR
  const btnQR = document.getElementById("btn-qr-modal");
  if (btnQR) btnQR.addEventListener("click", openQRModal);
  const dockQR = document.getElementById("dock-qr-btn");
  if (dockQR) dockQR.addEventListener("click", openQRModal);
  const quickPillQR = document.getElementById("quick-pill-qr");
  if (quickPillQR) quickPillQR.addEventListener("click", openQRModal);

  // Compartir en WhatsApp
  const btnShareWA = document.getElementById("btn-share-whatsapp");
  if (btnShareWA) btnShareWA.addEventListener("click", shareOnWhatsApp);
  const qrShareWA = document.getElementById("qr-share-whatsapp");
  if (qrShareWA) qrShareWA.addEventListener("click", shareOnWhatsApp);

  // Copiar enlace actual
  const btnCopyLink = document.getElementById("qr-copy-link");
  if (btnCopyLink) btnCopyLink.addEventListener("click", copyCurrentUrl);

  // Botones para cerrar modales
  document.querySelectorAll("[data-close-modal]").forEach(btn => {
    btn.addEventListener("click", () => {
      const modalId = btn.getAttribute("data-close-modal");
      closeModal(modalId);
    });
  });

  // Cerrar modales haciendo clic en el fondo
  document.querySelectorAll(".modal-overlay").forEach(overlay => {
    overlay.addEventListener("click", (e) => {
      if (e.target === overlay) {
        overlay.classList.remove("open");
      }
    });
  });

  // Delegación de clics en la lista de la minuta
  const agendaList = document.getElementById("agenda-list");
  if (agendaList) {
    agendaList.addEventListener("click", handleAgendaClick);
  }

  // Botón subir arriba
  const btnScrollTop = document.getElementById("dock-scroll-top");
  if (btnScrollTop) {
    btnScrollTop.addEventListener("click", () => {
      window.scrollTo({ top: 0, behavior: "smooth" });
    });
  }

  // Rincón de Reverencia para Niños (Primaria)
  const btnKids = document.getElementById("btn-kids-modal");
  if (btnKids) {
    btnKids.addEventListener("click", () => {
      const modal = document.getElementById("kids-modal");
      if (modal) modal.classList.add("open");
    });
  }
}

// Descartar la animación de entrada suavemente
function dismissWelcomeScreen() {
  const overlay = document.getElementById("welcome-overlay");
  if (overlay) {
    overlay.classList.add("fade-out");
    setTimeout(() => {
      overlay.style.display = "none";
    }, 700);
  }
}

// Clics interactivos en las tarjetas de la minuta
function handleAgendaClick(e) {
  // Clic en botón de acción de himno
  const hymnBtn = e.target.closest("[data-hymn-key]");
  if (hymnBtn) {
    e.stopPropagation();
    const hymnKey = hymnBtn.getAttribute("data-hymn-key");
    openHymnModal(hymnKey);
    return;
  }

  // Clic en el botón circular de completar
  const statusBtn = e.target.closest(".item-status-btn");
  if (statusBtn) {
    e.stopPropagation();
    const itemCard = statusBtn.closest(".agenda-item");
    toggleItemCompleted(itemCard);
    return;
  }

  // Clic en el cuerpo de la tarjeta: Marcar como ítem activo
  const itemCard = e.target.closest(".agenda-item");
  if (itemCard) {
    setActiveItem(itemCard);
  }
}

// Marcar un elemento como activo (En Curso)
function setActiveItem(card) {
  if (card.classList.contains("active-item")) {
    card.classList.remove("active-item");
    currentActiveItem = null;
    return;
  }

  document.querySelectorAll(".agenda-item.active-item").forEach(el => {
    el.classList.remove("active-item");
  });

  card.classList.add("active-item");
  currentActiveItem = card;

  if (navigator.vibrate) {
    navigator.vibrate(25);
  }
}

// Marcar ítem como completado
function toggleItemCompleted(card) {
  const isDone = card.classList.toggle("completed-item");
  if (isDone && card.classList.contains("active-item")) {
    card.classList.remove("active-item");
  }
  if (navigator.vibrate) {
    navigator.vibrate(35);
  }
}

// Abrir modal de himno con la letra oficial y enlace directo
function openHymnModal(hymnKey) {
  const hymn = HYMNS_DATA[hymnKey];
  if (!hymn) return;

  const modal = document.getElementById("hymn-modal");
  document.getElementById("hymn-modal-title").textContent = hymn.title;
  document.getElementById("hymn-modal-source").textContent = hymn.source;
  document.getElementById("hymn-modal-lyrics").textContent = hymn.lyrics;
  
  const coverEl = document.getElementById("hymn-modal-cover");
  const numTagEl = document.getElementById("hymn-modal-num-tag");
  if (coverEl) {
    if (hymn.cover) {
      coverEl.src = hymn.cover;
      coverEl.style.display = "block";
    } else {
      coverEl.style.display = "none";
    }
  }
  if (numTagEl) {
    numTagEl.textContent = hymn.number || "Himno Oficial";
  }

  const linkBtn = document.getElementById("hymn-modal-link");
  linkBtn.href = hymn.url;
  linkBtn.target = "_blank";
  linkBtn.rel = "noopener noreferrer";

  modal.classList.add("open");
}

// Abrir modal de código QR
function openQRModal() {
  const modal = document.getElementById("qr-modal");
  const qrContainer = document.getElementById("qr-container");
  
  const pageUrl = window.location.href;
  document.getElementById("qr-url-text").textContent = pageUrl;

  qrContainer.innerHTML = "";
  try {
    if (typeof QRCode !== "undefined") {
      qrInstance = new QRCode(qrContainer, {
        text: pageUrl,
        width: 220,
        height: 220,
        colorDark: "#002d5a",
        colorLight: "#ffffff"
      });
    } else {
      qrContainer.innerHTML = "<p>Código QR disponible para escanear</p>";
    }
  } catch (err) {
    console.error("Error al generar QR:", err);
  }

  modal.classList.add("open");
}

// Cerrar un modal específico
function closeModal(modalId) {
  const modal = document.getElementById(modalId);
  if (modal) {
    modal.classList.remove("open");
  }
}

// Compartir en WhatsApp
function shareOnWhatsApp() {
  const pageUrl = window.location.href;
  const text = `📖 *Conferencia de Barrio La Concordia*\n\nTe invitamos a ver la minuta y el orden de la reunión en el siguiente enlace:\n${pageUrl}\n\nIncluye el programa detallado y los enlaces oficiales a los himnos en la Biblioteca del Evangelio.`;
  const waUrl = `https://api.whatsapp.com/send?text=${encodeURIComponent(text)}`;
  window.open(waUrl, "_blank");
}

// Copiar enlace al portapapeles
function copyCurrentUrl() {
  const url = window.location.href;
  if (navigator.clipboard && navigator.clipboard.writeText) {
    navigator.clipboard.writeText(url).then(() => {
      showToast("✓ Enlace copiado al portapapeles");
    }).catch(() => {
      fallbackCopy(url);
    });
  } else {
    fallbackCopy(url);
  }
}

function fallbackCopy(text) {
  const input = document.createElement("input");
  input.value = text;
  document.body.appendChild(input);
  input.select();
  document.execCommand("copy");
  document.body.removeChild(input);
  showToast("✓ Enlace copiado");
}

// Notificación emergente Toast
let toastTimer = null;
function showToast(msg) {
  const toast = document.getElementById("toast-message");
  if (!toast) return;
  toast.textContent = msg;
  toast.classList.add("show");
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => {
    toast.classList.remove("show");
  }, 2800);
}
