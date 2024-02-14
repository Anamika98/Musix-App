import { defaultCurrentTrack } from "../data";

export const initialState = {
    user: null,
    token: null,
    playlists: [],
    isPlaying: false,
    currentTrack: defaultCurrentTrack,
    item: null,
    discover_weekly: [],
    setAudio: defaultCurrentTrack.preview_url
};

const reducer = (state, action) => {
    console.log(action);
    switch(action.type) {
        case 'SET_USER':
            return {
                ...state,
                user: action.user
            }
            case 'SET_TOKEN':
                return {
                    ...state,
                    token: action.token
                }
            case 'SET_PLAYLISTS':
                return {
                    ...state,
                    playlists: action.playlists
                }
            case 'SET_DISCOVER_WEEKLY':
                return {
                    ...state,
                    discover_weekly: action.discover_weekly
                }
            case 'IS_PLAYING':
                return {
                    ...state,
                    isPlaying: action.isPlaying
                }
            case 'SET_CURRENT_TRACK':
                return {
                    ...state,
                    currentTrack: action.currentTrack
                }
            case 'SET_AUDIO':
                return {
                    ...state,
                    setAudio: action.setAudio
                }

            case 'AUDIO_REF':
                return {
                    ...state,
                    setAudioRef: action.setAudioRef
                }
            default: return state
    }

} 

export default reducer;



