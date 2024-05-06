import { Suspense, useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { FoxModel } from "../../models/fox";
import { Canvas } from "@react-three/fiber";
import { Loader } from "../../components/loader";
import { useAlert } from "../../hooks/useAlert";
import { Alert } from "../../components/alert";

export const Contact = () => {
  const formRef = useRef<HTMLFormElement>(null);
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isLoading, setIsLoading] = useState(false);
  const [currentAnimation, setCurrentAnimation] = useState("Idle" as string);

  const { alert, showAlert } = useAlert();

  const handleChange = (e: any) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleFocus = () => {
    setCurrentAnimation("walk");
  };

  const handleBlur = () => {
    setCurrentAnimation("Idle");
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    setIsLoading(true);
    setCurrentAnimation("hit");

    emailjs
      .sendForm(
        import.meta.env.VITE_APP_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_APP_EMAILJS_TEMPLATE_ID,
        formRef.current!,
        import.meta.env.VITE_APP_EMAILJS_PUBLIC_KEY
      )
      .then(() => {
        setIsLoading(false);
        showAlert({
          text: "Message sent successfully!",
          type: "success",
        });

        setTimeout(() => {
          setCurrentAnimation("Idle");
          setForm({ name: "", email: "", message: "" });
        }, 3000);
      })
      .catch((err) => {
        setIsLoading(false);
        setCurrentAnimation("Idle");
        showAlert({
          text: "Failed to send message. Please try again later.",
        });
        console.log(err);
      });
  };

  return (
    <section className="relative flex lg:flex-row flex-col max-container">
      {alert.show && <Alert {...alert} />}
      <div className="flex-1 min-w-[50%] flex flex-col">
        <h1 className="head-text">Get in Touch</h1>
        <form
          className="w-full flex flex-col gap-7 mt-14"
          onSubmit={handleSubmit}
          ref={formRef}
        >
          <label htmlFor="name" className="text-black-500 font-semibold">
            Name
          </label>
          <input
            type="text"
            name="name"
            className="input"
            placeholder="John"
            value={form.name}
            required
            onChange={handleChange}
            onFocus={handleFocus}
            onBlur={handleBlur}
          />
          <label htmlFor="email" className="text-black-500 font-semibold">
            Email
          </label>
          <input
            type="email"
            name="email"
            className="input"
            placeholder="john@gmail.com"
            value={form.email}
            required
            onChange={handleChange}
            onFocus={handleFocus}
            onBlur={handleBlur}
          />
          <label htmlFor="message" className="text-black-500 font-semibold">
            Message
          </label>
          <textarea
            name="message"
            rows={4}
            className="input"
            placeholder="Let me know how I can help you!"
            value={form.message}
            required
            onChange={handleChange}
            onFocus={handleFocus}
            onBlur={handleBlur}
          />

          <button
            type="submit"
            className="btn"
            disabled={isLoading}
            onFocus={handleFocus}
            onBlur={handleBlur}
          >
            {isLoading ? "Sending..." : "Send Message"}
          </button>
        </form>
      </div>
      <div className="lg:w-1/2 w-full lg:h-auto md:h-[550px] h-[350px]">
        <Canvas
          camera={{
            position: [0, 0, 5],
            fov: 75,
            near: 0.1,
            far: 1000,
          }}
        >
          <directionalLight intensity={2.5} position={[0, 0, 1]} />
          <ambientLight intensity={0.5} />
          <Suspense fallback={<Loader />}>
            <FoxModel
              currentAnimation={currentAnimation}
              position={[0.5, 0.35, 0]}
              rotation={[12.6, -0.6, 0]}
              scale={[0.5, 0.5, 0.5]}
            />
          </Suspense>
        </Canvas>
      </div>
    </section>
  );
};
