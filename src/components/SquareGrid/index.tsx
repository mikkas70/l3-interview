import * as React from 'react';

interface ISquareGrid {
    children?: React.ReactElement[];
}

const SquareGrid = ({children}: ISquareGrid): JSX.Element => {
    return (
        <div className='square-grid'>
            {children?.map((child) => (
                <div className='square-grid__item'>
                    {child}
                </div>
            ))}
        </div>
    )
};

export default SquareGrid;
