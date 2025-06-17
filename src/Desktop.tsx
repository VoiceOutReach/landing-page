import React from "react";

const Desktop = () => {
  return (
    <div>
      <form
        action="https://formsubmit.co/hassan@voiceoutreach.ai"
        method="POST"
        target="hidden_iframe"
        className="flex flex-col items-start space-y-3 mb-4"
        onSubmit={(e) => {
          e.preventDefault();
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
  );
};

export default Desktop;
