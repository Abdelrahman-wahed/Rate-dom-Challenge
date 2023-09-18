let box = document.querySelector(".box div");
let thanks = document.querySelector(".thanks");
let lis = document.querySelectorAll("ul li");
let btn = document.querySelector(".btn");

lis.forEach(function (e) {
  e.onclick = function () {
    lis.forEach(function (e) {
      e.style.removeProperty("background-color");
    });
    this.style.backgroundColor = "rgb(153 162 242)";
    var number = e.innerHTML;
  };
});

btn.onclick = function () {
  lis.forEach(function (e) {
    if (
      e.style.backgroundColor !== "rgb(153, 162, 242)" &&
      e.textContent == lis.length
    ) {
      let pls = document.createElement("div");
      pls.className="pls";
      let textPls = document.createTextNode("Please Rate Us.");
      pls.appendChild(textPls);
      btn.before(pls);
      if(pls.innerHTML==="Please Rate Us."){
          btn.onclick= function (){ 
              console.log(btn.clicked==true);
        }

      }

    }
  });
  lis.forEach(function (e) {
  if(e.style.backgroundColor === "rgb(153, 162, 242)"){
  box.style.display = "none";
  thanks.style.display = "block";
  let ratedNumber = document.querySelector(
    `[ style="background-color: rgb(153, 162, 242);"]`
  );
  let img = document.querySelector(".thankpic");
  let select = document.createElement("span");
  let textSelect = document.createTextNode(
    `You Selected ${ratedNumber.innerHTML} out of 5`
  );
  select.appendChild(textSelect);
  img.after(select);

  }
});
};


lis.forEach(function (e) {
    if(e.style.backgroundColor === "rgb(153, 162, 242)"&& btn.clicked===true){
    box.style.display = "none";
    thanks.style.display = "block";
    let ratedNumber = document.querySelector(
      `[ style="background-color: rgb(153, 162, 242);"]`
    );
    let img = document.querySelector(".thankpic");
    let select = document.createElement("span");
    let textSelect = document.createTextNode(
      `You Selected ${ratedNumber.innerHTML} out of 5`
    );
    select.appendChild(textSelect);
    img.after(select);
  
    }
  });

