/**
 * Created by Adeyinka Micheal on 8th July 2019
 */

 // imported modules
 const Response = require('../lib/response_manager');
 const HttpStatus = require('../constants/Http_status');

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
        // let month;
        // if(!req.body || !req.body.month){
        //     return Response.failure(res, { message: 'Kindly pass the month to be updated in the request body' }, HttpStatus.BAD_REQUEST);
        // }
        // month = req.body.month;
        // const param = {
        //     month
        // }
        // return this.WorkDayService.updateWorkDayBasedOnMonth(param)
        //     .then(response => Response.success(res, {
        //         message: `${response.length} work day was successfully updated`,
        //         response
        //       }))
        //     .catch(error => Response.failure(res, {
        //     message: error.msg,
        //     response: {},
        //     }, HttpStatus.NOT_FOUND));
    }

    /**
     * List all products
     *
     * @param req
     * @param res
     * @methodVerb GET
     */
    listAllProducts(req, res){
        // return this.WorkDayService.getAllWorkDays()
        // .then(response => Response.success(res, {
        //     message: `${response.length} work days were successfully fetched`,
        //     response
        //   }))
        // .catch(error => Response.failure(res, {
        // message: error.msg,
        // response: {},
        // }, HttpStatus.NOT_FOUND));
    }


    /**
     * A detailed list of a specific product
     *
     * @param id
     */
    detailedList(id){
        // return this.WorkDayService.getAllWorkDays()
        // .then(response => Response.success(res, {
        //     message: `${response.length} work days were successfully fetched`,
        //     response
        //   }))
        // .catch(error => Response.failure(res, {
        // message: error.msg,
        // response: {},
        // }, HttpStatus.NOT_FOUND));
    }
 }

 module.exports = ProductController;