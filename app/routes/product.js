/**
 * Created by Adeyinka Micheal on 8th July 2019
 */

const routes = ((server, serviceLocator) => {
    const ProductController = serviceLocator.get('ProductController');
    // Base application
    server.get({
        path: '/',
        name: 'app health check',
        version: '1.0.0'
      }, (req, res) => res.send('Welcome to the Products API'));

      server.get({
        path: '/products',
        name: 'List all products',
        version: '1.0.0',
      }, (req, res) => ProductController.listAllProducts(req, res));

      server.post({
        path: '/products',
        name: 'Add new Products',
        version: '1.0.0',
      }, (req, res) => ProductController.addNewProducts(req, res));
});

module.exports = routes;