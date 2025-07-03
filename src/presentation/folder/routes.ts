import { Router } from "express";
import { FolderController } from "./controller";






export class FolderRoutes {

  static get routes(): Router {

    const router = Router();

    const controller = new FolderController();

    router.get('/test', (req, res) => {

      res.json({ msg: 'test downloads files' });
    })

    router.get( '/:filename', controller.findByName );

    return router;
  }
}


