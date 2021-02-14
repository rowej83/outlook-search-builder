import React from "react";
import DatePickerArea from "./Options/DatePickerArea";
import AttachmentsArea from "./Options/AttachmentsArea";
import {selectedOptionsAreaState} from "../store/atoms";
import {useRecoilState} from "recoil";


type Props = {};

export default function OptionsArea(props: Props) {
    const [selectedOptionsArea, setSelectedOptionsArea] = useRecoilState(selectedOptionsAreaState);
    const styles = {

        attachmentLinkBackGround: {
            "background-color": selectedOptionsArea === "attachments" ? "#252525" : "#636363"
        } as React.CSSProperties,
        dataRangeLinkBackGround: {
            "background-color": selectedOptionsArea === "dateRange" ? "#252525" : "#636363"
        } as React.CSSProperties,


    }
    return (
        <>
            <h2 className={"optionsHeader"}>Options </h2>


            <div className={"routerLinksContainer"}>
                <ul className={"routerLinks"}>
                    <li style={styles.attachmentLinkBackGround}>
                        <span onClick={() => {
                            setSelectedOptionsArea('attachments')
                        }}>Attachments</span>

                    </li>
                    <li style={styles.dataRangeLinkBackGround}>
                        <span onClick={() => {
                            setSelectedOptionsArea('dateRange')
                        }}>Date Range</span>

                    </li>
                </ul>
            </div>

            {selectedOptionsArea === "attachments" && <AttachmentsArea/>}
            {selectedOptionsArea === "dateRange" && <DatePickerArea/>}

        </>
    );
}
