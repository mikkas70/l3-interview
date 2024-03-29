import * as React from 'react';
import SquareGrid from "../../components/SquareGrid";

const Homepage = (): JSX.Element => {
    return (
        <>
            <p>Total number of squares: 0</p>
            <p>Total number of blue squares: 0</p>

            <SquareGrid>
                <p>Squares should be placed inside</p>
            </SquareGrid>

            <div style={{marginTop: '20px'}}>
                <button style={{marginRight:'20px'}}>Add red square</button>
                <button>Paint all squares blue</button>
            </div>
        </>
    );
}

export default Homepage;
