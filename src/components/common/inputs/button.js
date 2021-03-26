import React from "react";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
    root: {
        "& .MuiButton-containedSecondary:hover": {
            backgroundColor: "#E20382",
        },
    },
    button: {
        backgroundColor: "#9BCD37",
        borderRadius: 0,
        minWidth: 104,
        lineHeight: 2,
    }
}));

export default function DisableElevation(props) {
    const classes = useStyles();

    let extraStyles = props.extraStyles ? props.extraStyles : {};
    
    return (
        <div className={classes.root}>
            <Button
                style={extraStyles}
                onClick={(!props.disable) ? props.onClick : () => {}}
                type={props.type ? props.type : "button"}
                className={classes.button}
                variant="contained"
                color="secondary"
                disableElevation>
                {props.label}
            </Button>
        </div>
    );
}
