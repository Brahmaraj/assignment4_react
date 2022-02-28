import React from "react";
import { useParams } from "react-router-dom";

const InputData = () => {
    const {selectedid} = useParams()
    return (
        <div>Input here {selectedid} </div>
    );
};

export default InputData;