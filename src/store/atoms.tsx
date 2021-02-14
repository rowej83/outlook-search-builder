import {atom} from "recoil";

export type optionsStateInterface = {
    hasAttachments: string;
    hasRange: boolean;
    rangeStart: Date | null;
    rangeEnd: Date | null;
}

export const optionsState = atom({
    key: "optionsState",
    default: {
        hasAttachments: "withOrWithOutAttachment",
        hasRange: false,
        rangeStart: new Date(new Date().setDate(new Date().getDate() - 1)),
        rangeEnd: new Date()
    } as optionsStateInterface
});

export const inputValuesState = atom({
    key: "inputValuesState",
    default: [] as string[]
});

export const queryStringState = atom({
    key: "queryStringState",
    default: "" as string
});

export const selectedOptionsAreaState = atom({
    key: 'selectedOptionsAreaState',
    default: "attachments" as string
})