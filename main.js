class MyHeader extends HTMLElement {

  connectedCallback() {
    this.innerHTML = `
        <link rel="stylesheet" href="style.css">

        <header>
    <div >
    <nav >
    <a  class="a" href="./index.html"><b>Home</b></a> &nbsp; &nbsp;
    <a class="a" href="./courses.html"><b>Courses</b></a>&nbsp; &nbsp;
    <a class="a" href="./contact.html" ><b>Contact Us</b></a>&nbsp; &nbsp;

</nav>
    <svg class="na" width="100%" height="100%" id="svg" viewBox="0 0 1440 690" xmlns="http://www.w3.org/2000/svg" class="transition duration-300 ease-in-out delay-150"><path d="M 0,700 C 0,700 0,175 0,175 C 125.33333333333331,198.60000000000002 250.66666666666663,222.20000000000002 402,232 C 553.3333333333334,241.79999999999998 730.6666666666667,237.8 908,226 C 1085.3333333333333,214.2 1262.6666666666665,194.6 1440,175 C 1440,175 1440,700 1440,700 Z" stroke="none" stroke-width="0" fill="#ff0080" fill-opacity="0.4" class="transition-all duration-300 ease-in-out delay-150 path-0" transform="rotate(-180 720 350)"></path><path d="M 0,700 C 0,700 0,350 0,350 C 191.46666666666664,337.20000000000005 382.9333333333333,324.40000000000003 539,325 C 695.0666666666667,325.59999999999997 815.7333333333333,339.59999999999997 960,346 C 1104.2666666666667,352.40000000000003 1272.1333333333332,351.20000000000005 1440,350 C 1440,350 1440,700 1440,700 Z" stroke="none" stroke-width="0" fill="#ff0080" fill-opacity="0.53" class="transition-all duration-300 ease-in-out delay-150 path-1" transform="rotate(-180 720 350)"></path><path d="M 0,700 C 0,700 0,525 0,525 C 181.86666666666667,535.9333333333334 363.73333333333335,546.8666666666667 503,555 C 642.2666666666667,563.1333333333333 738.9333333333334,568.4666666666667 888,563 C 1037.0666666666666,557.5333333333333 1238.5333333333333,541.2666666666667 1440,525 C 1440,525 1440,700 1440,700 Z" stroke="none" stroke-width="0" fill="#ff0080" fill-opacity="1" class="transition-all duration-300 ease-in-out delay-150 path-2" transform="rotate(-180 720 350)"></path></svg>
        <h1 class="nn">Welcome to <b class="title">Learn Hub Studio</b> </h1>
    </div>
  
</header>
`
  }
}

customElements.define('my-header', MyHeader)

class MyFooter extends HTMLElement {

  connectedCallback() {
    this.innerHTML = `
        <footer class="footer">
        <nav class="footer" >
            <a  class="a" href="#"><b>FAQ</b></a> &nbsp; &nbsp;
            <a class="a" href="#"><b>Term and Condition</b></a>&nbsp; &nbsp;
            <a class="a" href="./privacy.html"><b>Privacy Policy</b></a>&nbsp; &nbsp; 
            <a class="a" href="#"><b>&#9400; Learn Hub Studio 2022</b></a>
        </nav>
        </footer>
`
  }
}
customElements.define('my-footer', MyFooter)


class MyContact extends HTMLElement {

  connectedCallback() {
    this.innerHTML = `
        <br />
    <div class="fcf-body">
      <div id="fcf-form">
        <h3 class="fcf-h3">Contact us</h3>

        <form id="fcf-form-id" class="fcf-form-class" method="post">
          <div class="fcf-form-group">
            <label for="Name" class="fcf-label">Your name</label>
            <div class="fcf-input-group">
              <input
                type="text"
                id="Name"
                name="Name"
                class="fcf-form-control"
                required
              />
            </div>
          </div>

          <div class="fcf-form-group">
            <label for="Email" class="fcf-label">Your email address</label>
            <div class="fcf-input-group">
              <input
                type="email"
                id="Email"
                name="Email"
                class="fcf-form-control"
                required
              />
            </div>
          </div>

          <div class="fcf-form-group">
            <label for="Message" class="fcf-label">Your message</label>
            <div class="fcf-input-group">
              <textarea
                id="Message"
                name="Message"
                class="fcf-form-control"
                rows="6"
                maxlength="3000"
                required
              ></textarea>
            </div>
          </div>

          <div class="fcf-form-group">
            <button
              type="button"
              id="fcf-button"
              class="fcf-btn fcf-btn-primary fcf-btn-lg fcf-btn-block"
            >
              Send Message
            </button>
          </div>
        </form>
      </div>
      

      
    </div>
    <br />
`
  }
}
customElements.define('my-contact', MyContact)