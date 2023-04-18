(function () {
  //===== Prealoder

  window.onload = function () {
    window.setTimeout(fadeout, 500);

    const firebaseConfig = {
      apiKey: "AIzaSyCeGC6h5nUBgq6v87oSXmd12GO_d4alMaw",
      authDomain: "coval-website.firebaseapp.com",
      projectId: "coval-website",
      storageBucket: "coval-website.appspot.com",
      messagingSenderId: "383475623491",
      appId: "1:383475623491:web:a80ae3c831cf552ebd96f6",
      measurementId: "G-KWJQYLGC2B"
    };
    firebase.initializeApp(firebaseConfig);
    const db = firebase.firestore();

    var form = document.querySelector('.subscribe-form-top');

    form.addEventListener('submit', function (event) {
      event.preventDefault();
      var email = form.querySelector('input[name="subs-email"]').value;
      var data = {
        email: email,
        subscribed_at: new Date().getTime()
      };

      db.collection("subscriptions").add(data);
    });
  };

  function fadeout() {
    document.querySelector(".preloader").style.opacity = "0";
    document.querySelector(".preloader").style.display = "none";
  }

  /*=====================================
    Sticky
    ======================================= */
  window.onscroll = function () {
    const header_navbar = document.querySelector(".navbar-area");
    const sticky = header_navbar.offsetTop;
    const logo = document.querySelector(".navbar-brand img");

    if (window.pageYOffset > sticky) {
      header_navbar.classList.add("sticky");
      logo.src = "assets/img/coval-logo-blue.png";
    } else {
      header_navbar.classList.remove("sticky");
      logo.src = "assets/img/coval-logo-white.png";
    }

    // show or hide the back-top-top button
    const backToTo = document.querySelector(".scroll-top");
    if (
      document.body.scrollTop > 50 ||
      document.documentElement.scrollTop > 50
    ) {
      backToTo.style.display = "flex";
    } else {
      backToTo.style.display = "none";
    }
  };

  // for menu scroll
  const pageLink = document.querySelectorAll(".page-scroll");

  pageLink.forEach((elem) => {
    elem.addEventListener("click", (e) => {
      e.preventDefault();
      document.querySelector(elem.getAttribute("href")).scrollIntoView({
        behavior: "smooth",
        offsetTop: 1 - 60,
      });
    });
  });

  // section menu active
  function onScroll(event) {
    const sections = document.querySelectorAll(".page-scroll");
    const scrollPos =
      window.pageYOffset ||
      document.documentElement.scrollTop ||
      document.body.scrollTop;

    for (let i = 0; i < sections.length; i++) {
      const currLink = sections[i];
      const val = currLink.getAttribute("href");
      const refElement = document.querySelector(val);
      const scrollTopMinus = scrollPos + 73;
      if (
        refElement.offsetTop <= scrollTopMinus &&
        refElement.offsetTop + refElement.offsetHeight > scrollTopMinus
      ) {
        document.querySelector(".page-scroll").classList.remove("active");
        currLink.classList.add("active");
      } else {
        currLink.classList.remove("active");
      }
    }
  }

  window.document.addEventListener("scroll", onScroll);

  //===== close navbar-collapse when a  clicked
  let navbarToggler = document.querySelector(".navbar-toggler");
  const navbarCollapse = document.querySelector(".navbar-collapse");

  document.querySelectorAll(".page-scroll").forEach((e) =>
    e.addEventListener("click", () => {
      navbarToggler.classList.remove("active");
      navbarCollapse.classList.remove("show");
    })
  );
  navbarToggler.addEventListener("click", function () {
    navbarToggler.classList.toggle("active");
  });

  // WOW active
  new WOW().init();
})();
