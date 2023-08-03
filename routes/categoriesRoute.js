const express = require("express");
const {
  createCategory,
  getCategory,
  updateCategory,
  deleteCategory,
} = require("../controllers/categoriesController");

const { isAuthenticatedUser, authorizeRoles } = require("../middleware/auth");

const router = express.Router();
router
  .route("/admin/categories/create")
  .post(
    createCategory
  );
router.route("/admin/categories").get(getCategory);
router
  .route("/admin/categories/:id")
  .put( updateCategory)
  .delete(
    deleteCategory
  );

module.exports = router;
