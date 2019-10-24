import React from 'react';
import Total from '../Total/Total';
import Summary from '../Summary/Summary';

export default class Cart extends React.Component {
    render() {       
        return (
            <section className="main__summary">
                <h2>Your cart</h2>
                <Summary 
                    selected={this.props.selected}
                />
                <Total 
                    selected={this.props.selected}
                />            
            </section>
        )
    }
}

