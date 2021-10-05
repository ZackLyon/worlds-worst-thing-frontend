import request from 'superagent'
export { fetchQuotes, fetchQuote, postQuote };

async function fetchQuotes() {
    
    const response =  await request.get(`https://thing-quotes-database.herokuapp.com/thingQuotes/`)

    return response.body;
}

async function fetchQuote(id) {
    const response =  await request.get(`https://thing-quotes-database.herokuapp.com/thingQuotes/${id}`)

    console.log("id response, ", response)
    return response.body;
}

async function postQuote(obj) {
    await request.post(obj);
}