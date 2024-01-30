"use client";

import { useState } from "react";

import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { Button } from "./ui/button";
import Modal from "./ui/modal";
import emailjs from "@emailjs/browser";
import { MdArrowOutward } from "react-icons/md";

import { User, MailIcon, MessageSquare, InboxIcon } from "lucide-react";

const Form = () => {
  const [showModal, setShowModal] = useState(false);

  const handleOnClose = () => {
    setShowModal(false);
  };

  const [form, setForm] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e: any) => {
    const { name, value } = e.target;

    setForm({
      ...form,
      [name]: value,
    });
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .send(
        "service_8le8dap",
        "template_jyctkxn",
        {
          from_name: form.name,
          to_name: "Axel",
          from_email: form.email,
          to_email: "axelzwaans@hotmail.com",
          subject: form.subject,
          message: form.message,
        },
        "NuBZBAq0praiHiRu3",
      )
      .then(
        () => {
          setLoading(false);
          // alert("Thank you. I'll get back to you as soon as possible.");
          setShowModal(true);

          setForm({
            name: "",
            email: "",
            subject: "",
            message: "",
          });
        },
        (error) => {
          setLoading(false);
          console.error(error);

          alert("Something went wrong. Please try again.");
        },
      );
  };

  return (
    <div>
      <form
        className="mx-auto flex flex-col gap-y-2 lg:w-[500px]"
        onSubmit={handleSubmit}
      >
        <div className="relative flex items-center">
          <Input
            required
            type="text"
            name="name"
            value={form.name}
            placeholder="Name"
            onChange={handleChange}
            minLength={2}
          />
          <User className="absolute right-6" size={20} />
        </div>
        <div className="relative flex items-center">
          <Input
            required
            type="email"
            name="email"
            value={form.email}
            placeholder="Email"
            onChange={handleChange}
            minLength={2}
          />
          <MailIcon className="absolute right-6" size={20} />
        </div>
        <div className="relative flex items-center">
          <Input
            required
            type="text"
            name="subject"
            value={form.subject}
            placeholder="Subject"
            onChange={handleChange}
            minLength={2}
          />
          <InboxIcon className="absolute right-6" size={20} />
        </div>
        <div className="relative flex items-center">
          <Textarea
            required
            name="message"
            value={form.message}
            placeholder="Type your message here..."
            onChange={handleChange}
            minLength={10}
          />
          <MessageSquare className="absolute right-6 top-4" size={20} />
        </div>
        <Button
          className="group relative flex w-fit items-center justify-center overflow-hidden rounded-md border-slate-900 bg-slate-50 px-4 py-2 font-bold text-slate-800 transition-transform ease-out hover:scale-105"
          type="submit"
        >
          <span className="absolute inset-0 z-0 h-full translate-y-9 bg-yellow-300 transition-transform duration-300 ease-in-out group-hover:translate-y-0"></span>
          <span className="relative flex items-center justify-center gap-2">
            Let&apos;s Talk <MdArrowOutward className="inline-block" />
          </span>
        </Button>
      </form>
      <Modal onClose={handleOnClose} visible={showModal} />
    </div>
  );
};

export default Form;
