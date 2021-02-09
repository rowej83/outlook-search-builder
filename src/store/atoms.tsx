import { atom } from "recoil";

export type optionsStateInterface ={
  hasAttachments: string;
  hasRange: boolean;
  rangeStart: Date | null;
  rangeEnd: Date | null;
}

export const optionsState = atom({
  key: "optionsState",
  default: {
    hasAttachments: "withOrWithOutAttachment" as string,
    hasRange: false as boolean,
    rangeStart: new Date(new Date().setDate(new Date().getDate() - 1)) as Date | null, 
    rangeEnd: new Date() as Date | null
  }
});

export const inputValuesState = atom({
  key: "inputValuesState",
  default: [] as string[]
});

export const queryStringState = atom({
  key: "queryStringState",
  default: "" as string
});
