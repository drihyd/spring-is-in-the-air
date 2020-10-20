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
<section class="footer-section" style="background: #24252D">
    <div class="container">
      <div class="row">
        <div class="footer-item">
          <div class="footer-wrapper">
            <h4>THE PROJECT</h4>
            <a href="">About The Project</a>
            <a href="">The Neighbourhood</a>
            <a href="">Ameenpur Advantage</a>
          </div>
        </div>
        <div class="footer-item">
          <div class="footer-wrapper">
            <h4>FLOOR PLANS</h4>
            <a href="">2 BHK Floor plans</a>
            <a href="">3 BHK Floor plans</a>
          </div>
        </div>
        <div class="footer-item">
          <div class="footer-wrapper">
            <h4>OTHER LINKS</h4>
            <a href="">Blogs</a>
            <a href="">Privacy Policy</a>
            <a href="">Terms & Conditions</a>
          </div>
        </div>
        <div class="footer-item">
          <div class="footer-wrapper">
            <h4>URBANRISE</h4>
            <a href="">About</a>
            <a href="">Hyderabad Projects</a>
            <a href="">Chennai Projects</a>
          </div>
        </div>
        <div class="footer-item">
          <div class="footer-wrapper">
            <h4>CONTACT</h4>
            <p>Write to us:</p>
            <a href="">connect@springisintheair.in</a>
            <p>Call us:</p>
            <a href="tel:+91-(902)-214-5512">+91-(902)-214-5512</a>
            <p>Visit us:</p>
            <a href="">Ameenpur, Hyderabad-45</a>
          </div>
        </div>
      </div>
    </div>
  </section>


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

