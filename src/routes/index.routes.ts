import { Router } from 'express';
import AuthRoute from './auth.routes';
import TrackRout from './track.routes';

const router = Router();

router.use(AuthRoute);
router.use(TrackRout);

export default router;
