const Header = ({
		headerNav
	}) =>
	`
    <header class="main-header homemenu ">

      <div class="">

          <div class="row">

          <div class="col-xs-12">

              <a href="index.html" class="main-logo"><img src="./img/logo.png" alt="Spring in the Air"></a>

              <div id="menu-overlay" class="main-menu-toggle"></div>

              <div class="mobile-slide" id="mobile-main-menu" >

                  <div class="close-menu main-menu-toggle"><span class="remove"></span></div>

                  <nav class="main-menu-items">

                      <li class="link-home active">

                          <a href="./index.html">HOME</a>

                      </li>

                      <li class="link-about">

                          <a href="about.html">ABOUT URBANRISE</a>

                      </li>

                      <li class="link-location">

                          <a href="location.html">LOCATION</a>

                      </li>

                      <li class="link-floorplan">

                          <a href="floorplan.html">FLOOR PLANS</a>

                      </li>

                      <li class="link-amenities">

                          <a href="amenities.html">AMENITIES</a>
                  



                      </li>


                      <li class="link-contact">

                          <a href="contact.html">CONTACT</a>

                      </li>

                  </nav>

              </div>

              <button type="button" class="main-menu-toggle btn btn-brand" ><span class="glyphicon glyphicon-menu-hamburger"></span></button>

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
            <a href="about.html">About The Project</a>
            <a href="./index.html#location">Ameenpur Advantage</a>
          </div>
        </div>
        <div class="footer-item">
          <div class="footer-wrapper">
            <h4>FLOOR PLANS</h4>
            <a href="floorplan.html">2 BHK Floor plans</a>
            <a href="floorplan.html">3 BHK Floor plans</a>
          </div>
        </div>
        <div class="footer-item">
          <div class="footer-wrapper">
            <h4>OTHER LINKS</h4>
            <a href="blog.html">Blogs</a>
            <a href="privacy-policy.html">Privacy Policy</a>
            <a href="terms-and-conditions.html">Terms & Conditions</a>
          </div>
        </div>
        <div class="footer-item">
          <div class="footer-wrapper">
            <h4>URBANRISE</h4>
            <a href="about.html">About</a>

            <a href="projects-in-hyderabad.html">Hyderabad Projects</a>
            <a href="projects-in-chennai.html">Chennai Projects</a>
          </div>
        </div>
        <div class="footer-item">
          <div class="footer-wrapper">
            <h4>CONTACT</h4>
            <p>Write to us:</p>
            <a href="mailto:connect@springisintheair.in">connect@springisintheair.in</a>
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

function myfunction() {
  alert()
}


/* ------
 * TRACKING VARIABLES
 * ------ */
 
var webCookieName = "";

/* ------
 * CALLS
 * ------ */

var dateObj = new Date();
var year = dateObj.getFullYear();
var dateYear = $('#footerYear');
dateYear.html(year);


$(document).on('ready', function() {
  func_headerOpaque();
  highlightActivePage();
  

});

$(window).load(function() {
  func_headerOpaque();
});

$(window).resize(function() {
    func_headerOpaque();
});

$(window).scroll(function() {
  func_headerOpaque();
});

/* ------
 * FUNCTIONS
 * ------ */

var highlightActivePage = function() {

  if(typeof activePage !== 'undefined') {
    $('.' + activePage).addClass('active open');
    $('.' + activePage).removeClass('collapse');
  }
  
  if(typeof activeSubPage !== 'undefined') {
    $('.' + activeSubPage).addClass('active');
  }
  
  if(typeof activeSubSubPage !== 'undefined') {
    $('.' + activeSubSubPage).addClass('active');
  }
  
};


function func_headerOpaque() {
  var scrollPos = $(window).scrollTop();
  if(scrollPos > 75) {
    $(".main-header").addClass('bg');
    $(".main-header.homemenu").removeClass('no-bg');
  } else {
    $(".main-header").removeClass('bg');
    $(".main-header.homemenu").addClass('no-bg');
  }
}

$(".main-menu-toggle").click(function (e) {
    e.preventDefault();
    var elem = $(this);
    if (elem.hasClass('open')) {
        $("#menu-overlay").removeClass('showoverlay');
        $("#mobile-main-menu").removeClass('show');
        $('.main-menu-toggle').removeClass('open');
    }
    else {
        $("#mobile-main-menu").addClass('show');
        $('.main-menu-toggle').addClass('open');
        $("#menu-overlay").addClass('showoverlay');
    }
});

var scrollToID = function (id) {
    $('html, body, .main-body').animate({
        scrollTop: $('#' + id).offset().top - 70
    }, 500);
    return false;
};

$(".scrollLink").click(function(e) {
  e.preventDefault();
  var elem = $(this);
  var id = elem.attr('href');
  $('html, body').animate({
    scrollTop: $('.scroll-top').offset().top - 65
  }, 500);
});

var tabScrollID = function(id) {
  $('html, body, .main-body').animate({
    scrollTop: $('#' + id).offset().top - 120
  }, 500);
  return false;
};

$(".tabScroll").click(function (e) {
    e.preventDefault();
    var elem = $(this);
    var id = elem.attr('data-scrollTo')
    tabScrollID(id, 80);
});


$('.info-nav-list li a').click(function (e) {
    e.preventDefault();
    $('.info-nav-list li a').removeClass('active');
    $(this).addClass('active'); 
    event.preventDefault();
});


// $(document).ready(function () {
//     var s = $("#NavStrip");
//     var pos = s.position();
//     $(window).scroll(function () {
//         var windowpos = $(window).scrollTop();

//         if (windowpos >= pos.top & windowpos <= 500) {
//             s.addClass("fixed");
//         } else {
//             s.removeClass("fixed");
//         }
//     });
// });


$('.delete-confirm').click(function() {
  var link = $(this).attr('href');
  if (confirm("Are you sure you want to delete this item?") == true) {
    window.location(link);
  } else {
    return false;
  }
});

// function func_initFacultySlider() {

//     if (!$("#mqCheck-991").is(':visible')) {

//         if (facultySliderLoaded == true) {
//             return;
//         } else {
//             $('.faculty-slider').slick({
//                     slidesToShow: 3,
//                     slidesToScroll: 1,
//                     autoplay: true,
//                     autoplaySpeed: 3000,
//                     dots: true,
//                     arrows: false,
//                     infinite: true,
//                     centerMode: false,
//                     responsive: [{
//                             breakpoint: 600,
//                             settings: {
//                                 slidesToShow: 1,
//                                 slidesToScroll: 1,
//                             }
//                         }, {
//                             breakpoint: 480,
//                             settings: {
//                                 slidesToShow: 1,
//                                 slidesToScroll: 1
//                             }
//                         }
//                         // You can unslick at a given breakpoint now by adding:
//                         // settings: "unslick"
//                         // instead of a settings object
//                     ]
//                 }),

//             facultySliderLoaded = true;
//         }

//     } else {

//         if (facultySliderLoaded == false) {
//             return;
//         }
//         $('.faculty-slider').slick('unslick');
//         facultySliderLoaded = false;

//     }
// }


function setCookie(cname, cvalue, exdays) {
  var d = new Date();
  d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
  var expires = "expires="+d.toUTCString();
  document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}

/* ****** UTM TRACKING CODE: BEGIN ********* */
function getCookie(e){for(var t=e+"=",i=decodeURIComponent(document.cookie).split(";"),r=0;r<i.length;r++){for(var o=i[r];" "==o.charAt(0);)o=o.substring(1);if(0==o.indexOf(t))return o.substring(t.length,o.length)}return""}var UtmCookie;UtmCookie=function(){function e(e){null==e&&(e={}),this._cookieNamePrefix=webCookieName,this._domain=e.domain,this._sessionLength=e.sessionLength||1,this._cookieExpiryDays=e.cookieExpiryDays||365,this._additionalParams=e.additionalParams||[],this._utmParams=["utm_source","utm_medium","utm_campaign","utm_term","utm_content"],this.writeInitialReferrer(),this.writeLastReferrer(),this.writeInitialLandingPageUrl(),this.setCurrentSession(),this.additionalParamsPresentInUrl()&&this.writeAdditionalParams(),this.utmPresentInUrl()&&this.writeUtmCookieFromParams()}return e.prototype.createCookie=function(e,t,i,r,o,n){var a,s,m,l,d,u;u=null,i&&((d=new Date).setTime(d.getTime()+24*i*60*60*1e3),u=d),s=null!=u?"; expires="+u.toGMTString():"",m=null!=r?"; path="+r:"; path=/",a=null!=o?"; domain="+o:"",l=null!=n?"; secure":"",document.cookie=this._cookieNamePrefix+e+"="+escape(t)+s+m+a+l},e.prototype.readCookie=function(e){var t,i,r,o;for(o=this._cookieNamePrefix+e+"=",i=document.cookie.split(";"),r=0;r<i.length;){for(t=i[r];" "===t.charAt(0);)t=t.substring(1,t.length);if(0===t.indexOf(o))return t.substring(o.length,t.length);r++}return null},e.prototype.eraseCookie=function(e){this.createCookie(e,"",-1,null,this._domain)},e.prototype.getParameterByName=function(e){var t,i,r;return e=e.replace(/[\[]/,"\\[").replace(/[\]]/,"\\]"),i="[\\?&]"+e+"=([^&#]*)",t=new RegExp(i),(r=t.exec(window.location.search))?decodeURIComponent(r[1].replace(/\+/g," ")):""},e.prototype.additionalParamsPresentInUrl=function(){var e,t,i,r;for(e=0,t=(r=this._additionalParams).length;t>e;e++)if(i=r[e],this.getParameterByName(i))return!0;return!1},e.prototype.utmPresentInUrl=function(){var e,t,i,r;for(e=0,t=(r=this._utmParams).length;t>e;e++)if(i=r[e],this.getParameterByName(i))return!0;return!1},e.prototype.writeCookie=function(e,t){this.createCookie(e,t,this._cookieExpiryDays,null,this._domain)},e.prototype.writeAdditionalParams=function(){var e,t,i,r,o;for(e=0,t=(r=this._additionalParams).length;t>e;e++)i=r[e],o=this.getParameterByName(i),this.writeCookie(i,o)},e.prototype.writeUtmCookieFromParams=function(){var e,t,i,r,o;for(e=0,t=(r=this._utmParams).length;t>e;e++)i=r[e],o=this.getParameterByName(i),this.writeCookie(i,o)},e.prototype.writeCookieOnce=function(e,t){this.readCookie(e)||this.writeCookie(e,t)},e.prototype._sameDomainReferrer=function(e){var t;return t=document.location.hostname,e.indexOf(this._domain)>-1||e.indexOf(t)>-1},e.prototype._isInvalidReferrer=function(e){return""===e||void 0===e},e.prototype.writeInitialReferrer=function(){var e;e=document.referrer,this._isInvalidReferrer(e)&&(e="direct"),this.writeCookieOnce("referrer",e)},e.prototype.writeLastReferrer=function(){var e;e=document.referrer,this._sameDomainReferrer(e)||(this._isInvalidReferrer(e)&&(e="direct"),this.writeCookie("last_referrer",e))},e.prototype.writeInitialLandingPageUrl=function(){var e;(e=this.cleanUrl())&&this.writeCookieOnce("initial_landing_page",e)},e.prototype.initialReferrer=function(){return this.readCookie("referrer")},e.prototype.lastReferrer=function(){return this.readCookie("last_referrer")},e.prototype.initialLandingPageUrl=function(){return this.readCookie("initial_landing_page")},e.prototype.incrementVisitCount=function(){var e,t,i;e="visits",t=parseInt(this.readCookie(e),10),i=1,i=isNaN(t)?1:t+1,this.writeCookie(e,i)},e.prototype.visits=function(){return this.readCookie("visits")},e.prototype.setCurrentSession=function(){var e;e="current_session",this.readCookie(e)||(this.createCookie(e,"true",this._sessionLength/24,null,this._domain),this.incrementVisitCount())},e.prototype.cleanUrl=function(){var e;return e=window.location.search.replace(/utm_[^&]+&?/g,"").replace(/&$/,"").replace(/^\?$/,""),window.location.origin+window.location.pathname+e+window.location.hash},e}();var UtmForm,_uf;UtmForm=function(){function e(e){null==e&&(e={}),this._utmParamsMap={},this._utmParamsMap.utm_source=e.utm_source_field||"USOURCE",this._utmParamsMap.utm_medium=e.utm_medium_field||"UMEDIUM",this._utmParamsMap.utm_campaign=e.utm_campaign_field||"UCAMPAIGN",this._utmParamsMap.utm_content=e.utm_content_field||"UCONTENT",this._utmParamsMap.utm_term=e.utm_term_field||"UTERM",this._additionalParamsMap=e.additional_params_map||{},this._initialReferrerField=e.initial_referrer_field||"IREFERRER",this._lastReferrerField=e.last_referrer_field||"LREFERRER",this._initialLandingPageField=e.initial_landing_page_field||"ILANDPAGE",this._visitsField=e.visits_field||"VISITS",this._addToForm=e.add_to_form||"all",this._formQuerySelector=e.form_query_selector||"form",this.utmCookie=new UtmCookie({domain:e.domain,sessionLength:e.sessionLength,cookieExpiryDays:e.cookieExpiryDays,additionalParams:Object.getOwnPropertyNames(this._additionalParamsMap)}),"none"!==this._addToForm&&this.addAllFields()}return e.prototype.addAllFields=function(){var e,t,i,r;i=this._utmParamsMap;for(t in i)e=i[t],this.addFormElem(e,this.utmCookie.readCookie(t));r=this._additionalParamsMap;for(t in r)e=r[t],this.addFormElem(e,this.utmCookie.readCookie(t));this.addFormElem(this._initialReferrerField,this.utmCookie.initialReferrer()),this.addFormElem(this._lastReferrerField,this.utmCookie.lastReferrer()),this.addFormElem(this._initialLandingPageField,this.utmCookie.initialLandingPageUrl()),this.addFormElem(this._visitsField,this.utmCookie.visits())},e.prototype.addFormElem=function(e,t){var i,r,o,n,a;if(t&&(i=document.querySelectorAll(this._formQuerySelector)).length>0)if("first"===this._addToForm)(r=i[0]).insertBefore(this.getFieldEl(e,t),r.firstChild);else for(n=0,a=i.length;a>n;n++)(o=i[n]).insertBefore(this.getFieldEl(e,t),o.firstChild)},e.prototype.getFieldEl=function(e,t){var i;return i=document.createElement("input"),i.type="hidden",i.name=e,i.value=t,i},e}(),_uf=window._uf||{},window.UtmForm=new UtmForm(_uf);
/* ****** UTM TRACKING CODE: END *********** */
