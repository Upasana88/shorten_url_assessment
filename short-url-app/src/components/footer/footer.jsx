import React, { Component } from 'react'
import './footer.css'

export default class Footer extends Component {
    render() {
        return (
            <div className="d-flex align-items-stretch justify-content-around border-top-2 border-aqua bg-dark text-white mb-0 pt-5">
                <div className="mr-5">
                    <ul>
                        <li>Contact Us</li>
                        <li>Careers</li>
                        <li>About Us</li>
                    </ul>
                </div>
                <div>
                    <h4>Be secure and free</h4>
                    <p>We have the best system to shorten URL security and all the things you need to be free online</p>
                </div>
                <div>

                </div>
            </div>
        )
    }
}
