"use client";

import { useEffect, useState } from "react";
import styles from "./page.module.css";

export default function CookiePolicy() {
  const [showPopup, setShowPopup] = useState(true);

  useEffect(() => {
    const accepted = document.cookie.includes("cookiesAccepted=true");
    const rejected = document.cookie.includes("cookiesAccepted=false");
    if (accepted || rejected) setShowPopup(false);
  }, []);

  const handleAcceptCookie = () => {
    document.cookie = "cookiesAccepted=true; path=/; max-age=31536000";
    setShowPopup(false);
  };

  const handleRejectCookie = () => {
    document.cookie.split(";").forEach((cookie) => {
      const name = cookie.split("=")[0].trim();
      document.cookie = `${name}=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;`;
    });
    document.cookie = "cookiesAccepted=false; path=/; max-age=31536000";
    setShowPopup(false);
  };

  return (
    <div className={styles.container}>
      <div className={styles.politicsWrap}>
        <h3>Cookie Policy</h3>
        <p>
          This Cookie Policy (the “Policy”) explains what cookies are, what
          types of cookies are placed on your device when you visit Headway and
          how we use them. This policy also governs our use of similar
          technologies, including web beacons.
        </p>
        <p>
          This Cookie Policy does not address how we deal with your personal
          data generally. To learn more about how we process your personal data,
          please see Privacy Policy.
        </p>
        <h4>What are cookies</h4>
        <p>
          Cookies are small text files that are sent to or accessed from your
          web browser or your device’s memory. A cookie typically contains the
          name of the domain (internet location) from which the cookie
          originated, the “lifetime” of the cookie and a randomly generated
          unique number or similar identifier. A cookie also may contain
          information about your device, such as user settings, browsing history
          and activities conducted while using Headway.
        </p>
        <h4>There are different types of cookies:</h4>
        <p className={styles.bold}>Session cookies</p>
        <p>
          Session cookies expire at the end of your browser session. Headway
          uses these cookies to help you use our website more efficiently, by
          allowing us to learn more about how you use our website during one
          single browser session.
        </p>
        <p className={styles.bold}>Persistent cookies</p>
        <p>
          Persistent cookies are not automatically deleted when you close your
          browser. These types of cookies are used in order to help you sign-in
          to our website quickly and for analytical purposes.
        </p>
        <p className={styles.bold}>First-party cookies</p>
        <p>
          First-party cookies are placed on your device directly by us. These
          cookies are used to adapt our website to your browser’s language
          preferences and to better understand your use of our website.
        </p>
        <p className={styles.bold}>Third-party cookies</p>
        <p>
          Third party cookies are placed on your device by our service
          providers, which helps us provide you both a satisfying and safe
          experience on our website. We do not have control over cookies placed
          on your device by third parties. Generally, we use the following types
          of third party cookies: security cookies; analytical cookies; and
          advertising cookies.
        </p>
        <p>
          For example, we work with the following service providers that use
          third party cookies on our website:
        </p>
        <p className={styles.bold}>Google (via Google Analytics)</p>
        <p>
          Google Analytics is a Google service that uses cookies and other data
          collection technologies to collect information about your use of
          Headway in order to report website trends. You can opt out of Google
          Analytics by visiting www.google.com/settings/ads or by downloading
          the Google Analytics opt-out browser add-on at
          https://tools.google.com/dlpage/gaoptout.
        </p>
        <p className={styles.bold}>Microsoft</p>
        <p>
          Microsoft uses cookies to assess the effectiveness of advertisements
          placed on our website.
        </p>
        <p className={styles.bold}>Zendesk</p>
        <p>
          Zendesk is a third-party software that provides customer support
          management. Zendesk uses cookies to help us properly respond to
          customer requests in a timely manner.
        </p>
        <p className={styles.bold}>Cloudflare</p>
        <p>
          Cloudfare uses cookies to identify trusted web traffic to our website.
        </p>
        <p>
          We do not permit any of the above service providers to collect any of
          your personal data on Headway to utilize for their own purposes. These
          service providers are subject to confidentiality agreements with us
          and/or other legal restrictions on their use or collection of any
          personal information. Third-party cookies are covered by the
          third-parties’ privacy policies. Therefore, should you have any
          questions regarding use of the cookies by third parties, please
          contact them directly.
        </p>
        <p>
          For more information on third-party advertising cookies,
          interest-based advertising, and how to opt-out of that practice by
          companies participating in industry self-regulation, please visit the
          relevant websites, such as Digital Advertising Alliance or Interactive
          Digital Advertising Alliance.
        </p>
        <p className={styles.bold}>Similar technologies</p>
        <p className={styles.bold}>Web Beacons</p>
        <p>
          Web beacons are graphic images (also known as “pixel tags”) that
          contain a unique identifier enabling us to recognize when someone has
          visited Headway or opened an e-mail that we or our service provider
          have sent them.
        </p>
        <p className={styles.bold}>Software development kits (SDKs)</p>
        <p>
          SDKs are small pieces of code included in apps, which function like
          cookies and web beacons.
        </p>
        <p className={styles.bold}>Snap Pixels</p>
        <p>
          The Snap Pixel is a piece of JavaScript code that helps our service
          providers measure the cross-device impact of their advertising
          campaigns in SnapChat. They can see how many Snapchatters take after
          seeing their advertisement.
        </p>
        <p className={styles.bold}>Why do we need cookies?</p>
        <p>
          When you visit or interact with Headway, we or our service providers
          may use cookies, web beacons, and other similar technologies in order
          to learn more about your interactions with our Service. The
          utilization of these technologies can help us provide you with a
          better, faster, and safer experience.
        </p>
        <h4>How we use cookies</h4>
        <p>
          Cookies play an important role in helping us provide a personal,
          effective and safe environment on Headway.
        </p>
        <p>
          As we make improvements to our website, our use of cookies may vary.
          Generally, we use cookies for the following purposes:
        </p>
        <h4>Categories of Use</h4>
        <ul>
          <li>
            Authentication - we use cookies to remember your login credentials
            so that you are able to login to our site quickly.
          </li>
          <li>
            Security - we use cookies to enable and support our security
            features, and to help us detect malicious activity, monitor for and
            detect potentially harmful or illegal use of Headway.
          </li>
          <li>
            Analytics and Research - these cookies help us understand how
            Headway is being used and to help us customize, improve, and
            research our features and services.
          </li>
          <li>
            Advertising - these cookies are used to make our advertising
            messages more relevant to you. They perform functions like
            preventing the same advertisement from continuously re-appearing and
            ensuring that advertisements are properly displayed.
          </li>
        </ul>
        <h4>How can you manage cookies?</h4>
        <p>
          Most browsers allow you to control cookies through their settings
          preferences. However, changes you make to your cookie preferences may
          make using our website a less satisfying. In some cases, you may not
          be able to utilize all or part of our site.
        </p>
        <p>
          Below you may find more information on how to manage cookies in your
          browser:
        </p>
        <p>Chrome:</p>
        <a
          href="https://support.google.com/chrome/answer/95647?hl=en"
          rel="noopener noreferrer"
          target="_blank"
        >
          https://support.google.com/chrome/answer/95647?hl=en
        </a>
        <p>Explorer:</p>
        <a
          href="https://support.microsoft.com/en-us/products/windows?os=windows-10"
          rel="noopener noreferrer"
          target="_blank"
        >
          https://support.microsoft.com/en-us/products/windows?os=windows-10
        </a>
        <p>Safari: </p>
        <a
          href="https://support.apple.com/kb/PH21411"
          rel="noopener noreferrer"
          target="_blank"
        >
          https://support.apple.com/kb/PH21411
        </a>
        <p>Firefox: </p>
        <a
          href="https://support.mozilla.org/products/firefox/cookies"
          rel="noopener noreferrer"
          target="_blank"
        >
          https://support.mozilla.org/products/firefox/cookies
        </a>
        <p>Opera: </p>
        <a
          href="http://www.opera.com/help/tutorials/security/cookies/"
          rel="noopener noreferrer"
          target="_blank"
        >
          http://www.opera.com/help/tutorials/security/cookies/
        </a>
        <h4>Cookies Table</h4>
        <p>
          Cookies that we commonly use are listed below. This list is not
          exhaustive, but describes the main reasons we typically set cookies.
        </p>
        <table>
          <thead>
            <tr>
              <th colSpan="1">Cookie Name</th>
              <th colSpan="1">Purpose</th>
              <th colSpan="1">Type</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td colSpan="1">
                <p>cfduid</p>
              </td>
              <td colSpan="1">
                <p>Security</p>
              </td>
              <td colSpan="1">
                <p>Third-party cookie</p>
              </td>
            </tr>
            <tr>
              <td colSpan="1">
                <p>zlcmid</p>
              </td>
              <td colSpan="1">
                <p>Authentication</p>
              </td>
              <td colSpan="1">
                <p>Third-party cookie</p>
              </td>
            </tr>
            <tr>
              <td colSpan="1">
                <p>csrf</p>
              </td>
              <td colSpan="1">
                <p>Security</p>
              </td>
              <td colSpan="1">
                <p>First-party cookie</p>
              </td>
            </tr>
            <tr>
              <td colSpan="1">
                <p>ga, _git, _gat</p>
              </td>
              <td colSpan="1">
                <p>Authentication</p>
              </td>
              <td colSpan="1">
                <p>Third-party cookie</p>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      {showPopup && (
        <div className={styles.popup}>
          <p>
            We use cookies to enhance your browsing experience, serve
            personalized ads or content, and analyze our traffic. By clicking
            "Accept All", you consent to our use of cookies.
          </p>
          <div className={styles.btnsWrap}>
            <button className={styles.rejectBtn} onClick={handleRejectCookie}>
              Reject All
            </button>
            <button className={styles.acceptBtn} onClick={handleAcceptCookie}>
              Accept All
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
