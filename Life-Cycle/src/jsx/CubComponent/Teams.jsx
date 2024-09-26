import React from "react";

export class Teams extends React.Component {


    constructor(props) {

        super(props)
        this.state = { teams: '' }
    }

    componentDidMount() {


        this.setState({
            teams: this.props.teams
        });

    }

    render() {
        let teamsInfo = [];
        for (let i in this.state.teams) {
            teamsInfo.push(<div className="player">

                <div>{this.state.teams[i].pos}</div>
                <div>{this.state.teams[i].name}</div>
                <div>{this.state.teams[i].dob}</div>
            </div>)
        }

       return (
            <div id="teams">
               {teamsInfo}
           </div>


        )

    }



}