import * as React from 'react';

interface ISquareContainer {
    children: JSX.Element;
}

const SquareContainer = ({children}: ISquareContainer): JSX.Element => {
    return (
        <div className='square-container'>
            {children}
        </div>
    )
};

export default SquareContainer;
