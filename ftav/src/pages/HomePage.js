import React, { useEffect, useState } from 'react';
import StoryList from '../components/StoryList';
import { getStories } from '../services/storyService';

const HomePage = () => {
    const [stories, setStories] = useState([]);

    useEffect(() => {
        getStories().then(setStories);
    }, []);

    return (
        <div>
            <h1>Home Page</h1>
            <StoryList stories={stories} />
        </div>
    );
};

export default HomePage;
