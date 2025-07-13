"use client";

import { useRouter, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

interface Case {
  id: number;
  title: string;
  summary: string;
}

export default function CaseSelection() {
  const [cases, setCases] = useState<Case[]>([]);
  const [error, setError] = useState("");
  const searchParams = useSearchParams();
  const role = searchParams.get("role");
  const router = useRouter();

  useEffect(() => {
    fetch("/api/cases")
      .then((res) => res.json())
      .then((data) => setCases(data))
      .catch(() => setError("❌ خطا در دریافت پرونده‌ها"));
  }, []);

  const handleSelectCase = (caseId: number) => {
    router.push(`/game/hearing-room?case=${caseId}&role=${role}`);
  };

  return (
    <div className="p-4 space-y-4">
      <h1 className="text-xl font-bold">انتخاب پرونده</h1>
      {error && <p className="text-red-500">{error}</p>}
      <div className="grid gap-4 md:grid-cols-2">
        {cases.map((item) => (
          <Card key={item.id} className="cursor-pointer hover:shadow-md">
            <CardContent className="p-4">
              <h2 className="text-lg font-semibold mb-2">{item.title}</h2>
              <p className="text-sm text-gray-700">
                {item.summary.length > 120
                  ? item.summary.slice(0, 120) + "..."
                  : item.summary}
              </p>
              <Button onClick={() => handleSelectCase(item.id)} className="mt-4">
                انتخاب پرونده
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}