// import axios from 'axios'
// import Recaptcha from 'react-recaptcha''
import Layout from '@/components/layout'

export default function Contact() {
  // const [formEmail, setFormEmail] = useState('')
  // const [formMessage, setFormMessage] = useState('')
  // const [formName, setFormName] = useState('')
  // const [formNewsletter, setFormNewsletter] = useState(false)
  // const [formUsername, setFormUsername] = useState('')
  // const [isCaptchaValid, setIsCaptchaValid] = useState(false)
  // const [isErrorShown, setIsErrorShown] = useState(false)
  // const [isErrorSpamBotShown, setIsErrorSpamBotShown] = useState(false)
  // const [isFormSubmitted, setIsFormSubmitted] = useState(false)
  // const [isFormValid, setIsFormValid] = useState(false)

  // const handleInputChange = useCallback((event: ChangeEvent<HTMLInputElement>) => {
  //   if (event.target.value.length > 0 && event.target.name !== 'formEmail') {
  //     if (event.target.name === 'formName') {
  //       setFormName(event.target.value)
  //     } else if (event.target.name === 'formUsername') {
  //       setFormUsername(event.target.value)
  //     } else if (event.target.name === 'formMessage') {
  //       setFormMessage(event.target.value)
  //     }
  //   }

  //   if (event.target.name === 'formEmail') {
  //     /* eslint-disable */
  //     var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
  //     /* eslint-enable */

  //     if (re.test(String(event.target.value).toLowerCase())) {
  //       setFormEmail(event.target.value)
  //     }
  //   }
  // }, [])

  // const handleCheckboxClick = useCallback((event: ChangeEvent<HTMLInputElement>) => {
  //   setFormNewsletter(event.target.checked)
  // }, [])

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

  // const handleFormSubmit = useCallback((event: SubmitEvent) => {
  //   event.preventDefault()

  //   if (formEmail.length > 0 && formName.length > 0 && formMessage.length > 0 && formUsername.length === 0 /* isCaptchaValid */) {
  //     setIsErrorShown(false)
  //     setIsFormValid(false)

  //     setTimeout(() => {
  //       axios({
  //         data: {
  //           formEmail,
  //           formMessage,
  //           formName,
  //           formNewsletter,
  //           formUsername,
  //           isCaptchaValid,
  //           isErrorShown,
  //           isErrorSpamBotShown,
  //           isFormSubmitted,
  //           isFormValid,
  //         },
  //         headers: { 'content-type': 'application/json' },
  //         method: 'POST',
  //         url: '/contact.php'
  //       })
  //         .then((res) => {
  //           console.info(res)

  //           setFormEmail('')
  //           setFormMessage('')
  //           setFormName('')
  //           setFormNewsletter(false)
  //           setIsCaptchaValid(false)
  //           setIsErrorShown(false)
  //           setIsErrorSpamBotShown(false)
  //           setIsFormSubmitted(true)
  //           setIsFormValid(false)
  //         })
  //         .catch((err) => {
  //           console.warn('An error occurred: ', err)
  //         })
  //     }, 1000)
  //   } else if (formUsername.length > 0) {
  //     setIsErrorSpamBotShown(true)
  //   } else {
  //     setIsErrorShown(true)
  //   }
  // }, [formEmail, formMessage, formName, formNewsletter, formUsername, isCaptchaValid, isErrorShown, isErrorSpamBotShown, isFormSubmitted, isFormValid])

  return (
    <>
      {/* <Helmet>
        <!-- reCaptcha API -->
        <script src="https://www.google.com/recaptcha/api.js?onload=onloadCallback&render=explicit" async defer></script>
      </Helmet> */}

      <Layout title='Contact | Alex Devero'>
        <h1 className='mb-8 mt-8 text-center text-5xl font-bold'>Let's get in touch</h1>

        <div className='flex flex-1 justify-center'>
          <div className='flex max-w-3xl flex-col gap-3'>
            <p>
              Do you have some project you want to realize? Let's get in touch! Contact me on my{' '}
              <a href='mailto:deveroalex@gmail.com' className='underline'>
                email
              </a>
              .
              {/* You can also <a href="#">click here</a> to reveal QR code and scan it. It contains my contact information. */}
            </p>
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

                {isFormSubmitted && (
                  <fieldset>
                    <p><strong>Your message is on the way. I will reply in three days.</strong></p>
                  </fieldset>
                )}

                {isErrorSpamBotShown && (
                  <fieldset>
                    <p><strong>We don't work with spammers and bots.</strong></p>
                  </fieldset>
                )}

                {isErrorShown && (
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
