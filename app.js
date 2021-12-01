const productItems = document.querySelector('.productItems');

function displayProducts(products){
    productItems.innerHTML = "";
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
}
            displayProducts(products);
            $('#location').on('change',function(){

                var selectedLocation = this.value;
                
                if(selectedLocation == 1){
                    var location = products.filter(product => product.location == 'Runda');
                }else if(selectedLocation == 2){
                    var location = products.filter(product => product.location == 'Karen');
                }else if(selectedLocation == 3){
                    var location = products.filter(product => product.location == 'Kilimani');
                }
                displayProducts(location);
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
                displayProducts(price);
            })
            $('#rooms').on('change',function(){
                var selectedRooms = this.value;

                if(selectedRooms == 1){
                    var room = products.filter(product => product.rooms  <= 3 );
                }else if(selectedRooms == 2){
                    var room = products.filter(product => product.rooms  > 3 && product.rooms <= 6 );
                }else if(selectedRooms){
                    var room = products.filter(product => product.rooms  > 6 && product.rooms <= 10 );
                }
                displayProducts(room);
            })