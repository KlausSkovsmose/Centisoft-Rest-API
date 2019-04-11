import React, { Component } from "react";
import HtmlLogo from "../../img/logo_html.png";
import Csslogo from "../../img/logo_css.png";
import brushLogo from "../../img/logo_brush.png";

class Landing extends Component {
  render() {
    return (
      <div>
        <section id="showcase">
          <div className="container">
            <h1>Affordable Professional Web Design</h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu
              luctus ipsum, rhoncus semper magna. Nulla nec magna sit amet sem
              interdum condimentum.
            </p>
          </div>
        </section>

        <section id="newsletter">
          <div className="container">
            <h1>Subscribe To Our Newsletter</h1>
            <form>
              <input type="email" placeholder="Enter Email..." />
              <button type="submit" className="button_1">
                Subscribe
              </button>
            </form>
          </div>
        </section>

        <section id="boxes">
          <div className="container">
            <div className="box">
              <img src={HtmlLogo} alt="Html" />
              <h3>HTML5 Markup</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
                mi augue, viverra sit amet ultricies
              </p>
            </div>
            <div className="box">
              <img src={Csslogo} alt="Css" />
              <h3>CSS3 Styling</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
                mi augue, viverra sit amet ultricies
              </p>
            </div>
            <div className="box">
              <img src={brushLogo} alt="Graphic Design" />
              <h3>Graphic Design</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
                mi augue, viverra sit amet ultricies
              </p>
            </div>
          </div>
        </section>
      </div>
    );
  }
}

export default Landing;
