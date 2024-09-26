import { Card } from "./jsx/models/Card";


class Request {

    #movie;
    constructor() {
        this.#movie = new Card();
    }
   async GetMovie() {

        this.#movie = await fetch(`http://www.omdbapi.com/?t=I robot&apikey=be50166f`)
            .then((response) => {
                return response.json();
            }).then((data) => {
                return new Card(
                    data["Title"],
                    data["Released"],
                    data["Genre"],
                    data["Country"],
                    data["Director"],
                    data["Writer"],
                    data["Actors"],
                    data["Awards"],
                    data["Poster"]
                );
            });
        return this.#movie;

    }

   async GetClubs(){

      return await fetch(`http://localhost:5173/src/assets/jsonFile/Clubs.json`)
        .then((response) => {
            return response.json();
        })


    }



}

export default Request