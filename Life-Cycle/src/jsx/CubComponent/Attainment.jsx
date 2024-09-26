import React from "react";

export class Attainment extends React.Component {


    
    constructor(props) {
        super(props)
        this.state = { attainment: [] }
    }

    componentDidMount() {


        this.setState({
            attainment: this.props.attainment
        });

    }

    render() {


        let item = []


        for (let i in this.state.attainment) {

            item.push(
                <>
                    <div className="anatation">{this.state.attainment[i].title}</div>
                    <div>{this.state.attainment[i].result}</div>
                </>
            );


        }




        return (
            <div id="goblet">
                <span></span><span></span>
                {item}
            </div>
        )

    }



}