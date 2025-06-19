"use client";
import Link from "next/link";

export default function GlobalError() {
  return (
    <section className="flex items-center justify-center h-screen bg-white w-ful">
      <div className="max-w-screen-xl px-4 py-8 mx-auto lg:py-16 lg:px-6">
        <div className="max-w-screen-sm mx-auto text-center">
          <h1 className="mb-4 font-extrabold tracking-tight font-display text-7xl lg:text-9xl text-brand-100 ">
            500
          </h1>
          <p className="mb-4 text-3xl font-bold tracking-tight text-gray-900 font-display md:text-4xl ">
            Something went wrong
          </p>
          <p className="mb-4 text-lg font-light text-gray-500 font-display ">
            Please try again later{" "}
          </p>
          <Link
            href="/"
            className="inline-flex text-white font-display bg-brand-100 hover:bg-brand-75 font-medium rounded-lg text-sm px-5 py-2.5 text-center my-4"
          >
            Back to Homepage
          </Link>
        </div>
      </div>
    </section>
  );
}
