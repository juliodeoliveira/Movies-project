export const searchMovie = async (query) => {
    
    const API_KEY = '9fb417';

    if (query == undefined) {
        return { movie: null, error: "Filme nao encontrado!" };
    }

    try {
        const response = await fetch(`http://www.omdbapi.com/?apikey=${API_KEY}&t=${query}&plot=full`);
        const data = await response.json()
        if (data.Response === 'True') {
            return { movie: data, error: null }
        } else {
            return { movie: null, error: "Filme nao encontrado!" }
        }
    } catch (err) {
        console.log(err);
        return { movie: null, error: "Erro ao buscar na API" }
    }
}