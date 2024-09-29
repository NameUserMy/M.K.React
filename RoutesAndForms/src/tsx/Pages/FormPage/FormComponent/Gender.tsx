import React from "react";

class Gender extends React.Component<any, any> {

   
    constructor(props: any) {
        super(props)
       this.state = { value: '', isValid: false };
        this.onChange = this.onChange.bind(this)


    }

    private onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        this.setState({ value: e.target.value, isValid: e.target.checked });
    }
    render() {

       
       
        return (

            <>

                <label>Пол:</label>
                <div>
                    <input onChange={this.onChange} name="sex" type="radio" value="M" /><label>M</label><br />
                    <input onChange={this.onChange} name="sex" type="radio" value="F" /><label>Ж</label>
                </div>

            </>

        )
    }

};

export default Gender;



