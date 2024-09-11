const items = [
    {
        id: '001',
        image: 'Images/trending/1.jpg',
        company: 'Carlton London',
        item_name: 'Rhodium-Plated CZ Floral Studs',
        original_price: 1045,
        current_price: 606,
        discount_percentage: 42,
        return_period: 14,
        delivery_date: '10 Oct 2023',
        rating: {
            stars: 4.5,
            count: 1400,
        },
    },
    {
        id: '002',
        image: 'Images/trending/2.jpg',
        company: 'CUKOO',
        item_name: 'Women Padded Halter Neck Swimming Dress',
        original_price: 2599,
        current_price: 1507,
        discount_percentage: 42,
        return_period: 14,
        delivery_date: '10 Oct 2023',
        rating: {
            stars: 4.3,
            count: 24,
        },
    },
    {
        id: '003',
        image: 'Images/trending/3.jpg',
        company: 'NUEVOSDAMAS',
        item_name: 'Women Red & White Printed A-Line Knee-Length Skirts',
        original_price: 1599,
        current_price: 495,
        discount_percentage: 69,
        return_period: 14,
        delivery_date: '10 Oct 2023',
        rating: {
            stars: 4.1,
            count: 249,
        },
    },
    {
        id: '004',
        image: 'Images/trending/4.jpg',
        company: 'ADIDAS',
        item_name: 'Indian Cricket ODI Jersey',
        original_price: 999,
        current_price: 999,
        discount_percentage: 0,
        return_period: 14,
        delivery_date: '10 Oct 2023',
        rating: {
            stars: 5.0,
            count: 10,
        },
    },
    {
        id: '005',
        image: 'Images/trending/5.jpg',
        company: 'Roadster',
        item_name: 'Pure Cotton T-shirt',
        original_price: 1399,
        current_price: 489,
        discount_percentage: 65,
        return_period: 14,
        delivery_date: '10 Oct 2023',
        rating: {
            stars: 4.2,
            count: 3500,
        },
    },
    {
        id: '006',
        image: 'Images/trending/6.jpg',
        company: 'Nike',
        item_name: 'Men ReactX Running Shoes',
        original_price: 14995,
        current_price: 14995,
        discount_percentage: 0,
        return_period: 14,
        delivery_date: '10 Oct 2023',
        rating: {
            stars: 0.0,
            count: 0,
        },
    },
    {
        id: '007',
        image: 'Images/trending/7.jpg',
        company: 'The Indian Garage Co',
        item_name: 'Men Slim Fit Regular Shorts',
        original_price: 1599,
        current_price: 639,
        discount_percentage: 60,
        rating: {
            stars: 4.2,
            count: 388,
        },
    },
    {
        id: '008',
        image: 'Images/trending/8.jpg',
        company: 'Nivea',
        item_name: 'Men Fresh Deodrant 150ml',
        original_price: 285,
        current_price: 142,
        discount_percentage: 50,
        return_period: 14,
        delivery_date: '10 Oct 2023',
        rating: {
            stars: 4.2,
            count: 5200,
        },
    }
];

let bagItems;
onLoad();

function onLoad(){
    let bagItemsStr = localStorage.getItem('bagItems');
    bagItems = bagItemsStr?JSON.parse(bagItemsStr):[];
    displayItemsonHome();
    displayBagCount();
}


function displayBagCount(){
    let count = document.querySelector('#count');
    if(bagItems.length>0) {count.innerText = bagItems.length ; count.style.visibility = 'visible'}
    else count.style.visibility = 'hidden'
}


function addtoBag(x){
    bagItems.push(x);
    localStorage.setItem('bagItems',JSON.stringify(bagItems))
    displayBagCount();
}


function displayItemsonHome(){
    
    let itemsContainer = document.querySelector('.trending');

    if(!itemsContainer) return;

    itemsContainer.innerHTML = items.map(item => `
        <div class="item--container" data-id="${item.id}">
    
            <div class="img--container">
                <img src="${item.image}" alt="">
            </div>
    
            <div class="div--hover hidden">
                <button class="btn--hover" onclick="addtoBag(${item.id})">add to bag</button>
            </div>
    
            <div class="rating">
                <p>${item.rating.stars}⭐| ${item.rating.count}</p>
            </div>
    
            <div class="company--name">${item.company}</div>
                    
            <div class="item--name">${item.item_name}</div>
                    
            <div class="price--container">
                <span class="curr-price">Rs ${item.current_price}</span>
                <span class="og-price">Rs ${item.original_price}</span>
                <span class="discount">(${item.discount_percentage}% OFF)</span>
            </div>
        </div>
    `).join('');
    
    let itemss = document.querySelectorAll('.item--container');
    
    itemss.forEach(item => {
        item.addEventListener('mouseover', function() {
            let hover = item.querySelector('.div--hover');
            if (hover.classList.contains('hidden')) {
                hover.classList.remove('hidden');
            }
        });
    
        item.addEventListener('mouseout', function() {
            let hover = item.querySelector('.div--hover');
            if (!hover.classList.contains('hidden')) {
                hover.classList.add('hidden');
            }
        });
    });


}
