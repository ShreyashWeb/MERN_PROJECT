const express = require("express");
const router = express.Router();

const {
    createWood,
    getWoods,
    getWood,
    updateWood,
    deleteWood,
} = require("../controller/woodController");

const { protect } = require("../middleware/auth");

router.use(protect);
router.post("/", createWood); // Create a new wood entry
router.get("/", getWoods); // Get all wood entries
router.get("/:id", getWood); // Get a specific wood entry by ID
router.put("/:id", updateWood); // Update a specific wood entry by ID
router.delete("/:id", deleteWood); // Delete a specific wood entry by ID

module.exports = router; // Export the router to be used in other parts of the application