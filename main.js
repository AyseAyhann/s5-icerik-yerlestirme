// bu satırı silmeyin
import { siteContent } from "./content.js";
console.log("Site içeriği", siteContent);

/* Kodlar buradan aşağıya */
const navLinks = document.querySelectorAll("nav a");
for (let i = 0; i < navLinks.length; i++) {
  navLinks[i].textContent = siteContent.nav[`nav-item-${i + 1}`];
  navLinks[i].classList.add("italic");
}

document.querySelector("#logo-img").src = siteContent.images["logo-img"];

document.querySelector(".cta-text h1").textContent = siteContent.cta.h1;
document.querySelector(".cta-text button").textContent = siteContent.cta.button;

document.querySelector("#cta-img").src = siteContent.images["cta-img"];

const topTexts = document.querySelectorAll(".top-content .text-content");

topTexts[0].querySelector("h4").textContent =
  siteContent["top-content"]["left-h4"];
topTexts[0].querySelector("p").textContent =
  siteContent["top-content"]["left-content"];

topTexts[1].querySelector("h4").textContent =
  siteContent["top-content"]["right-h4"];
topTexts[1].querySelector("p").textContent =
  siteContent["top-content"]["right-content"];

document.querySelector("#middle-img").src = siteContent.images["accent-img"];

const bottomTexts = document.querySelectorAll(".bottom-content .text-content");

bottomTexts[0].querySelector("h4").textContent =
  siteContent["bottom-content"]["left-h4"];
bottomTexts[0].querySelector("p").textContent =
  siteContent["bottom-content"]["left-content"];

bottomTexts[1].querySelector("h4").textContent =
  siteContent["bottom-content"]["middle-h4"];
bottomTexts[1].querySelector("p").textContent =
  siteContent["bottom-content"]["middle-content"];

bottomTexts[2].querySelector("h4").textContent =
  siteContent["bottom-content"]["right-h4"];
bottomTexts[2].querySelector("p").textContent =
  siteContent["bottom-content"]["right-content"];

const contact = document.querySelector(".contact");

contact.querySelector("h4").textContent = siteContent.contact["contact-h4"];
contact.querySelectorAll("p")[0].textContent = siteContent.contact.address;
contact.querySelectorAll("p")[1].textContent = siteContent.contact.phone;
contact.querySelectorAll("p")[2].textContent = siteContent.contact.email;

document.querySelector("footer a").textContent = siteContent.footer.copyright;
document.querySelector("footer a").classList.add("bold");
