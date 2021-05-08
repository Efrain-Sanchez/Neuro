import React from 'react';
import db from '../components/db';
import Card from '../components/Card';
import {Link} from 'react-router-dom'
class Home extends React.Component {
    state = {
        data: db,
        loading: true,
        error: null
    }
    render() {
        return (
            <React.Fragment>
                <div className="container">
                    {this.state.data.map(nerve => {
                        return ( 
                            <div key={nerve.id}>
                                <Link to = {`/${nerve.id}`}>
                                    <Card nerve= {nerve}/>
                                </Link>
                            </div>
                        )
                    })}
                </div>
            </React.Fragment>
        )
    }
}


export default Home;
