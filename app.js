const signinBtn = document.querySelector(".signinBtn");
const signupBtn = document.querySelector(".signupBtn");
const bodyElement = document.querySelector("body");
const signupForm = document.querySelector(".signup");
const signinForm = document.querySelector(".signin");
const head1 = document.querySelector(".head1");
const head2 = document.querySelector(".head2");
const mainElement = document.querySelector("main");
signinBtn.addEventListener("click", () => {
  bodyElement.style.backgroundColor = "#FF2424";
  bodyElement.style.transition = "all 1.5s ease-in-out";
  mainElement.style.backgroundColor = "#FF3737";
  mainElement.style.transition = "all 1.5s ease-in-out";
  signupForm.style.transform = "translateX(-152%)";
  signupForm.style.transition = "all 1.5s ease-in-out";
  head1.style.opacity = "0";
  function interval1() {
    signupForm.style.transform = "initial";
    signupForm.classList.add("hide");
    signinForm.classList.add("show");
    head1.classList.add("hide");
    head2.classList.add("show");
    head2.style.opacity = "1";
    clearInterval(myinterval1);
  }
  const myinterval1 = setInterval(interval1, 1500);
});
signupBtn.addEventListener("click", () => {
  bodyElement.style.backgroundColor = "#1686e7";
  bodyElement.style.transition = "all 1.5s ease-in-out";
  mainElement.style.backgroundColor = "#027EED";
  mainElement.style.transition = "all 1.5s ease-in-out";
  signinForm.style.transform = "translateX(152%)";
  signinForm.style.transition = "all 1.5s ease-in-out";
  head2.style.opacity = "0";
  function interval2() {
    signinForm.style.transform = "initial";
    signinForm.classList.toggle("show");
    signupForm.classList.toggle("hide");
    head2.classList.toggle("show");
    head1.classList.toggle("hide");
    head1.style.opacity = "1";
    clearInterval(myinterval2);
  }
  const myinterval2 = setInterval(interval2, 1500);
});
