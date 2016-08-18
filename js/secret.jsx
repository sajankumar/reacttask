
import React from 'react';

class Secret extends React.Component {

    constructor(props){
        super(props);
       this.state = {
            "label":"login",
            "text":"Please login to see the secret stuff",
            "islogged":false
        }
    }

    componentWillMount(){
         
    }
    clickHandler(){
        console.log('kkkjkjkj');
        
        
        if(this.state.islogged === true){
            
          this.setState({
                label : "login",
                islogged : false,
                text : "Please login to see the secret stuff"
            });
        
        }else{

            this.setState({
                label : "logout",
                islogged : true,
                text : "SECRET STUFF"
            });
            

             
           
        }

    }

   render() {
      return (
          <section>
             <div className='container'>
                <div className='inputholder'>
                  <p>{this.state.text}</p>
                    <a className='btn btn-default btn-lg' onClick={this.clickHandler.bind(this)}>{this.state.label}</a>
                </div>
             </div>
          </section>
      );
   }
}

export default Secret;