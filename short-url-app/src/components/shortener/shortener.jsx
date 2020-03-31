import React, { Component } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import axios from 'axios'
import crypto from 'crypto-random-string';

export const UrlEndPoint = 'http://localhost:3010/url';

export default class Shortener extends Component {
    state = {
        shortenedUrl: undefined,
        originalUrl: undefined
    };

    constructor(props) {
        super(props);
        if (props.match.params.short_url) {
            this.goToUrl(props.match.params.short_url);
        }
        this.handleShortening = this.handleShortening.bind(this);
    }

    async goToUrl(shortForm) {
        console.log(shortForm);
        try {
            const response = await axios.post(UrlEndPoint + '/original_url', ({
            "shortForm": shortForm
        }));
        window.location.href = response.data.originalUrl;
        } catch (error) {
            alert(error);
        }
    }

    async handleShortening() {
        try {
            const { originalUrl } = this.state;
            const randomCreatedString = crypto({ length: 6, type: 'base64' });
            randomCreatedString.split('/').join('/');
            const response = await axios.post(UrlEndPoint, ({
                "shortForm": randomCreatedString,
                "originalUrl": originalUrl
            }));
            let finalShortForm = '';
            const currentLocation = window.location.href;
            const location = currentLocation.split('shorten')[0]
            finalShortForm = location + 'shorten/' + response.data.shortForm.split('/').join();
            this.setState({ shortenedUrl: finalShortForm });
        } catch (error) {
            console.log(error);
        }
    }

    setOriginalUrl(url) {
        this.setState({ originalUrl: url })
    }

    copyCodeToClipboard = () => {
        const el = this.url;
        const text = el.innerText;
        var elem = document.createElement("textarea");
        document.body.appendChild(elem);
        elem.value = text;
        elem.select();
        document.execCommand("copy");
        document.body.removeChild(elem);
        alert('Copied to Clipboard');
    }


    render() {
        return (
            <div className="d-flex flex-column m-auto align-items-center w-100 shortener-container">
                <Form className="w-50">
                    <Form.Group controlId="formBasicEmail">
                        <Form.Label>URL</Form.Label>
                        <Form.Control onChange={event => this.setOriginalUrl(event.target.value)} type="text" placeholder="Enter URL" />
                    </Form.Group>
                    <Button onClick={this.handleShortening} variant="primary" type="button">
                        Submit
                    </Button>
                </Form>

                <div hidden={!this.state.shortenedUrl}>
                    <h3>Shortened URL</h3>
                    <div className="d-flex align-items-center">
                        <p ref={(url) => this.url = url} className="mb-0 mr-5">{this.state.shortenedUrl}</p>
                        <Button variant="primary" onClick={this.copyCodeToClipboard} type="button" className="btn btn-sm btn-secondary">
                            Copy
                        </Button>
                    </div>
                </div>
            </div>
        )
    }
}
