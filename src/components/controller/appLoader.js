import Loader from './loader';

class AppLoader extends Loader {
    constructor() {
        super('https://newsapi.org/v2/', {
            apiKey: '3934f7ed932f4710b4497aeae4038709', // получите свой ключ https://newsapi.org/
        });
    }
}

export default AppLoader;
