import { FormEvent, useState } from "react";
import { toast } from "react-toastify";
import MediumLoader from "./general/loaders/MediumLoader";

export interface ContactMeProps {
  name: string;
  city: string;
  email: string;
  phone: string;
  message: string;
}

const initValues: ContactMeProps = { name: "", email: "", phone: "", city: "", message: "" };

const ContactMe = () => {
  const [values, setValues] = useState<ContactMeProps>(initValues);
  const [loading, setLoading] = useState(false);

  const resetValues = () => setValues(initValues);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setLoading(true);
    try {
      await fetch("/api/contact", {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify(values),
      });
      setLoading(false);
      toast.success("Thanks, Your information submitted successfully!");
    } catch (err) {
      console.log(err);
      setLoading(false);
      toast.error("Something went wrong!");
    } finally {
      resetValues();
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col justify-start items-center lg:items-end gap-2 lg:gap-3 lg:max-w-sm w-full text-[#1D1D1B]">
      <input
        value={values.name}
        type="text"
        className="w-full h-10 px-2"
        placeholder="*Name.."
        onChange={e => setValues(prev => ({ ...prev, name: e.target.value }))}
        required
      />
      <input
        value={values.city}
        type="text"
        className="w-full h-10 px-2"
        placeholder="*City.."
        onChange={e => setValues(prev => ({ ...prev, city: e.target.value }))}
        required
      />
      <input
        value={values.email}
        type="email"
        className="w-full h-10 px-2"
        placeholder="*youremail@example.com"
        onChange={e => {
          setValues(prev => ({ ...prev, email: e.target.value }));
        }}
        required
      />
      <input
        value={values.phone}
        type="tel"
        className="w-full h-10 px-2"
        placeholder="*Phone Number"
        onChange={e => setValues(prev => ({ ...prev, phone: e.target.value }))}
        required
      />
      <textarea
        value={values.message}
        className="w-full px-2 pt-1"
        placeholder="Leave a message.."
        rows={3}
        onChange={e => setValues(prev => ({ ...prev, message: e.target.value }))}
      />
      <button
        type="submit"
        className="flex justify-between items-center gap-2 px-6 py-3 text-white font-bold bg-gradient-to-tr from-[#3919BB] via-[#5C20CF] to-[#A92FFB]"
      >
        Submit
        {loading ? <MediumLoader /> : <></>}
      </button>
    </form>
  );
};

export default ContactMe;
