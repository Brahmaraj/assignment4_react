import React from "react";
import { useParams } from "react-router-dom";

const EditData = () => {
    const {selectedid} = useParams();
        return (
            <>
            <div>editable Data about student {selectedid}</div>
            </>
        );
    };

export default EditData;