
const Contact = () => {
  return (
    <div className="contact">
      <div className="contact__title">
        <h2>Contact</h2>
        <div className="underline"></div>
      </div>

      <form className="contact__input">
        <input
          className="contact__input-email"
          type="email"
          placeholder="Email..."
        />
        <textarea className="contact__input-message" placeholder="Message..." />
        <input className="contact__input-submit" type="submit" />
      </form>

      <div className="contact__social">
        <div className="contact__social-title">
          <h2>Social Links</h2>
          <div className="underline"></div>
        </div>
        <div className="contact__social-links">
          <a href="twitter.com">Twitter</a>
          <a href="instagram.com">Instagram</a>
          <a href="github.com">Github</a>
        </div>
      </div>
    </div>
  );
}

export default Contact