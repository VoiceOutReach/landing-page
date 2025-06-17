import React from "react";
import demoImage from "./assets/voiceoutreach-demo.jpg";

const Desktop = () => {
  return (
    <div className="flex flex-col md:flex-row h-auto md:h-screen w-full text-[#959AB6]">
      {/* Left Section */}
      <div className="w-full md:w-[35%] bg-[#DDE0EF] flex flex-col px-6 md:px-16 pt-6 md:pt-10">
        <a
          href="#"
          className="text-white text-lg mb-6 md:mb-9 font-medium"
        >
          VoiceOutReach.ai
        </a>

        <h1 className="text-[22px] md:text-[28px] font-bold text-white leading-snug mb-3">
          Break Through the Noise.{" "}
          <span className="italic text-[#959AB6] font-extrabold">Send Personalized Voice DMs</span> on LinkedIn{" "}
          <span className="text-white text-[12px] md:text-[13px] ml-0.5">— Powered by AI.</span>
        </h1>

        <p className="text-sm mt-3 mb-6 max-w-md leading-relaxed">
          VoiceOutReach.ai lets you generate and send custom voice messages at
          scale—using GPT-powered scripts and voice cloning that sounds just
          like you.
        </p>

        <form
  action="https://formsubmit.co/founder@voiceoutreach.ai"
  method="POST"
  target="hidden_iframe"
  className="flex flex-col items-start space-y-3 mb-4"
  onSubmit={(e) => {
    e.target.reset();
    const msg = document.getElementById("success-msg");
    if (msg) msg.style.display = "block";
  }}
>
  <input
    type="email"
    name="email"
    required
    placeholder="Enter your email"
    className="px-4 py-1 rounded-full w-full max-w-[220px]"
  />

  <!-- Hidden fields -->
  <input type="hidden" name="_subject" value="New Waitlist Signup!" />
  <input type="hidden" name="_autoresponse" value="Thanks for signing up! We’ll be in touch soon." />
  <input type="hidden" name="_template" value="box" />

  <button
    type="submit"
    className="px-4 py-1 rounded-full bg-[#4F46E5] text-white hover:bg-[#4338CA]"
  >
    Join Waitlist
  </button>
</form>

<iframe name="hidden_iframe" style={{ display: 'none' }}></iframe>

<p id="success-msg" style={{ display: 'none', color: 'green' }}>
  ✅ You're on the list!
</p>

        <p className="text-sm max-w-md mt-4 leading-relaxed">
          Join the waitlist to be among the first to try AI-generated LinkedIn
          voice outreach. No spam. Just early access and real results.
        </p>

        <p className="text-sm mt-5 max-w-md font-semibold">
          Helps recruiters 3× replies{" "}
          <span className="font-normal">
            from hiring managers on LinkedIn — using AI voice notes that sound like you.
          </span>
        </p>

        <p className="italic text-sm mt-5 max-w-md">
          “This is a game-changer for cold outreach. My reply rate tripled —
          and it sounds just like me.”
          <br />
          <span className="not-italic text-xs">— Hassan, Founder at VoiceOutReach</span>
        </p>
      </div>

      {/* Right Section - Image */}
      <div className="w-full md:w-[48%] bg-white flex items-center justify-center p-6 md:p-8">
        <img
  src={demoImage}
  alt="VoiceOutReach demo"
  className="rounded-2xl shadow-xl w-[90%] md:w-[85%] h-auto object-contain md:ml-[200px]"
/>
      </div>
    </div>
  );
};

export default Desktop;
