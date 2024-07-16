import Head from "next/head";

const Contact = () => {
  return (
    <div className="contact-us">
      <Head>
        <title>Contact Us | Jaz Hotels & Resorts | JAZ Hotel Group</title>
        <meta
          name="description"
          content="Contact us at JAZ Hotel Group. We are here to help you with any inquiries or reservations."
        />
        <meta name="robots" content="index,follow" />
        <link rel="canonical" href="https://www.jazhotels.com/contact" />
      </Head>
      <h1>Contact Us</h1>
      <form>
        <div className="form-group">
          <label htmlFor="name">Name</label>
          <input type="text" id="name" name="name" required />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input type="email" id="email" name="email" required />
        </div>
        <div className="form-group">
          <label htmlFor="subject">Subject</label>
          <input type="text" id="subject" name="subject" required />
        </div>
        <div className="form-group">
          <label htmlFor="message">Message</label>
          <textarea id="message" name="message" required></textarea>
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Contact;
