import e, { Request, Response, Router } from "express";
import { envs } from "../../config/envs";
import * as path from 'path';
import * as fs from 'fs';






export class FolderController {

  constructor() {}

    findByName = async ( req: Request, res: Response ) => {

    const { filename } = req.params;

    if( filename.startsWith( '..' )) res.status(400).json({ msg: 'Autoshop: filename dont start with ..' });

    const requestedFilePath = path.join(envs.EXTERNAL_FILE_PATH, filename);
    const normalizedPath = path.normalize( requestedFilePath );

    if( !normalizedPath.startsWith( envs.EXTERNAL_FILE_PATH )) res.status(403).json({ msg: 'Autoshop: Acceso denegado: Intento de path traversal.'});

    try {

      await fs.promises.access( normalizedPath, fs.constants.F_OK )

      res.setHeader('Content-Disposition', `attachment; filename=${filename}`)

      res.download( normalizedPath, (err) => {

        if( err ) {
          
          res.status(404).send('Autoshop: File dont exist')
        } else { res.status(500).send('Autoshop: Server internal error') }
      })

    } catch (error) {
      console.error( error );
      res.status(404).send('Autoshop: file denied access')
    }
  }
}


