import { Connection } from "../index";
import { Query } from "../index";
import * as rp from "request-promise";
<<<<<<< HEAD
import { CharitiesAPI, CharitiesfromDB } from "../models/types";

export const all = () => 
 Query<Array<CharitiesfromDB>>(`SELECT * from charities`);

 export const one = (id: Number) =>
 Query<Array<CharitiesfromDB>>(`SELECT * from charities WHERE charities.id = ?`, [id]);
  
=======
import type { CharitiesAPI, CharitiesfromDB } from "../models/types";

export const all = () => Query<Array<CharitiesfromDB>>(`SELECT * FROM charities`);
>>>>>>> 3ce01ba2e2b4a10491e9b7019dfc6b8db7d357bd

export const post = async () => {
  try {
    rp(
<<<<<<< HEAD
      "https://api.data.charitynavigator.org/v2/Organizations?app_id=02dd71fc&app_key=2e6246f49b03b338c9a87646306bc87f&pageSize=900&rated=true&state=AL"
=======
      "https://api.data.charitynavigator.org/v2/Organizations?app_id=02dd71fc&app_key=2e6246f49b03b338c9a87646306bc87f&pageSize=1000&rated=true&state=AL"
>>>>>>> 3ce01ba2e2b4a10491e9b7019dfc6b8db7d357bd
    )
      .then((res) => JSON.parse(res))
      .then((res) =>
        res.map((charities: { charityName: ""; category: { categoryName: ""; categoryID: ""; }; cause: { causeName: ""; causeID: ""; }; mailingAddress: { city: ""; streetAddress1: ""; postalCode: ""; }; websiteURL: ""; mission: ""; tagLine: "";  currentRating: "" }) => {
          Query<Array<CharitiesAPI>>(
<<<<<<< HEAD
            `INSERT INTO Charities (charityName, categoryName, categoryID, causeName, causeID, city, streetAddress1, 
               postalCode, websiteURL, mission, tagline, cuurentRating) 
               VALUES(?)`
              )
              [
              charities.charityName,
              charities.category.categoryName,
              charities.category.categoryID,
              charities.cause.causeName,
              charities.cause.causeID,
              charities.mailingAddress.city,
              charities.mailingAddress.streetAddress1,
              charities.mailingAddress.postalCode,
              charities.websiteURL,
              charities.mission,
              charities.tagLine,
              charities.currentRating
=======
            `INSERT INTO charities (charity_name, category_name, category_id, cause_name, cause_id, city, streetAddress1, 
               postal_code, websiteURL, mission, tagline, EIN, rating) 
               VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`,
            [
              x.charityName,
              x.category.categoryName,
              x.category.categoryID,
              x.cause.causeName,
              x.cause.causeID,
              x.mailingAddress.city,
              x.mailingAddress.streetAddress1,
              x.mailingAddress.postalCode,
              x.websiteURL,
              x.mission,
              x.tagLine,
              x.organization.ein,
              x.currentRating.rating,
>>>>>>> 3ce01ba2e2b4a10491e9b7019dfc6b8db7d357bd
            ]
          })
      )
           
  } catch (err) {
    console.error(err);
  };
}
export default {
  all,
  one,
  post
};
