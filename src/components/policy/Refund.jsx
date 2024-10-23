import React from "react";

function Refund() {
  return (
    <div className="space-y-4 overflow-y-scroll h-[calc(100vh-200px)]">
      <h1 className="text-lg font-bold">Refund Policy</h1>
      <div>
        <p className="text-lg font-semibold">Introduction</p>
        <p>
          This Refund Policy outlines the circumstances under which SUREWIN will
          provide refunds for raffle tickets.
        </p>
      </div>
      <div>
        <p className="text-lg font-semibold">No Refunds</p>
        <p>
          All ticket sales are final. Once a ticket is purchased, it cannot be
          refunded or exchanged.
        </p>
      </div>
      <div>
        <p className="text-lg font-semibold">Exceptional Circumstances</p>
        <p>
          In exceptional circumstances, such as technical issues with the
          purchase process or duplicate transactions, we may consider a refund.
          These requests will be reviewed on a case-by-case basis.
        </p>
      </div>
      <div>
        <p className="text-lg font-semibold">How to Request a Refund</p>
        <p>
          To request a refund, please contact our support team at
          support@surewin.com with your order details and the reason for your
          request. We will review your request and respond within 7 business
          days.
        </p>
      </div>
      <div>
        <p className="text-lg font-semibold">Changes to This Policy</p>
        <p>
          We may update this Refund Policy from time to time. We will notify you
          of any changes by posting the new policy on our website.{" "}
        </p>
      </div>
      <div>
        <p className="text-lg font-semibold">Contact Us</p>
        <p>
          For any questions or concerns regarding this Refund Policy, please
          contact us at support@surewin.com.
        </p>
      </div>
    </div>
  );
}

export default Refund;
