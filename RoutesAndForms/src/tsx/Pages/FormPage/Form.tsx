

import React from 'react';
import './form.css'
import Login from './FormComponent/Login'
import Pass from './FormComponent/Pass';
import Name from './Name';
import Gender from './FormComponent/Gender';
import Specialization from './FormComponent/Specialization';
import Post from './FormComponent/Post';
import UserInfo from './FormComponent/UserInfo';

import ModelRegistr from './FormModel';

class Form extends React.Component<any,any> {


  private login: any;
  private pass: any;
  private fullName: any;
  private gender: any;
  private spec: any;
  private post: any;
  private model:ModelRegistr;

  constructor(props: any) {
    super(props)
   

    this.model=new ModelRegistr();
    this.Send = this.Send.bind(this)
    
    this.login = React.createRef();
    this.pass = React.createRef();
    this.fullName = React.createRef();
    this.gender = React.createRef();
    this.spec = React.createRef();
    this.post = React.createRef();
    this.state={display:"none",displayFrom:"block",user:this.model,isTooltip:"none"};
  }


  private Send = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
   

    if(this.login.current.state.isValid && this.gender.current.state.isValid && this.spec.current.state.isValid && this.pass.current.state.isValid){


      console.log(this.login.current.state.value)

      this.model.Gender=this.gender.current.state.value;
      this.model.Login=this.login.current.state.value;
      this.model.Name=this.fullName.current.state.value;
      this.model.Post=this.post.current.state.value;
      this.model.Specialization=this.spec.current.state.value;
      this.setState({user:this.model})
      this.setState({display:"block"});
      this.setState({displayFrom:"none"})
     this.setState({isTooltip:"none"})
      
      
   }else{this.setState({isTooltip:"block"})}
  };

  render() {
    
    return (
      <>
       <div id='formMain' style={{ display: `${this.state.displayFrom}` }} >
        <form id="formReg" onSubmit={this.Send} className="form align widthElem">
          <label className="Title">Регистрация</label>
          <Login ref={this.login} />
          <Pass ref={this.pass} />
          <Name ref={this.fullName} />
          <Gender ref={this.gender} />
          <Specialization ref={this.spec} />
          <Post ref={this.post} />
          <span className="toolTip" style={{ display:`${this.state.isTooltip}` }}>(Fill the form)</span>
          <input id="registration" type="submit" value="Регистрация" /> <input id="reset" type="reset" value="Сброс" />
        </form>
      </div>
      
      <UserInfo isDisplay={this.state.display} infoUser={this.state.user}/>
      
      </>
     
    )
  }
}


export default Form