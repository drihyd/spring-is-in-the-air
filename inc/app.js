const Header = ({
		headerNav
	}) =>
	`
    <header class="main-header homemenu ">

      <div class="">

          <div class="row">

          <div class="col-xs-12">

              <a href="./index.html" class="main-logo"><img src="./img/logo.png" alt="Spring in the Air"></a>

              <div id="menu-overlay" class="main-menu-toggle"></div>

              <div class="mobile-slide" id="mobile-main-menu">

                  <div class="close-menu main-menu-toggle"><span class="remove"></span></div>

                  <nav class="main-menu-items">

                      <li class="link-home active">

                          <a href="./index.html">HOME</a>

                      </li>

                      <li class="link-about">

                          <a href="about.html">ABOUT URBANRISE</a>

                      </li>

                      <li class="link-location">

                          <a href="#location">LOCATION</a>

                      </li>

                      <li class="link-floorplan">

                          <a href="floorplan.html">FLOOR PLANS</a>

                      </li>

                      <li class="link-amenities">

                          <a href="#amenities">AMENITIES</a>

                      </li>


                      <li class="link-contact">

                          <a href="contact.html">CONTACT</a>

                      </li>

                  </nav>

              </div>

              <button type="button" class="main-menu-toggle btn btn-brand"><span class="glyphicon glyphicon-menu-hamburger"></span></button>

              <div class="contact-info">

                <p class="text-black"><b>CALL US:</b><a href="tel:+91-(902)-214-5512"> +91-(902)-214-5512</a></p>

                <!--<a href="#" class="text-pink schedule">SCHEDULE A VISIT</a>-->

              </div>

          </div>

          </div>

      </div>

  </header>
`;

const Footer = ({
		footerNav
	}) =>
	`
 <footer class="call-footer-fixed" style="background: #1D1E24">

    <div class="container">

      <div class="row">

        <div class="col-xs-12">

          <div class="text-align-center">

          <p>&copy; <span id="footerYear">2020</span> BY URBANRISE</p>

          </div>
          </div>

        </div>

      </div>

    </div>

  </footer>

`;



// Header Script
$('#headerNav').html([{
	headerNav: ''
}].map(Header).join(''));

// Footer Script
$('#footerNav').html([{
	footerNav: ''
}].map(Footer).join(''));

