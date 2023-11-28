import React from "react";

function Hero() {
  return (
    <div className="relative text-white h-screen w-full overflow-hidden">
      <img
        src="https://themedox.com/mykd/wp-content/themes/mykd/assets/img/bg/breadcrumb_bg02.jpg"
        alt="hero"
        className="w-full h-full object-cover z-0 bg-blend-multiply"
      />
      <div className="absolute top-0 left-0 right-0 bottom-0 bg-black bg-opacity-50 z-0">
        <div className="flex flex-col items-center justify-center h-full">
          <h1
            className="text-8xl uppercase font-extrabold"
            style={{ textShadow: "-1px 5px 0px rgba(69, 248, 130, 0.66)" }}
          >
            Book Store
          </h1>
          <p className="text-2xl mt-5 uppercase font-bold">
            The best place to buy books
          </p>
        </div>
        <button className="absolute left-0 bottom-40 right-0 w-56 mb-10 mx-auto bg-white text-black text-2xl font-bold py-3 px-10 rounded-full ">
          Shop Now
        </button>
      </div>
      <div className="absolute bottom-0 left-0 right-0 h-16">
        <div
          className="h-full"
          style={{
            clipPath: "polygon(100% 0, 0 0, 100% 100%)",
            position: "absolute",
            bottom: 0,
            left: 0,
            width: "50%",
            backgroundColor: "#45f882",
            height: "50px",
            transform: "rotate(180deg)",
          }}
        ></div>
        <div
          className="h-full"
          style={{
            clipPath: "polygon(0 0, 100% 0, 0 100%)",
            position: "absolute",
            bottom: 0,
            right: 0,
            width: "50%",
            backgroundColor: "#45f882",
            height: "50px",
            transform: "rotate(180deg)",
          }}
        ></div>
      </div>
    </div>
  );
}

export default Hero;
