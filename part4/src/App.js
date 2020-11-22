import React from 'react';
import './App.css';
import Profile from './Profile';
class App extends React.Component{

  state={
    
  Person:
     {
    FullName:"Khirallah Wael",
    Bio:"live is better",
    Profession:"Ingenieur",
    Isshow:false,
     },
     time: new Date() 
    
  }
   
     Handleshow=()=>{this.setState({Isshow:!this.state.Isshow})}

    Didmount=()=>{this.mya = setInterval(() => 
      { this.setState({time: new Date() }) }, 1000);}

     render(){
       return(
        
           <div className="App">
            
           
           {this.state.Isshow&& (<Profile Person={this.state.Person} />)}

           <button onClick={this.Handleshow}>SHOW PERSON</button>
           
           <h2>{this.state.time.getHours()}:{this.state.time.getMinutes()}
           :{this.state.time.getSeconds()}</h2>
           
           
           
            </div>
       
     );
       }
      }
      
    
  export default App;




