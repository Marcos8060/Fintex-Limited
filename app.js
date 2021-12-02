$(window).scroll(function(){
    $('nav').toggleClass('scrolled',$(this).scrollTop() > 50);
});

// contact section
$('#form').submit(function(e){
    e.preventDefault();

     const nameInput = $('#name').val();
     const emailInput = $('#email').val();

     if(nameInput && emailInput){
        //  remove alert
        clearALert();
        //  create alert
        const p = document.createElement('p');
        // add class
        p.className = 'alert';
        // append text
        p.appendChild(document.createTextNode(`Thank you ${nameInput} for reaching out to us, we will get back to you as soon as possible.`))
        // get parent
        const searchContainer = document.querySelector('.searchContainer');
        // search box
        const search = document.querySelector('.search');
        // insert text
        searchContainer.insertBefore(p,search);
     }else{
         alert('Please fill in all the required fields');
     }
    //  clear input fields after submit
     $('#name').val('');
     $('#email').val('');

     setTimeout(()=>{
         clearALert();
     },4000);
});
// end of contact section
function clearALert(){
    const currentAlert = document.querySelector('.alert');
    if(currentAlert){
        currentAlert.remove();
    }
}
const productItems = document.querySelector('.productItems');

function displayProducts(products){
    productItems.innerHTML = "";
    products.forEach((product)=>{
        productItems.innerHTML += `
                <div class="col-md-3">
                <div class="card mb-3">
                <a href="more.html">
                <img
                    src="${product.imgSrc}"
                    class="card-img-top img-fluid"
                    alt="..."
                />
                </a>
                <div class="card-body">
                    <div class="content">
                    <h5 class="card-title price">ksh${product.price}</h5>
                    <a href="details.html" target="_blank">
                    <img class="img-fluid" src="https://img.icons8.com/ios-filled/50/fa314a/plus.png"/>
                    </a>
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
                }else if(selectedLocation == 4){
                    var location = products.filter(product => product.location == 'Kiambu Road');
                }else if(selectedLocation == 5){
                    var location = products.filter(product => product.location == 'Westlands');
                }else if(selectedLocation == 6){
                    var location = products.filter(product => product.location == 'Lavington');
                }else if(selectedLocation == 7){
                    var location = products.filter(product => product.location == 'Kitengela');
                }else if(selectedLocation == 8){
                    var location = products.filter(product => product.location == 'Spring Valley');
                }else if(selectedLocation == 9){
                    var location = products.filter(product => product.location == 'Muthaiga');
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
                }else if(selectedRooms == 3){
                    var room = products.filter(product => product.rooms  > 6 && product.rooms <= 10 );
                }
                displayProducts(room);
            })

            $('#size').on('change',function(){
                var selectedSize = this.value;

                if(selectedSize == 1){
                    var size = products.filter(product => product.size <= 100);
               }else if(selectedSize == 2){
                    var size = products.filter(product => product.size >= 111 && product.size <= 150);
                }else if(selectedSize == 3){
                    var size = products.filter(product => product.size >= 151 && product.size <= 200);
                }else if(selectedSize = 4){
                    var size = products.filter(product => product.size >= 201);
                }
                displayProducts(size);
            })

