const axios = require("axios");
const ONEAUTH_API = process.env.ONEAUTH_API || "http://localhost:4010/api";
import { investmentCollection, investmentSchema } from "./model";
const { getCollection } = require("../../lib/dbutils");

export const updateInvestment = async (
  space: string,
  data: any,
  userId?: string
) => {
  const model = getCollection(space, investmentCollection, investmentSchema);
  if (data._id) {
    const response = await model.findByIdAndUpdate(
      data._id,
      {
        ...data,
      },
      { new: true, upsert: true }
    );
    return response;
  }

  return await model.create(data);
};

export const getInvestment = async (space: string) => {
  const model = getCollection(space, investmentCollection, investmentSchema);

  return await model.find();
};
