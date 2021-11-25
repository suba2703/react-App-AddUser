import Card from './Card'
import './App.css';
const CardList=(props)=>{

    return(<div>
  
    
  
     {props.profiles.map(profile=><Card style={{width: '75px'}} key={profile.id} {...profile}/>)}
  
     
  
    </div>)
  
  }

  export default CardList;
  