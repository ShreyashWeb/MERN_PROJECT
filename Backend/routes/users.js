const express = require("express");
const router = express.Router();

const {

    getUsers,
    getUser,
    updateUser,
    deleteUser,
} = require("../controller/userController");

const { protect } = require("../middleware/auth");

/**
 * All user routes below require a logged-in user.
 * `router.use(protect)` applies the `protect` middleware to EVERY route
 * defined after it in this file — so you don't have to repeat it.
 */

router.use(protect);
router.get("/", getUsers);
router.get("/:id", getUser);
router.put("/:id", updateUser);
router.delete("/:id", deleteUser);

module.exports = router;