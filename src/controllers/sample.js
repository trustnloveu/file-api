//* Logger
// const { logger } = require("../utils/logger/winston");

/*********************************************************************************/
// sample controller
/*********************************************************************************/
exports.sample = async (req, res, next) => {

    const sample = {
        key: "value"
    }
  
    try {
      console.log('sample')
    } catch (error) {
      return res.send({ error });
    }
  
    return res.send(sample);
  };