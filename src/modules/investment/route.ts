import { authorize, authorizeApi } from "../../middlewares";
import { updateInvestment, getInvestment } from "./service";

const selfRealm = 100;

module.exports = function (router: any) {
  router.put("/investment/:space", authorizeApi, updateInvestment);
  router.get("/investment/:space", authorizeApi, getInvestment);
  // router.post("/auth/token", issueToken);
  // router.get("/auth/token/decode", authorizeApi, decodeToken);
  // router.post("/auth/logout", logout);
  // router.get("/auth/oa/session/:id", (req: any, res: any) =>
  //   validateSession(selfRealm, req, res)
  // );
};
