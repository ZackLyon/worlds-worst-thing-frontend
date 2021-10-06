import React, { Component } from 'react'

import QuoteList from './QuoteList.js'
import { fetchQuotes } from './request-utils.js'

export default class ListPage extends Component {

    state = {
        quoteList: [], 
        isLoading: false
    }

    componentDidMount = async() => {
        this.setState({ isLoading: true });

        const response = await fetchQuotes();
        this.setState({ quoteList: response, isLoading: false })
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
