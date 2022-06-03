import React from 'react'
import $ from 'jquery'
import axios from 'axios'
// import Recaptcha from 'react-recaptcha''

import Layout from '../components/layout'

const API_PATH = 'http://localhost:3000/contact.php'

class Contact extends React.Component {
  state = {
    formEmail: '',
    formMessage: '',
    formName: '',
    formNewsletter: false,
    formUsername: '',
    isCaptchaValid: false,
    isErrorShown: false,
    isErrorSpamBotShown: false,
    isFormSubmitted: false,
    isFormValid: false
  }

  handleInputChange = event => {
    if (event.target.value.length > 0 && event.target.name !== 'formEmail') {
      this.setState({
        [event.target.name]: event.target.value
      })
    }

    if (event.target.name === 'formEmail') {
      /* eslint-disable */
      var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      /* eslint-enable */

      if (re.test(String(event.target.value).toLowerCase())) {
        this.setState({
          [event.target.name]: event.target.value
        })
      }
    }
  }

  handleCheckboxClick = event => {
    this.setState({
      [event.target.name]: event.target.checked
    })
  }

  // Show message in console when reCaptcha plugin is loaded
  // onCaptchaLoad = () => {
  //   console.log('Captcha loaded')
  // }

  // Update state after reCaptcha validates visitor
  // onCaptchaVerify = (response) => {
  //   this.setState({
  //     isCaptchaValid: true
  //   })
  // }

  handleFormSubmit = event => {
    event.preventDefault()

    if (this.state.formEmail.length > 0 && this.state.formName.length > 0 && this.state.formMessage.length > 0 && this.state.formUsername.length === 0 /* this.state.isCaptchaValid */) {
      this.setState({
        isErrorShown: false,
        isFormValid: true
      })

      setTimeout(() => {
        axios({
          data: this.state,
          headers: { 'content-type': 'application/json' },
          method: API_PATH,
          url: '/contact.php'
        })
          .then((res) => {
            console.info(res)

            this.setState({
              formEmail: '',
              formMessage: '',
              formName: '',
              formNewsletter: false,
              isCaptchaValid: false,
              isErrorShown: false,
              isErrorSpamBotShown: false,
              isFormSubmitted: true,
              isFormValid: false
            })
          })
          .catch((err) => {
            console.warn('An error occurred: ', err)
          })

        // $.ajax({
        //   data: this.state,
        //   type: 'POST',
        //   // url: require('/contact.php'),
        //   success: function(data) {
        //     console.info(data)
        //   },
        //   error: function(xhr, status, err) {
        //     console.error(status, err.toString())
        //   }
        // })

        // Send event to Google Analytics
        // typeof window !== 'undefined' && window.gtag('event', 'contact')

        // Reset state after sending the form
        // this.setState({
        //   formEmail: '',
        //   formMessage: '',
        //   formName: '',
        //   formNewsletter: false,
        //   isCaptchaValid: false,
        //   isErrorShown: false,
        //   isErrorSpamBotShown: false,
        //   isFormSubmitted: true,
        //   isFormValid: false
        // })
      }, 1000)
    } else if (this.state.formUsername.length > 0) {
      this.setState({
        isErrorSpamBotShown: true
      })
    } else {
      this.setState({
        isErrorShown: true
      })
    }
  }

  render() {
    return (
      <>
        {/* <Helmet>
          <!-- reCaptcha API -->
          <script src="https://www.google.com/recaptcha/api.js?onload=onloadCallback&render=explicit" async defer></script>
        </Helmet> */}

        <Layout page="contact" title="Contact | Alex Devero">
          <div className="hero">
            <h1>Let's get in touch</h1>
          </div>

          <div className="container">
            <div className="row justify-content-center">
              <div className="col-md-10 col-lg-7 col-xl-6">
                <p>Do you have some project you want to realize? Please, contact me via <a href="mailto:deveroalex@gmail.com">email</a>. I will reply in 3 days. {/*You can also <a href="#">click here</a> to reveal QR code and scan it. It contains my contact information.*/}</p>

                <p style={{ display: 'none' }}>Do you have some project you want to realize? Please, contact me via the form below. I will reply in 3 days. {/*You can also <a href="#">click here</a> to reveal QR code and scan it. It contains my contact information.*/}</p>
                </div>
            </div>

            {/* <div className="row justify-content-center">
              <div className="col-lg-8">
                <form action="">
                  <div className="row">
                    <div className="col-md-6">
                      <fieldset>
                        <label htmlFor="formName">Full name</label>

                        <input onChange={this.handleInputChange} type="text" name="formName" id="formName" required={true} />
                      </fieldset>
                    </div>

                    <div className="col-md-6">
                      <fieldset>
                        <label htmlFor="formEmail">Email address</label>

                        <input onChange={this.handleInputChange} type="email" name="formEmail" id="formEmail" required={true} />
                      </fieldset>
                    </div>
                  </div>

                  <fieldset className="input--username">
                    <label htmlFor="formUsername">Username</label>

                    <input onChange={this.handleInputChange} type="text" name="formUsername" id="formUsername" />
                  </fieldset>

                  <fieldset>
                    <label>Your message</label>

                    <textarea onChange={this.handleInputChange} name="formMessage" id="formMessage" required={true} />
                  </fieldset>

                  <fieldset>
                    <label htmlFor="formNewsletter">
                      <input className="styled-checkbox" onClick={this.handleCheckboxClick} type="checkbox" name="formNewsletter" id="formNewsletter" defaultChecked={false} />

                      <span>Yes, I want to be informed about new tech, design & business articles.</span>
                    </label>
                  </fieldset>

                  {/* <fieldset>
                    <Recaptcha
                      onloadCallback={this.onCaptchaLoad}
                      sitekey="6Ldt6RgUAAAAAKtaxY2787y3S7uP5Wp9kzL0PMMg"
                      render="explicit"
                      verifyCallback={this.onCaptchaVerify}
                    />
                  </fieldset> * /}

                  {this.state.isFormSubmitted && (
                    <fieldset>
                      <p><strong>Your message is on the way. I will reply in three days.</strong></p>
                    </fieldset>
                  )}

                  {this.state.isErrorSpamBotShown && (
                    <fieldset>
                      <p><strong>We don't work with spammers and bots.</strong></p>
                    </fieldset>
                  )}

                  {this.state.isErrorShown && (
                    <fieldset>
                      <p><strong>Please, make sure to fill all fields.</strong></p>
                    </fieldset>
                  )}

                  <fieldset>
                    <button onClick={this.handleFormSubmit} className="btn">
                      Send
                    </button>
                  </fieldset>
                </form>
              </div>
            </div> */}
          </div>
        </Layout>
      </>
    )
  }
}

export default Contact
