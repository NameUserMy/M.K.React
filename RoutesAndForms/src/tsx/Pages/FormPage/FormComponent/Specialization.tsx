import React from "react";


class Specialization extends React.Component<any, any> {

    private item:Array<string>;
    constructor(props: any) {
        super(props)
        this.item=[];

        this.state = { value:[], isValid: false };
        this.onChange = this.onChange.bind(this)


    }

    private onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        if(e.target.checked){
            this.item.push(e.target.value);
        }else{
            if(this.item.indexOf(e.target.value)!=-1){

                this.item.splice(this.item.indexOf(e.target.value))
               

                
            }
        }
        this.setState({ value:this.item, isValid: e.target.checked });
    }
    render() {
           return (

            <>

                <label>Специализация:</label>
                <div >
                    <input name="specialization" onChange={this.onChange} type="checkbox" value="Disgn " /><label>Дизайн</label><br />
                    <input name="specialization" onChange={this.onChange} type="checkbox" value="programming " /><label>Программирование</label><br />
                    <input name="specialization" onChange={this.onChange} type="checkbox" value="administration " /><label>Администрирование</label>
                </div>

            </>

        )
    }

};

export default Specialization;



