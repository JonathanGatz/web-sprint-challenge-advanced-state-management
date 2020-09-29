import React, { useState } from 'react';
import { connect } from 'react-redux';
import { Smurfing}  from '../actions/actions';
import { Button } from 'semantic-ui-react';

function SmurfForm({Smurfing}) {
    const [smurf, setSmurf] = useState({name: '', age: '', height:''});

    const handleChange = e => {
        setSmurf({...smurf, [e.target.name]: e.target.value})
    }

    const newSmurf = e => {
        e.preventDefault();
        Smurfing(smurf)
        setSmurf({name: '', age: '', height:''})
    }

    return (
        <form>
            Name
            <input
            id= 'name'
            type='text'
            name='name'
            value={smurf.name}
            onChange={handleChange}
            />
            <br></br>
            Age
            <input
            type='text'
            name='age'
            value= {smurf.age}
            onChange={handleChange}
            />
            <br></br>
            Height
            <input
            type='text'
            name='height'
            value={smurf.height}
            onChange={handleChange}
            />
            <br></br>
            <Button color="blue" onClick={newSmurf}>JOIN SMURFS</Button>
        </form>
    )
}

export default connect(null, {Smurfing})(SmurfForm)