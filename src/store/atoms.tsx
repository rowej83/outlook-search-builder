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
    rangeStart: new Date(new Date().setDate(new Date().getDate() - 1)),
    rangeEnd: new Date()
  }
});

export const inputValuesState = atom({
  key: "inputValuesState",
  default: []
});

export const queryStringState = atom({
  key: "queryStringState",
  default: ""
});
