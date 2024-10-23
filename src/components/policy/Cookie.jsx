import React from "react";

function Cookie() {
  return (
    <div className="space-y-4 overflow-y-scroll h-[calc(100vh-200px)]">
      <h1 className="text-lg font-bold">Cookie Policy</h1>
      <div>
        <p className="text-lg font-semibold">Introduction</p>
        <p>
          This Cookie Policy explains how SUREWIN uses cookies and similar
          technologies to recognize you when you visit our website
        </p>
      </div>
      <div>
        <p className="text-lg font-semibold">What Are Cookies?</p>
        <p>
          Cookies are small data files that are placed on your device when you
          visit a website. They are widely used to make websites work more
          efficiently and to provide information to the site owners.
        </p>
      </div>
      <div>
        <p className="text-lg font-semibold">Types of Cookies We Use</p>
        <ol className="list-disc pl-5">
          <li>
            Essential Cookies: Necessary for the operation of our website. They
            enable you to navigate the site and use its features.
          </li>
          <li>
            Performance Cookies: Collect information about how you use our
            website, such as which pages you visit most often.
          </li>
          <li>
            Functional Cookies: Allow our website to remember choices you make
            and provide enhanced, more personalized features.
          </li>
          <li>
            Targeting Cookies: Record your visit to our website, the pages you
            have visited, and the links you have followed. We use this
            information to make our website and the advertising displayed on it
            more relevant to your interests.{" "}
          </li>
        </ol>
      </div>
      <div>
        <p className="text-lg font-semibold">How to Manage Cookies</p>
        <p>
          You can manage your cookie preferences through your browser settings.
          Please note that disabling cookies may affect the functionality of our
          website.
        </p>
      </div>
      <div>
        <p className="text-lg font-semibold">Changes to This Policy</p>
        <p>
          We may update this Cookie Policy from time to time. We will notify you
          of any changes by posting the new policy on our website.
        </p>
      </div>
      <div>
        <p className="text-lg font-semibold">Contact Us</p>
        <p>
          For any questions or concerns regarding this Cookie Policy, please
          contact us at support@surewin.com.
        </p>
      </div>
    </div>
  );
}

export default Cookie;
