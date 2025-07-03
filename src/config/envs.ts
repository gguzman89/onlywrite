import { get } from "env-var";
import 'dotenv/config';






export const envs = {

  PORT: get('PORT').required().asPortNumber(),

  EXTERNAL_FILE_PATH: get('EXTERNAL_FILE_PATH').required().asString(),
}


