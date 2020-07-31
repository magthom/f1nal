import * as express from "express";
import DB from "./DB";

const router = express.Router();

router.get("/charities/get", async (req, res, next) => {
  try {
   let orgs = await DB.Charity.all();
   console.log(orgs)
    res.json(orgs);
  } catch (err) {
    next(err);
  }
});

router.get("/charities/get/:id", async (req, res, next) => {
  const id = Number(req.params.id)
  try {
    const [org] = await DB.Charity.one(id);
    res.json(org);
  } catch (err) {
    next(err);
  }
});

router.post("/charities", async (req, res, next) => {
  try {
    await DB.Charity.post();
    res.sendStatus(200);
  } catch (err) {
    console.error(err);
  }
});

export default router;
