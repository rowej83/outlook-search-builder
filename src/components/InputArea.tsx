import React, {ReactNode} from "react";
import {useRecoilState} from "recoil";
import {
    optionsState,
    inputValuesState,
    queryStringState
} from "../store/atoms";
import {selectedOptionsAreaState} from "../store/atoms";
import OptionsArea from "./OptionsArea";
import {cloneDeep} from "lodash";
import {makeQuery} from "../utils";

export default function InputArea() {
    const textAreaRef = React.useRef<HTMLTextAreaElement | null>(null);
    const [selectedOptionsArea, setSelectedOptionsArea] = useRecoilState(selectedOptionsAreaState);
    const [optionsObject, setOptionsObject] = useRecoilState(optionsState);
    const [textArea, setTextArea] = React.useState("");
    const [inputValues, setInputValues] = useRecoilState(inputValuesState);
    const [queryString, setQueryString] = useRecoilState(queryStringState);

    const [submitButtonText, setSubmitButtonText] = React.useState(
        "Generate Query"
    );

    const handleOnClick = () => {
        if (textArea.length < 1) {
            if (textAreaRef.current) {
                textAreaRef.current.focus();
            }
            return;
        }
        setSubmitButtonText("Query copied to your clipboard!");

        let formatValues: string = textArea.trim();
        let formatValuesArray: Array<string> = formatValues.split("\n");

        formatValuesArray = formatValuesArray.map((item: string) => item.trim());
        let filtered: Array<string> = formatValuesArray.filter(function (
            el: string
        ) {
            return el !== "";
        });
        filtered = filtered.filter((item: string, pos: number) => {
            return filtered.indexOf(item) === pos;
        });

        let endingQueryResult: string = makeQuery(filtered, optionsObject);
        setInputValues(filtered);
        setQueryString(endingQueryResult);
        navigator.clipboard.writeText(endingQueryResult).catch(e => {
            console.log('error: ', e);
        });

        setTimeout(() => {
            setSubmitButtonText("Generate Query");
        }, 2000);
    };

// TODO refactor resetquery and showitems in query to utils.js
    function resetQuery() {
        setTextArea("");
        setInputValues([]);
        setQueryString("");

        let tempOptionsObject = cloneDeep(optionsObject);
        tempOptionsObject.hasAttachments = "withOrWithOutAttachment";
        tempOptionsObject.hasRange = false;
        tempOptionsObject.rangeStart = new Date(
            new Date().setDate(new Date().getDate() - 1)
        );
        tempOptionsObject.rangeEnd = new Date();
        setOptionsObject(tempOptionsObject);

        if (textAreaRef.current) {
            textAreaRef.current.focus();
        }
        //    console.log(history);
        setSelectedOptionsArea('attachments');
    }

    function showItemsInQuery():((Array<JSX.Element | string>)| void) {
        let buffer: Array<JSX.Element | string> = [];
        buffer.push(<p>List of items in Query: ({inputValues.length})</p>);

        if (inputValues.length > 0) {
            inputValues.forEach((item) => {
                buffer.push(<p className={"inputItem"}>{item}</p>);
            });

            return buffer;
        } else {
            return;
        }
    }

    function showResultingQuery():((Array<JSX.Element | string>)| void)  {
        let buffer: Array<JSX.Element | string> = [];
        if (inputValues.length === 0) return;
        buffer.push(<p>Query copied to your clipboard:</p>);
        buffer.push(queryString);
        return buffer;
    }

    // @ts-ignore
    // @ts-ignore
    // @ts-ignore
    return (
        <>
      <textarea
          ref={textAreaRef}
          className="inputTextArea"
          rows={10}
          value={textArea}
          onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) => {
              setTextArea(e.target.value);
          }}
      />
            <br/>
            <OptionsArea/>
            <br/>
            <button className={"submit-query-button"} onClick={handleOnClick}>
                {submitButtonText}
            </button>

            <br/>
            <small
                className={"linkStyle"}
                onClick={() => {
                    resetQuery();
                }}
            >
                Reset Input
            </small>
            {inputValues && Boolean(inputValues.length) && (
                <>
                    <p className={"resultsHeading"}>Resulting Query Info</p>
                    <div className={"two-column bg-grey "}>
                        <div>{showItemsInQuery() as ReactNode}</div>
                        <div>{showResultingQuery() as ReactNode}</div>
                    </div>
                </>
            )}
        </>
    );
}
