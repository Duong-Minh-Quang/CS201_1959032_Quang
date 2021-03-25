function getItem() {
  let url = "https://fakestoreapi.herokuapp.com/products"
  let xhr = new XMLHttpRequest();
  xhr.open(
    "GET",
     url,
     true
  );
  xhr.onload = function() {
    if(this.status == 200) {
      var arr = JSON.parse(this.responseText);

    }
  }
  xhr.send();
}

function outputItem(s) {
  getItem();
  let ss = document.querySelector('#display.row');
  for(let i = 0;i < 4;i++) {
    ss.innerHTML += `<div class="col-md-3 col-lg-3">
      <img src="${arr.image}">
      <h3>${arr.title}</h3>
      <h4 class="font-weight-light">${arr.price}$</h4>
    </div>`
  }

console.log("loaded");
}

outputItem();
