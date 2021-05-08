import React from 'react';


class Card extends React.Component{
    
    render(){
        return ( 
                <div className="div">
                    <h1><strong>{this.props.nerve.name}</strong></h1>
                    <h2>Cranial Nerve: <strong>{this.props.nerve.number}</strong></h2>
                    <h2>Type: <strong>{this.props.nerve.type}</strong></h2>
                    <h2>Function: <strong>{this.props.nerve.function}</strong></h2>
                    <h2>Origin: <strong>{this.props.nerve.origin}</strong></h2>
                </div>
        )
    }
}
export default Card;