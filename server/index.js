// const express = require("express");
// const cors = require("cors");
//
// const recipes = [
//   {
//     id: "1",
//     createdDate: new Date().valueOf(),
//     name: "Frozen yoghurt",
//     description:
//       "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem blanditiis, hic id iste laboriosam magnam obcaecati quidem rerum voluptatem voluptatibus?",
//     children: [
//       {
//         id: "7",
//         createdDate: new Date().valueOf(),
//         name: "Frozen yoghurt with meat",
//         description:
//           "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem blanditiis, hic id iste laboriosam magnam obcaecati quidem rerum voluptatem voluptatibus?",
//         children: [],
//       },
//     ],
//   },
//   {
//     id: "2",
//     createdDate: new Date().valueOf(),
//     name: "Ice cream sandwich",
//     description:
//       "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem blanditiis, hic id iste laboriosam magnam obcaecati quidem rerum voluptatem voluptatibus?",
//     children: [],
//   },
//   {
//     id: "3",
//     createdDate: new Date().valueOf(),
//     name: "Eclair",
//     description:
//       "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem blanditiis, hic id iste laboriosam magnam obcaecati quidem rerum voluptatem voluptatibus?",
//     children: [],
//   },
// ];
//
// const app = express();
// const port = process.env.PORT || 8085;
//
// app.use(express.static(__dirname));
// app.use(cors());
//
// app.get("/api/recipe", (req, res) => {
//   res.send(recipes);
// });
//
// app.listen(port, () => {
//   console.log(`server listening on port ${port}`);
// });

require("dotenv").config();

const express = require("express");
const sequelize = require("./database");
const router = require("./routers");
const path = require("path");
const cors = require("cors");
const fileUpload = require("express-fileupload");
const errorHandler = require("./middleware/ErrorHandlingMiddleware.js");
const _PORT = process.env.PORT || 8085;
const app = express(),
  start = async () => {
    try {
      await sequelize.authenticate();
      await sequelize.sync();
      app.listen(_PORT, () =>
        console.log(`Server listening on port: ${_PORT}`)
      );
    } catch (e) {
      console.log(e);
    }
  };
start();

app.use(cors({ origin: true, credential: true }));
app.use(express.json());
app.use(express.static(path.resolve(__dirname, "static")));
app.use(fileUpload({}));
app.use("/api", router);

app.use(errorHandler);
