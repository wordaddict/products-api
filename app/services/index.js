const ProductModel = require('../models/product');

class ProductService {
    /**
     *
     * @param {*} logger Logger Object
     * @param mongo
     */
  constructor(logger, mongo) {
    this.logger = logger;
    //this.mongo = mongo;
    this.mongo = new ProductModel(mongo, ProductModel);
  }

  /**
     * Add new product
     *
     * @param param
     */
  addNewProduct(param){
    return ProductModel.create(param);
  };

    /**
     * Get all Products
    */

     getAllWorkDays(){
        return ProductModel.find();
     }

     getDetailedData(param){
      return ProductModel.findOne(param)
     }
}; 

module.exports = ProductService;