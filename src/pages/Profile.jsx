import React from "react";

export default function Profile() {
  return (
    <div className="min-h-screen pt-20 px-6">
      <div className="bg-white h-full w-full rounded-xl p-14">
        <p>تعديل</p>
        <div className="flex flex-col justify-center items-end gap-6 px-4 py-4">
          <h2 className="text-4xl">المعلومات الشخصية</h2>
          <div className="w-full flex gap-8">
            <div className="w-full flex flex-col gap-2 items-end">
              <label htmlFor="الاسم">الاسم</label>
              <input
                type="text"
                className="w-full p-3 rounded-lg border bg-[#F9F9F9]"
                placeholder="اسم المستخدم"
              />
            </div>
            <div className="w-full flex flex-col gap-2 items-end">
              <label htmlFor="الاسم">الاسم</label>
              <input
                type="text"
                className="w-full p-3 rounded-lg border bg-[#F9F9F9]"
                placeholder="اسم المستخدم"
              />
            </div>
          </div>
          <div className="w-full flex flex-col gap-2 items-end">
            <label htmlFor="الاسم">الاميل</label>
            <input
              type="text"
              className="w-full p-3 rounded-lg border bg-[#F9F9F9]"
              placeholder="اسم المستخدم"
            />
          </div>
          <div className="w-full flex flex-col gap-2 items-end">
            <label htmlFor="الاسم">رقم الهاتف</label>
            <input
              type="text"
              className="w-full p-3 rounded-lg border bg-[#F9F9F9]"
              placeholder="اسم المستخدم"
            />
          </div>
          <div className="w-full flex flex-col gap-2 items-end">
            <label htmlFor="الاسم">كلمة المرور</label>
            <input
              type="text"
              className="w-full p-3 rounded-lg border bg-[#F9F9F9]"
              placeholder="اسم المستخدم"
            />
          </div>
          <div className="w-full flex flex-col gap-2 items-end mt-12">
            <button className="w-full p-3 rounded-lg bg-[#0478C1] text-white">حفظ</button>
          </div>
        </div>
      </div>
    </div>
  );
}
