class MyHeader extends HTMLElement{

    connectedCallback(){
        this.innerHTML = `
        <link rel="stylesheet" href="style.css">

        <header>
    <div class="header">
        <h1>Welcome to <b class="title">Learn Hub Studio</b> </h1>
    </div>
    <nav >
        <a  class="a" href="./index.html"><b>Home</b></a> &nbsp; &nbsp;
        <a class="a" href="./courses.html"><b>Courses</b></a>&nbsp; &nbsp;
        <a class="a" href="./contact.html" ><b>Contact Us</b></a>&nbsp; &nbsp;

    </nav>
</header>
`
    }
}

customElements.define('my-header', MyHeader)

class MyFooter extends HTMLElement{

    connectedCallback(){
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


class MyContact extends HTMLElement{

    connectedCallback(){
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