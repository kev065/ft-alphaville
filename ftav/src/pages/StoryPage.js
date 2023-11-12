import React from 'react';
import Story from '../components/Story';

const StoryPage = ({ story }) => {
    return (
        <div>
            <h1>Story Page</h1>
            <Story story={story} />
        </div>
    );
};

export default StoryPage;
