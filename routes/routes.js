const registerRoutes=require('./register');
const productRoutes=require('./product');
function setupRoutes(app){

    app.get('/', (req, res) => {
        res.render('Thrifting', { title: 'Second Chance' });
    });
    app.get('/aboutus', (req, res) => {
        res.render('aboutus', { title: 'About Us' });
    });
    app.get('/addOrder', (req, res) => {
        res.render('addOrder', { title: 'Add Order' });
    });
    app.get('/adminhomeproducts', (req, res) => {
        res.render('admin home products', { title: 'Home Products' });
    });
    app.get('/admin', (req, res) => {
        res.render('admin', { title: 'Second Chance' });
    });
    app.get('/AdminBaby', (req, res) => {
        res.render('AdminBaby', { title: 'Baby Category' });
    });
    app.get('/AdminBoys', (req, res) => {
        res.render('AdminBoys', { title: 'Boys Category' });
    });
    app.get('/Admingirlproducts', (req, res) => {
        res.render('Admingirlproducts', { title: 'Girls Products' });
    });
    app.get('/AdminGirls', (req, res) => {
        res.render('/AdminGirls', { title: 'Girls Category' });
    });
    app.get('/AdminHome', (req, res) => {
        res.render('/AdminHome', { title: 'Home Category' });
    });
    app.get('/AdminMen', (req, res) => {
        res.render('/AdminMen', { title: 'Men Category' });
    });
    app.get('/AdminMenproducts', (req, res) => {
        res.render('/AdminMenproducts', { title: 'Men Products' });
    });
    app.get('/AdminSales', (req, res) => {
        res.render('/AdminSales', { title: 'View Sales Dashboard' });
    });
    app.get('/AdminWomen', (req, res) => {
        res.render('/AdminWomen', { title: 'Women Category' });
    });
    app.get('/Adminwomenproducts', (req, res) => {
        res.render('Adminwomenproducts', { title: 'Women Products' });
    });
    app.get('/babyproducts', (req, res) => {
        res.render('babyproducts', { title: 'Baby Products' });
    });
    app.get('/baby', (req, res) => {
        res.render('baby', { title: 'Baby Category' });
    });
    app.get('/boys', (req, res) => {
        res.render('boys', { title: 'Boys Category' });
    });
    app.get('/boysproducts', (req, res) => {
        res.render('boysproducts', { title: 'Boy Products' });
    });
    app.get('/cart', (req, res) => {
        res.render('cart', { title: 'Your Cart' });
    });
    app.get('/categories', (req, res) => {
        res.render('categories', { title: 'Second Chance' });
    });
    app.get('/checkout', (req, res) => {
        res.render('checkout', { title: 'checkout Page' });
    });
    app.get('/contactus', (req, res) => {
        res.render('contactus', { title: 'Contact US' });
    });
    app.get('/dashboard', (req, res) => {
        res.render('dashboard', { title: 'Admin Dashboard' });
    });
    app.get('/details', (req, res) => {
        res.render('details', { title: 'My Details' });
    });
    app.get('/editorder', (req, res) => {
        res.render('editorder', { title: 'Edit Orders' });
    });
    app.get('/favorites', (req, res) => {
        res.render('favorites', { title: 'Favorites' });
    });
    app.get('/filter', (req, res) => {
        res.render('filter', { title: 'filter' });
    });
    app.get('/girlproducts', (req, res) => {
        res.render('girlproducts', { title: 'girls Products' });
    });
    app.get('/girls', (req, res) => {
        res.render('girls', { title: 'Girls Category' });
    });
    app.get('/gsubcategory1', (req, res) => {
        res.render('gsubcategory1', { title: 'Top Wear Products' });
    });
    app.get('/homeproducts', (req, res) => {
        res.render('homeproducts', { title: 'Home Products' });
    });
    app.get('/home', (req, res) => {
        res.render('home', { title: 'Home Category' });
    });
    app.get('/menproducts', (req, res) => {
        res.render('menproducts', { title: 'Men Products' });
    });
    app.get('/profile', (req, res) => {
        res.render('profile', { title: 'My Profile' });
    });
    app.get('/register', (req, res) => {
        res.render('register', { title: 'Registration Page' });
    });
    app.get('/removeorder', (req, res) => {
        res.render('removeorder', { title: 'Remove Orders' });
    });
    app.get('/removeusers', (req, res) => {
        res.render('removeusers', { title: 'Remove Users' });
    });
    app.get('/search', (req, res) => {
        res.render('search', { title: 'search for Products' });
    });
    app.get('/Sell', (req, res) => {
        res.render('Sell', { title: 'Sell' });
    });
    app.get('/submitbutton', (req, res) => {
        res.render('submitbutton', { title: 'Display Message' });
    });
    app.get('/viewOrders', (req, res) => {
        res.render('viewOrders', { title: 'View Orders' });
    });
    app.get('/viewusers', (req, res) => {
        res.render('viewusers', { title: 'View Users' });
    });
    app.get('/visa', (req, res) => {
        res.render('visa', { title: 'Document' });
    });
    app.get('/womanproducts', (req, res) => {
        res.render('womanproducts', { title: 'Women Products' });
    });
    app.get('/women', (req, res) => {
        res.render('women', { title: 'Women Category' });
    }); 

  
}

module.exports={
    setupRoutes
};

