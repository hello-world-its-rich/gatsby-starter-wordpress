import React from 'react'
import Helmet from 'react-helmet'
import large_unsplash from '../img/large_unsplash.jpg'


import Navbar from './Navbar'
import './all.sass'

const TemplateWrapper = ({ children }) => (
  <div>

    <Helmet title="Welcome to Rich's Andrews Portfolio" />
    <Navbar />
    <div>{children}</div>

<p>Here is a large image to see what happens to Google Page Speed score</p>
    <img src={large_unsplash} alt="largeunsplash" style={{ width: '100%'}} />


        <div id="form">    <form name="contact" method="POST" data-netlify-recaptcha="true" data-netlify="true">

        <p>
          <label>Your Name: <input type="text" name="name" /></label>
        </p>
        <p>
          <label>Your Email: <input type="email" name="email" /></label>
        </p>
        <p>
          <label>Your Role: <select name="role[]" multiple>
            <option value="leader">Leader</option>
            <option value="follower">Follower</option>
          </select></label>
        </p>
        <p>
          <label>Message: <textarea name="message"></textarea></label>
        </p>
        <p>
        <div data-netlify-recaptcha="true"></div>

        </p>
        <p>
          <button type="submit">Send</button>
        </p>
      </form>
      </div>
  </div>
)

export default TemplateWrapper
