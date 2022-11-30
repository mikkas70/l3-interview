import * as React from 'react';

interface ISquareContainer {
    children: React.ReactNode;
}

const SquareContainer = ({children}: ISquareContainer): JSX.Element => {
    return (
        <div className='square-container'>
            {children}
        </div>
    )
};

export default SquareContainer;
