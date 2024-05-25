import React, { useState } from 'react';

const Contact = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.target;

    fetch('https://formspree.io/f/myyranbq', {
      method: 'POST',
      body: new FormData(form),
      headers: {
        'Accept': 'application/json'
      }
    }).then(response => {
      if (response.ok) {
        setIsSubmitted(true);
      } else {
        response.json().then(data => {
          if (Object.hasOwn(data, 'errors')) {
            alert(data["errors"].map(error => error["message"]).join(", "));
          } else {
            alert('Oops! There was a problem submitting your form');
          }
        });
      }
    }).catch(error => {
      alert('Oops! There was a problem submitting your form');
    });
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4">
      <div className="bg-white rounded-lg shadow-lg overflow-hidden max-w-4xl w-full grid grid-cols-1 md:grid-cols-2">
        <div className="p-8 bg-blue-500 text-white justify-center items-center">
          <h2 className="text-2xl font-bold mb-4">Contact Information</h2>
          <p className="mb-2">1234 Street Name</p>
          <p className="mb-2">City, State, ZIP</p>
          <p className="mb-2">Phone: (123) 456-7890</p>
          <p>Email: contact@example.com</p>
        </div>
        <div className="p-8 bg-gray-300">
          <h2 className="text-2xl font-bold mb-4">Contact Form</h2>
          {isSubmitted ? (
            <p className="text-green-500">Thank you! Your message has been sent.</p>
          ) : (
            <form onSubmit={handleSubmit}>
              <div className="mb-4">
                <label className="block text-gray-700 mb-2" htmlFor="name">Name</label>
                <input className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" type="text" id="name" name="name" required />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700 mb-2" htmlFor="email">Email</label>
                <input className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" type="email" id="email" name="email" required />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700 mb-2" htmlFor="message">Message</label>
                <textarea className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" id="message" name="message" rows="4" required></textarea>
              </div>
              <button className="w-full bg-blue-500 text-white px-3 py-2 rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500" type="submit">Send Message</button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};

export default Contact;
