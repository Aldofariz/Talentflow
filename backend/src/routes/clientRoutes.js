import { Router } from "express";
import { clientController } from "../controllers/clientControllers.js";

export const router = Router();

router.get("/clients", clientController.get);
router.post("/clients", clientController.create);
router.put("/clients/:id", clientController.update);
router.delete("/clients/:id", clientController.delete);
router.get("/clients/search", clientController.search);

export default router;
