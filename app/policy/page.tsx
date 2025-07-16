import React from "react";

const Page = () => {
  return (
    <div className="max-w-4xl mx-auto p-6 space-y-10 text-gray-800">
      <h1 className="text-3xl font-bold text-center text-blue-600">Policies & Information</h1>

      {/* Return & Exchange Policy */}
      <section>
        <h2 className="text-2xl font-semibold text-gray-900 border-b pb-2 mb-4">Return & Exchange Policy</h2>
        <p className="leading-7">
          We have a <strong>7-day return policy</strong>, which means you have 7 days after receiving your item to request a return.
          To be eligible, your item must be unused, in original packaging, with tags, and a proof of purchase.
        </p>
        <p className="leading-7 mt-4">
          To initiate a return, contact us at <a href="mailto:hilyah967@gmail.com" className="text-blue-600 underline">hilyah967@gmail.com</a>.
          Items must first be approved before sending to: <br />
          <span className="italic">Khanapull Snam Chook, Abdulbari House, Islamabad</span>
        </p>
        <p className="leading-7 mt-4">
          Once accepted, we’ll provide a shipping label and instructions. Items sent without approval will not be accepted.
        </p>
        <p className="leading-7 mt-4">
          <strong>Damages & Issues:</strong> Inspect your order upon arrival and contact us immediately if it is defective, damaged, or incorrect.
        </p>
        <p className="leading-7 mt-4">
          <strong>Non-returnable items:</strong> Sale items and gift cards cannot be returned.
        </p>
        <p className="leading-7 mt-4">
          <strong>Refunds:</strong> If approved, refunds will be processed within 4 business days to your original payment method.
        </p>
      </section>

      {/* Shipping Policy */}
      <section>
        <h2 className="text-2xl font-semibold text-gray-900 border-b pb-2 mb-4">Shipping Policy</h2>
        <p className="leading-7">
          All goods are shipped from <strong>Islamabad, Punjab</strong>. In-stock orders are dispatched within 3–5 business days.
          Heavy-weight or bulk orders may take 5–7 days. Bulk orders can be negotiated individually.
        </p>
        <p className="leading-7 mt-4">
          We use COD services via trusted couriers such as <strong>TCS</strong> and <strong>Leopard</strong>. 
        </p>
        <ul className="list-disc list-inside leading-7 mt-4">
          <li>Free delivery on more than 2 items</li>
          <li>Standard delivery time: 2–5 business days</li>
          <li>In case of lockdowns, protests, or other delays: 5–10 business days</li>
        </ul>
      </section>

      {/* Personal Information */}
      <section>
        <h2 className="text-2xl font-semibold text-gray-900 border-b pb-2 mb-4">Collecting Personal Information</h2>
        <p className="leading-7">
          We value your privacy. The personal information we collect (such as name, phone number, address, and email) is used 
          only to process and deliver your orders efficiently.
        </p>
        <p className="leading-7 mt-4">
          We <strong>do not</strong> share, sell, or disclose your data to third parties. Your data is securely stored and used only for 
          relevant communications like order confirmations and delivery updates.
        </p>
        <p className="leading-7 mt-4">
          By shopping with us, you trust that your privacy is protected every step of the way.
        </p>
      </section>
    </div>
  );
};

export default Page;
