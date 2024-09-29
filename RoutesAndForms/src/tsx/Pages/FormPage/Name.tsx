import React from "react";

class Name extends React.Component<any, any> {

    private regPass: RegExp;
    private isTooltip: string;
    constructor(props: any) {
        super(props)

        this.regPass = new RegExp('^([a-z,A-Z]{3,10})$');
        this.state = { value: '', isValid: true };
        this.isTooltip = "none";
        this.onChange = this.onChange.bind(this)
    }

    private onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        this.setState({ value: e.target.value, isValid: this.regPass.test(e.target.value) });
    }
    render() {
        this.isTooltip = this.state.isValid === true ? "none" : "block";
        return (

            <>

                <label>Полное имя:</label>
                <input className="txtField" onChange={this.onChange} name="FullName" type="text" required />
                <span className="toolTip" style={{ display: `${this.isTooltip}` }}>(enter your name)</span>

            </>

        )
    }

};

export default Name;



