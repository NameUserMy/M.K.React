
import React from "react";

class Pass extends React.Component<any, any> {

    private regPass: RegExp;
    private isTooltip: string;
    private isTooltipConfirm: string;
    constructor(props: any) {
        super(props)

        this.regPass = new RegExp('^([a-z,A-Z]{3,10})$');
        this.state = { value: '', isValid: true ,isValidComf:true};
        this.isTooltip = "none";
        this.isTooltipConfirm = 'none'
        this.onChange = this.onChange.bind(this);
        this.onChangeConfirm = this.onChangeConfirm.bind(this)


    }

    private onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        this.setState({ value: e.target.value, isValid: this.regPass.test(e.target.value) });
    }

    private onChangeConfirm=(e:React.ChangeEvent<HTMLInputElement>)=>{
        console.log(this.state.value);
        this.setState({isValidComf:e.target.value===this.state.value?true:false});
        
    }


    render() {
        this.isTooltip = this.state.isValid === true ? "none" : "block";
        this.isTooltipConfirm = this.state.isValidComf === true ? "none" : "block";
        return (

            <>

                <label>Пароль:</label>
                <input className="txtField" onChange={this.onChange} name="pass" type="password"  required/>
                <span className="toolTip" style={{ display: `${this.isTooltip}` }}>(min 3 max 10 s)</span>

                <label>Подтверждение:</label>
                <input className="txtField" onChange={this.onChangeConfirm} name="repeatPass" type="password" required />
                <span className="toolTip" style={{ display: `${this.isTooltipConfirm}` }} >(pass no match)</span>

            </>

        )
    }

};

export default Pass;



