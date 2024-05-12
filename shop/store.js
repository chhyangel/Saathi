document.addEventListener('DOMContentLoaded', function() {
    let products = document.querySelector('.products')
        async function fetchProducts(url){
            let data = await fetch (url);
            let response = await data.json ();
            console.log(response);
            for( let i=0; i<4; i++)
                {
                    let imageSrc = ['http://localhost:8000/images/1.jpg',
                    'http://localhost:8000/images/2.jpg' ,
                    'http://localhost:8000/images/3.jpg',
                    'http://localhost:8000/images/4.jpg'];
                    let titletext = [
                        'Nepali Woodden Frame',
                        'Nepali Bodhi Mala' ,
                        'Nepali Nanglo',
                        'Nepali Tote Bag'
    
                    ];
                    let categorytext = [
                        'Art Piece',
                        'Religious or Spiritual Item' ,
                        'Household Item',
                        'Accessory'
                    ];
                    let descriptiontext = [
                        'A handcrafted wooden frame from Nepal, adding authentic charm to your décor.', 
                        'Elevate your spiritual practice with this traditional Bodhi seed mala.' ,
                        'Effortlessly tote your produce in this classic Nepali bamboo nanglo basket' ,
                        'Effortlessly carry your essentials with this stylish tote bag.'
                    ]
                    let pricetext =[
                        '$50' ,
                        '$70' ,
                        '$5' ,
                        '$15'
                    ];
                    let idtext = [
                        '1' ,
                        '2' ,
                        '3' ,
                        '4' 
                    ];
                    products.innerHTML += `
                    <div class="product">
                    <img src="${imageSrc[i]}" class="product"></img>
                    <h2 class="product-title">${titletext[i]}</h2>
                    <h4 class="product-description">${categorytext[i]}</h4>
                    <p class="product-description">${descriptiontext[i]}</p>
                    <div class="product-price-container">
                    <h3 class="product-price">${pricetext[i]}</h3>
                    <a href="#!" data-productId="${idtext[i]}" class="add-to-cart">Add to Cart</a>       
                    </div>`
    
                }
    
           
        }
    fetchProducts('https://fakestoreapi.com/products'); 
    })