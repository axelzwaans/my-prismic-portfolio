import React from "react";
import { Button } from "../ui/button";

export default function Modal({ visible, onClose }: any) {
  const handleOnClose = (e: any) => {
    e.stopPropagation();
    onClose();
  };

  if (!visible) return null;

  return (
    <div
      id="container"
      onClick={handleOnClose}
      className="fixed inset-0 flex items-center justify-center bg-opacity-30 backdrop-blur-sm"
    >
      <div className="mx-auto flex flex-col rounded-lg border bg-white p-4 shadow-lg">
        <h2 className="pb-4 text-center text-xl font-bold text-slate-900">
          I&apos;ve got mail!
        </h2>
        <p className="pb-4 text-center text-slate-900">
          Thanks for getting in touch, I&apos;ll get back to you soon.
        </p>
        <div className="mx-auto">
          <Button
            className="group relative flex w-fit items-center justify-center overflow-hidden rounded-md border-slate-900 bg-slate-50 px-4 py-2 font-bold text-slate-800 transition-transform ease-out hover:scale-105"
            type="submit"
            onClick={handleOnClose}
          >
            <span className="absolute inset-0 z-0 h-full translate-y-9 bg-yellow-300 transition-transform duration-300 ease-in-out group-hover:translate-y-0"></span>
            <span className="relative flex items-center justify-center gap-2">
              Close
            </span>
          </Button>
        </div>
      </div>
    </div>
  );
}
