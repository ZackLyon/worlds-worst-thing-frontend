import React, { Component } from 'react'
import request from 'superagent'
import QuoteList from './QuoteList.js'

export default class ListPage extends Component {

    state = {
        quoteList: [], 
        isLoading: false
    }

    componentDidMount = async() => {
        await this.fetchQuotes()
        console.log(this.state.quoteList);
    }

    fetchQuotes = async () => {
        this.setState({ isLoading: true })

        const response =  await request.get(`https://thing-quotes-database.herokuapp.com/thingQuotes/`)
    
        this.setState({ quoteList: response.body, isLoading: false })
    }


    render() {
        return (
            <div>
                {this.state.isLoading
                ? <div>Loading</div>
                : <QuoteList 
                    quoteList={this.state.quoteList}/>
                }
            </div>
        )
    }
}
