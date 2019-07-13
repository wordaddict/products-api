/**
 * Created by Adeyinka Micheal on 8th July 2019
 */

 // imported modules
 const Response = require('../lib/response_manager');
 const HttpStatus = require('../constants/Http_status');
 const multer  =   require("multer");

 // installed modules
 const uuid = require('uuid/v4');
 const fs = require('fs');

 const storage =   multer.diskStorage({
	destination: function (req, file, callback) {
		callback(null, __dirname);
	},
	filename: function (req, file, callback) {
		callback(null, file.fieldname + "-" + Date.now());
	}
});

 const upload = multer({ // multer settings
    storage,
    fileFilter: function fileFilter(req, file, callback) { // file filter
    //   if (!file.originalname.match(/\.(csv|xls|xlsx)$/)) {
    //     return callback(new Error('Wrong extension type'));
    //   }
      return callback(null, true);
    }
  }).single('campaign-creation');

 class ProductController {
    /**
         * Class Constructor
         *
         * @param logger - winston logger
         * @param ProductService
     */
    constructor(logger, ProductService) {
        this.logger = logger;
        this.ProductService = ProductService;
    }

   /**
     * Add new products
     *
     * @param req
     * @param res
     * @methodVerb POST
     */

    addNewProducts(req, res){
        // console.log('body', req.body)
        // console.log('req, file', req.files.photo.path)

        
        const { name,
            description,
            price,
            category,
            color} = req.body;
            if (!name || !description || !price || !category || !color) {
                return Response.failure(res, { message: 'Kindly add all fields: name, description, price, category, image, color' }, HttpStatus.BAD_REQUEST);
            } else {
              let param = {
                name,
                Id: uuid(),
                description,
                price,
                category,
                color,
                img: {}
            }
            //console.log('param', param)
            // if(req.files === undefined){
            //   return Response.failure(res, { message: 'Kindly add photo' }, HttpStatus.BAD_REQUEST);
            // }
            // param.img['data'] = fs.readFileSync(req.files.photo.path);
            // param.img.contentType = 'image/jpg';
            
            // upload(req, res, (err) => {
            //     param
            //     const uploadrequest = req.files;
            //     if (err) {
            //       res.json({ error_code: 1, err_desc: err });
            //       return;
            //     }
            //     /** Multer gives us file info in req.file object */
            //     if (!uploadrequest) {
            //       res.json({ error_code: 400, err_desc: 'No file passed' });
            //       return;
            //     }
            //     const uploadedPhotoPath = req.files.photo.path;
            //     if (err) {
            //       reject(res.json({ error_code: 1, err_desc: err }));
            //       return;
            //     }
            //     /** Multer gives us file info in req.file object */
            //     if (!uploadedPhotoPath) {
            //       reject(res.json({ error_code: 1, err_desc: 'No file passed' }));
            //       return;
            //     }
                //console.log('param', param);
                return this.ProductService.addNewProduct(param)
                    .then((response) => {
                        this.logger.info('Product added successfully')
                        Response.success(res, {
                        message: `products added successfully`,
                        response: {
                            name: response.name,
                            category: response.category,
                            description: response.description,
                            price: response.price,
                            color: response.color,
                            Id: response.Id
                        }
                      })})
                    .catch((error) => {
                    this.logger.error('Error from adding a new product', error)
                    return Response.failure(res, {
                    message: error.msg,
                    response: {},
                    }, HttpStatus.NOT_FOUND)});
            // });
            }

        
    }

    /**
     * List all products
     *
     * @param req
     * @param res
     * @methodVerb GET
     */
    listAllProducts(req, res){
        if(req.query.id){
            const { id } = req.query;
            return this.detailedList(id, res);
        }
        return this.ProductService.getAllWorkDays()
        .then((response) => {
            let prodArray = [];
            for (let product of response){
                const finalObj = {
                    name: product.name,
                    price: product.price,
                    Id: product.Id
                };
                prodArray.push(finalObj);
            }
            if(prodArray.length === 0){
                return Response.failure(res, {
                    message: error.msg,
                    response: {},
                    }, HttpStatus.NOT_FOUND);
            }
            Response.success(res, {
            message: `${response.length} All products were successfully fetched`,
            response: prodArray
          })})
        .catch((error) => {
            this.logger.error('Error from getting products', error)
            return Response.failure(res, {
                message: error.msg,
                response: {},
                }, HttpStatus.INTERNAL_SERVER_ERROR)});
    }


    /**
     * A detailed list of a specific product
     *
     * @param id
     */
    detailedList(id, res){
        const param = {
            Id: id
        }
        return this.ProductService.getDetailedData(param)
        .then(response => Response.success(res, {
            message: `Product detail successfully fetched`,
            response
          }))
        .catch(error => Response.failure(res, {
        message: error.msg,
        response: {},
        }, HttpStatus.NOT_FOUND));
    }
 }

 module.exports = ProductController;