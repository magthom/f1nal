import { Router } from 'express';

const router = Router();
import DB from "../../DB";

// get all route is localhost:3000/charities
router.get("/", async (req, res, next) => {
  try {
   let orgs = await DB.Charity.all();
   console.log(orgs)
    res.json(orgs);
  } catch (err) {
    next(err);
  }
});

// get one route is localhost:3000/charities/id
router.get("/:id", async (req, res, next) => {
  const id = Number(req.params.id)
  try {
    const [org] = await DB.Charity.one(id);
    res.json(org);
  } catch (err) {
    next(err);
  }
});

router.post("/", async (req, res, next) => {
  try {
    await DB.Charity.post();
    res.sendStatus(200);
  } catch (err) {
    console.error(err);
  }
});


// router.get('/:id?', async (req, res) => {
//     const id = Number(req.params.id);
//     try {
//         if (id) {
//             res.json({ id, msg: 'get one test'});
//         } else {
//             res.json({ msg: 'get all test'});
//         }        
//     } catch (error) {
//         console.log(error);
//         res.status(500).json({ msg: 'internal server errrrrrr', error });
//     }
// });

// router.post('/', async (req, res) => {
//     const newBody = { ... req.body };
//     try {
//         res.json({ msg: 'post test', bodyTest: newBody });
//     } catch (error) {
//         console.log(error);
//         res.status(500).json({ msg: 'internal server errrrrrr', error });
//     }
// });

// router.put('/:id', async (req, res) => {
//     const id = Number(req.params.id);
//     const editBody = { ... req.body };
//     try {
//         res.json({ msg: 'put test', testBody: editBody});
//     } catch (error) {
//         console.log(error);
//         res.status(500).json({ msg: 'internal server errrrrrr', error });
//     }
// });

// router.delete('/:id', async (req, res) => {
//     const id = Number(req.params.id);
//     try {
//         res.json({ msg: 'delete test'})
//     } catch (error) {
//         console.log(error);
//         res.status(500).json({ msg: 'internal server errrrrrr', error });
//     }
// });

export default router;