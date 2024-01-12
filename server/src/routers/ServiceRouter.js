import express from "express"
import { createService, getService, getServices, updateService } from "../controllers/ServiceController.js"
import { deleteModel } from "mongoose"

const router = express.Router()

router.get("/", getServices)
router.get("/:id", getService)
router.post("/", createService)
router.put("/:id", updateService)
router.delete("/:id", deleteModel)

export default router
