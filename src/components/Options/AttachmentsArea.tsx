import React from "react";
import { useRecoilState } from "recoil";
import { optionsState } from "../../store/atoms";

import { cloneDeep } from "lodash";
type Props = {};
export default function AttachmentsArea(props: Props) {
  const [optionsObject, setOptionsObject] = useRecoilState(optionsState);
  function onChangeAttachmentValue(
    e: React.ChangeEvent<HTMLInputElement>
  ): void {
    let tempOptionsObject = cloneDeep(optionsObject);
    tempOptionsObject.hasAttachment = !optionsObject.hasAttachment;
    console.log(tempOptionsObject);
    setOptionsObject(tempOptionsObject);
  }
  return (
    <div className={"attachmentsArea"}>
      <p>Include emails that:</p>
      <div className={"attachmentOptions"}>
        <div>
          <input
            type="checkbox"
            onChange={onChangeAttachmentValue}
            name="attachment"
            id="withOrWithOutAttachment"
            checked={optionsObject.hasAttachment}
          />
          <label htmlFor="withOrWithOutAttachment">Has Attachments</label>
        </div>
      </div>
    </div>
  );
}
