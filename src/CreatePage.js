import React, { Component } from 'react'
import { fetchCategories, postQuote } from './request-utils.js';

import './CreatePage.css'
export default class CreatePage extends Component {
    state = {
        name: '',
        role_id: '',
        quote: '',
        known_thing: 'true',
        categories: []
    }

    handleSubmit = async(e) => {
        e.preventDefault();
        const submission = this.state;
        const response = postQuote(submission);
        console.log(response);

    }

    componentDidMount = async() => {
        const categoryArr = await fetchCategories();
        await this.setState({categories: categoryArr});
        await this.setState({role_id: categoryArr[0].id})
        console.log(this.state.categories);
    }

    render() {
        return (
            <div className="page-container">
                <form id="create-form">
                    <label>
                        Name
                        <input type="text" onChange={(e) => this.setState({name: e.target.value})}></input>
                    </label>
                    <label>
                        Role
                        <select onChange={(e) => this.setState({role_id: e.target.value})}>
                            {
                                this.state.categories.map(category => { return <option value={category.id}>{category.role}</option>})
                            }
                        </select>
                    </label>
                    <label>
                        Quote
                        <textarea className="quote-box" onChange={(e) => this.setState({quote: e.target.value})}></textarea>
                    </label>
                    <label>
                        Known to be a Thing?
                        <select onChange={(e) => this.setState({known_thing: e.target.value})}>
                            <option value="true">True</option>
                            <option value="false">False</option>
                        </select>
                    </label>
                    <div className="button-container">
                        <button onClick={this.handleSubmit}>Submit</button>
                    </div>

                </form>
            </div>
        )
    }
}
