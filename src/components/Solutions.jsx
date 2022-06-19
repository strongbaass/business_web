import React from 'react';
import '../../src/components/styles/Solutions.scss'
import Tables from './UI/Tables/Tables';

const Solutions = () => {
    return(
        <div className='solutions_info'>
            <h1 className='solutions_title'>Our Solution for your business</h1>
            <h6 className='solutions_description'>We make it easy for users to use our platform, that's why we provide this benefit.</h6>
            <Tables/>
        </div>
    )
}

export default Solutions;