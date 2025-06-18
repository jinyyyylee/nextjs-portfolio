import { NextResponse } from "next/server";

export async function GET(request: Request) {
  const lang = new URL(request.url).searchParams.get("lang") || "ko";
  const data = {
    ko: { greeting: "안녕하세요!", description: "DB에서 불러온 컨텐츠입니다." },
    en: { greeting: "Hello!", description: "Content loaded from DB." },
  };
  return NextResponse.json(data[lang] || data.ko);
}