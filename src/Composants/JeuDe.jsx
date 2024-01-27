import { Component } from 'react';

class  JeuDe extends Component {
  constructor(props){
    super(props);
    this.state={face:null,compteur:0,end:false}

  }
  jouer =()=>{
    let faceval= Math.floor(Math.random()*6+1);
    if(this.state.face==this.props.cache){
        this.setState({end:true})
    }else this.setState({face:faceval,compteur:this.state.compteur+1,end:false})
    


  }
 
  render(){
    return (
       <div>
       <img src={this.state.face==null?"images/init.PNG":"images/face"+this.state.face+".PNG"} alt=""></img>
       <h1>face:{this.state.face}</h1>
       <h1>nombre d'essais:{this.state.compteur}</h1>
       {
         this.state.end?<p>gaggner</p>:<button onClick={this.jouer}>jouer</button>
       }
       
       </div>
    );
  }
  
}

export default JeuDe;