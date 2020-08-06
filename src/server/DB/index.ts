import * as mysql from "mysql";
import config from "../config";
import Charity from "./queries/charity";

export const Connection = mysql.createConnection(config.mysql);

export const Query = <T = any>(query: string, values?: any) => {
  return new Promise<T>((resolve, reject) => {
    Connection.query(query, values, (err, results) => {
      if (err) {
        return reject(err);
      } else {
        return resolve(results);
      }
    })
  });
};

export default {
  Charity
};