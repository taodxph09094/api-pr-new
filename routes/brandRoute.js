const express = require("express");
const {
  deleteBrand,
  createBrand,
  getBrand,
  updateBrand,
} = require("../controllers/brandController");
const { isAuthenticatedUser, authorizeRoles } = require("../middleware/auth");

const router = express.Router();
router.route("/admin/brand/create").post(createBrand);
router.route("/admin/brand").get(getBrand);
router.route("/admin/brand/:id").put(updateBrand).delete(deleteBrand);

module.exports = router;
