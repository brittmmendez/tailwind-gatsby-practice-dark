import React from "react";
import { navigate } from 'gatsby-link'
import Layout from "../components/layout";
import SEO from "../components/seo";

function encode(data) {
  return Object.keys(data)
    .map((key) => encodeURIComponent(key) + '=' + encodeURIComponent(data[key]))
    .join('&')
}

export default class ContactPage extends React.Component {
  constructor(props) {
    super(props)
    this.state = { 
      isValidated: false,
      toggleModal: false 
    }
  }

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value })
  }

  handleSubmit = (e) => {
    e.preventDefault()
    const form = e.target
    fetch('/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: encode({
        'form-name': form.getAttribute('name'),
        ...this.state,
      }),
    })
      .then(() => {
        this.setState({
          toggleModal: true
        })

      })
      .catch((error) => console.log(error))
      
      e.target[2].value="";
      e.target[3].value="";
      e.target[4].value="";
  }

  handleClick() {
    this.setState({
      toggleModal: false
    })
  }

  render() {
    return (
      <Layout>
        <SEO
          keywords={[`gatsby`, `tailwind`, `react`, `tailwindcss`]}
          title="Contact"
        />

        <div className="w-full py-24 px-6 bg-fixed gradient bg-no-repeat bg-bottom z-10 h-lg">
          <div className="container max-w-4xl mx-auto text-center">
            <h1 className="w-full my-2 text-5xl font-bold leading-tight text-center text-gray-100">Contact Us</h1>
          </div>
        </div>

        <section className="services-page bg-white border-b py-12">
          {this.state.toggleModal &&
            <div className="h-screen w-full flex flex-col items-center justify-center">
              <div className="h-screen w-full fixed flex items-center justify-center bg-modal z-10">
                    <div className="bg-white shadow p-8 m-4 max-h-full text-center overflow-y-scroll">
                        <div className="mb-4">
                          <h3 className="text-3xl text-gray-800 font-bold leading-none mb-3">Submitted!</h3>
                        </div>
                        <div className="mb-8">
                            <p>Thank you for reaching out. We will be in touch with you shortly!</p>
                        </div>
                        <div className="flex justify-center">
                          <button onClick={() => this.handleClick()} className="inline-block bg-black text-white border border-black border-solid px-8 py-4 font-semibold hover:bg-white hover:text-black"
                            >Close
                          </button>
                        </div>
                    </div>
                </div>
            </div>
          }
          <div className="px-4 sm:px-8 lg:px-16 xl:px-40 2xl:px-64 mx-auto text-left flex flex-wrap items-start md:flex-no-wraps relative">
            <div className="flex flex-wrap my-8">
              <div className="p-2">
                <h3 className="text-3xl text-gray-800 font-bold leading-none mb-3">Get In Touch</h3>
                <p className="text-gray-600 mb-2">Please fill out our form below and we will be in touch to answer any questions you have.<br /><br />
                </p>
                <form
                name="contact"
                method="post"
                data-netlify="true"
                data-netlify-honeypot="bot-field"
                onSubmit={this.handleSubmit}
                >
                  {/* The `form-name` hidden field is required to support form submissions without JavaScript */}
                  <input type="hidden" name="form-name" value="contact" />
                  <div hidden>
                    <label>
                      Don’t fill this out:{' '}
                      <input name="bot-field" onChange={this.handleChange} />
                    </label>
                  </div>
                  <div className="field mb-6">
                    <label className="label hidden" htmlFor={'name'}>
                      Your name
                    </label>
                    <div className="control">
                      <input
                        className="input border-solid border-gray-400 border-2 p-3 md:text-xl w-full" 
                        placeholder="Name"
                        type={'text'}
                        name={'name'}
                        onChange={this.handleChange}
                        id={'name'}
                        required={true}
                      />
                    </div>
                  </div>
                  <div className="field mb-6">
                    <label className="label hidden" htmlFor={'email'}>
                      Email
                    </label>
                    <div className="control">
                      <input
                        className="input border-solid border-gray-400 border-2 p-3 md:text-xl w-full"
                        placeholder="Email"
                        type={'email'}
                        name={'email'}
                        onChange={this.handleChange}
                        id={'email'}
                        required={true}
                      />
                    </div>
                  </div>
                  <div className="field mb-6">
                    <label className="label hidden" htmlFor={'message'}>
                      Message
                    </label>
                    <div className="control">
                      <textarea
                        placeholder="Message"
                        className="textarea border-solid border-gray-400 border-2 p-3 md:text-xl w-full" 
                        name={'message'}
                        onChange={this.handleChange}
                        id={'message'}
                        required={true}
                      />
                    </div>
                  </div>
                  <div className="field">
                    <button className="button is-link inline-block bg-black text-white border border-black border-solid px-8 py-4 font-semibold hover:bg-white hover:text-black" type="submit">
                      Submit
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </section>
      </Layout>
    );
  }
}