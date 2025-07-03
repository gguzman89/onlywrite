import { Router } from "express";
import { FolderRoutes } from "./folder/routes";






export class AppRoutes {

  static get routes(): Router {

    const router = Router();

    router.use( '/api/downloads', FolderRoutes.routes )

    return router
  }
}


