/* BULANZALAWFIRM — interactions
   curseur · menu · reveals · parallax · easter eggs */

(function () {
  "use strict";

  /* ---------- préchargement : tampon ---------- */
  window.addEventListener("load", function () {
    var loader = document.getElementById("loader");
    setTimeout(function () { loader.classList.add("is-done"); }, 800);
  });
  // garde-fou si "load" a déjà eu lieu
  setTimeout(function () {
    document.getElementById("loader").classList.add("is-done");
  }, 2200);

  /* ---------- curseur ---------- */
  var cursor = document.getElementById("cursor");
  if (window.matchMedia("(pointer: fine)").matches) {
    document.addEventListener("mousemove", function (e) {
      cursor.style.transform = "translate(" + (e.clientX - 0) + "px," + (e.clientY - 0) + "px) translate(-50%,-50%)";
    });
    document.addEventListener("mouseover", function (e) {
      if (e.target.closest("a, button, input, textarea, .domaine")) {
        cursor.classList.add("is-link");
      } else {
        cursor.classList.remove("is-link");
      }
    });
  }

  /* ---------- menu fullscreen ---------- */
  var burger = document.getElementById("burger");
  burger.addEventListener("click", function () {
    document.body.classList.toggle("menu-open");
    burger.setAttribute("aria-expanded", document.body.classList.contains("menu-open") ? "true" : "false");
  });
  document.querySelectorAll("#menu a").forEach(function (a) {
    a.addEventListener("click", function () {
      document.body.classList.remove("menu-open");
      burger.setAttribute("aria-expanded", "false");
    });
  });

  /* ---------- reveals au scroll ---------- */
  var io = new IntersectionObserver(function (entries) {
    entries.forEach(function (en) {
      if (en.isIntersecting) {
        en.target.classList.add("is-in");
        io.unobserve(en.target);
      }
    });
  }, { threshold: 0.2 });
  document.querySelectorAll(".reveal").forEach(function (el) { io.observe(el); });

  /* ---------- parallax hero ---------- */
  var heroBg = document.querySelector("#hero .bg");
  var heroInner = document.querySelector("#hero .hero-inner");
  var reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  if (!reduced) {
    var ticking = false;
    window.addEventListener("scroll", function () {
      if (ticking) return;
      ticking = true;
      requestAnimationFrame(function () {
        var y = window.scrollY;
        var h = window.innerHeight;
        var p = Math.min(y / h, 1);
        heroBg.style.transform = "scale(" + (1 + p * 0.1) + ")";
        heroInner.style.transform = "translateX(" + (p * -60) + "px)";
        ticking = false;
      });
    }, { passive: true });
  }

  /* ---------- formulaire première consultation ---------- */
  var form = document.getElementById("consult-form");
  form.addEventListener("submit", function (e) {
    e.preventDefault();
    form.querySelectorAll("input, textarea, button").forEach(function (el) { el.disabled = true; });
    var ok = document.createElement("p");
    ok.className = "form-ok";
    ok.textContent = "Demande enregistrée. Réf. " + dossierRef() + " — le cabinet répond sous 48 h ouvrées.";
    form.appendChild(ok);
  });
  function dossierRef() {
    var d = new Date();
    return "CONS-" + d.getFullYear() + "-" + String(Math.floor(Math.random() * 900) + 100);
  }

  /* ---------- easter egg 1 : Konami → article du Code civil ---------- */
  var ARTICLES = [
    ["Article 4", "Le juge qui refusera de juger, sous prétexte du silence, de l'obscurité ou de l'insuffisance de la loi, pourra être poursuivi comme coupable de déni de justice."],
    ["Article 544", "La propriété est le droit de jouir et disposer des choses de la manière la plus absolue, pourvu qu'on n'en fasse pas un usage prohibé par les lois ou par les règlements."],
    ["Article 1103", "Les contrats légalement formés tiennent lieu de loi à ceux qui les ont faits."],
    ["Article 1104", "Les contrats doivent être négociés, formés et exécutés de bonne foi. Cette disposition est d'ordre public."],
    ["Article 1240", "Tout fait quelconque de l'homme, qui cause à autrui un dommage, oblige celui par la faute duquel il est arrivé à le réparer."]
  ];
  var KONAMI = ["ArrowUp","ArrowUp","ArrowDown","ArrowDown","ArrowLeft","ArrowRight","ArrowLeft","ArrowRight","b","a"];
  var kIndex = 0;
  var overlay = document.getElementById("codecivil");
  document.addEventListener("keydown", function (e) {
    if (overlay.classList.contains("is-open") && e.key === "Escape") {
      overlay.classList.remove("is-open");
      return;
    }
    kIndex = (e.key === KONAMI[kIndex]) ? kIndex + 1 : (e.key === KONAMI[0] ? 1 : 0);
    if (kIndex === KONAMI.length) {
      kIndex = 0;
      var art = ARTICLES[Math.floor(Math.random() * ARTICLES.length)];
      overlay.querySelector(".art-num").textContent = "CODE CIVIL — " + art[0];
      overlay.querySelector(".art-txt").textContent = art[1];
      overlay.classList.add("is-open");
    }
  });
  overlay.addEventListener("click", function () { overlay.classList.remove("is-open"); });

  /* ---------- easter egg 2 : clic long sur le logo → CONFIDENTIEL ---------- */
  var logo = document.querySelector(".logo");
  var conf = document.getElementById("confidentiel");
  var pressTimer = null;
  function startPress(e) {
    pressTimer = setTimeout(function () {
      var r = logo.getBoundingClientRect();
      conf.style.left = (r.left + 10) + "px";
      conf.style.top = (r.bottom + 14) + "px";
      conf.classList.remove("is-stamped");
      void conf.offsetWidth; // reflow pour relancer l'animation
      conf.classList.add("is-stamped");
    }, 600);
  }
  function endPress() { clearTimeout(pressTimer); }
  logo.addEventListener("mousedown", startPress);
  logo.addEventListener("touchstart", startPress, { passive: true });
  ["mouseup", "mouseleave", "touchend"].forEach(function (ev) {
    logo.addEventListener(ev, endPress);
  });
})();
