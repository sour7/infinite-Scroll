const container = document.querySelector(".container");

let limit = 25;
let pageCount = 1;
let postCount = 1;

const getData = async () => {
  const res = await fetch(
    `http://localhost:3000/data?_limit=${limit}$_page=${pageCount}`
  );
  // console.log(res)
  const data = await res.json();
  //    console.log(data)
  data.map((curElm, index) => {
    const htmlData = `<div class="data">
<h2>${postCount++}</h2>
<h2>${curElm.first_name}</h2>
<h2>${curElm.last_name}</h2>
<h2>${curElm.email}</h2>
   </div>`;

    container.insertAdjacentHTML("beforeend", htmlData);
  });
};
getData();
const showData = () => {
  setTimeout(() => {
    pageCount++;
    getData();
  }, 300);
};

window.addEventListener("scroll", () => {
  const { scrollHeight, scrollTop, clientHeight } = document.documentElement;

  if (scrollTop + clientHeight >= scrollHeight) {
    showData();
  }
});
