"use strict";
// Make mobile navigation work

const btnNavEl = document.querySelector(".btn-mobile-nav");
const headerEl = document.querySelector(".header");

btnNavEl.addEventListener("click", function () {
  headerEl.classList.toggle("nav-open");
});

// Sticky navigation
const sectionHeroEl = document.querySelector(".hero-section");
const sectionTerms = document.querySelector(".terms-section");
const obs = new IntersectionObserver(
  function (entries) {
    const ent = entries[0];
    // console.log(ent);

    if (ent.isIntersecting === false) {
      document.body.classList.add("sticky");
    }

    if (ent.isIntersecting === true) {
      document.body.classList.remove("sticky");
    }
  },
  {
    // In the viewport
    root: null,
    threshold: 0,
    rootMargin: "-80px",
  }
);
obs.observe(sectionHeroEl, sectionTerms);

const tabs = document.querySelectorAll(".operations__tab");
const tabsContainer = document.querySelector(".operations__tab-container");
const tabsContent = document.querySelectorAll(".operations__content ");

tabsContainer.addEventListener("click", function (e) {
  const clicked = e.target.closest(".operations__tab");

  //Guard clause
  if (!clicked) return;

  //remove active classes
  tabs.forEach((t) => t.classList.remove(".operations__content--active"));
  tabsContent.forEach((c) => c.classList.remove("operations__content--active"));

  // Activete tab
  clicked.classList.add(".operations__content--active");

  // Activate content area
  document
    .querySelector(`.operations__content--${clicked.dataset.tab}`)
    .classList.add("operations__content--active");
});

////////////////////////////////////////////////////////////////////////////
const imgtebs = document.querySelectorAll(".img__tab");
const imgTabsContainer = document.querySelector(
  ".operations__tab-container-two"
);
const imgContentTwo = document.querySelectorAll(".img__content");

imgTabsContainer.addEventListener("click", function (e) {
  const clicked = e.target.closest(".img__tab");
  console.log(clicked);

  //Gard clause
  if (!clicked) return;

  // Remove active classes
  imgtebs.forEach((t) => t.classList.remove("img__content--active"));
  imgContentTwo.forEach((c) => c.classList.remove("img__content--active"));

  //Activate tab
  clicked.classList.add("img__content--active");

  //Activate content area
  console.log(clicked.dataset.tab);
  document
    .querySelector(`.img__content--${clicked.dataset.tab}`)
    .classList.add("img__content--active");
});

/////////////////////////////////////////////////////
//LOGIN
const loginBox = document.querySelector(".login-box");
const overLay = document.querySelector(".overlay");

//CLOSE
const loginClose = document.querySelector(".login-close");
//OPEN
const showLogin = document.querySelectorAll(".show-login");
for (let i = 0; i < showLogin.length; i++) {
  showLogin[i].addEventListener("click", function () {
    loginBox.classList.remove("hidden");
    overLay.classList.remove("hidden");
  });
}

loginClose.addEventListener("click", function () {
  loginBox.classList.add("hidden");
  overLay.classList.add("hidden");
});

////////////////////////////////////////////////
//REGISTER
const registerBox = document.querySelector(".register-box");

//close
const registerClose = document.querySelector(".register-close");
//OPEN
const showRegister = document.querySelectorAll(".show-register");
for (let i = 0; i < showRegister.length; i++) {
  showRegister[i].addEventListener("click", function () {
    registerBox.classList.remove("hidden");
    overLay.classList.remove("hidden");
  });
}
registerClose.addEventListener("click", function () {
  registerBox.classList.add("hidden");
  overLay.classList.add("hidden");
});
////////////////////////////////////////////
//MESSAGEBOX
const messageBox = document.querySelector(".message-box");

//CLOSE
const messageClose = document.querySelector(".message-close");
//OPEN
const showMessage = document.querySelectorAll(".show-content");
for (let i = 0; i < showMessage.length; i++) {
  showMessage[i].addEventListener("click", function () {
    messageBox.classList.remove("hidden");
    overLay.classList.remove("hidden");
  });
}
messageClose.addEventListener("click", function () {
  messageBox.classList.add("hidden");
  overLay.classList.add("hidden");
});
/////////////////////////////////////////////////////////
//TERMS

const termsBox = document.querySelector(".terms-box");

const termsClose = document.querySelector(".terms-close");

const showTerms = document.querySelector(".terms-log");
showTerms.addEventListener("click", function () {
  termsBox.classList.remove("hidden");
  overLay.classList.remove("hidden");
});
termsClose.addEventListener("click", function () {
  termsBox.classList.add("hidden");
  overLay.classList.add("hidden");
});
////////////////////////////////////////////////////////////
// smooth scrolling animation

const allLinks = document.querySelectorAll("a:link");

allLinks.forEach(function (link) {
  link.addEventListener("click", function (e) {
    e.preventDefault();
    const href = link.getAttribute("href");

    //scroll back to top
    if (href === "#")
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });

    //scroll to other links
    if (href !== "#" && href.startsWith("#")) {
      const sectionEl = document.querySelector(href);
      sectionEl.scrollIntoView({ behavior: "smooth" });
    }
    //close mobile naviagtion
    if (link.classList.contains("main-nav-link"))
      headerEl.classList.toggle("nav-open");
  });
});
//////////////////////////////////////////////////////////////
