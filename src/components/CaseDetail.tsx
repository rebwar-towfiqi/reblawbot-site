// src/components/CaseDetail.tsx
"use client";
import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

type LegalCase = {
  id: number;
  title: string;
  summary: string;
  description: string;
};

function useQuery() {
  return new URLSearchParams(useLocation().search);
}

export default function CaseDetail() {
  const query = useQuery();
  const id = query.get("id");
  const [caseData, setCaseData] = useState<LegalCase | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchCase = async () => {
      try {
        const res = await fetch(`/api/case?id=${id}`);
        const data = await res.json();
        setCaseData(data);
      } catch (err) {
        console.error("❌ خطا در دریافت پرونده:", err);
      } finally {
        setLoading(false);
      }
    };

    if (id) {
      fetchCase();
    }
  }, [id]);

  if (loading) return <div className="p-4">⏳ در حال بارگذاری اطلاعات...</div>;
  if (!caseData) return <div className="p-4">❌ پرونده‌ای پیدا نشد.</div>;

  return (
    <div className="p-4 space-y-4">
      <h2 className="text-xl font-bold">📂 {caseData.title}</h2>
      <p className="text-gray-700 whitespace-pre-wrap">{caseData.description}</p>

      <div className="mt-6">
        <h3 className="font-semibold mb-2">📣 وظیفهٔ شما:</h3>
        <p className="text-gray-800">
          لطفاً بر اساس نقش انتخاب‌شده خود (قاضی، وکیل شاکی یا متهم)، دفاعیه‌ای ارائه دهید تا رأی هیأت منصفه صادر شود.
        </p>
      </div>
    </div>
  );
}
