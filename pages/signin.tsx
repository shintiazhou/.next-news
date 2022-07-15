import React from "react";
import NewsIllustration from "./../assets/newsIllustration";
import Button from "./../components/Button";
import TextField from "./../components/TextField";

const signin = () => {
  return (
    <div className=" mt-20 lg:mt-0 lg:bg-secondary lg:fixed lg:inset-0 lg:px-10">
      <div
        className="
        flex flex-col lg:flex-row-reverse lg:gap-10 h-full
            items-center lg:justify-between
            container mx-auto text-primary"
      >
        <div className="animate-container w-full lg:w-4/5 overflow-hidden ">
          <NewsIllustration />
        </div>
        <section className="text-center lg:w-1/2  lg:bg-tertiary p-10">
          <h1 className="text-3xl mb-4">
            Welcome Back to
            <span className="text-secondary"> .NextNews</span>
          </h1>

          <div className="mt-8 w-full flex flex-col gap-4">
            <TextField
              variant="muted"
              onChange={() => {}}
              placeholder="Email"
              value=""
            />
            <TextField
              variant="muted"
              onChange={() => {}}
              placeholder="Password"
              value=""
            />

            <div className="flex justify-between my-2">
              <label>
                <input type="checkbox" /> Remember Me
              </label>
              <u>Forgot password?</u>
            </div>
            <Button>Log In</Button>
            <p>or</p>
            <Button variant="outlined">Log in with google</Button>
          </div>
        </section>
      </div>
    </div>
  );
};

export default signin;
