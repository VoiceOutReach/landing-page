import React from "react";
import demoImage from "./assets/voiceoutreach-demo.jpg";
import logo from "./assets/logo-purple.png";

const Desktop = () => {
  return (
    <div className="flex flex-col md:flex-row h-screen w-full text-[#959AB6]">
      {/* Left Section */}
      <div className="w-full md:w-[40%] bg-[#DDE0EF] flex flex-col px-8 md:px-16 pt-6 md:pt-10">
        {/* Logo */}
        <div className="mb-6 md:mb-9">
          <img
            src={logo}
            alt="VoiceOutReach.ai Logo"
            className="w-[140px] h-auto"
          />
        </div>

        {/* Headline */}
        <h1 className="text-[24px] md:text-[32px] font-bold text-white leading-snug mb-3">
          Break Through the Noise.{" "}
          <span className="italic text-[#959AB6] font-extrabold">
            Send Personalized Voice DMs
          </span>{" "}
          on LinkedIn{" "}
          <span className="text-white text-[13px] ml-0.5">— Powered by AI.</span>
        </h1>

        {/* Description */}
        <p className="text-sm mt-4 mb-6 md:mb-7 max-w-md leading-relaxed">
          VoiceOutReach.ai lets you generate and send custom voice messages at
          scale—using GPT-powered scripts and voice cloning that sounds just
          like you.
        </p>

        {/* Waitlist Form - Using Formspree */}
        <form
          onSubmit={(e) => {
            e.preventDefault();
            const formData = new FormData(e.target as HTMLFormElement);
            fetch("https://formspree.io/f/xldnlykb", {
              method: "POST",
              body: formData,
              headers: { Accept: "application/json" },
            })
              .then((res) => {
                if (res.ok) {
                  alert("✅ Boom! You're officially on the waitlist. Early access is coming your way.");
                  (e.target as HTMLFormElement).reset();
                } else {
                  alert("❌ Something went wrong. Try again later.");
                }
              })
              .catch(() => alert("❌ Error submitting form."));
          }}
          className="flex flex-col items-start space-y-3 mb-4"
        >
          <input
            type="email"
            name="email"
            required
            placeholder="Enter your email"
            className="px-4 py-1 rounded-full w-[220px]"
          />
          <button
            type="submit"
            className="bg-[#959AB6] text-white font-bold text-xs tracking-[2.6px] px-6 py-2 rounded-full"
          >
            JOIN THE WAITLIST
          </button>
        </form>

        {/* Supporting Text */}
        <p className="text-sm max-w-md mt-4 leading-relaxed">
          Join the waitlist to be among the first to try AI-generated LinkedIn
          voice outreach. No spam. Just early access and real results.
        </p>

        <p className="text-sm mt-9 max-w-md font-bold">
          Helps recruiters 3× replies{" "}
          <span className="font-normal">
            from hiring managers on LinkedIn — using AI voice notes that sound
            like you.
          </span>
        </p>

        <p className="italic text-sm mt-9 max-w-md">
          “This is a game-changer for cold outreach. My reply rate tripled —
          and it sounds just like me.”
          <br />
          <span className="not-italic text-xs">
            — Hassan, Founder at VoiceOutReach
          </span>
        </p>
      </div>

      {/* Right Section - Image */}
      <div className="w-full md:w-[60%] bg-white flex items-center justify-center p-6 md:p-8">
        <img
          src={demoImage}
          alt="VoiceOutReach demo"
          className="rounded-2xl shadow-xl object-contain max-w-[60%] h-auto"
        />
      </div>
    </div>
  );
};

export default Desktop;
