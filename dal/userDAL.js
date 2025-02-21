import * as mongoDAL from "../dal/mongoDAL.js";
import { appConfig } from "../config/config.js";

const selected = appConfig.db ==  "mongo"?mongoDAL:null;

export const {findUserByName,registerUser} = selectedDAL;