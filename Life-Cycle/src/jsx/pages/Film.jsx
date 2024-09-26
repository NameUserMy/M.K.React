import React from "react";
import { Card } from "../models/Card";

class Film extends React.Component {

    #movie;
    constructor(props) {
        super(props)

        this.#movie = new Card();
        this.state = { item: this.#movie }

    }


    componentDidMount() {

        this.props.data.then((data) => {

            this.setState({
                item: data
            })
        })
    }

    render() {

        return (
            <>
                <div className="cardFilm borderR boxShadow">
                    <div className="poster rowSpan borderLR"  ></div>
                    <div className=" rowSpan dispalayGrid gridTempRow">
                        <span className="info">{this.state.item.Title}</span>
                        <span className="info">{this.state.item.Released}</span>
                        <span className="info">{this.state.item.Genre}</span> 
                        <span className="info">{this.state.item.Country}</span>
                        <span className="info">{this.state.item.Director}</span>
                        <span className="info">{this.state.item.Writer}</span>
                        <span className="info">{this.state.item.Actors}</span>
                        <span className="info">{this.state.item.Awards}</span>
                    </div>
                </div>
            </>
        )



    }


}










export default Film