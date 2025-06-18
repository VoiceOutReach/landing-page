import React from "react";
import demoImage from "./assets/voiceoutreach-demo.jpg";

const Desktop = () => {
  return (
    <div className="flex flex-col md:flex-row h-screen w-full text-[#959AB6] font-sans">
      {/* Left Section */}
      <div className="md:w-[40%] bg-[#DDE0EF] flex flex-col px-10 md:px-16 py-8 justify-between">
        <div>
          <a href="#" className="text-[#4F46E5] text-lg font-semibold mb-6 block">
            VoiceOutReach.ai
          </a>

          <h1 className="text-[26px] md:text-[32px] font-bold text-[#1F2235] leading-snug mb-3">
            Break Through the Noise.
          </h1>
          <p className="text-sm md:text-base mb-6">
            We’re launching a tool that lets you send personalized LinkedIn voice notes using AI. Sound like you — without recording anything.
          </p>

          {/* FORM */}
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
              className="px-4 py-1 rounded-full w-full max-w-[220px]"
            />
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

          <p id="success-msg" style={{ display: "none", color: "green" }}>
            ✅ You're on the list!
          </p>
        </div>

        <p className="text-[11px] mt-8 text-[#7E83A3]">Made with ❤️ by Taha</p>
      </div>

      {/* Right Section - Image */}
      <div className="md:w-[60%] h-[250px] md:h-full bg-white flex justify-center items-center">
        <img
          src={demoImage}
          alt="VoiceOutReach demo"
          className="w-full h-full object-cover"
        />
      </div>
    </div>
  );
};

export default Desktop;