import { Router } from 'express';
import {
  getTownships,
  getTownshipSupportStats,
} from '../controllers/township_controllers';

const router = Router();

router.get('/', getTownships);
router.get('/support-stats', getTownshipSupportStats);

export default router;
