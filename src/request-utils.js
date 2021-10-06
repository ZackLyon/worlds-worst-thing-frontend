import request from 'superagent'
export { fetchQuotes, fetchQuote, fetchCategories, postQuote, updateQuote, deleteQuote };

async function fetchQuotes() {
    
    const response =  await request.get(`https://thing-quotes-database.herokuapp.com/thingQuotes/`)

    return response.body;
}

async function fetchQuote(id) {
    const response =  await request.get(`https://thing-quotes-database.herokuapp.com/thingQuotes/${id}`)

    console.log("id response, ", response)
    return response.body;
}

async function fetchCategories() {
    
    const response = await request.get(`https://thing-quotes-database.herokuapp.com/categories/`)

    return response.body;
}

async function postQuote(dataToSend) {
    const response = await request.post(`https://thing-quotes-database.herokuapp.com/thingQuotes`).send(dataToSend);

    return response.body;
}

async function updateQuote(dataToSend, id) {
    const response = await request.put(`https://thing-quotes-database.herokuapp.com/thingQuotes/${id}`).send(dataToSend);
}

async function deleteQuote(id) {
    const response = await request.delete(`https://thing-quotes-database.herokuapp.com/thingQuotes/${id}`);
}