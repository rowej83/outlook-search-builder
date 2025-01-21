import { atom } from "recoil";

// type optionsStateInterface = {
//   hasAttachment: boolean;
//   hasRange: boolean;
//   rangeStart: Date;
//   rangeEnd: Date;
// };

export const optionsState = atom({
  key: "optionsState",
  default: {
    hasAttachment: false,
    hasRange: false,
    includeEmail: false,
    rangeStart: new Date(new Date().setDate(new Date().getDate() - 1)),
    rangeEnd: new Date()
  }
});
// @ts-ignore
export const inputValuesState = atom({
  key: "inputValuesState",
  default: []
});
// @ts-ignore
export const queryStringState = atom({
  key: "queryStringState",
  default: ""
});
