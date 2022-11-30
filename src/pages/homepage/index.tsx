import * as React from 'react';
import SquareContainer from "../../components/SquareContainer";

const Homepage = (): JSX.Element => {
    return (
        <>
            <p>Total number of squares: 0</p>
            <p>Total number of red squares: 0</p>
            <div>
                <button>Add square</button>
                <button style={{marginLeft: '10px'}}>Delete all squares</button>
            </div>

            <SquareContainer>
                <p>Squares should be placed inside</p>
            </SquareContainer>

            <div style={{marginTop: '20px'}}>
                <button>Paint all squares blue</button>
                <button style={{marginLeft: '10px'}}>Reset square colors</button>
            </div>
        </>
    );
}

export default Homepage;
