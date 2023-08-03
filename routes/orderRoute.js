const express = require("express");
const {
  newOrder,
  getSingleOrder,
  myOrders,
  getAllOrders,
  updateOrder,
  deleteOrder,
  getAllRevenue,
} = require("../controllers/orderController");
const router = express.Router();

const { isAuthenticatedUser, authorizeRoles } = require("../middleware/auth");

router.route("/order/new").post(newOrder);

router.route("/order/:id").get(getSingleOrder);

router.route("/orders/me").get(myOrders);

router.route("/admin/orders").get(getAllOrders);

router.route("/admin/revenue").get(getAllRevenue);
router.route("/admin/order/:id").put(updateOrder).delete(deleteOrder);

module.exports = router;
