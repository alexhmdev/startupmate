function isBrowser() {
    return typeof window !== 'undefined';
}

function getEnv() {
    console.log('window', { window });
    return isBrowser() ? window.ENV : process.env;
}

export default getEnv;