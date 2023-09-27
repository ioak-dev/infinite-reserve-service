const axios = require("axios");
import { intersection } from "lodash";
const ONEAUTH_API = process.env.ONEAUTH_API || "http://localhost:4010/api";

const AI_API = process.env.AI_API || "http://localhost:5003/api";

export const train_similarity_model = async (space: string) => {
  // console.log("admin training started");
  // console.log("admin populate started");
  // console.log("admin training and populate finished");
  return { "status": "success" };
};
