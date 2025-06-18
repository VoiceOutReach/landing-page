import React from "react";
import demoImage from "./assets/voiceoutreach-demo.jpg";

const Desktop = () => {
  return (
    <div className="flex flex-col md:flex-row h-screen w-full text-[#959AB6] bg-[#F2F3FA]">
      {/* Left Section */}
      <div className="w-full md:w-[40%] bg-[#DDE0EF] flex flex-col px-10 py-10 justify-between">
        {/* Logo */}
        <a href="#" className="text-white text-lg mb-8 font-semibold">
          VoiceOutReach.ai
        </a>

        {/* Main Content */}
        <div>
          <h1 className="text-[28px] font-bold text-white leading-snug mb-3">
            Break Through the Noise.
          </h1>
          <p className="text-white mb-8 leading-relaxed">
            Send personalized LinkedIn voice notes at scale — without recording a thing.
          </p>

          {/* Form */}
          <form
            action="https://formsubmit.co/hassan@voiceoutreach.ai"
            method="POST"
            target="hidden_iframe"
            className="flex flex-col items-start space-y-3 mb-4"
            onSubmit={(e) => {
              e.preventDefault();
              (e.target as HTMLFormElement).reset();
              const msg = document.getElementById("success-msg");
              if (msg) msg.style.display = "block";
            }}
          >
            <input
              type="email"
              name="email"
              required
              placeholder="Enter your email"
              className="px-4 py-2 rounded-full w-full max-w-[220px]"
            />

            {/* Hidden fields */}
            <input type="hidden" name="_subject" value="New Waitlist Signup!" />
            <input
              type="hidden"
              name="_autoresponse"
              value="Thanks for signing up! We’ll be in touch soon."
            />
            <input type="hidden" name="_template" value="box" />

            <button
              type="submit"
              className="px-4 py-2 rounded-full bg-[#4F46E5] text-white hover:bg-[#4338CA]"
            >
              Join Waitlist
            </button>
          </form>

          <p id="success-msg" style={{ display: "none", color: "green" }}>
            ✅ You're on the list!
          </p>
        </div>
      </div>

      {/* Right Section */}
      <div className="w-full md:w-[60%] flex items-center justify-center p-6">
        <img
          src={demoImage}
          alt="VoiceOutReach demo"
          className="rounded-xl w-full max-w-[600px] shadow-xl"
        />
      </div>
    </div>
  );
};

export default Desktop;
