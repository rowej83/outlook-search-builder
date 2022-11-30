import React from "react";
import DatePickerArea from "./Options/DatePickerArea";
import AttachmentsArea from "./Options/AttachmentsArea";
import { useRecoilState } from "recoil";
import { optionsState } from "./../store/atoms";
import { cloneDeep } from "lodash";

// import { MemoryRouter as Router, Switch, Route, Link } from "react-router-dom";
type Props = {};

export default function OptionsArea(props: Props) {
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
    <>
      <h2 className={"optionsHeader"}>Options </h2>
      <div className={"attachmentsArea"}>
        {/* <p>Include emails that:</p> */}
        <div className={"attachmentOptions"}>
          <div>
            <input
              type="checkbox"
              onChange={onChangeAttachmentValue}
              name="attachment"
              id="withOrWithOutAttachment"
              checked={optionsObject.hasAttachment}
            />
            <label htmlFor="withOrWithOutAttachment">
              Has Attachments only
            </label>
          </div>
        </div>
      </div>
      {/* <Router>
        <div className={"routerLinksContainer"}>
          <ul className={"routerLinks"}>
            <li>
              <Link to="/attachments">Attachments</Link>
            </li>
            <li>
              <Link to="/dateoptions">Date Range</Link>
            </li>
          </ul>
        </div>
        <Switch>
          <Route exact path="/attachments">
            <AttachmentsArea />
          </Route>
          <Route path="/dateoptions">
            <DatePickerArea />
          </Route>
        </Switch>
      </Router> */}
    </>
  );
}
