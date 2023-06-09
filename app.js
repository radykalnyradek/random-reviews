// local reviews data
const reviews = [
  {
    id: 1,
    name: "susan smith",
    job: "web developer",
    img: "https://images2.imgbox.com/e0/57/qI5bbwvg_o.jpeg",
    text: "I'm baby meggings twee health goth +1. Bicycle rights tumeric chartreuse before they sold out chambray pop-up. Shaman humblebrag pickled coloring book salvia hoodie, cold-pressed four dollar toast everyday carry",
  },
  {
    id: 2,
    name: "anna johnson",
    job: "web designer",
    img: "https://images2.imgbox.com/2e/6e/JAMvTZ56_o.jpeg",
    text: "Helvetica artisan kinfolk thundercats lumbersexual blue bottle. Disrupt glossier gastropub deep v vice franzen hell of brooklyn twee enamel pin fashion axe.photo booth jean shorts artisan narwhal.",
  },
  {
    id: 3,
    name: "peter jones",
    job: "intern",
    img: "https://images2.imgbox.com/56/88/oJvFN3l5_o.jpeg",
    text: "Sriracha literally flexitarian irony, vape marfa unicorn. Glossier tattooed 8-bit, fixie waistcoat offal activated charcoal slow-carb marfa hell of pabst raclette post-ironic jianbing swag.",
  },
  {
    id: 4,
    name: "bill anderson",
    job: "the boss",
    img: "https://images2.imgbox.com/8b/1c/vwWNTsCd_o.jpeg",
    text: "Edison bulb put a bird on it humblebrag, marfa pok pok heirloom fashion axe cray stumptown venmo actually seitan. VHS farm-to-table schlitz, edison bulb pop-up 3 wolf moon tote bag street art shabby chic. ",
  },
];

const nextBtn = document.querySelector(".next-btn");
const prevBtn = document.querySelector(".prev-btn");
const randomBtn = document.querySelector(".random-btn");

let id = 0;

window.addEventListener("DOMContentLoaded", () => {
  changeContent();
});

nextBtn.addEventListener("click", () => {
  id++;
  if (id > reviews.length) {
    id = 0;
  }
  changeContent();
});

prevBtn.addEventListener("click", () => {
  id--;
  if (id < 0) {
    id = reviews.length;
  }
  changeContent();
});

randomBtn.addEventListener("click", () => {
  id = Math.floor(Math.random() * reviews.length);
  changeContent();
});

function changeContent() {
  const infoParagraph = document.querySelector("#info");
  const jobParagraph = document.querySelector("#job");
  const authorHeading = document.querySelector("#author");
  const img = document.querySelector("#person-img");

  infoParagraph.innerHTML = reviews[id].text;
  jobParagraph.innerHTML = reviews[id].job;
  authorHeading.innerHTML = reviews[id].name;
  img.src = reviews[id].img;
}
