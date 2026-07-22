import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import {
  FaLinkedin,
  FaEnvelope,
  FaMapMarkerAlt,
} from "react-icons/fa";

function Contact() {
  const form = useRef();

const [loading, setLoading] = useState(false);
const [status, setStatus] = useState("");
const sendEmail = (e) => {
  e.preventDefault();

  const formData = new FormData(form.current);

  const name = formData.get("user_name").trim();
  const email = formData.get("user_email").trim();
  const message = formData.get("message").trim();

  if (!name || !email || !message) {
    setStatus("⚠️ Please fill in all fields.");
    return;
  }

  setLoading(true);
  setStatus("");

  emailjs
    .sendForm(
      "YOUR_SERVICE_ID",
      "YOUR_TEMPLATE_ID",
      form.current,
      "YOUR_PUBLIC_KEY"
    )
    .then(
      () => {
        setLoading(false);
        setStatus("✅ Message sent successfully!");
        form.current.reset();
      },
      () => {
        setLoading(false);
        setStatus("❌ Failed to send message.");
      }
    );
};
  return (
    <section id="contact" className="py-28">

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">

        {/* LEFT */}

        <div>

          <p className="text-purple-400 font-semibold mb-3">
            ● Contact
          </p>

          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
            Let's Build Something Amazing
          </h2>

          <p className="text-gray-400 leading-8 text-lg mb-10">
            I'm always open to discussing opportunities,
            collaborations and innovative ideas.

            Feel free to connect with me.
          </p>

          <div className="space-y-8">

            <div className="flex items-center gap-5">

              <FaEnvelope
                size={24}
                className="text-purple-400"
              />

              <div>

                <h3 className="font-semibold">
                  Email
                </h3>

                <p className="text-gray-400">
                  imkarthickmuralidharan@gmail.com
                </p>

              </div>

            </div>

            <div className="flex items-center gap-5">

              <FaLinkedin
                size={24}
                className="text-purple-400"
              />

              <div>

                <h3 className="font-semibold">
                  LinkedIn
                </h3>

                <a
                  href="https://linkedin.com/in/imkarthickm"
                  target="_blank"
                  className="text-gray-400 hover:text-purple-400"
                >
                  linkedin.com/in/imkarthickm
                </a>

              </div>

            </div>

            <div className="flex items-center gap-5">

              <FaMapMarkerAlt
                size={24}
                className="text-purple-400"
              />

              <div>

                <h3 className="font-semibold">
                  Location
                </h3>

                <p className="text-gray-400">
                  Madurai, Tamil Nadu, India
                </p>

              </div>

            </div>

          </div>

        </div>

        {/* RIGHT */}

        <form ref={form} onSubmit={sendEmail}>

          <input
  type="text"
  name="user_name"
  placeholder="Your Name"
  className="w-full p-5 rounded-xl bg-[#090D20] border border-purple-500/20 focus:border-purple-500 outline-none placeholder:text-gray-500"
/>

          <input
  type="email"
  name="user_email"
  placeholder="Your Email"
  className="w-full p-5 rounded-xl bg-[#090D20] border border-purple-500/20 focus:border-purple-500 outline-none placeholder:text-gray-500"
/>

          <textarea
  name="message"
  placeholder="Your Message"
  rows={6}
  className="w-full p-5 rounded-xl bg-[#090D20] border border-purple-500/20 focus:border-purple-500 outline-none resize-none placeholder:text-gray-500"
/>

          <button
  type="submit"
  disabled={loading}
  className="w-full py-4 rounded-xl bg-gradient-to-r from-purple-600 to-violet-500 font-semibold transition hover:scale-105"
>
  {loading ? "Sending..." : "Send Message"}
</button>
{status && (
  <p className="mt-4 text-center text-purple-300">
    {status}
  </p>
)}

        </form>

      </div>

    </section>
  );
}

export default Contact;