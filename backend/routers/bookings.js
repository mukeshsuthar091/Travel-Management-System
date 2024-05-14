import express from "express";
import { verifyUser } from "../utils/verifyToken.js";
import {
  createBooking,
  getAllBooking,
  getBooking,
  getUserBooking,
} from "../controllers/bookingController.js";

const router = express.Router();

router.post("/", verifyUser, createBooking);
router.get("/:id", verifyUser, getBooking);
// router.get("/", verifyUser, getAllBooking);
router.get("/", verifyUser, getUserBooking);

export default router;
