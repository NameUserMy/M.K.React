import React from "react";


class UserInfo extends React.Component<any, any> {

    private display: string;
    constructor(props: any) {
        super(props)

        this.display = "none"

        this.state = { user:[] }



    }

    componentDidMount(): void {



        this.setState({ user: this.props.infoUser });
    }



    render() {

        this.display = this.props.isDisplay;



        return (
            <div id='formMain' style={{ display: `${this.display}` }}>

                <table id="infoTable" className="content align"  >
                    <tr>
                        <td>Логин</td>
                        <td className="userValue">{this.state.user.Login}</td>
                    </tr>
                    <tr>
                        <td>Полное имя</td>
                        <td className="userValue">{this.state.user.Name}</td>
                    </tr>
                    <tr>
                        <td>Пол</td>
                        <td className="userValue">{this.state.user.Gender}</td>
                    </tr>
                    <tr>
                        <td>Специализация</td>
                        <td className="userValue">{this.state.user.Specialization}</td>
                    </tr>
                    <tr>
                        <td>Должность</td>
                        <td className="userValue">{this.state.user.Post}</td>
                    </tr>

                </table>


            </div>






        )
    }

};

export default UserInfo;



