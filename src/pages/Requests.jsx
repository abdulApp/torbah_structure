import React from "react";

export default function Requests() {
  return (
    <div>
      <div className="bg-[#F7F8F9] h-16 flex flex-row mx-auto w-[1400px] mt-12">
        <div className="w-1/3 flex flex-row items-center justify-around">
          <button className="border py-2 px-4 w-24">اضافة</button>
          <button className="border py-2 px-4 w-64">تحميل</button>
        </div>
        <div className="w-2/3 flex flex-row items-center justify-end pr-8">
          <input type="text" placeholder="Search.." className="w-1/2" />
        </div>
      </div>
      <table className="mx-auto w-[1400px] h-52 mt-12 bg-white mb-4">
        <tr className="border-b h-14">
          <th>حالة الطلب</th>
          <th>الطلبات</th>
          <th>تاريخ الطلب</th>
          <th>اسم المستخدم</th>
          <th>رقم الطلب</th>
        </tr>
        <tr className=" text-center h-28 border-b">
          <td>قيد المراجعة </td>
          <td>ري ذكي</td>
          <td>21/11/2024</td>
          <td>خالد</td>
          <td>
            <label for="vehicle1">51468465465</label>{" "}
            <input type="checkbox" id="vehicle1" name="vehicle1" value="Bike" />
          </td>
        </tr>
        <tr className=" text-center h-28 border-b">
          <td>قيد المراجعة </td>
          <td>ري ذكي</td>
          <td>21/11/2024</td>
          <td>خالد</td>
          <td>
            <label for="vehicle1">51468465465</label>{" "}
            <input type="checkbox" id="vehicle1" name="vehicle1" value="Bike" />
          </td>
        </tr>
        <tr className=" text-center h-28 border-b">
          <td>قيد المراجعة </td>
          <td>ري ذكي</td>
          <td>21/11/2024</td>
          <td>خالد</td>
          <td>
            <label for="vehicle1">51468465465</label>{" "}
            <input type="checkbox" id="vehicle1" name="vehicle1" value="Bike" />
          </td>
        </tr>
      </table>
    </div>
  );
}
