import React from 'react';
import { connect } from 'react-redux';

function mapStateToProps(state){
    return {
        username : state.username
    };
}

const ShowInfo = (props) => {
    console.log("check", props.username)
    return(
        <div>
            Info of Users
            <ul>
                {props.username.map(item => (
                    <li key={item}>{item}</li>
                ))}
            </ul>
            {/* <div>
            {props.username}
            </div> */}
        </div>
    )
}

export default connect(mapStateToProps)(ShowInfo);