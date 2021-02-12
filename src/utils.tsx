

interface optionsObjectType {
    hasAttachments: string;
    hasRange: boolean;
    rangeStart: Date | null;
    rangeEnd: Date | null;
};

export function attachmentsCheck(inputString: string, optionsObject: optionsObjectType): string {

    switch (optionsObject.hasAttachments) {

        case "withOrWithOutAttachment":
            return inputString;
            break;
        case "withAttachment":
            return inputString + ` AND hasattachments:yes`;
            break;
        case "withOutAttachment":
            return inputString + ` AND hasattachments:no`;
            break;
    }
    return inputString;
}

export function getFormattedDate(date: Date): string {
    let year = date.getFullYear();
    let month = (1 + date.getMonth()).toString().padStart(2, '0');
    let day = date.getDate().toString().padStart(2, '0');

    return month + '/' + day + '/' + year;
}

export function dateRangeCheck(inputString: string, optionsObject: optionsObjectType): string {


    if (optionsObject.hasRange) {
        inputString += ` AND (received:>=${getFormattedDate(optionsObject.rangeStart as Date)} AND received:<=${getFormattedDate(optionsObject.rangeEnd as Date)})`;
    }

    return inputString;
}

export function makeQuery(
    items: Array<string>,
    optionsObject: optionsObjectType
): string {
    let returnedString: string = "";
    if (items.length === 0) {
        return "empty query";
    }
    if (items.length === 1) {
        returnedString = `(${items[0]})`;
        returnedString = attachmentsCheck(returnedString, optionsObject);
        returnedString = dateRangeCheck(returnedString, optionsObject);
        return returnedString;
    }

    for (let i = 0; i < items.length; i++) {
        if (i === items.length - 1) {
            //last
            returnedString += `(${items[i]})`;
        } else {
            returnedString += `(${items[i]}) OR `;
        }
    }
    returnedString = attachmentsCheck(returnedString, optionsObject);
    returnedString = dateRangeCheck(returnedString, optionsObject);
    return returnedString;
}

// for date ranged syntax: (received:>=10/1/20 AND received:<=10/5/20)

// for attachment hasattachment:yes

// hasflag:true

// exact: Items containing the exact phrase bob and not the variations such as bobby or bobbin. To search for an exact string, you must use quotation marks.
// read:no

// export function makeQuery(
//   items: Array<string>,
//   optionsObject: optionsObjectType
// ): string {
//   let returnedString: string = "";
//   if (items.length === 0) {
//     return "empty query";
//   }
//   if (items.length === 1) {
//     returnedString = `(${items[0]})`;
//     if (optionsObject.hasAttachments) {
//       return returnedString + ` AND hasattachments:yes`;
//     } else {
//       return returnedString;
//     }
//   }

//   for (let i = 0; i < items.length; i++) {
//     if (i === items.length - 1) {
//       //last
//       returnedString += `(${items[i]})`;
//     } else {
//       returnedString += `(${items[i]}) OR `;
//     }
//   }
//   if (optionsObject.hasAttachments) {
//     returnedString += ` AND hasattachments:yes`;
//   }
//   return returnedString;
// }
