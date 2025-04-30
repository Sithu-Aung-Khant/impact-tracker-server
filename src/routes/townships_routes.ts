import { Router } from 'express';
import { getTownships } from '../controllers/township_controllers';

const router = Router();

router.get('/', getTownships);

export default router;
