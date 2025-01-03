export function ContactMe() {
  return (
    <>
      <h1>Contact us for a quote!</h1>
      <h1 className="huge-text">763-300-3983</h1>
      Or feel free to send me an email at equitykingpainting@poop.com or by
      using the form below:
      <form action="https://api.web3forms.com/submit" method="POST">
        <input
          type="hidden"
          name="access_key"
          value="8eb52d29-de1d-42d5-8c5f-6bb6972806eb"
        />
        <label htmlFor="name">Name:</label>
        <input type="text" id="name" name="name" required />
        <label htmlFor="email">Email:</label>
        <input type="email" id="email" name="email" required />
        <label htmlFor="message">Message:</label>
        <textarea id="message" name="message" rows="4" required></textarea>
        <button type="submit">Send</button>
      </form>
    </>
  );
}
