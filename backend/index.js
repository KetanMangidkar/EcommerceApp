const express = require("express");
const app = express();
const connect = require("./src/configs/db")
const cors = require("cors");
require('dotenv').config()

app.use(cors())
app.use(express.json());

const userController = require("./src/controllers/user.controller");
const brandController = require("./src/controllers/brand.controller");
const productController = require("./src/controllers/product.controller");
const categoryController = require("./src/controllers/category.controller");
const orderController = require("./src/controllers/order.controller");
const { register, login } = require("./src/controllers/auth.controller")

app.use("/users", userController);
app.use("/brands", brandController);
app.use("/products", productController);
app.use("/category", categoryController);
app.use("/orders", orderController);
app.post("/register", register)
app.post("/login", login)

app.listen(process.env.PORT, async () => {
    try {
        await connect();
        console.log("connected to server");
    } catch (error) {
        console.log({ error: error.message })
    }
})