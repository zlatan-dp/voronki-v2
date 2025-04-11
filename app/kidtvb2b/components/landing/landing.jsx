import { useRef } from "react";
import { sendEmailData } from "@/app/services/sendEmail.service";

export default function Landing() {
  const nameRef = useRef(null);
  const emailRef = useRef(null);
  const messageRef = useRef(null);

  const submitModalMessage = useRef(null);
  const tvIcon = useRef(null);
  const whatsup = useRef(null);
  const okBtn = useRef(null);
  const submitModal = useRef(null);
  const contactForm = useRef(null);
  const btnText = useRef(null);
  const spinner = useRef(null);

  const okSubmitMessage =
    "Thank you for reaching out! We’ve received your request and will be in touch shortly. We appreciate your interest and look forward to working with you.";

  const errorSubmitMessage =
    "Oops, something went wrong! We’re really sorry for the inconvenience. Please reach out to us on WhatsApp for a direct response.";

  const showModal = function (message, tv, showBtn) {
    submitModalMessage.current.textContent = message;
    tvIcon.current.src = tv;
    whatsup.current.classList.add("display-none");
    okBtn.current.classList.add("display-none");

    if (showBtn === "whatsup") {
      whatsup.current.classList.remove("display-none");
    } else {
      okBtn.current.classList.remove("display-none");
    }

    submitModal.current.classList.remove("is-hidden");
  };

  const toogleSpinner = function (isLoading) {
    if (isLoading) {
      spinner.current.classList.add("active");
      btnText.current.textContent = "Sending...";
      btnText.current.disabled = true;
    } else {
      spinner.current.classList.remove("active");
      btnText.current.textContent = "Send";
      btnText.current.disabled = false;
    }
  };

  const handlerSubmit = async function (e) {
    e.preventDefault();

    toogleSpinner(true);

    const data = {
      project: "KidsTV B2b",
      to: ["a.nikitin@kivismart.com"],
      subject: "KidsTV B2b",
      text: `Name: ${nameRef.current.value}, Email: ${emailRef.current.value}, Message: ${messageRef.current.value}`,
    };

    try {
      const responce = await sendEmailData(data);
      //   console.log(responce);
      if (!responce) {
        toogleSpinner(false);
        showModal(
          errorSubmitMessage,
          "/kidtvb2b/img/tv-sad-icon.svg",
          "whatsup"
        );
      } else {
        toogleSpinner(false);
        showModal(okSubmitMessage, "/kidtvb2b/img/tv-smile-icon.svg", "ok");
        contactForm.current.reset();
      }
    } catch (error) {
      console.error(error);
      toogleSpinner(false);
      showModal(errorSubmitMessage, "/kidtvb2b/img/tv-sad-icon.svg", "whatsup");
    }
  };
  return (
    <div className="kidstv-china-exhibition">
      <header className="header">
        <div className="container">
          <button type="button" className="mob-menu-btn">
            <img src="/kidtvb2b/img/menu-burger.svg" alt="burger-menu" />
          </button>
          <a href="#hero-section" className="logo white-color link">
            KidsTV
          </a>
          <nav className="navigation">
            <ul className="menu-list list">
              <li className="menu-item">
                <a href="#features-usp" className="menu-link link">
                  TOP USPs
                </a>
              </li>
              <li className="menu-item">
                <a href="#marketing-support-section" className="menu-link link">
                  Marketing Support
                </a>
              </li>
              <li className="menu-item">
                <a href="#faq-section" className="menu-link link">
                  FAQ
                </a>
              </li>
              <li className="menu-item">
                <a href="#benefits-marketing" className="menu-link link">
                  B2B Benefits
                </a>
              </li>
              <li className="menu-item">
                <a href="#contact-us-section" className="menu-link link">
                  Contact Us
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </header>

      <div className="backdrop is-hidden">
        <div className="mob-menu">
          <div className="mob-menu-close">
            <img src="/kidtvb2b/img/close-icon.svg" alt="close icon" />
          </div>
          <nav className="mob-navigation">
            <ul className="mob-menu-list list">
              <li className="mob-menu-item">
                <a href="#features-usp" className="menu-link link">
                  TOP USPs
                </a>
              </li>
              <li className="mob-menu-item">
                <a href="#marketing-support-section" className="menu-link link">
                  Marketing Support
                </a>
              </li>
              <li className="mob-menu-item">
                <a href="#faq-section" className="menu-link link">
                  FAQ
                </a>
              </li>
              <li className="mob-menu-item">
                <a href="#benefits-marketing" className="menu-link link">
                  B2B Benefits
                </a>
              </li>
              <li className="mob-menu-item">
                <a href="#contact-us-section" className="menu-link link">
                  Contact Us
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </div>

      <div className="backdrop-submit is-hidden" ref={submitModal}>
        <div className="submit-message-wrap">
          <div className="submit-menu-close">
            <img src="/kidtvb2b/img/close-icon.svg" alt="close icon" />
          </div>
          <div className="tv-icon-wrap">
            <img
              src="/kidtvb2b/img/tv-smile-icon.svg"
              alt="tv icon"
              id="tv-icon"
              ref={tvIcon}
            />
          </div>
          <p className="submit-menu-message" ref={submitModalMessage}></p>
          <a
            href="https://wa.me/48781464422?text=Hello%20Anton!%20I’d%20like%20to%20discuss%20a%20B2B%20inquiry%20about%20KidsTV.%20Could%20you%20please%20provide%20more%20information%20on%20partnership%20options%20and%20how%20we%20can%20move%20forward?%20Thank%20you!"
            target="_blank"
            className="submit-message-btn link display-none"
            ref={whatsup}
            id="whatsup"
          >
            WhatsApp
          </a>
          <button
            type="button"
            className="submit-message-btn display-none"
            ref={okBtn}
            id="ok-btn"
          >
            OK
          </button>
        </div>
      </div>

      <main>
        <a href="#contact-us-section" className="get-in-touch">
          <img src="/kidtvb2b/img/get-in-touch.png" alt="get in touch btn" />
        </a>
        <section className="hero" id="hero-section">
          <div className="container">
            <div className="hero-info">
              <h1 className="hero-title">KidsTV</h1>
              <h2 className="hero-sub-title">
                TV Designed Specifically for&nbsp;Kids
              </h2>
              <p className="hero-text">
                A revolutionary product category that’s exciting, playful, and
                made to inspire!
              </p>
            </div>
          </div>
        </section>

        <section className="features section-top-border" id="features-usp">
          <div className="container">
            <h2 className="section-title section-title-mb">KidsTV</h2>
            <p>
              Packed with unique features that make it stand out, it drives
              sales and draws attention to your brand.
            </p>
            <ul className="features-list list">
              <li className="features-item">
                <img
                  src="/kidtvb2b/img/features/features-1.jpg"
                  alt="Buildable Block-Style rame"
                />
                <p className="features-text">
                  Buildable
                  <br />
                  Brick-Style
                  <br />
                  Design
                </p>
              </li>
              <li className="features-item">
                <img
                  src="/kidtvb2b/img/features/features-2.jpg"
                  alt="Protective Tempered Glass"
                />
                <p className="features-text white-color">
                  Protective
                  <br />
                  Tempered Glass
                </p>
              </li>
              <li className="features-item">
                <img
                  src="/kidtvb2b/img/features/features-3.jpg"
                  alt="Built-in Night Light"
                />
                <p className="features-text white-color">
                  Built-in Night <br />
                  Light
                </p>
              </li>
              <li className="features-item">
                <img
                  src="/kidtvb2b/img/features/features-4.jpg"
                  alt="Reliable Stand"
                />
                <p className="features-text">
                  Reliable
                  <br />
                  Stands
                </p>
              </li>
            </ul>
          </div>
        </section>

        <section className="frame section-top-border" id="buildable-block">
          <div className="move-here-frame">
            <picture>
              <source
                media="(max-width: 759px)"
                srcSet="/kidtvb2b/img/frame/frame-tap.png"
              />
              <img
                src="/kidtvb2b/img/frame/frame-move.png"
                alt="move or tap here"
              />
            </picture>
          </div>
          <div className="tv-wrap">
            <img
              src="/kidtvb2b/img/frame/frame-tv-0.png"
              className="tv-0"
              alt="KidsTV"
            />
            <img
              src="/kidtvb2b/img/frame/frame-tv-1.png"
              className="tv-1"
              alt="KidsTV"
            />
            <img
              src="/kidtvb2b/img/frame/frame-tv-2.png"
              className="tv-2 hidden"
              alt="KidsTV"
            />
          </div>
          <div className="frame-tv-trigger"></div>
          <div className="container">
            <div className="info-wrap">
              <h2 className="section-title section-title-mb">
                Buildable Brick-Style Design
              </h2>
              <p>
                This USP enables product enhancement with additional
                accessories, driving higher ASP.
              </p>
            </div>
          </div>
        </section>

        <section
          className="night-light section-top-border"
          id="night-light-section"
        >
          <div className="night-light-img-first">
            <picture>
              <source
                media="(max-width: 759px)"
                srcSet="/kidtvb2b/img/night/bg-night-1-mob.jpg"
              />
              <img
                src="/kidtvb2b/img/night/bg-night-1.jpg"
                alt="Built-in Night Light"
              />
            </picture>
          </div>
          <div className="move-here-night">
            <picture>
              <source
                media="(max-width: 759px)"
                srcSet="/kidtvb2b/img/night/tap-here.png"
              />
              <img
                src="/kidtvb2b/img/night/move-here.png"
                alt="tap or move here"
              />
            </picture>
          </div>
          <div className="night-light-img-second hidden">
            <picture>
              <source
                media="(max-width: 759px)"
                srcSet="/kidtvb2b/img/night/bg-night-2-mob.jpg"
              />
              <img
                src="/kidtvb2b/img/night/bg-night-2.jpg"
                alt="Built-in Night Light"
              />
            </picture>
          </div>
          <div className="night-light-trigger"></div>
          <div className="info-wrap">
            <h2 className="section-title section-title-mb white-color">
              Built-in Night Light
            </h2>
            <p className="white-color">
              Adds unique customer
              <span className="night-light-text">
                value, creating extra selling points and driving easy sales.
              </span>
            </p>
          </div>
        </section>

        <section
          className="protective section-top-border"
          id="protective-section"
        >
          <div className="protective-fx"></div>
          <div className="move-here-protective">
            <picture>
              <source
                media="(max-width: 759px)"
                srcSet="/kidtvb2b/img/protective/tap-here.png"
              />
              <img
                src="/kidtvb2b/img/protective/move-here.png"
                alt="move or tap here"
              />
            </picture>
          </div>
          <div className="protective-video hidden">
            <video muted playsInline loop>
              <source
                src="/kidtvb2b/img/protective/protective_mob.mp4"
                type="video/mp4"
              />
            </video>
          </div>
          <div className="protective-trigger"></div>
          <div className="info-wrap">
            <h2 className="section-title section-title-mb">
              Protective Tempered Glass
            </h2>
            <p>
              A powerful trust-builder that drives easy purchasing decisions.
            </p>
          </div>
        </section>

        <section className="stand section-top-border" id="reliable-stands">
          <div className="stand-fx"></div>
          <div className="move-here-stand">
            <picture>
              <source
                media="(max-width: 759px)"
                srcSet="/kidtvb2b/img/stand/tap-here.png"
              />
              <img
                src="/kidtvb2b/img/stand/move-here.png"
                alt="move or tap here"
              />
            </picture>
          </div>
          <div className="stand-video hidden">
            <video muted playsInline loop>
              <source
                src="/kidtvb2b/img/stand/stand_mob.mp4"
                type="video/mp4"
              />
            </video>
          </div>
          <div className="stand-trigger"></div>
          <div className="info-wrap">
            <h2 className="section-title section-title-mb">
              Reliable
              <br />
              Stand
            </h2>
            <p>Safety and stability to instantly win customer trust.</p>
          </div>
        </section>

        <section className="accessories section-top-border">
          <div className="container">
            <h2 className="section-title section-title-mb">
              KidsTV Accessories
            </h2>
            <p>
              Creating an entire ecosystem to boost your profits!
              <br />
              Turn every KidsTV sale into extra revenue. With construction sets,
              easily increase average selling price (ASP), drive customer
              engagement, and maximize margins.
              <br />
              One TV—countless ways to earn more!
            </p>
            <ul className="accessories-list list">
              <li className="accessories-item">
                <img
                  src="/kidtvb2b/img/accessories/accessories-1.jpg"
                  alt="Vehicles Set"
                />
                <p className="accessories-text">Vehicles Set – 18 models</p>
              </li>
              <li className="accessories-item">
                <img
                  src="/kidtvb2b/img/accessories/accessories-2.jpg"
                  alt="Color frames"
                />
                <p className="accessories-text">
                  Color frames –<br />6 colors
                </p>
              </li>
              <li className="accessories-item">
                <img
                  src="/kidtvb2b/img/accessories/accessories-3.jpg"
                  alt="Animals Set"
                />
                <p className="accessories-text">Animals Set – 22 models</p>
              </li>
              <li className="accessories-item">
                <img
                  src="/kidtvb2b/img/accessories/accessories-4.jpg"
                  alt="accessories"
                />
              </li>
            </ul>
          </div>
        </section>

        <section
          className="marketing-support section-top-border"
          id="marketing-support-section"
        >
          <div className="container">
            <h2 className="section-title section-title-mb">
              Marketing Support
            </h2>
            <p className="white-color">
              Choose our KidsTV solution and get a full set of ready-made
              marketing materials—landing pages, branded packaging, in-store
              branding, and more—at no extra cost. Everything you need to boost
              sales and stand out from the competition.
            </p>
            <ul className="marketing-list list">
              <li className="marketing-item landing">
                <p className="marketing-text landing-text">
                  Full Pack of Rich Content
                </p>
              </li>
              <li className="marketing-item pos">
                <p className="marketing-text pos-text">POS Materials</p>
              </li>
              <li className="marketing-item branding">
                <p className="marketing-text branding-text">
                  In-store Branding
                </p>
              </li>
              <li className="marketing-item video">
                <p className="marketing-text video-text">Videos</p>
              </li>
              <li className="marketing-item packaging">
                <p className="marketing-text packaging-text">
                  Branded Packaging
                </p>
              </li>
              <li className="marketing-item banners">
                <p className="marketing-text banners-text">Display Banners</p>
              </li>
            </ul>
          </div>
        </section>

        <section className="faq section-top-border" id="faq-section">
          <div className="container">
            <h2 className="section-title section-title-mb">Partner FAQs</h2>
            <ul className="faq-list list">
              <li className="faq-item">
                <div className="faq-question-wrap">
                  <p className="faq-question">
                    Is this TV suitable for young children?
                  </p>
                  <div className="question-icon">
                    <img src="/kidtvb2b/img/faq-icon.svg" alt="show answer" />
                  </div>
                </div>
                <p className="faq-answer">
                  Yes, this TV is specifically designed for kids, featuring a
                  child-friendly interface, parental controls, and pre-installed
                  educational and entertainment content.
                </p>
              </li>
              <li className="faq-item">
                <div className="faq-question-wrap">
                  <p className="faq-question">
                    Are any licenses required to purchase and distribute this
                    product?
                  </p>
                  <div className="question-icon">
                    <img src="/kidtvb2b/img/faq-icon.svg" alt="show answer" />
                  </div>
                </div>
                <p className="faq-answer">
                  The product does not require any special licenses—standard
                  local certifications for a TV product and a license agreement
                  with our company are sufficient.
                </p>
              </li>
              <li className="faq-item">
                <div className="faq-question-wrap">
                  <p className="faq-question">
                    Can we customize the TV with our own branding?
                  </p>
                  <div className="question-icon">
                    <img src="/kidtvb2b/img/faq-icon.svg" alt="show answer" />
                  </div>
                </div>
                <p className="faq-answer">
                  Yes, we’re open to discussing various customization options to
                  align the product with your brand—including packaging,
                  branding elements, and additional features or accessories.
                </p>
              </li>
              <li className="faq-item">
                <div className="faq-question-wrap">
                  <p className="faq-question">
                    Can we get exclusive distribution rights for certain
                    regions?
                  </p>
                  <div className="question-icon">
                    <img src="/kidtvb2b/img/faq-icon.svg" alt="show answer" />
                  </div>
                </div>
                <p className="faq-answer">
                  Exclusive distribution agreements are available for qualified
                  partners. Please contact us to discuss regional availability
                  and terms.
                </p>
              </li>
              <li className="faq-item">
                <div className="faq-question-wrap">
                  <p className="faq-question">
                    What are the minimum order quantities (MOQ) for OEM orders?
                  </p>
                  <div className="question-icon">
                    <img src="/kidtvb2b/img/faq-icon.svg" alt="show answer" />
                  </div>
                </div>
                <p className="faq-answer">
                  The MOQ depends on the level of customization required. Please
                  contact us for specific quantity requirements and pricing.
                </p>
              </li>
            </ul>
          </div>
        </section>

        <section
          className="benefits section-top-border"
          id="benefits-marketing"
        >
          <div className="container">
            <h2 className="section-title section-title-mb">
              Partner Benefits & Business Value
            </h2>
            <ul className="benefits-list list">
              <li className="benefets-item">
                <p className="benefets-title">#1</p>
                <p className="benefets-subtitle">Smart TV for Playroom</p>
                <p className="benefets-text">
                  Offer the world’s leading Smart TV for playroom with exclusive
                  features and one of kind design.
                </p>
                <div className="show-more-wrap">
                  <p className="show-more-text">Show More</p>
                  <div className="benefits-icon">
                    <img
                      src="/kidtvb2b/img/benefits-icon.svg"
                      alt="show more"
                    />
                  </div>
                </div>
              </li>
              <li className="benefets-item">
                <p className="benefets-title">$50+</p>
                <p className="benefets-subtitle">Billion Market</p>
                <p className="benefets-text">
                  Tap into the booming kids’ entertainment market, expand
                  revenue streams, and grow with a high-demand family product.
                </p>
                <div className="show-more-wrap">
                  <p className="show-more-text">Show More</p>
                  <div className="benefits-icon">
                    <img
                      src="/kidtvb2b/img/benefits-icon.svg"
                      alt="show more"
                    />
                  </div>
                </div>
              </li>
              <li className="benefets-item">
                <p className="benefets-title">3+</p>
                <p className="benefets-subtitle">Billion Potential Buyers</p>
                <p className="benefets-text">
                  Reach parents and grandparents looking for a safe,
                  child-friendly entertainment solution that builds customer
                  loyalty.
                </p>
                <div className="show-more-wrap">
                  <p className="show-more-text">Show More</p>
                  <div className="benefits-icon">
                    <img
                      src="/kidtvb2b/img/benefits-icon.svg"
                      alt="show more"
                    />
                  </div>
                </div>
              </li>
              <li className="benefets-item">
                <p className="benefets-title">≈20%</p>
                <p className="benefets-subtitle">Margin Increase</p>
                <p className="benefets-text">
                  Boost profits with cost-effective production and OEM
                  customization while offering a premium Smart TV with
                  accessories.
                </p>
                <div className="show-more-wrap">
                  <p className="show-more-text">Show More</p>
                  <div className="benefits-icon">
                    <img
                      src="/kidtvb2b/img/benefits-icon.svg"
                      alt="show more"
                    />
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </section>

        <section
          className="contact-us section-top-border"
          id="contact-us-section"
        >
          <div className="container">
            <p className="info-text-mob">
              We believe our partners’ success is our own. We’re committed to
              supporting your business with flexible solutions, seamless
              integration, and maximum efficiency. Our experts work closely with
              you to adapt the KidsTV product to your specific business model,
              helping you easily leverage its full market potential.
            </p>
            <div className="contacts-wrap">
              <div className="conacts-backdrop">
                <form
                  id="contact-form"
                  className="contact-form-style"
                  ref={contactForm}
                  onSubmit={handlerSubmit}
                >
                  <div className="inputs-wrap">
                    <input
                      type="text"
                      id="name"
                      placeholder="Name*"
                      ref={nameRef}
                      required
                    />
                    <span id="name-error" className="error-message"></span>
                  </div>
                  <div className="inputs-wrap">
                    <input
                      type="email"
                      id="email"
                      placeholder="Email*"
                      ref={emailRef}
                      required
                    />
                    <span id="email-error" className="error-message"></span>
                  </div>
                  <div className="inputs-wrap">
                    <textarea
                      id="message"
                      placeholder="Message*"
                      ref={messageRef}
                      required
                    ></textarea>
                    <span id="message-error" className="error-message"></span>
                  </div>
                  <div className="checkbox-container-wrap">
                    <label className="checkbox-container">
                      <input type="checkbox" id="legal" />
                      <span className="checkbox-custom"></span>
                      <span className="legat-text">
                        By submitting this form, you confirm and consent to the
                        processing, storage and transfer of your personal data
                        in accordance with the laws of the European Union 
                        <a
                          className="link"
                          href="https://gdpr-info.eu/"
                          target="_blank"
                        >
                          https://gdpr-info.eu/
                        </a>
                        . You can contact our Customer Care team regarding any
                        request related to our products and services (service,
                        return, warranty). The personal data is collected and
                        processed solely for the purposes stated above and to
                        assess the quality of the service. If you do not fill in
                        the required data, you will not be able to access all or
                        part of the Customer Care Services.
                      </span>
                    </label>
                    <div className="checkbox-container-icon">
                      <img src="/kidtvb2b/img/legal-icon.svg" alt="show more" />
                    </div>
                  </div>

                  <button type="submit" className="submit-btn" disabled>
                    <span className="button-text" ref={btnText}>
                      Send
                    </span>
                    <span className="spinner" ref={spinner}></span>
                  </button>
                </form>
              </div>
              <div className="conacts-backdrop">
                <div className="contact-info">
                  <div className="contact-photo-wrap">
                    <img
                      src="/kidtvb2b/img/contacts/photo.png"
                      alt="manager photo"
                    />
                  </div>
                  <div className="contact-info-wrap">
                    <p className="manager-name">Anton Nikitin</p>
                    <p className="manager-position">B2B Sales Director</p>
                    <div className="manager-socials-wrap">
                      <a
                        href="https://wa.me/48781464422?text=Hello%20Anton!%20I’d%20like%20to%20discuss%20a%20B2B%20inquiry%20about%20KidsTV.%20Could%20you%20please%20provide%20more%20information%20on%20partnership%20options%20and%20how%20we%20can%20move%20forward?%20Thank%20you!"
                        target="_blank"
                        className="manager-contact whatsup"
                      >
                        WhatsApp
                      </a>
                      <a
                        href="mailto:a.nikitin@kivismart.com"
                        className="manager-contact mail"
                      >
                        a.nikitin@kivismart.com
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="info-wrap">
              <h2 className="section-title section-title-mb">
                Feel free to contact us at any time
              </h2>
              <p className="white-color">
                KidsTV Service
                <br />
                and Support for Partners
              </p>
              <p className="info-text first-info-text">
                We believe our partners’ success is our own. We’re committed to
                supporting your business with flexible solutions, seamless
                integration, and maximum efficiency. Our experts work closely
                with you to adapt the KidsTV product to your specific business
                model, helping you easily leverage its full market potential.
              </p>
              <p className="info-text second-info-text">
                Schedule a meeting or demo to explore the commercial
                opportunities KidsTV offers and discuss how we can help your
                business grow and boost profitability.
              </p>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
