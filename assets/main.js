/* ══════════════════════════════════════════════════════════════
   ARCHIVO: assets/main.js
   MODULO: iris-landing · CATEGORIA: PRESENTACION
   Responsabilidad: selector de idioma ES/EN, animaciones de
     aparición al hacer scroll, contadores de cifras y acordeón FAQ.
   No hace: contenido de negocio (→ index.html) ni estilos (→ styles.css).
   ══════════════════════════════════════════════════════════════ */

(() => {
  "use strict";

  /* ═══ INICIO: diccionario i18n · ORQUESTACION ═══ */
  const I18N = {
    es: {
      "nav.beneficios": "Beneficios",
      "nav.ventajas": "Ventajas",
      "nav.industria": "Industria",
      "nav.capacidades": "Capacidades",
      "nav.faq": "FAQ",
      "nav.vision": "Visión",
      "hero.badge": "En construcción — el primer proyecto de GIJH",
      "hero.tag": "El sistema de inteligencia para restaurantes que convierte cada operación en decisiones rentables.",
      "hero.cta1": "Descubrir IRIS",
      "hero.cta2": "Conocer GIJH",
      "stats.1": "módulos en una sola plataforma",
      "stats.2": "de tu operación en un solo lugar",
      "stats.3": "operación y trazabilidad continua",
      "stats.4": "hojas de cálculo necesarias",
      "about.kicker": "¿Qué es IRIS?",
      "about.t": "Tu restaurante completo, en una sola mirada",
      "about.p": "IRIS es un sistema integral de gestión para restaurantes: reúne ventas, cocina, inventario, costos, personal y finanzas en una sola plataforma, diseñada para que dueños y operadores vean su negocio completo y actúen con precisión.",
      "ben.kicker": "Beneficios",
      "ben.t": "Lo que IRIS hace por tu negocio",
      "ben.1.t": "Costo real de cada plato",
      "ben.1.d": "Conoce cuánto cuesta realmente producir lo que vendes, desde la materia prima hasta el plato final, y protege tu margen en cada venta.",
      "ben.2.t": "Decisiones con datos",
      "ben.2.d": "Indicadores claros de ventas, costos y rentabilidad en tiempo real, sin depender de corazonadas ni cálculos manuales.",
      "ben.3.t": "Operación sin fricciones",
      "ben.3.d": "Ventas, cocina e inventario conectados: lo que ocurre en el salón se refleja al instante en toda la operación.",
      "ben.4.t": "Menos desperdicio",
      "ben.4.d": "Control de existencias, alertas de stock y trazabilidad de movimientos para reducir mermas y compras improvisadas.",
      "ben.5.t": "Visión financiera completa",
      "ben.5.d": "Desde la caja diaria hasta el estado de resultados: entiende la salud de tu negocio sin ser contador.",
      "ben.6.t": "Escala contigo",
      "ben.6.d": "Diseñado para crecer: de un bistró a una cadena, con la misma plataforma y la misma simplicidad.",
      "adv.kicker": "Ventajas competitivas",
      "adv.t": "Por qué IRIS es distinto",
      "adv.1.t": "Todo en un solo lugar",
      "adv.1.d": "Una plataforma en lugar de diez herramientas sueltas que no se hablan entre sí.",
      "adv.2.t": "Tus datos, bajo tu control",
      "adv.2.d": "IRIS opera sobre la infraestructura de tu propio negocio: tu información vive contigo, no en manos de terceros.",
      "adv.3.t": "Hecho para el ritmo del servicio",
      "adv.3.d": "Interfaces pensadas para la hora pico: rápidas, claras y sin curvas de aprendizaje eternas.",
      "adv.4.t": "Trazabilidad total",
      "adv.4.d": "Cada venta, movimiento y ajuste queda registrado; la transparencia interna deja de ser un esfuerzo.",
      "adv.5.t": "Cumplimiento más simple",
      "adv.5.d": "Facturación electrónica y reglas tributarias y laborales colombianas integradas en el flujo diario.",
      "adv.6.t": "Operación que no se detiene",
      "adv.6.d": "El restaurante continúa aunque falle internet: la operación sigue en local y la información queda íntegra.",
      "ind.kicker": "Aporte a la industria",
      "ind.t": "Una industria que merece mejores herramientas",
      "ind.intro": "La industria gastronómica mueve enormes volúmenes con márgenes delgados. IRIS nace para cerrar esa brecha: profesionalizar la gestión del restaurante sin necesidad de grandes presupuestos.",
      "ind.1.t": "Profesionalización de la gestión",
      "ind.1.d": "Prácticas de las grandes cadenas —costeo, indicadores, control de inventario— al alcance de restaurantes de cualquier tamaño.",
      "ind.2.t": "Democratización del análisis",
      "ind.2.d": "Datos que antes eran solo de los grandes, ahora interpretados para el operador de a pie.",
      "ind.3.t": "Menos desperdicio, más sostenibilidad",
      "ind.3.d": "Un sector que controla sus insumos desperdicia menos y gana rentabilidad de forma responsable.",
      "ind.4.t": "Cultura de decisiones informadas",
      "ind.4.d": "Cuando el dueño entiende sus números, todo mejora: precios, menú, compras y equipo.",
      "cap.kicker": "Capacidades",
      "cap.t": "Un solo sistema, todo el ciclo del negocio",
      "cap.1.t": "Ventas y salón",
      "cap.1.d": "Pedidos, mesas, pagos y cierres de caja en un flujo ágil, del salón al recibo.",
      "cap.2.t": "Cocina en tiempo real",
      "cap.2.d": "Una pantalla de cocina que prioriza, organiza y mantiene el servicio sincronizado.",
      "cap.3.t": "Inventario y costos",
      "cap.3.d": "Compras, bodegas, lotes y el costo exacto de cada receta, calculado en cascada.",
      "cap.4.t": "Equipo y nómina",
      "cap.4.d": "Turnos, recargos legales y costos laborales calculados conforme a la normatividad laboral colombiana.",
      "cap.5.t": "Finanzas claras",
      "cap.5.d": "Balance, resultados y proyecciones listos para leer, no para descifrar.",
      "cap.6.t": "Facturación y cumplimiento",
      "cap.6.d": "Facturación electrónica alineada con el marco tributario colombiano, integrada a la venta.",
      "faq.kicker": "Preguntas frecuentes",
      "faq.t": "Lo que todos preguntan",
      "faq.1.q": "¿Qué es IRIS?",
      "faq.1.a": "Un sistema integral de inteligencia y gestión para restaurantes que une ventas, cocina, inventario, personal y finanzas en una sola plataforma.",
      "faq.2.q": "¿Para quién está pensado?",
      "faq.2.a": "Para cualquier negocio gastronómico que quiera controlar costos y crecer con datos: cafés, bistrós, gastro bars, restaurantes y cadenas.",
      "faq.3.q": "¿Cuándo estará disponible?",
      "faq.3.a": "IRIS está en construcción activa por GIJH. Esta página se actualizará a medida que avance su desarrollo.",
      "faq.4.q": "¿Necesito internet para operar?",
      "faq.4.a": "No. IRIS está diseñado para que la operación del restaurante continúe incluso sin conexión.",
      "faq.5.q": "¿Qué lo hace diferente?",
      "faq.5.a": "Une en un solo sistema lo que normalmente está repartido en muchas herramientas, y traduce cada operación en información clara para decidir.",
      "faq.6.q": "¿Qué es GIJH?",
      "faq.6.a": "Greenhole Insightful Joint Holdings (GIJH) es la holding con sede en Estados Unidos que impulsa IRIS como su primer proyecto.",
      "vis.kicker": "Visión",
      "vis.t": "Hacia dónde va IRIS",
      "vis.1.p": "Hoy",
      "vis.1.t": "En construcción",
      "vis.1.d": "Desarrollo activo de la plataforma: ventas, cocina, inventario, costos y finanzas tomando forma.",
      "vis.2.p": "Próximamente",
      "vis.2.t": "Listo para el servicio",
      "vis.2.d": "Refinamiento, pruebas en operación real y preparación para los primeros restaurantes.",
      "vis.3.p": "El futuro",
      "vis.3.t": "Inteligencia que evoluciona",
      "vis.3.d": "Una plataforma que crece con la industria: proyecciones más inteligentes y nuevas formas de entender el negocio.",
      "close.pill": "Proyecto en construcción",
      "close.h": "IRIS es el primer proyecto de Greenhole Insightful Joint Holdings",
      "close.p": "Greenhole Insightful Joint Holdings (GIJH) es una holding con sede en Estados Unidos que construye soluciones donde la tecnología se encuentra con la industria real, con visión de largo plazo. IRIS es su primera apuesta: inteligencia para la industria gastronómica.",
      "footer.1": "© 2026 Greenhole Insightful Joint Holdings. IRIS es un producto en desarrollo.",
      "footer.2": "Un proyecto de GIJH · Con sede en Estados Unidos"
    },
    en: {
      "nav.beneficios": "Benefits",
      "nav.ventajas": "Advantages",
      "nav.industria": "Industry",
      "nav.capacidades": "Capabilities",
      "nav.faq": "FAQ",
      "nav.vision": "Vision",
      "hero.badge": "Under construction — GIJH's first project",
      "hero.tag": "The restaurant intelligence system that turns every operation into profitable decisions.",
      "hero.cta1": "Discover IRIS",
      "hero.cta2": "Meet GIJH",
      "stats.1": "modules in a single platform",
      "stats.2": "of your operation in one place",
      "stats.3": "always-on operation and traceability",
      "stats.4": "spreadsheets needed",
      "about.kicker": "What is IRIS?",
      "about.t": "Your entire restaurant, in a single view",
      "about.p": "IRIS is a comprehensive management system for restaurants: it brings sales, kitchen, inventory, costs, staff and finance together in one platform, designed so owners and operators can see the whole business and act with precision.",
      "ben.kicker": "Benefits",
      "ben.t": "What IRIS does for your business",
      "ben.1.t": "The true cost of every dish",
      "ben.1.d": "Know what it really costs to produce what you sell, from raw ingredients to the finished plate, and protect your margin on every sale.",
      "ben.2.t": "Data-driven decisions",
      "ben.2.d": "Clear indicators of sales, costs and profitability in real time — no guesswork, no manual math.",
      "ben.3.t": "Frictionless operation",
      "ben.3.d": "Sales, kitchen and inventory connected: what happens on the floor is instantly reflected across the operation.",
      "ben.4.t": "Less waste",
      "ben.4.d": "Stock control, low-inventory alerts and movement traceability to reduce shrinkage and improvised purchases.",
      "ben.5.t": "Full financial visibility",
      "ben.5.d": "From the daily till to the income statement: understand your business's health without being an accountant.",
      "ben.6.t": "Scales with you",
      "ben.6.d": "Built to grow: from a bistro to a chain, on the same platform with the same simplicity.",
      "adv.kicker": "Competitive advantages",
      "adv.t": "Why IRIS is different",
      "adv.1.t": "Everything in one place",
      "adv.1.d": "One platform instead of ten disconnected tools that never talk to each other.",
      "adv.2.t": "Your data, under your control",
      "adv.2.d": "IRIS runs on your own business's infrastructure: your information lives with you, not in third parties' hands.",
      "adv.3.t": "Built for the pace of service",
      "adv.3.d": "Interfaces designed for peak hours: fast, clear, and without endless learning curves.",
      "adv.4.t": "Total traceability",
      "adv.4.d": "Every sale, movement and adjustment is recorded; internal transparency stops being an effort.",
      "adv.5.t": "Simpler compliance",
      "adv.5.d": "E-invoicing plus Colombian tax and labor rules woven into the daily workflow.",
      "adv.6.t": "An operation that never stops",
      "adv.6.d": "The restaurant keeps running even if the internet goes down: operations continue locally and the data stays intact.",
      "ind.kicker": "Industry impact",
      "ind.t": "An industry that deserves better tools",
      "ind.intro": "The food service industry moves enormous volumes on thin margins. IRIS was born to close that gap: professionalizing restaurant management without needing a big budget.",
      "ind.1.t": "Professionalized management",
      "ind.1.d": "Big-chain practices — costing, KPIs, inventory control — within reach of restaurants of any size.",
      "ind.2.t": "Democratized analytics",
      "ind.2.d": "Data that used to belong only to the big players, now interpreted for the everyday operator.",
      "ind.3.t": "Less waste, more sustainability",
      "ind.3.d": "A sector that controls its ingredients wastes less and gains profitability responsibly.",
      "ind.4.t": "A culture of informed decisions",
      "ind.4.d": "When the owner understands their numbers, everything improves: pricing, menu, purchasing and team.",
      "cap.kicker": "Capabilities",
      "cap.t": "One system, the whole business cycle",
      "cap.1.t": "Sales and floor",
      "cap.1.d": "Orders, tables, payments and till closures in one agile flow, from the dining room to the receipt.",
      "cap.2.t": "Real-time kitchen",
      "cap.2.d": "A kitchen display that prioritizes, organizes and keeps the service in sync.",
      "cap.3.t": "Inventory and costing",
      "cap.3.d": "Purchasing, storerooms, batches and the exact cost of every recipe, computed in cascade.",
      "cap.4.t": "Team and payroll",
      "cap.4.d": "Shifts, legal surcharges and labor costs computed in line with Colombian labor law.",
      "cap.5.t": "Clear finances",
      "cap.5.d": "Balance sheet, income statement and forecasts ready to read, not to decode.",
      "cap.6.t": "Invoicing and compliance",
      "cap.6.d": "E-invoicing aligned with the Colombian tax framework, integrated into the sale.",
      "faq.kicker": "Frequently asked questions",
      "faq.t": "What everyone asks",
      "faq.1.q": "What is IRIS?",
      "faq.1.a": "A comprehensive intelligence and management system for restaurants that unites sales, kitchen, inventory, staff and finance in a single platform.",
      "faq.2.q": "Who is it for?",
      "faq.2.a": "For any food business that wants to control costs and grow with data: cafés, bistros, gastro bars, restaurants and chains.",
      "faq.3.q": "When will it be available?",
      "faq.3.a": "IRIS is actively being built by GIJH. This page will be updated as development progresses.",
      "faq.4.q": "Do I need internet to operate?",
      "faq.4.a": "No. IRIS is designed so the restaurant keeps operating even without a connection.",
      "faq.5.q": "What makes it different?",
      "faq.5.a": "It unites in one system what is usually scattered across many tools, and translates every operation into clear information for decision-making.",
      "faq.6.q": "What is GIJH?",
      "faq.6.a": "Greenhole Insightful Joint Holdings (GIJH) is the United States-based holding behind IRIS, its first project.",
      "vis.kicker": "Vision",
      "vis.t": "Where IRIS is heading",
      "vis.1.p": "Today",
      "vis.1.t": "Under construction",
      "vis.1.d": "Active platform development: sales, kitchen, inventory, costing and finance taking shape.",
      "vis.2.p": "Coming soon",
      "vis.2.t": "Ready for service",
      "vis.2.d": "Refinement, testing in real operations and preparation for the first restaurants.",
      "vis.3.p": "The future",
      "vis.3.t": "Intelligence that evolves",
      "vis.3.d": "A platform that grows with the industry: smarter forecasting and new ways to understand the business.",
      "close.pill": "Project under construction",
      "close.h": "IRIS is the first project of Greenhole Insightful Joint Holdings",
      "close.p": "Greenhole Insightful Joint Holdings (GIJH) is a United States-based holding that builds solutions where technology meets the real industry, with a long-term vision. IRIS is its first bet: intelligence for the food service industry.",
      "footer.1": "© 2026 Greenhole Insightful Joint Holdings. IRIS is a product in development.",
      "footer.2": "A GIJH project · Headquartered in the United States"
    }
  };
  /* ═══ FIN: diccionario i18n ═══ */

  /* ═══ INICIO: selector idioma · ORQUESTACION ═══ */
  const htmlEl = document.documentElement;
  const btnEs = document.getElementById("lang-es");
  const btnEn = document.getElementById("lang-en");

  function applyLang(lang) {
    const dict = I18N[lang] || I18N.es;
    document.querySelectorAll("[data-i18n]").forEach((el) => {
      const key = el.getAttribute("data-i18n");
      const value = dict[key];
      if (typeof value === "string") el.textContent = value;
    });
    htmlEl.setAttribute("lang", lang);
    btnEs.setAttribute("aria-pressed", String(lang === "es"));
    btnEn.setAttribute("aria-pressed", String(lang === "en"));
    try { localStorage.setItem("iris-lang", lang); } catch (_) { /* almacenamiento no disponible */ }
  }

  btnEs.addEventListener("click", () => applyLang("es"));
  btnEn.addEventListener("click", () => applyLang("en"));

  let savedLang = "es";
  try {
    const stored = localStorage.getItem("iris-lang");
    if (stored === "en" || stored === "es") savedLang = stored;
    else if (!stored && navigator.language && navigator.language.toLowerCase().startsWith("en")) savedLang = "en";
  } catch (_) { /* almacenamiento no disponible */ }
  applyLang(savedLang);
  /* ═══ FIN: selector idioma ═══ */

  /* ═══ INICIO: reveal scroll · ORQUESTACION ═══ */
  const revealEls = document.querySelectorAll(".reveal");
  const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  if (prefersReduced || !("IntersectionObserver" in window)) {
    revealEls.forEach((el) => el.classList.add("visible"));
  } else {
    const io = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
          io.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12, rootMargin: "0px 0px -40px 0px" });
    revealEls.forEach((el) => io.observe(el));
  }
  /* ═══ FIN: reveal scroll ═══ */

  /* ═══ INICIO: contadores cifras · CALCULO ═══ */
  const counters = document.querySelectorAll(".stat-num[data-count]");
  function animateCounter(el) {
    const target = parseInt(el.getAttribute("data-count"), 10) || 0;
    const suffix = el.getAttribute("data-suffix") || "";
    if (prefersReduced || target === 0) { el.textContent = target + suffix; return; }
    const duration = 1100;
    const start = performance.now();
    function tick(now) {
      const progress = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      el.textContent = Math.round(target * eased) + suffix;
      if (progress < 1) requestAnimationFrame(tick);
    }
    requestAnimationFrame(tick);
  }
  if ("IntersectionObserver" in window && !prefersReduced) {
    const cio = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          animateCounter(entry.target);
          cio.unobserve(entry.target);
        }
      });
    }, { threshold: 0.4 });
    counters.forEach((el) => cio.observe(el));
  }
  /* ═══ FIN: contadores cifras ═══ */

  /* ═══ INICIO: acordeon faq · ORQUESTACION ═══ */
  document.querySelectorAll(".faq-q").forEach((btn) => {
    btn.addEventListener("click", () => {
      const item = btn.closest(".faq-item");
      const isOpen = item.classList.contains("open");
      document.querySelectorAll(".faq-item.open").forEach((other) => {
        other.classList.remove("open");
        other.querySelector(".faq-q").setAttribute("aria-expanded", "false");
      });
      if (!isOpen) {
        item.classList.add("open");
        btn.setAttribute("aria-expanded", "true");
      }
    });
  });
  /* ═══ FIN: acordeon faq ═══ */
})();
