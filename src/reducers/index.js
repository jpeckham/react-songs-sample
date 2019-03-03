import { combineReducers } from 'redux';

const songsReducer = () => {
    return [
        { title: 'Smells like teen spirit', duration: '3:33' },
        { title: 'Macarena', duration: '4:33' },
        { title: 'Don\' like the drugs', duration: '2:33' },
        { title: 'potato tomato', duration: 'something' }
    ];
};

const selectedSongReducer = (selectedSong = null, action) => {
    if (action.type === 'SONG_SELECTED')
        return action.payload;
    return selectedSong;
};

export default combineReducers({
    songs: songsReducer,
    selectedSong: selectedSongReducer
});