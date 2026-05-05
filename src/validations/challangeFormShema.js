import * as Yup from "yup";

export const challangeFormShema = Yup.object().shape({
  nickname:Yup.string().trim().min(4,"min 4 symbol").required("required"),
  age: Yup.number().integer().min(10 ).max(18).required("required"),
  email: Yup.string().trim().email().required("required"),
  direction: Yup.string().default("content-creator").required("required"),
  level: Yup.string().default("newbie").required("required"),
  about: Yup.string().trim().required(),
  ready: Yup.boolean(),
});
