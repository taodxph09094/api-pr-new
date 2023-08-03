const express = require("express");
const {
  createSupplier,
  getSupplier,
  updateSupplier,
  deleteSupplier,
} = require("../controllers/supplierController");
const { isAuthenticatedUser, authorizeRoles } = require("../middleware/auth");

const router = express.Router();
router.route("/admin/supplier/create").post(createSupplier);
router.route("/admin/supplier").get(getSupplier);
router.route("/admin/supplier/:id").put(updateSupplier).delete(deleteSupplier);

module.exports = router;
