class SpecialHeader extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `<header id="header" class="header d-flex align-items-center fixed-top">
    <div class="container-fluid container-xl position-relative d-flex align-items-center">

      <a href="index.html" class="logo d-flex align-items-center me-auto">
        <!-- Uncomment the line below if you also wish to use an image logo -->
        <!-- <img src="assets/img/logo.png" alt=""> -->
        <h1 class="sitename">E-ACTUELL</h1>
      </a>

      <nav id="navmenu" class="navmenu">
        <ul>
          <li><a href="index.html#hero" class="active">Home</a></li>
          <li><a href="index.html#about">About Us</a></li>
          
         <!-- <li class="dropdown"><a href="index.html#services"><span>Services</span>
           <i class="bi bi-chevron-down toggle-dropdown"></i></a>
            <ul>
            
           
              <li><a href="service-details.html">Research and Development</a></li>
              
              <li><a href="service-details.html#engservices">Engineering services</a></li>
              <li><a href="service-details.html#print3d">3d Printing </a></li>
              <li><a href="service-details.html#consulting">Consulting Services</a></li>
            </ul>
          </li> -->

           <li class="dropdown"><a href="index.html#products"><span>Products</span> <i class="bi bi-chevron-down toggle-dropdown"></i></a>
            <ul>
              <li><a href="iwms-details.html">AWMS</a></li>
              
              <li><a href="product_2.html">RE Roamrider</a></li>
              <li><a href="iwms-details1.html">RE Top box </a></li>
            
            </ul>
          </li>
          
              
          
          <li><a href="index.html#services">Services</a></li>
          <li><a href="index.html#team">Career</a></li>
          <li><a href="index.html#contact">Contact</a></li>
        </ul>
        <i class="mobile-nav-toggle d-xl-none bi bi-list"></i>
      </nav>

     <!-- <a class="cta-btn" href="index.html#about">Get Started</a> -->

    </div>
  </header> `;
  }
}

class SpecialFooter extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
       <footer id="footer" class="footer dark-background">

    <div class="container footer-top">
      <div class="row gy-4">
        <div class="col-lg-4 col-md-6 footer-about">
          <a href="index.html" class="logo d-flex align-items-center">
            <span class="sitename">E-ACTUELL</span>
          </a>
          <div class="footer-contact pt-3">
            <p>BTM Layout 2nd Stage, Bangalore-560076</p>
            <p>Karnataka, INDIA</p>
            <p class="mt-3"><strong>Phone:</strong> <span>+91 9738 388 660</span></p>
            <p><strong>Email:</strong> <span>info@e-actuell.com</span></p>
          </div>
          <div class="social-links d-flex mt-4">
            <a href=""><i class="bi bi-twitter-x"></i></a>
            <a href=""><i class="bi bi-facebook"></i></a>
            <a href=""><i class="bi bi-instagram"></i></a>
            <a href=""><i class="bi bi-linkedin"></i></a>
          </div>
        </div>

        <div class="col-lg-2 col-md-3 footer-links">
          <h4>Useful Links</h4>
          <ul>
            <li><i class="bi bi-chevron-right"></i> <a href="index.html#hero">Home</a></li>
            <li><i class="bi bi-chevron-right"></i> <a href="index.html#about">About us</a></li>
            <li><i class="bi bi-chevron-right"></i> <a href="index.html#services">Services</a></li>
            <li><i class="bi bi-chevron-right"></i> <a href="#">Terms of service</a></li>
            <li><i class="bi bi-chevron-right"></i> <a href="#">Privacy policy</a></li>
          </ul>
        </div>

       

        <div class="col-lg-4 col-md-12 footer-newsletter">
          <h4>Our Newsletter</h4>
          <p>Subscribe to our newsletter and receive the latest news about our products and services!</p>
          <form action="forms/newsletter.php" method="post" class="php-email-form">
            <div class="newsletter-form"><input type="email" name="email"><input type="submit" value="Subscribe"></div>
            <div class="loading">Loading</div>
            <div class="error-message"></div>
            <div class="sent-message">Your subscription request has been sent. Thank you!</div>
          </form>
        </div>

      </div>
    </div>

    <div class="container copyright text-center mt-4">
      <p>© <span>Copyright</span> <strong class="px-1 sitename">E-actuell</strong> <span>All Rights Reserved</span></p>
      <div class="credits">
        <!-- All the links in the footer should remain intact. -->
        <!-- You can delete the links only if you've purchased the pro version. -->
        <!-- Licensing information: https://bootstrapmade.com/license/ -->
        <!-- Purchase the pro version with working PHP/AJAX contact form: [buy-url] -->
       
      </div>
    </div>

  </footer>
        `;
  }
}
customElements.define("special-header", SpecialHeader);
customElements.define("special-footer", SpecialFooter);
