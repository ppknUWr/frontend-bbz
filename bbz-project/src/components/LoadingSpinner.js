import React from "react";
import { makeStyles } from "@material-ui/core/styles";

const useSpinnerStyles = makeStyles({
    "@keyframes spin": {
        "0%": {
            transform: "rotate(0deg)"
        },
        "100%": {
            transform: "rotate(360deg)"
        },
    },
    loader: {
        border: "0.5em solid rgba(255, 255, 255, 0.5)",
        borderTop: "0.5em solid blueviolet",
        borderRadius: "50%",
        position: "relative",
        margin: "20px auto",
        textIndent: "-9999em",
        width: "3em",
        height: "3em",
        animation: "$spin 1s linear infinite",
    },
})

const LoadingSpinner = () => {
    const className = useSpinnerStyles();
    return(
        <div className={className.loader}></div>
    )
}

export default LoadingSpinner;