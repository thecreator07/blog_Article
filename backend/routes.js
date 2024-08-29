import Router from "express"
import { createCard, GetAllCard, GetCardDetails } from "./controllers.js";

const router = Router();

router.route('/cards').post(createCard)
router.route('/cards').get(GetAllCard)
router.route('/cards/:titleId').get(GetCardDetails)
export default router