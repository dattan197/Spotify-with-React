import SpotifyWebApi from 'spotify-web-api-js';
import { get_new_release } from '../types/type';

const spotify = new SpotifyWebApi();

export const getNewRelease_Request = (setLoading, token) => {
    return dispatch => {
        spotify.setAccessToken(token);
        spotify.getNewReleases({ offset: 1, limit: 10 }).then(res => {
            console.log(res);
            dispatch(getNewRelease_Action(res?.albums?.items));
            setLoading(false);
        }).catch(err => console.log(err))
    }
}

export const getNewRelease_Action = (newRelease) => {
    return {
        type: get_new_release,
        newRelease
    }
}