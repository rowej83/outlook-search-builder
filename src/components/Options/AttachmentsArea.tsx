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
    tempOptionsObject.hasAttachments = e.target.value;
    setOptionsObject(tempOptionsObject);
  }
  return (
    <div className={"attachmentsArea"}>
      <p>Include emails that:</p>
      <div className={"attachmentOptions"} onChange={onChangeAttachmentValue}>
        <div>
          <input
            type="radio"
            value="withOrWithOutAttachment"
            name="attachment"
            id="withOrWithOutAttachment"
            checked={optionsObject.hasAttachments === "withOrWithOutAttachment"}
          />
          <label htmlFor="withOrWithOutAttachment">
            Regardless if it has attachment
          </label>
        </div>
        <div>
          <input
            type="radio"
            id="withAttachment"
            value="withAttachment"
            name="attachment"
            checked={optionsObject.hasAttachments === "withAttachment"}
          />
          <label htmlFor="withAttachment">
            Only if it contains an attachment
          </label>
        </div>
        <div>
          <input
            type="radio"
            id="withOutAttachment"
            value="withOutAttachment"
            name="attachment"
            checked={optionsObject.hasAttachments === "withOutAttachment"}
          />
          <label htmlFor="withOutAttachment">
            Do not contain an attachment
          </label>
        </div>
      </div>
    </div>
  );
}
