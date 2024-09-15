import NoteContext from "./noteContext";
import { useSate } from "react";
 

const NoteState = (props) =>{
    const host = "https://localhost:8080";
    const noteInitail =[];

    

    return(
        <NoteContext.Provider value={{}}>
            {props.children}
        </NoteContext.Provider>
    )
}

export default NoteState;