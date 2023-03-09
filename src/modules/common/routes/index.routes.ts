import { Router } from 'express';
import AuthRoute from '../../Authentication/routes/auth.routes';
import TrackRout from '../../Track/routes/track.routes';

const router = Router();

router.use(AuthRoute);
router.use(TrackRout);

export default router;
