import { Router } from 'express';
import {
  getDistributions,
  getDistributionSummaryByTownship,
  getRecentDistributions,
  getDistributionsByAidType,
  getTotalDistributions,
} from '../controllers/distribution_controllers';

const router = Router();

router.get('/', getDistributions);
router.get('/by-township', getDistributionSummaryByTownship);
router.get('/by-aid-type', getDistributionsByAidType);
router.get('/recent', getRecentDistributions);
router.get('/total', getTotalDistributions);

export default router;
