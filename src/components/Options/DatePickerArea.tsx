import React from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import {useRecoilState} from "recoil";
import {optionsState} from "../../store/atoms";
import {cloneDeep} from "lodash";

type Props = {};

export default function DatePickerArea(props: Props) {
    const [optionsObject, setOptionsObject] = useRecoilState(optionsState);

    const styles = {
        dataContainer: {
            display: optionsObject.hasRange ? "block" : "none"
        }
    };
    return (
        <>
            <div className={"checkIfHasDateRangeArea"}>
                <div>
                    <input
                        type="checkbox"
                        id="enableDateRange"
                        checked={optionsObject.hasRange}
                        onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                            let optionsCopy = cloneDeep(optionsObject);
                            optionsCopy.hasRange = e.target.checked;
                            setOptionsObject(optionsCopy);
                        }}
                    />
                    <label htmlFor="enableDateRange">
                        Check to use date ranges for the search
                    </label>
                </div>
            </div>
            <div className={"dateContainer"} style={styles.dataContainer}>
                <div className={"dateInputGroup"}>
                    <label htmlFor="startDate" className={"dateLabel"}>
                        Date range start:
                    </label>
                    <DatePicker
                        name="startDate"
                        selected={optionsObject.rangeStart}
                        onChange={(date) => {
                            let tempOptionsObject = cloneDeep(optionsObject);
                            // Cast to ignore the [Date, Date] and null cases
                            tempOptionsObject.rangeStart = date as Date;
                            setOptionsObject(tempOptionsObject);
                        }}
                        selectsStart
                        startDate={optionsObject.rangeStart}
                        endDate={optionsObject.rangeEnd}
                    />
                </div>
                <div className={"dateInputGroup"}>
                    <label className={"dateLabel"}>Date range end: </label>
                    <DatePicker
                        selected={optionsObject.rangeEnd}
                        onChange={(date) => {
                            let tempOptionsObject = cloneDeep(optionsObject);
                            // Cast to ignore the [Date, Date] and null cases
                            tempOptionsObject.rangeEnd = date as Date;
                            setOptionsObject(tempOptionsObject);
                        }}
                        selectsEnd
                        startDate={optionsObject.rangeStart}
                        endDate={optionsObject.rangeEnd}
                        minDate={optionsObject.rangeStart}
                    />
                </div>
            </div>
        </>
    );
}
