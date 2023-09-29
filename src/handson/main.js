import './style.css';
import Classcompo from './Classcompo';
import { Funccompo } from './Funccompo';
import { Component } from 'react';

class Main extends Component{
    constructor(){
        super();
        this.state={
            funcbox: false,
            classbox: false
        }
    }
    render(){
        console.log(this.state.funcbox);
        console.log(this.state.classbox);

        return(
            <>

            <div className='parent'>
                <button className='button1' onClick={()=>this.setState({funcbox: !this.state.funcbox})}>To see styling in Functional Component</button>
                <button className='button2' onClick={()=>this.setState({classbox:!this.state.classbox})}>To see styling in Class Component</button>
                <div className='container'>
                    {this.state.funcbox && <Funccompo /> }
                    {this.state.classbox ? <Classcompo /> :null}
                </div>
            </div>
            </>
        )
    }
}
export default Main;



