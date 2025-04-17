export function ContactMe() {
  return (
    <>
      <h3 className="get-in-touch">Get in touch with us</h3>
      <h2 className="get-in-touch">Call 763-296-8176</h2>
      <h3 className="get-in-touch">Or fill out the form below</h3>

      <form action="https://api.web3forms.com/submit" method="POST">
        <input
          type="hidden"
          name="access_key"
          value="8eb52d29-de1d-42d5-8c5f-6bb6972806eb"
        />
        <label htmlFor="name">Name:</label>
        <input type="text" id="name" name="name" required />
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          name="email"
          pattern=".+@example\.com"
          required
        />
        <label htmlFor="tel">Phone Number:</label>
        <input
          inputMode="numeric"
          placeholder="(###)-###-####"
          type="tel"
          id="tel"
          name="tel"
          required
        />
        <label htmlFor="message">Message:</label>
        <textarea
          id="message"
          type="text"
          name="message"
          rows="4"
          required
        ></textarea>
        <button type="submit">Send</button>
      </form>
    </>
  );
}
