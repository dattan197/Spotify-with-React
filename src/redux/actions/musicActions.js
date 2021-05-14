export const deleteMusicAction = (playlistId, musicId) => {
    return {
        type: 'DELETE_MUSIC',
        playlistId,
        musicId,
    }
}

export const addMusicAction = (playlistId, musicInfo) => {
    return {
        type: 'ADD_MUSIC',
        playlistId,
        musicInfo,
    }
}

export const editMusicAction = (playlistId, musicUpdate) => {
    return {
        type: 'EDIT_MUSIC',
        playlistId,
        musicUpdate,
    }
}