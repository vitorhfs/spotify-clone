export const authEndpoint = "https://accounts.spotify.com/authorize";
const redirectUri = "https://spotify-uiclone.netlify.app/";
const clientId = "9a1748b57235416b8d72820942051fd7";

const scopes = [
    "user-read-currently-playing",
    "user-read-recently-played",
    "user-read-playback-state",
    "user-top-read",
    "user-modify-playback-state",
];

export const loginUrl = `${authEndpoint}?client_id=${clientId}&redirect_uri=${redirectUri}&scope=${scopes.join('%20')}&response_type=token&show_dialog=true`;

export const getTokenFromUrl = () => {
    return window.location.hash
        .substring(1)
        .split('&')
        .reduce((initial, item) => {
            let parts = item.split('=');

            initial[parts[0]] = decodeURIComponent(parts[1]);

            return initial;
        }, {});
}