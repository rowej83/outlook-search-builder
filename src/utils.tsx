type optionsObjectType = {
  hasAttachment: boolean;
  hasRange: boolean;
  rangeStart: Date;
  rangeEnd: Date;
};

export function makeQuery(
  items: Array<string>,
  optionsObject: optionsObjectType
): string {
  let returnedString: string = "";
  if (items.length === 0) {
    return "empty query";
  }
  if (items.length === 1) {
    console.log("single item");

    console.log(optionsObject.hasAttachment);
    if (optionsObject.hasAttachment) {
      returnedString = `((${items[0]})`;
      return returnedString + ` AND hasattachments:yes)`;
    } else {
      return `(${items[0]})`;
    }
  }
  // not a single item so loop it
  returnedString = `(`;
  for (let i = 0; i < items.length; i++) {
    if (i === items.length - 1) {
      //last
      returnedString += `(${items[i]}))`;
    } else {
      returnedString += `(${items[i]}) OR `;
    }
  }
  if (optionsObject.hasAttachment) {
    returnedString = `(hasattachments:yes AND ` + returnedString + `)`;
  }
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
