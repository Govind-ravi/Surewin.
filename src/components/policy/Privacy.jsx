import React from "react";

function Privacy() {
  return (
    <div className="space-y-4 overflow-y-scroll h-[calc(100vh-200px)]">
      <h1 className="text-lg font-bold">Privacy Policy</h1>
      <p>
        Introduction SUREWIN ("we", "our", "us") is committed to protecting and
        respecting your privacy. This Privacy Policy explains how we collect,
        use, and share information about you when you use our services.
        Information We Collect
      </p>
      <ol className="list-disc pl-5">
        <li>
          Personal Information: When you create an account, purchase tickets, or
          contact us, we may collect personal information such as your name,
          email address, phone number, and payment information.
        </li>
        <li>
          Usage Data: We collect information about your interactions with our
          website, such as pages visited, links clicked, and other actions
          taken.
        </li>
        <li>
          Device Information: We may collect information about the device you
          use to access our services, including IP address, browser type, and
          operating system.
        </li>
      </ol>
      <div>
        <p>How We Use Your Information</p>
        <ol className="list-disc pl-5">
          <li>
            Provide and Improve Services: To process transactions, manage your
            account, and improve our services.
          </li>
          <li>
            Communication: To send you updates, promotional materials, and other
            information related to our services.
          </li>
          <li>
            Security: To protect against fraudulent activity and enhance the
            security of our services.
          </li>
        </ol>
      </div>
      <p className="text-lg font-semibold">Sharing Your Information</p>
      <p>
        We do not sell your personal information. We may share your information
        with:
      </p>
      <ol className="list-disc pl-5">
        <li>
          Service Providers: Third-party companies that perform services on our
          behalf, such as payment processing and email delivery.
        </li>
        <li>
          Legal Obligations: When required by law or to protect our rights and
          safety.
        </li>
      </ol>
      <div>
        <p className="text-lg font-semibold">Data Security</p>
        <p>
          We implement appropriate security measures to protect your information
          from unauthorized access and disclosure.
        </p>
      </div>
      <div>
        <p className="text-lg font-semibold">Your Rights</p>
        <p>
          You have the right to access, correct, or delete your personal
          information. You can also opt-out of receiving promotional
          communications from us.
        </p>
      </div>
      <div>
        <p className="text-lg font-semibold">Changes to This Policy</p>
        <p>
          We may update this Privacy Policy from time to time. We will notify
          you of any changes by posting the new policy on our website.
        </p>
      </div>
      <div>
        <p className="text-lg font-semibold">Contact Us</p>
        <p>
          For any questions or concerns regarding this Privacy Policy, please
          contact us at support@surewin.com.
        </p>
      </div>
    </div>
  );
}

export default Privacy;
