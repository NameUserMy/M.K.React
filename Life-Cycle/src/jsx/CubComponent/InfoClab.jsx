import React from "react";

export class Info extends React.Component {


    constructor(props) {

        super(props)
        this.state = { info: {} }
    }

    componentDidMount() {


        this.setState({
            info: this.props.info
        });

    }

    render() {


        //console.log('Info',this.state.info['logo'])

        let item = []

        for (let i in this.state) {
            item.push(
               
                 <>
                    <div className="anatation img" style={{backgroundImage:"url("+this.state.info.logo+")"}}></div>
                    <div className="anatation">Полное название</div><div>{this.state.info.fullTitle}</div>
                    <div className="anatation">Основан</div><div>{this.state.info.Founded}</div>
                    <div className="anatation">Стадион</div><div>{this.state.info.Stadium}</div>
                    <div className="anatation">Президент</div><div>{this.state.info.President}</div>
                    <div className="anatation"> Главный тренер</div><div>{this.state.info.HeadCoach}</div>
                    <div className="anatation">Капитан</div><div>{this.state.info.Captain}</div>
                 
                 </>
           )

           

        }

        return (
            <div id="hort-info">
            {item}
            </div>
          
        )

    }



}