document.addEventListener("DOMContentLoaded", function() {
    var categoryLinks = document.querySelectorAll('.category');
    var underline = document.querySelector('.underline');

    adjustUnderline(categoryLinks[1]); 

    categoryLinks.forEach(function(link) {
        link.addEventListener('click', function(event) {
            adjustUnderline(this);
        });
    });

    function adjustUnderline(selectedLink) {
        var linkOffset = selectedLink.offsetLeft;
        var linkWidth = selectedLink.offsetWidth;

        underline.style.left = linkOffset + 'px';
        underline.style.width = linkWidth + 'px';
    }
});

function showMenProducts(category) {
    var params = new URLSearchParams(window.location.search);
    var categoryParam = params.get('category');

    var allMenProducts = document.querySelectorAll('.men-products');
    allMenProducts.forEach(function (productSection) {
        productSection.style.display = 'none';
    });

    document.getElementById('men-products-' + categoryParam).style.display = 'block';
}

let currentIndex = 0;

function showModal(primaryImage, images, title, price, brand, size) {
    document.querySelector('.navbar').style.display = 'none';
    currentIndex = 0;
    document.getElementById('modal-title').innerText = title;
    document.getElementById('modal-price').innerText = 'Price: ' + price;
    document.getElementById('modal-brand').innerText = 'Brand: ' + brand;
    document.getElementById('modal-size').innerText = 'Size: ' + size;

    document.getElementById('modal-img').src = primaryImage;

    const thumbnailsContainer = document.getElementById('thumbnails');
    thumbnailsContainer.innerHTML = '';
    images.forEach((image, index) => {
        const thumbnail = document.createElement('img');
        thumbnail.src = image;
        thumbnail.alt = title;
        thumbnail.onclick = function() {
            currentIndex = index;
            document.getElementById('modal-img').src = image;
        };
        thumbnailsContainer.appendChild(thumbnail);
    });

    document.getElementById('modal').style.display = 'block';
}

function changeImage(direction) {
    const images = Array.from(document.getElementById('thumbnails').querySelectorAll('img'));
    currentIndex += direction;
    if (currentIndex < 0) {
        currentIndex = images.length - 1;
    } else if (currentIndex >= images.length) {
        currentIndex = 0;
    }
    document.getElementById('modal-img').src = images[currentIndex].src;
}

function closeModal() {
    document.getElementById('modal').style.display = 'none';
    document.querySelector('.navbar').style.display = 'flex';
}

function buyNow(productName) {
    alert("You are about to buy: " + productName);

}



window.addEventListener('DOMContentLoaded', () => {
    const urlParams = new URLSearchParams(window.location.search);
    const category = urlParams.get('category');
    if (category) {
        filterProducts(category);
    }
});

function filterProducts(category) {
    const products = document.querySelectorAll('#products-container .product');
    products.forEach(product => {
        if (product.dataset.category === category) {
            product.classList.remove('hidden');
        } else {
            product.classList.add('hidden');
        }
    });
}
// products.js

// Function to filter and display products based on category
function filterProductsByCategory(category) {
    const products = document.querySelectorAll('#products-container .product');
    products.forEach(product => {
        if (product.dataset.category === category) {
            product.classList.remove('hidden');
        } else {
            product.classList.add('hidden');
        }
    });
}

// DOMContentLoaded event listener to trigger filtering
window.addEventListener('DOMContentLoaded', () => {
    const urlParams = new URLSearchParams(window.location.search);
    const category = urlParams.get('category');
    if (category) {
        filterProductsByCategory(category);
    }
});
document.addEventListener("DOMContentLoaded", function() {
    // Fetch all category links and underline element
    var categoryLinks = document.querySelectorAll('.category');
    var underline = document.querySelector('.underline');

    // Initial adjustment of underline for the first category
    adjustUnderline(categoryLinks[0]); 

    // Add click event listener to each category link
    categoryLinks.forEach(function(link) {
        link.addEventListener('click', function(event) {
            event.preventDefault(); // Prevent default link behavior
            
            // Adjust underline and filter products on click
            adjustUnderline(this);
            var category = this.getAttribute('data-category');
            filterProductsByCategory(category);
        });
    });

    // Function to adjust the underline position based on the selected category link
    function adjustUnderline(selectedLink) {
        var linkOffset = selectedLink.offsetLeft;
        var linkWidth = selectedLink.offsetWidth;

        underline.style.left = linkOffset + 'px';
        underline.style.width = linkWidth + 'px';
    }

    // Function to show products of a specific category
    function filterProductsByCategory(category) {
        const products = document.querySelectorAll('.product');
        products.forEach(product => {
            const productCategory = product.getAttribute('data-category');
            if (productCategory === category || category === 'all') {
                product.classList.remove('hidden');
            } else {
                product.classList.add('hidden');
            }
        });
    }

    // Initially filter products based on URL parameter (if provided)
    const urlParams = new URLSearchParams(window.location.search);
    const category = urlParams.get('category');
    if (category) {
        filterProductsByCategory(category);
    }
});

