import React from "react";

class Post extends React.Component<any, any> {


    constructor(props: any) {
        super(props)

        this.state = { value: '', isValid: false };
        this.onChange = this.onChange.bind(this)


    }

    private onChange = (e: React.ChangeEvent<HTMLSelectElement>) => {


        console.log(e.target.value);
        if (e.target.value !== "default")

            this.setState({ value: e.target.value, isValid: true });
    }
    render() {

        return (

            <>
                <label>Должность:</label>
                <select name="post" onChange={this.onChange} defaultValue={"----Выбрать----"}>
                    <option value="default" >----Выбрать----</option>
                    <option value="programming">Программист</option>
                    <option value="Disgn">Дизайнер</option>
                    <option value="administration">Администратор</option>
                </select>
            </>

        )
    }

};

export default Post;



