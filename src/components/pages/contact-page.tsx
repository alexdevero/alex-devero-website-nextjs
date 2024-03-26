import Layout from '../layout'

export const ContactPage = () => (
  <Layout title='Contact'>
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
)
