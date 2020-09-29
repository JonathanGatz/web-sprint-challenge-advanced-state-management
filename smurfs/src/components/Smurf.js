import React from "react";
import { connect } from "react-redux";
import { getSmurf } from "../actions/actions";
import { Card, Button } from "semantic-ui-react";


const Smurf = ({ smurf, getSmurf, nowLoading, error }) => {
if (nowLoading) {
    return <h2>Complete Form Below</h2>;
}

if (error) {
    return <h1>{error}</h1>;
}

return (
    <div>
    {smurf.map(item => {
        return (
        <Card centered color='blue'>
            <Card.Content>
            <Card.Header>{item.name}</Card.Header>
            <Card.Meta>Age:{item.age} 
            Height:{item.height}</Card.Meta>
            </Card.Content>
        </Card>
        );
    })}
    <Button onClick={getSmurf}>EXPLORE</Button>
    </div>
);
};

const mapStateToProps = state => {
return {
    smurf: state.smurf,
    nowLoading: state.nowLoading,
    error: state.error
};
};

export default connect(mapStateToProps, { getSmurf})(Smurf);