import React from 'react';
import Story from './Story';

const StoryList = ({ stories }) => {
    return (
        <div>
            {stories.map((story, index) => (
                <Story key={index} story={story} />
            ))}
        </div>
    );
};

export default StoryList;
