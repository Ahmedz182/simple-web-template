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
<svg width="100%" height="100%" id="svg" viewBox="0 0 1440 590" xmlns="http://www.w3.org/2000/svg" class="transition duration-300 ease-in-out delay-150"><path d="M 0,600 C 0,600 0,200 0,200 C 149.86666666666667,175.33333333333334 299.73333333333335,150.66666666666669 452,153 C 604.2666666666667,155.33333333333331 758.9333333333334,184.66666666666666 924,197 C 1089.0666666666666,209.33333333333334 1264.5333333333333,204.66666666666669 1440,200 C 1440,200 1440,600 1440,600 Z" stroke="none" stroke-width="0" fill="#ff0080" fill-opacity="0.53" class="transition-all duration-300 ease-in-out delay-150 path-0" transform="rotate(-180 720 300)"></path><path d="M 0,600 C 0,600 0,400 0,400 C 158.2666666666667,385.4666666666667 316.5333333333334,370.93333333333334 490,376 C 663.4666666666666,381.06666666666666 852.1333333333332,405.73333333333335 1013,413 C 1173.8666666666668,420.26666666666665 1306.9333333333334,410.1333333333333 1440,400 C 1440,400 1440,600 1440,600 Z" stroke="none" stroke-width="0" fill="#ff0080" fill-opacity="1" class="transition-all duration-300 ease-in-out delay-150 path-1" transform="rotate(-180 720 300)"></path></svg>
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