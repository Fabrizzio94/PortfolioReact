import React, { Component } from 'react'
import './Contact.css'
class Contact extends Component {
    state = {
        name: '',
        message: '',
        email: '',
        sent: false,
        buttonText: 'Send Message'
    }
    render() {
        return(
            <main className="site-main">
                <section className="contact-area">
                    <div className="container contact">
                        <div className="row">
                            <div className="col-lg-12 col-sm-12 text-center subscribe-title">
                                <h4 className="text-uppercase">Contact with me</h4>
                                <p className="para">Lorem ipsum dolor sit amet consectetur 
                                adipisicing elit. Vitae, omnis.</p>
                            </div>
                        </div>
                        <div className="d-flex justify-content-center">
                            <form className="w-75 contact-form" onSubmit={ (e) => this.formSubmit(e)}>
                                <div className="form-group">
                                    <label className="message text-uppercase" htmlFor="message-input">Full Name</label>
                                    <input onChange={e => this.setState({ name: e.target.value})} name="name" className="form-control message-input" type="text" placeholder="Please write your name here" value={this.state.name} required/>
                                </div>
                                <div className="form-group">
                                    <label className="message-name text-uppercase" htmlFor="message-email">Email</label>
                                    <input onChange={e => this.setState({ email: e.target.value})} name="email" className="form-control message-email" type="email" placeholder="your@email.com" required value={this.state.email}/>
                                </div>
                                <div className="form-group">
                                    <label className="message-email text-uppercase" htmlFor="message-text">Message</label>
                                    <textarea onChange={(e) => this.setState({ message: e.target.value})} name="message" className="form-control message-text" type="text" rows="4" placeholder="Please write your message here" required value={this.state.message} />
                                </div>
                                <div className="btn-submit">
                                    <button type="submit" className="btn button secondary-button ">{ this.state.buttonText }</button>
                                </div>
                            </form>
                        </div>
                    
                     </div>
               </section>
        </main>
        )
    }
}

export default Contact