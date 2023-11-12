export const getStories = async () => {
    const response = await fetch('/api/stories');
    const data = await response.json();
    return data;
};

export const postStory = async (story) => {
    const response = await fetch('/api/stories', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(story),
    });
    const data = await response.json();
    return data;
};
