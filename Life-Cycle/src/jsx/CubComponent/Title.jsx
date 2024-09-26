import React from "react";

export class Title extends React.Component{


constructor(props){

    super(props)
    this.state={title:''}
}

componentDidMount(){


this.setState({
    title:this.props.title
});

}

render(){


    return (
        <h1 className="title">{this.state.title}</h1>
    )

}



}