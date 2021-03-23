import React, { Component } from "react";
import { withFormsy } from "formsy-react";
import { withStyles } from "@material-ui/core/styles";
import InputLabel from "@material-ui/core/InputLabel";
import SelectInput from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import FormHelperText from "@material-ui/core/FormHelperText";

const styles = (theme) => ({
    formControl: {
        margin: theme.spacing(1),
        width: "100%",
        margin: 0,
        "& .MuiFilledInput-root:hover": {
            background: "rgba(0, 0, 0, 0.05)",
        },
        "& .MuiFilledInput-root.Mui-focused": {
            background: "white",
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
    selectControl: {
        borderRadius: 0,
        background: "white",
        borderTop: "1px solid #D4D4D4",
        borderLeft: "1px solid #D4D4D4",
        borderRight: "1px solid #D4D4D4",
    },
});

class Select extends Component {
    constructor(props) {
        super(props);
        this.changeValue = this.changeValue.bind(this);
    }

    changeValue(event) {
        if (this.props.name === "IdWebsiteType" || this.props.name === "IdCompany") {
            this.props.onChange(event.target.value);
        }
        this.props.setValue(event.target.value);
    }

    render() {
        let { classes, label, isValid, isPristine, withoutNone } = this.props;
        // An error message is passed only if the component is invalid
        let errorMessage = this.props.errorMessage;
        let valid = isValid ? true : false;
        if (isPristine === true) {
            valid = true;
        }
        let MenuItems = (
            <MenuItem value="">
                <em>None</em>
            </MenuItem>
        );

        if (this.props.dataList) {
            let { dataList } = this.props;
            if (Object.entries(dataList).length > 0) {
                MenuItems = Object.keys(dataList).map((key) => (
                    <MenuItem key={key} value={key}>
                        {dataList[key]}
                    </MenuItem>
                ));
                if ((typeof withoutNone === "undefined") || (!(typeof withoutNone === "undefined") && ((withoutNone === false)))) {
                    MenuItems.unshift(
                        <MenuItem key="0" value="">
                            <em>None</em>
                        </MenuItem>
                    );
                }
            }
        }

        if (this.props.dataListArray) {
            let { dataListArray, dataListArrayKey, dataListArrayValue } = this.props;
            if (dataListArray.length > 0) {
                MenuItems = dataListArray.map((item) => (
                    <MenuItem key={item[dataListArrayKey]} value={item[dataListArrayKey]}>
                        {item[dataListArrayValue]}
                    </MenuItem>
                ));
                MenuItems.unshift(
                    <MenuItem key="0" value="">
                        <em>None</em>
                    </MenuItem>
                );
            }
        }

        ///// ready only //////
        let readonly = this.props.readonly;

        return (
            <FormControl variant="filled" className={classes.formControl} error={valid ? false : true}>
                <InputLabel>{label}</InputLabel>
                <SelectInput
                    inputProps={{ readOnly: readonly }}
                    className={classes.selectControl}
                    ref={(inp) => {
                        this.inputElementName = inp;
                    }}
                    labelId="demo-simple-select-filled-label"
                    value={this.props.value || ""}
                    onChange={this.changeValue}
                    label={label}>
                    {MenuItems}
                </SelectInput>
                {!valid ? <FormHelperText>{errorMessage}</FormHelperText> : ""}
            </FormControl>
        );
    }
}

export default withStyles(styles)(withFormsy(Select));
