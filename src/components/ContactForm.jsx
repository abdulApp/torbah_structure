import { useState } from "react";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    title: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    // Reset form data to initial empty values
    setFormData({
      name: "",
      email: "",
      phone: "",
      title: "",
      message: "",
    });
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col h-full gap-8 py-6 px-8 bg-white rounded-xl"
      dir="rtl"
    >
      <div className="inline-flex items-center gap-4">
        <div className="w-1/2">
          <input
            type="text"
            placeholder="الاسم الاول"
            className="w-full p-3 bg-[#82828287] rounded-lg border border-gray-300"
            value={formData.name}
            onChange={handleChange}
          />
        </div>
        <div className="w-1/2">
          <input
            type="text"
            placeholder="الاسم الاخير"
            className="w-full p-3 bg-[#82828287] rounded-lg border border-gray-300"
            value={formData.name}
            onChange={handleChange}
          />
        </div>
      </div>
      <input
        type="email"
        placeholder="البريد الالكتروني"
        className="w-full p-3 bg-[#82828287] rounded-lg border border-gray-300"
        value={formData.email}
        onChange={handleChange}
      />
      <input
        type="text"
        placeholder="رقم الجوال"
        className="w-full p-3 bg-[#82828287] rounded-lg border border-gray-300"
        value={formData.phone}
        onChange={handleChange}
      />
      <textarea
        placeholder="الرسالة"
        className="w-full p-3 bg-[#82828287] rounded-lg border border-gray-300"
        rows="4"
        value={formData.message}
        onChange={handleChange}
      />
      <button
        type="submit"
        className="w-full mt-4 mx-auto p-3 bg-[#0478C1] text-white font-bold rounded-3xl hover:bg-[#2f6c92]"
      >
        أرسال رسالة
      </button>
    </form>
  );
};

export default ContactForm;
