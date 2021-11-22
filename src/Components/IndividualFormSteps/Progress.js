import React, {useContext} from 'react';
import AppContext from './AppContext';

export default function Progress() {
    const context = useContext(AppContext);
    const updateContext = context.userDetails;

    const percent = updateContext.currentPage * 100;
    const percentage = updateContext.currentPage;

    const background = {
        backgroundColor: '#dee2e6',
        height: 8,
        width: 300,
        borderRadius: 20,
    }

    const progress = {
        backgroundColor: '#D70040',
        height: 8,
        width: percent,
        borderRadius: 20,
    }

    const text = {
        fontSize: 12,
        color: '#8d99ae',
    }

    return (
        <div>
            <p style = {text}> {percentage} of 3 completed </p>
                <div style = {background}>
                    <div style = {progress} />
                </div>
        </div>
    );
}