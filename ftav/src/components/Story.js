import React from 'react';

const Story = ({ story }) => {
    return (
        <div>
            <h2>{story.title}</h2>
            <a href={story.url}>Read more</a>
        </div>
    );
};

export default Story;
