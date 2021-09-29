import React, { Component } from 'react'
import QuoteItem from './QuoteItem.js'
import './QuoteList.css'

export default class QuoteList extends Component {
    render() {
        return (
            <ul>
                {
                this.props.quoteList.length === 0
                ? <div>Loading</div>
                : this.props.quoteList.map(quote => 
                    <QuoteItem
                        {...quote}
                        key={quote.id}
                    />)
                }
            </ul>
        )
    }
}
