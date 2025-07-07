import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const HearingRoom: React.FC = () => {
  const navigate = useNavigate();
  const [caseText, setCaseText] = useState("");
  const [loading, setLoading] = useState(true);
  const [selectedVote, setSelectedVote] = useState("");
  const [message, setMessage] = useState("");

  const userRole = localStorage.getItem("userRole");

  const caseId = localStorage.getItem("selectedCaseId");

  if (!caseId) {
  // اگر پرونده‌ای انتخاب نشده
  return <p>لطفاً ابتدا یک پرونده انتخاب کنید.</p>;
}
  
 useEffect(() => {
  if (!userRole || !caseId) {
    navigate("/"); // بازگشت به صفحه اول اگر اطلاعات ناقص بود
    return;
  }

  const fetchCaseText = async () => {
    try {
      const res = await fetch(`http://localhost:4000/api/case/${caseId}`);
      if (!res.ok) throw new Error("Failed to fetch");
      const data = await res.json();
      setCaseText(data.full_text || "متن پرونده یافت نشد.");
    } catch (error) {
      console.error("خطا در دریافت متن پرونده:", error);
      setCaseText("خطا در بارگذاری پرونده.");
    } finally {
      setLoading(false);
    }
  };

  fetchCaseText();
}, [userRole, caseId, navigate]);


  const handleVote = async (vote: string) => {
    setSelectedVote(vote);
    try {
      const res = await fetch("/api/vote", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          caseId: Number(caseId),
          role: userRole,
          vote: vote,
        }),
      });

      const result = await res.json();
      if (res.ok) {
        setMessage("✅ رأی شما با موفقیت ثبت شد.");
      } else {
        setMessage(`❌ خطا: ${result.message}`);
      }
    } catch (error) {
      console.error("خطا در ارسال رأی:", error);
      setMessage("❌ خطا در ارتباط با سرور.");
    }
  };

  return (
    <div className="p-4 max-w-3xl mx-auto">
      <h1 className="text-xl font-bold mb-4">🧑‍⚖️ جلسه رسیدگی</h1>
      <p className="text-sm text-gray-600 mb-2">نقش شما: {userRole}</p>

      {loading ? (
        <p>در حال بارگذاری متن پرونده...</p>
      ) : (
        <div className="bg-white p-4 rounded shadow mb-4 whitespace-pre-line">
          {caseText}
        </div>
      )}

      <div className="flex gap-4 mb-2">
        <button
          onClick={() => handleVote("بی‌گناه")}
          className={`px-4 py-2 rounded ${
            selectedVote === "بی‌گناه"
              ? "bg-green-600 text-white"
              : "bg-gray-200"
          }`}
        >
          بی‌گناه
        </button>
        <button
          onClick={() => handleVote("مجرم")}
          className={`px-4 py-2 rounded ${
            selectedVote === "مجرم" ? "bg-red-600 text-white" : "bg-gray-200"
          }`}
        >
          مجرم
        </button>
      </div>

      {message && <p className="text-sm mt-2">{message}</p>}
    </div>
  );
};

export default HearingRoom;
