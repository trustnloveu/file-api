// const morgan = require("morgan");

/************************************************************
 * Express
 ************************************************************/
const express = require("express");
const app = express();

/************************************************************
 * Config
 ************************************************************/
require("./config/config"); // 프로퍼티
// app.set("view engine", "ejs");
// app.set("views", "views");

/************************************************************
 * Logger ( winston )
 ************************************************************/
// const { logger, stream } = require("./utils/logger/winston");

/************************************************************
 * Morgan
 ************************************************************/
// app.use(
//   morgan(
//     (tokens, req, res) => {
//       return [
//         `[${tokens.method(req, res)}]`,
//         `${tokens.url(req, res)}`,
//         `${tokens.status(req, res)}`,
//       ].join(" ");
//     },
//     { stream }
//   )
// );

/************************************************************
 * Swagger
 ************************************************************/
// const { swaggerUi, specs } = require("./utils/swagger");
// app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(specs));

/************************************************************
 * Sequalize
 ************************************************************/
// const sequelize = require("./util/db");

/************************************************************
 * Model
 ************************************************************/
// const Product = require("./models/product-sequelize");

/************************************************************
 * Controller
 ************************************************************/
// const sampleController = require("./src/controllers/sample");

/************************************************************
 * Router
 ************************************************************/
const sampleRoute = require("./src/routes/sample");

/************************************************************
 * Util
 ************************************************************/
// app.use(express.json());
app.use(express.urlencoded({ extended: false }));
// app.use(express.static(path.join(__dirname, "public")));

/************************************************************
 * Middleware
 ************************************************************/
// app.use((req, res, next) => {
//   const web3 = new Web3(process.env.NODE_RPC); // http://192.168.0.111:8545

//   if (!web3) {
//     logger.error("Failed to access Blockchain");
//     res.send("Failed to access Blockchain.");
//   }

//   const nftContract = new web3.eth.Contract(
//     UNFT.abi,
//     process.env.CONTRACT_ADDRESS
//   );

//   req.web3 = web3;
//   req.nftContract = nftContract;

//   logger.info("Successed to load contract info");
//   next();
// });

/************************************************************
 * Navigation
 ************************************************************/
app.use("/", sampleRoute);

// 404 페이지
// app.use(errorController.get404);

/************************************************************
 * DB Connection
 ************************************************************/
const mysql = require("./src/utils/db/mysql");

// sequelize
//   .sync() // { force: true }
//   .then(() => {
//     return User.findByPk(1);
//   })
//   .then((user) => {
//     if (!user) {
//       return User.create({ name: "Austin", email: "test@test.com" });
//     }
//     return Promise.resolve(user); // just `user` is fine
//   })
//   .then((user) => {
//     return Cart.findOne({ where: { userId: user.id } }).then((cart) => {
//       if (!cart) {
//         return user.createCart();
//       }
//       return cart;
//     });
//   })
//   .then((cart) => {
//     app.listen(3000);
//   })

//   .catch((error) => {
//     console.log(error);
//   });

/************************************************************
 * Port
 ************************************************************/
// logger.info(`Current Running Environment ::: ${process.env.NODE_ENV}`);

app.listen(process.env.PORT || 3000, () => {
  //   logger.info(`Listening Port ::: ${process.env.PORT || 3000}`);
  console.log(`Listening Port ::: ${process.env.PORT || 3000}`);
});
