import { withStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import React, { Component } from "react";
import { withFormsy } from "formsy-react";

const styles = (theme) => ({
    input: {
        margin: theme.spacing(1),
        width: "100%",
        margin: 0,
    },
    root: {
        "& .MuiFilledInput-root": {
            borderRadius: 0,
            background: "white",
            borderTop: "1px solid #D4D4D4",
            borderLeft: "1px solid #D4D4D4",
            borderRight: "1px solid #D4D4D4",
        },
        "& .MuiFilledInput-root.Mui-focused": {
            background: "rgba(0, 0, 0, 0.05)",
        },
        "& .MuiFilledInput-root:hover": {
            background: "rgba(0, 0, 0, 0.05)",
        },
        "& .MuiFilledInput-underline:after": {
            borderBottom: "2px solid #E20382",
        },
        "& .MuiFormLabel-root.Mui-focused": {
            color: "#E20382",
        },
        "& .MuiFilledInput-underline.Mui-error:after": {
            "borderBottomColor": "#f44336",
        },
        "& .MuiFormLabel-root.Mui-error": {
            color: "#f44336",
        },
        "& .MuiFilledInput-underline:before": {
            borderBottom: "1px solid #D4D4D4",
        },
    },
    rootReadOnly: {
        "& .MuiFilledInput-root": {
            background: "rgba(0, 0, 0, 0.05)",
        },
    },
});

class Text extends Component {
    constructor(props) {
        super(props);
        this.changeValue = this.changeValue.bind(this);
    }

    changeValue(event) {
        // setValue() will set the value of the component, which in
        // turn will validate it and the rest of the form
        // Important: Don't skip this step. This pattern is required
        // for Formsy to work.
        this.props.setValue(event.currentTarget.value);
    }

    render() {
        let { classes, label, type } = this.props;

        // An error message is passed only if the component is invalid
        let errorMessage = this.props.errorMessage;
        let valid = this.props.isValid ? true : false;
        if (this.props.isPristine) valid = true;

        ///// ready only //////
        let readonly = this.props.readonly;

        return (
            <div className={classes.root + (this.props.readonly && !this.props.readonlyWhite ? " " + classes.rootReadOnly : "")}>
                <TextField
                    InputProps={{
                        readOnly: readonly,
                    }}
                    error={valid ? false : true}
                    multiline
                    rows={2}
                    rowsMax={4}
                    autoComplete={type === "password" ? "new-password" : ""}
                    type={type && type}
                    className={classes.input}
                    ref={(inp) => {
                        this.inputElementName = inp;
                    }}
                    onChange={this.changeValue}
                    helperText={!valid ? errorMessage : this.props.helperText ? this.props.helperText : false}
                    value={this.props.value || ""}
                    label={label}
                    variant="filled"
                />
            </div>
        );
    }
}

export default withStyles(styles)(withFormsy(Text));
