function setupRoutes(app){
    
    app.get('/aboutus', (req, res) => {
        res.render('aboutus', { title: 'About Us' });
    });
    app.get('/addOrder', (req, res) => {
        res.render('addOrder', { title: 'Add Order' });
    });
}
module.exports={
    setupRoutes
};