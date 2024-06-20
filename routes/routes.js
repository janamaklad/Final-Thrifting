function setupRoutes(app){
    
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
    
}
module.exports={
    setupRoutes
};