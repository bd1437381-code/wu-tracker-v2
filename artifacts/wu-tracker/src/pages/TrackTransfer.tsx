import { useState } from "react";

const footerLinks = [
  "الصفحة الرئيسية",
  "معلومات حول الشركة",
  "نبذة عنا",
  "المدونة",
  "الإبلاغ",
  "خطأ في الأمان",
  "العلاقات بين المستثمرين",
  "الوظائف",
  "مؤسسة WU",
  "الملكية الفكرية",
  "بيان الخصوصية عبر شبكة الإنترنت",
  "الأحكام والشروط",
  "التوعية",
  "الحماية من الاحتيال",
  "معلومات حول ملف تعريف الارتباط",
  "التواصل معنا",
];

export default function TrackTransfer() {
  const [activeTab, setActiveTab] = useState<"sender" | "receiver">("sender");
  const [mtcn, setMtcn] = useState(["", "", "", "", "", "", "", "", "", ""]);
  const [firstName, setFirstName] = useState("");

  const handleMtcnChange = (index: number, value: string) => {
    const digits = value.replace(/\D/g, "");
    const next = [...mtcn];
    next[index] = digits.slice(-1);
    setMtcn(next);
  };

  return (
    <div dir="rtl" className="min-h-screen flex flex-col bg-white font-arabic">
      {/* Header */}
      <header className="bg-wu-dark px-4 py-3 flex items-center justify-between">
        <div className="w-16"></div>

        {/* WU Logo */}
        <div className="flex-1 flex justify-center">
          <img src={`${import.meta.env.BASE_URL}wu-logo.png`} alt="Western Union" className="h-8 object-contain" />
        </div>

        {/* Menu Button */}
        <button className="border border-gray-400 text-white text-sm px-3 py-1 rounded">
          القائمة
        </button>
      </header>

      {/* Language Selector */}
      <div className="px-4 pt-3 flex justify-end">
        <button className="text-wu-blue text-sm flex items-center gap-1">
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
            <circle cx="8" cy="8" r="7" stroke="currentColor" strokeWidth="1.5" />
            <path d="M8 1C8 1 5 4 5 8C5 12 8 15 8 15" stroke="currentColor" strokeWidth="1.5" />
            <path d="M8 1C8 1 11 4 11 8C11 12 8 15 8 15" stroke="currentColor" strokeWidth="1.5" />
            <path d="M1 8H15" stroke="currentColor" strokeWidth="1.5" />
          </svg>
          <span>عربي/المملكة العربية السعودية</span>
        </button>
      </div>

      {/* Main Content */}
      <main className="flex-1 px-4 pt-4 pb-8">
        <h1 className="text-2xl font-bold text-gray-900 mb-5">تتبع تحويل</h1>

        {/* Tabs */}
        <div className="flex border-b border-gray-200 mb-6">
          <button
            onClick={() => setActiveTab("sender")}
            className={`flex-1 flex items-center justify-center gap-2 pb-3 text-sm font-medium transition-colors ${
              activeTab === "sender"
                ? "border-b-2 border-gray-900 text-gray-900"
                : "text-gray-500"
            }`}
          >
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.5">
              <path d="M10 3v10M10 3L6 7M10 3l4 4" />
              <path d="M3 17h14" />
            </svg>
            أنا المرسل
          </button>
          <button
            onClick={() => setActiveTab("receiver")}
            className={`flex-1 flex items-center justify-center gap-2 pb-3 text-sm font-medium transition-colors ${
              activeTab === "receiver"
                ? "border-b-2 border-gray-900 text-gray-900"
                : "text-gray-500"
            }`}
          >
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.5">
              <path d="M10 17V7M10 17L6 13M10 17l4-4" />
              <path d="M3 3h14" />
            </svg>
            أنا المستلم
          </button>
        </div>

        {activeTab === "sender" ? (
          <div className="space-y-6">
            {/* MTCN Error Message */}
            <p className="text-sm text-gray-500">track-transfer.mtcn_text_input_error_new</p>

            {/* MTCN Input */}
            <div className="flex gap-1 justify-between">
              {mtcn.map((digit, i) => (
                <input
                  key={i}
                  type="text"
                  inputMode="numeric"
                  maxLength={1}
                  value={digit}
                  onChange={(e) => handleMtcnChange(i, e.target.value)}
                  className="w-8 h-8 border-b-2 border-gray-300 text-center text-lg focus:outline-none focus:border-gray-700 bg-transparent"
                />
              ))}
            </div>

            {/* First Name Input */}
            <div>
              <input
                type="text"
                placeholder="الاسم الأول للفرسل"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
                className="w-full border-b border-gray-300 py-2 text-sm focus:outline-none focus:border-gray-700 bg-transparent placeholder-gray-400 text-right"
              />
            </div>

            {/* Continue Button */}
            <button className="w-full bg-wu-purple text-white py-4 rounded text-base font-medium hover:bg-wu-purple-dark transition-colors">
              المتابعة
            </button>

            {/* MTCN Help Link */}
            <div className="text-center">
              <a href="#" className="text-wu-blue text-sm">
                لا تعرف رقم التتبع (MTCN)؟
              </a>
            </div>
          </div>
        ) : (
          <div className="space-y-6">
            {/* Receiver tab */}
            <p className="text-sm text-gray-500">track-transfer.mtcn_text_input_error_new</p>

            <div className="flex gap-1 justify-between">
              {mtcn.map((digit, i) => (
                <input
                  key={i}
                  type="text"
                  inputMode="numeric"
                  maxLength={1}
                  value={digit}
                  onChange={(e) => handleMtcnChange(i, e.target.value)}
                  className="w-8 h-8 border-b-2 border-gray-300 text-center text-lg focus:outline-none focus:border-gray-700 bg-transparent"
                />
              ))}
            </div>

            <div>
              <input
                type="text"
                placeholder="الاسم الأول للمستلم"
                className="w-full border-b border-gray-300 py-2 text-sm focus:outline-none focus:border-gray-700 bg-transparent placeholder-gray-400 text-right"
              />
            </div>

            <button className="w-full bg-wu-purple text-white py-4 rounded text-base font-medium hover:bg-wu-purple-dark transition-colors">
              المتابعة
            </button>

            <div className="text-center">
              <a href="#" className="text-wu-blue text-sm">
                لا تعرف رقم التتبع (MTCN)؟
              </a>
            </div>
          </div>
        )}
      </main>

      {/* Footer Links */}
      <footer className="px-4 pb-6 border-t border-gray-100 pt-6">
        <div className="flex flex-wrap justify-center gap-x-1 gap-y-1 text-xs text-gray-600 mb-6">
          {footerLinks.map((link, i) => (
            <span key={i} className="flex items-center">
              <a href="#" className="hover:underline">{link}</a>
              {i < footerLinks.length - 1 && (
                <span className="mx-1 text-gray-300">|</span>
              )}
            </span>
          ))}
        </div>

        {/* Copyright */}
        <p className="text-center text-xs text-gray-500 mb-4">
          Western Union Holdings, Inc 2026. جميع الحقوق محفوظة
        </p>

        {/* Follow us */}
        <div className="text-center">
          <p className="text-sm text-gray-700 mb-3">تابعنا على</p>
          <div className="flex justify-center gap-5">
            {/* Facebook */}
            <a href="#" className="text-gray-600 hover:text-gray-900">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
                <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
              </svg>
            </a>
            {/* YouTube */}
            <a href="#" className="text-gray-600 hover:text-gray-900">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
                <path d="M22.54 6.42a2.78 2.78 0 0 0-1.95-1.95C18.88 4 12 4 12 4s-6.88 0-8.59.47a2.78 2.78 0 0 0-1.95 1.95A29 29 0 0 0 1 12a29 29 0 0 0 .46 5.58A2.78 2.78 0 0 0 3.41 19.5C5.12 20 12 20 12 20s6.88 0 8.59-.47a2.78 2.78 0 0 0 1.95-1.95A29 29 0 0 0 23 12a29 29 0 0 0-.46-5.58zM9.75 15.02V8.98L15.5 12l-5.75 3.02z" />
              </svg>
            </a>
            {/* Instagram */}
            <a href="#" className="text-gray-600 hover:text-gray-900">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                <circle cx="12" cy="12" r="4" />
                <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
              </svg>
            </a>
            {/* X (Twitter) */}
            <a href="#" className="text-gray-600 hover:text-gray-900">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
              </svg>
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
