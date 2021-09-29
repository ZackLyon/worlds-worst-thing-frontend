import React, { Component } from 'react'
import request from 'superagent'

import './DetailPage.css'

export default class DetailPage extends Component {
    state = {
        quote: [],
        isLoading: false
    }

    fetchQuote = async () => {
        this.setState({ isLoading: true })

        const response =  await request.get(`https://thing-quotes-database.herokuapp.com/thingQuotes/${this.props.match.params.id}`)

    
        this.setState({ quote: response.body, isLoading: false })
    }

    componentDidMount = async() => {
        await this.fetchQuote();
        console.log(this.state.quote)
    }

    render() {
        
        return (
            <div>
                {
                    this.state.isLoading
                    ? <div>Loading</div>
                    : <div className="details-container">
                    <h1>I bet you thought there would be additional content here</h1>
                    <h1>{this.state.quote.name}</h1>
                    <h6>{this.state.quote.role}</h6>
                    <h4>Outpost {this.state.quote.outpost}</h4>
                    <h6 className="quote">{this.state.quote.quote}</h6>
                    <h4>Known Thing: {this.state.quote.known_thing ? <span>Yes</span> : <span>No</span>}</h4>
                    </div>
                }
            </div>
        )
    }
}
