// GET VARIABLES FOR ALL INPUT FIELDS
// const locationInput = document.getElementById('location');
// const priceInput = document.getElementById('price');
// const roomInput = document.getElementById('room');
const productItems = document.querySelector('.productItems');

products.forEach((product)=>{
    productItems.innerHTML += `
            <div class="col-md-3">
            <div class="card mb-3">
            <img
                src="${product.imgSrc}"
                class="card-img-top img-fluid"
                alt="..."
            />
            <div class="card-body">
                <div class="content">
                <h5 class="card-title price">ksh${product.price}</h5>
                <img class="img-fluid"
                    src="https://img.icons8.com/material-outlined/50/fa314a/filled-like.png"
                />
                </div>
                <div class="info">
                <p class="card-text">${product.rooms}Bdrm</p>
                <p class="card-text">${product.size}sqm</p>
                <p class="card-text">Gated</p>
                </div>
                <div class="location">
                <div>
                    <span>Estate</span><br />
                    <span>${product.location}</span>
                </div>
                <div>
                    <span>AGent</span><br />
                    <span>${product.agent}</span>
                </div>
                </div>
            </div>
            </div>
        </div>
    `
})

$('#location').on('change',function(){

    var selected = this.value;
    
    var location = products.filter(product => product.location != 'Runda')

    console.log(location);
})
$('#price').on('change',function(){
    var selectedPrice = this.value;

    if(selectedPrice == 1){
        var price = products.filter(product => product.price <= 10000000);
    }else if(selectedPrice == 2){
        var price = products.filter(product => product.price  > 11000000 && product.price <=20000000);
    }else if(selectedPrice == 3){
        var price = products.filter(product => product.price  > 21000000 );
    }
    console.log(price);
})