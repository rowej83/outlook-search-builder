import React from "react";
import DatePickerArea from "./Options/DatePickerArea";
import AttachmentsArea from "./Options/AttachmentsArea";

import {MemoryRouter as Router, Switch, Route, Link} from "react-router-dom";

type Props = {};

export default function OptionsArea(props: Props) {
    return (
        <>
            <h2 className={"optionsHeader"}>Options </h2>

            <Router>
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
                        <AttachmentsArea/>
                    </Route>
                    <Route path="/dateoptions">
                        <DatePickerArea/>
                    </Route>
                </Switch>
            </Router>
        </>
    );
}
