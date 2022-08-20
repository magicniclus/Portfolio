import React, { useEffect, useState, useRef } from 'react';

const Cursor = () => {
    const cursor = useRef(null)

    const cursorTracker = e => {
        console.log(e);
    }

    return (
        <div ref={cursor} className='cursor' onMouseMove={cursorTracker}>
            
        </div>
    );
};

export default Cursor;