import {Router} from 'express';

const router = Router();

import * as videoCtrl from '../controller/videoController';

router.get('/', videoCtrl.getVideos)
      .get('/:id', videoCtrl.getVideo)
      .post('/', videoCtrl.createVideos)
      .put('/:id', videoCtrl.updateVideos)
      .delete('/:id', videoCtrl.deleteVideos);


export default router;