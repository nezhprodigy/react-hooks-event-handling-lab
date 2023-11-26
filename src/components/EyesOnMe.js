// Code EyesOnMe Component Here
import React from 'react';

let EyesOnMe = () => {
    let handleFocus = () => {
        console.log('Good!');
    }

    let hanldleBlur = () => {
        console.log('Hey! Eyes on me!')
    }

    return (
        <button onFocus={handleFocus} onBlur={hanldleBlur}>Eyes on me</button>
    )
}

export default EyesOnMe;