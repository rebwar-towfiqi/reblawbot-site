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
        setCaseText("خطا در بارگذاری پرونده.");
      } finally {
        setLoading(false);
      }
    };

    fetchCaseText();
  }, [userRole, caseId, navigate]);

  const handleVote = async () => {
    if (!selectedVote || !caseId) return;


    
    try {
      const res = await fetch("http://localhost:4000/api/vote", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          case_id: caseId,
          vote: selectedVote,
          role: userRole,
    
        }),
      });

    
      if (res.ok) {
        setMessage("✅ رأی شما با موفقیت ثبت شد.");
      } else {
        setMessage("❌ خطا در ثبت رأی.");
      }
    } catch {
      setMessage("❌ خطا در ارتباط با سرور.");
    }
  };

  return (
    <div className="p-6 max-w-3xl mx-auto">
      <h1 className="text-xl font-bold mb-4">🧾 جلسه رسیدگی</h1>

      {!caseId && !loading ? (
        <p>لطفاً ابتدا یک پرونده انتخاب کنید.</p>
      ) : loading ? (
        <p>در حال بارگذاری پرونده...</p>
      ) : (
        <>
          <p className="whitespace-pre-wrap bg-gray-100 p-4 rounded text-justify mb-4">
            {caseText}
          </p>

          <div className="space-y-2">
            <label className="block font-medium">✋ انتخاب رأی:</label>
            <div className="flex gap-4">
              <button
                onClick={() => setSelectedVote("guilty")}
                className={`px-4 py-2 rounded ${
                  selectedVote === "guilty"
                    ? "bg-red-500 text-white"
                    : "bg-white border"
                }`}
              >
                مجرم است
              </button>
              <button
                onClick={() => setSelectedVote("innocent")}
                className={`px-4 py-2 rounded ${
                  selectedVote === "innocent"
                    ? "bg-green-500 text-white"
                    : "bg-white border"
                }`}
              >
                بی‌گناه است
              </button>
            </div>

            <button
              onClick={handleVote}
              disabled={!selectedVote}
              className="mt-4 px-6 py-2 bg-blue-600 text-white rounded disabled:opacity-50"
            >
              ثبت رأی
            </button>

            {message && <p className="mt-3 text-sm text-gray-700">{message}</p>}
          </div>
        </>
      )}
    </div>
  );
};

export default HearingRoom;
