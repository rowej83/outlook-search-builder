import React from "react";
import DatePickerArea from "./Options/DatePickerArea";
import AttachmentsArea from "./Options/AttachmentsArea";
import {selectedOptionsAreaState} from "../store/atoms";
import {useRecoilState} from "recoil";


type Props = {};

export default function OptionsArea(props: Props) {
    const [selectedOptionsArea, setSelectedOptionsArea] = useRecoilState(selectedOptionsAreaState);
    const styles = {
        attachmentsArrow: {
 "visibility":selectedOptionsArea==="attachments"?"visible":"hidden"
        }as React.CSSProperties,
        attachmentLinkBackGround: {
            "background-color":selectedOptionsArea==="attachments"?"#252525":"#636363"
        }as React.CSSProperties,
        dataRangeLinkBackGround: {
            "background-color":selectedOptionsArea==="dateRange"?"#252525":"#636363"
        }as React.CSSProperties,
        dataRangeArrow: {
            "visibility":selectedOptionsArea==="dateRange"?"visible":"hidden"
        }as React.CSSProperties,


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
                        <div className={"optionsArrow"} style={styles.attachmentsArrow}>ˇ</div>
                    </li>
                    <li style={styles.dataRangeLinkBackGround}>
                        <span onClick={() => {
                            setSelectedOptionsArea('dateRange')
                        }}>Date Range</span>
                        <div className={"optionsArrow"} style={styles.dataRangeArrow}>ˇ</div>
                    </li>
                </ul>
            </div>

            {selectedOptionsArea === "attachments" && <AttachmentsArea/>}
            {selectedOptionsArea === "dateRange" && <DatePickerArea/>}

        </>
    );
}
