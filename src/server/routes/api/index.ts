import { Router } from 'express';
import charitiesRouter from './charities';

const router = Router();

router.use('/charities', charitiesRouter);

export default router;

//this routes api index links to routes/index via api path