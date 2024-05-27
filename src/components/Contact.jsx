import React, { useState } from 'react';

const Contact = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();
    const form = event.target;

    try {
      const response = await fetch('https://formspree.io/f/myyranbq', {
        method: 'POST',
        body: new FormData(form),
        headers: {
          'Accept': 'application/json'
        }
      });

      if (response.ok) {
        setIsSubmitted(true);
      } else {
        const data = await response.json();
        if (data.errors) {
          setError(data.errors.map(error => error.message).join(", "));
        } else {
          setError('Oops! There was a problem submitting your form');
        }
      }
    } catch (error) {
      setError('Oops! There was a problem submitting your form');
    }
  };

  return (

<div className="bg-white flex items-center justify-center min-h-screen mt-[-5%]">
  <div className="bg-white rounded-lg shadow-lg overflow-hidden max-w-4xl w-full grid grid-cols-1 md:grid-cols-2">
    <div className="p-1 bg-indigo-500 text-white text-center justify-center items-center">
      <h2 className="text-2xl font-bold md:mt-32 mb-4">Contact Information</h2>
      <p className="mb-2">Kathmandu, Bagmati</p>
      <p className="mb-2">City, State, ZIP</p>
      <p className="mb-2">Phone: (123) 456-7890</p>
      <p>Email: contact@example.com</p>
    </div>
    <div className="p-8 bg-gray-300">
      <h2 className="text-2xl font-bold mb-4">Contact Form</h2>
      {isSubmitted ? (
        <p className="text-green-500">Thank you! Your message has been sent.</p>
      ) : (
        <>
          {error && <p className="text-red-500 mb-4">{error}</p>}
          <form onSubmit={handleSubmit} className="space-y-4">
            <input className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" type="text" placeholder="NAME" name="name" required />
            <input className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" type="email" placeholder="EMAIL" name="email" required />
            <textarea className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="Something to chat about" name="message" rows="4" required></textarea>
            <div className="flex justify-end space-x-4">
              <button className="bg-blue-500 text-white px-3 py-2 rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500" type="button" onClick={() => setError('')}>CANCEL</button>
              <button className="bg-blue-500 text-white px-3 py-2 rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500" type="submit">SEND</button>
            </div>
          </form>
        </>
      )}
    </div>
  </div>
</div>

  );
};

export default Contact;
