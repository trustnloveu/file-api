const pool = require("../utils/db/mysql");
//* Logger
// const { logger } = require("../utils/logger/winston");

/*********************************************************************************/
// sample controller
/*********************************************************************************/
exports.sample = async (req, res, next) => {
  const sample = {
    key: "value",
  };

  try {
    let result = await pool.query("select * from TEMP");
    console.log(result);
    console.log("sample");
  } catch (error) {
    console.log(error);
    return res.send({ error });
  }

  return res.send(sample);
};
