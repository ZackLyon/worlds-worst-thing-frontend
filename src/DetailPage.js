import React, { Component } from 'react'
import { fetchQuote } from './request-utils.js'
import './DetailPage.css'

export default class DetailPage extends Component {
    state = {
        quote: [],
        isLoading: false
    }

    componentDidMount = async() => {
        this.setState({ isLoading: true })
        const currentId = this.props.match.params.id;
        const response = await fetchQuote(currentId);

        this.setState({ quote: response, isLoading: false })
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
