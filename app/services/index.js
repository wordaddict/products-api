class ProductService {
    /**
     *
     * @param {*} logger Logger Object
     * @param sql
     */
  constructor(logger, mongo) {
    this.logger = logger;
    this.mongo = mongo;
  }

  /**
     * Update work day based on calculated work day per month
     *
     * @param param
     */
  addNewProduct(param){
    // // Return test data till connection is established
    // return new Promise((resolve, reject) => {
    //   const result = await this.sql.query`SELECT TOP 10 [Quantity] FROM [ibadan2009-LSR].[dbo].[ULTRA TRADE COMPANY LTD IBADAN$Item Ledger Entry]`
    //   this.logger.info(result);

    //   const data = {
    //     jan: 400
    //   }
    //   return resolve(data);
    // })
  }

    /**
     * Get all work days
    */

     getAllWorkDays(){
      // Return test data till connection is established
      return new Promise((resolve, reject) => {
        const data = {
          jan: 400,
          feb: 4890,
          march: 543
        }
        return resolve(data);
      });
     }
};

module.exports = ProductService;