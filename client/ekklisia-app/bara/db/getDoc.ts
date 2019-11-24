import { Formula } from "@barajs/formula";
import { exec, query, find } from "@barajs/rxdb";

export const getDoc = (formula: Formula | string) => async (
  payload: any,
  ...rest
) => {
  let qId = formula;
  if (typeof formula === "function") {
    qId = await formula(payload, ...rest);
  }
  return await exec(query("versions", find({ _id: { $eq: qId } })))(
    payload,
    ...rest
  );
};
