import React from "react";

import '../../css/CardClub.css';
import { Title } from '../CubComponent/Title';
import { Info } from '../CubComponent/InfoClab';
import { Attainment } from '../CubComponent/Attainment';
import { Teams } from '../CubComponent/Teams';



class Clabs extends React.Component {


  #item;
  #card;
  constructor(props) {
    super(props)
    this.#card=[];
    this.#item=0;
    this.state = {sts:[]}
   

    
  }
  componentDidMount() {
    this.props.clubs.then((data) => {
      this.setState({
       sts:data
  })

 });
  }

  render() {
    for (let i in this.state.sts) {
     this.#card.push(
        <div className="card">
          <div className='position'><Title title={this.state.sts.clubs[this.#item].title} /></div>
          <div><Info info={this.state.sts.clubs[this.#item]} /></div>
          <div><Attainment  attainment={this.state.sts.clubs[this.#item].Attainment} /></div>
          <div className='position'><Teams teams={this.state.sts.clubs[this.#item].team} /></div>
        </div>)
       
        this.#item++;
    }
    return (
      <>
        {this.#card}
      </>
    )



  }

}

export default Clabs