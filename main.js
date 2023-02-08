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
<svg width="100%" height="100%" id="svg" viewBox="0 0 1440 590" xmlns="http://www.w3.org/2000/svg" class="transition duration-300 ease-in-out delay-150"><style>
          .path-0{
            animation:pathAnim-0 4s;
            animation-timing-function: linear;
            animation-iteration-count: infinite;
          }
          @keyframes pathAnim-0{
            0%{
              d: path("M 0,600 C 0,600 0,200 0,200 C 131.2,198.53333333333333 262.4,197.06666666666666 427,209 C 591.6,220.93333333333334 789.5999999999999,246.2666666666667 964,247 C 1138.4,247.7333333333333 1289.2,223.86666666666665 1440,200 C 1440,200 1440,600 1440,600 Z");
            }
            25%{
              d: path("M 0,600 C 0,600 0,200 0,200 C 144.13333333333333,206.26666666666665 288.26666666666665,212.53333333333333 458,206 C 627.7333333333333,199.46666666666667 823.0666666666666,180.13333333333333 991,177 C 1158.9333333333334,173.86666666666667 1299.4666666666667,186.93333333333334 1440,200 C 1440,200 1440,600 1440,600 Z");
            }
            50%{
              d: path("M 0,600 C 0,600 0,200 0,200 C 142.66666666666669,211.2 285.33333333333337,222.4 433,210 C 580.6666666666666,197.6 733.3333333333333,161.6 902,156 C 1070.6666666666667,150.4 1255.3333333333335,175.2 1440,200 C 1440,200 1440,600 1440,600 Z");
            }
            75%{
              d: path("M 0,600 C 0,600 0,200 0,200 C 119.60000000000002,234.26666666666668 239.20000000000005,268.53333333333336 394,267 C 548.8,265.46666666666664 738.8,228.13333333333335 919,211 C 1099.2,193.86666666666665 1269.6,196.93333333333334 1440,200 C 1440,200 1440,600 1440,600 Z");
            }
            100%{
              d: path("M 0,600 C 0,600 0,200 0,200 C 131.2,198.53333333333333 262.4,197.06666666666666 427,209 C 591.6,220.93333333333334 789.5999999999999,246.2666666666667 964,247 C 1138.4,247.7333333333333 1289.2,223.86666666666665 1440,200 C 1440,200 1440,600 1440,600 Z");
            }
          }</style><path d="M 0,600 C 0,600 0,200 0,200 C 131.2,198.53333333333333 262.4,197.06666666666666 427,209 C 591.6,220.93333333333334 789.5999999999999,246.2666666666667 964,247 C 1138.4,247.7333333333333 1289.2,223.86666666666665 1440,200 C 1440,200 1440,600 1440,600 Z" stroke="none" stroke-width="0" fill="#ff0080" fill-opacity="0.53" class="transition-all duration-300 ease-in-out delay-150 path-0" transform="rotate(-180 720 300)"></path><style>
          .path-1{
            animation:pathAnim-1 4s;
            animation-timing-function: linear;
            animation-iteration-count: infinite;
          }
          @keyframes pathAnim-1{
            0%{
              d: path("M 0,600 C 0,600 0,400 0,400 C 109.60000000000002,384.4 219.20000000000005,368.8 390,363 C 560.8,357.2 792.8,361.20000000000005 978,369 C 1163.2,376.79999999999995 1301.6,388.4 1440,400 C 1440,400 1440,600 1440,600 Z");
            }
            25%{
              d: path("M 0,600 C 0,600 0,400 0,400 C 188.53333333333336,397.6 377.0666666666667,395.2 553,407 C 728.9333333333333,418.8 892.2666666666667,444.79999999999995 1038,446 C 1183.7333333333333,447.20000000000005 1311.8666666666668,423.6 1440,400 C 1440,400 1440,600 1440,600 Z");
            }
            50%{
              d: path("M 0,600 C 0,600 0,400 0,400 C 178.66666666666663,364.79999999999995 357.33333333333326,329.59999999999997 511,330 C 664.6666666666667,330.40000000000003 793.3333333333335,366.40000000000003 944,384 C 1094.6666666666665,401.59999999999997 1267.3333333333333,400.79999999999995 1440,400 C 1440,400 1440,600 1440,600 Z");
            }
            75%{
              d: path("M 0,600 C 0,600 0,400 0,400 C 163.06666666666666,412.5333333333333 326.1333333333333,425.06666666666666 494,433 C 661.8666666666667,440.93333333333334 834.5333333333333,444.26666666666665 993,438 C 1151.4666666666667,431.73333333333335 1295.7333333333333,415.8666666666667 1440,400 C 1440,400 1440,600 1440,600 Z");
            }
            100%{
              d: path("M 0,600 C 0,600 0,400 0,400 C 109.60000000000002,384.4 219.20000000000005,368.8 390,363 C 560.8,357.2 792.8,361.20000000000005 978,369 C 1163.2,376.79999999999995 1301.6,388.4 1440,400 C 1440,400 1440,600 1440,600 Z");
            }
          }</style><path d="M 0,600 C 0,600 0,400 0,400 C 109.60000000000002,384.4 219.20000000000005,368.8 390,363 C 560.8,357.2 792.8,361.20000000000005 978,369 C 1163.2,376.79999999999995 1301.6,388.4 1440,400 C 1440,400 1440,600 1440,600 Z" stroke="none" stroke-width="0" fill="#ff0080" fill-opacity="1" class="transition-all duration-300 ease-in-out delay-150 path-1" transform="rotate(-180 720 300)"></path></svg>
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