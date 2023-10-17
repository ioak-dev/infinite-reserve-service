import { validateMandatoryFields } from "../../lib/validation";

import * as Helper from "./helper";

export const updateInvestment = async (req: any, res: any) => {
  const userId = req.user.user_id;
  const investment: any = await Helper.updateInvestment(
    req.params.space,
    req.body,
    userId
  );
  res.status(200);
  res.send(investment);
  res.end();
};

export const getInvestment = async (req: any, res: any) => {
  const userId = req.user.user_id;
  const investmentList: any = await Helper.getInvestment(req.params.space);
  res.status(200);
  res.send(investmentList);
  res.end();
};
