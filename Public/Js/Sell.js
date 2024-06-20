document.addEventListener('DOMContentLoaded', function() {
    const categorySelect = document.getElementById('category');
    const subCategorySelect = document.getElementById('subCategory');
    const priceInput = document.getElementById('price');
    const priceError = document.getElementById('priceError');

    // Populate subcategories based on the selected category
    categorySelect.addEventListener('change', function() {
        const selectedCategory = this.value;
        subCategorySelect.innerHTML = ''; // Clear previous options

        switch(selectedCategory) {
            case 'women':
                populateSubcategories(subCategorySelect, [
                    {text: 'Top Wear', value: 'topWear'},
                    {text: 'Bottom Wear', value: 'bottomWear'},
                    {text: 'Dresses', value: 'dresses'},
                    {text: 'Outer Wear', value: 'outerWear'},
                    {text: 'Sports Wear', value: 'sportsWear'},
                    {text: 'Shoes', value: 'shoes'},
                    {text: 'Bags', value: 'bags'},
                    {text: 'Accessories', value: 'accessories'}
                ]);
                break;
            case 'men':
                populateSubcategories(subCategorySelect, [
                    {text: 'Top Wear', value: 'topWear'},
                    {text: 'Bottom Wear', value: 'bottomWear'},
                    {text: 'Outer Wear', value: 'outerWear'},
                    {text: 'Sports Wear', value: 'sportsWear'},
                    {text: 'Shoes', value: 'shoes'},
                    {text: 'Bags', value: 'bags'},
                    {text: 'Accessories', value: 'accessories'}
                ]);
                break;
            case 'girls':
                populateSubcategories(subCategorySelect, [
                    {text: 'Top Wear', value: 'topWear'},
                    {text: 'Bottom Wear', value: 'bottomWear'},
                    {text: 'Dresses', value: 'dresses'},
                    {text: 'Outer Wear', value: 'outerWear'},
                    {text: 'Sports Wear', value: 'sportsWear'},
                    {text: 'Costume', value: 'costume'},
                    {text: 'Shoes', value: 'shoes'},
                    {text: 'Bags', value: 'bags'},
                    {text: 'Accessories', value: 'accessories'}
                ]);
                break;
            case 'boys':
                populateSubcategories(subCategorySelect, [
                    {text: 'Top Wear', value: 'topWear'},
                    {text: 'Bottom Wear', value: 'bottomWear'},
                    {text: 'Outer Wear', value: 'outerWear'},
                    {text: 'Sports Wear', value: 'sportsWear'},
                    {text: 'Costume', value: 'costume'},
                    {text: 'Shoes', value: 'shoes'},
                    {text: 'Bags', value: 'bags'},
                    {text: 'Accessories', value: 'accessories'}
                ]);
                break;
            case 'baby':
                populateSubcategories(subCategorySelect, [
                    {text: 'Sleepsuits', value: 'sleepsuits'},
                    {text: 'Bodysuits', value: 'bodysuits'},
                    {text: 'Pyjama Sets', value: 'pyjamaSets'},
                    {text: 'Top Wear', value: 'topWear'},
                    {text: 'Bottom Wear', value: 'bottomWear'},
                    {text: 'Outer Wear', value: 'outerWear'},
                    {text: 'Costume', value: 'costume'},
                    {text: 'Shoes', value: 'shoes'},
                    {text: 'Accessories', value: 'accessories'}
                ]);
                break;
            case 'home':
                populateSubcategories(subCategorySelect, [
                    {text: 'Home Fragrance', value: 'homeFragrance'},
                    {text: 'Furniture', value: 'furniture'},
                    {text: 'Dining', value: 'dining'},
                    {text: 'Kitchen', value: 'kitchen'},
                    {text: 'Bath', value: 'bath'},
                    {text: 'Decor/Lighting', value: 'decorLighting'}
                ]);
                hideSizes();
                break;
            default:
                break;
        }
    });

    // Function to populate subcategory select options
    function populateSubcategories(selectElement, options) {
        addOption(selectElement, 'Select Subcategory', ''); // Default option
        options.forEach(option => {
            addOption(selectElement, option.text, option.value);
        });
    }

    // Function to add an option to a select element
    function addOption(selectElement, text, value) {
        const option = document.createElement('option');
        option.textContent = text;
        option.value = value;
        selectElement.appendChild(option);
    }

    // Function to hide size selection for home category
    function hideSizes() {
        const sizeSelect = document.getElementById('size');
        sizeSelect.style.display = 'none';
        const sizeLabel = document.querySelector('label[for="size"]');
        sizeLabel.style.display = 'none';
    }

    // Event listener for price input
    priceInput.addEventListener('input', function() {
        const priceValue = this.value;
        if (!/^\d+(\.\d{0,2})?$/.test(priceValue)) {
            priceError.textContent = "Price must be a valid number.";
            priceError.style.display = 'block'; // Show error message
        } else {
            priceError.textContent = ""; // Clear error message
            priceError.style.display = 'none'; // Hide error message
        }
    });
});
