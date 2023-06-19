import * as React from 'react';

interface ISquareGrid {
    children: JSX.Element;
}

const SquareGrid = ({children}: ISquareGrid): JSX.Element => {
    return (
        <div className='square-grid'>
            {children}
        </div>
    )
};

export default SquareGrid;
