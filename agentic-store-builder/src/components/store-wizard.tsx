"use client";

import { useMemo, useState } from "react";

const industries = [
  "الأزياء والإكسسوارات",
  "المنتجات التقليدية",
  "التجميل والعناية",
  "الأجهزة الإلكترونية",
  "المواد الغذائية",
  "الكتب والقرطاسية",
];

const businessGoals = [
  "بيع عبر الإنترنت فقط",
  "الربط مع متجر فعلي",
  "توسيع التوزيع في الجزائر",
  "إطلاق منتج جديد",
  "بناء علامة تجارية قوية",
];

const brandPalettes = [
  { name: "أخضر جزائري", colors: ["#0C7A5B", "#F2FFF9", "#053B2D"] },
  { name: "عنابي حديث", colors: ["#8B1E3F", "#FFF5F6", "#4F0B1E"] },
  { name: "أزرق متوسطي", colors: ["#1F8AC0", "#F1F8FF", "#0A3A59"] },
  { name: "رملي دافئ", colors: ["#C6934B", "#FFF7E9", "#5C3A15"] },
];

const digitalFeatures = [
  { id: "payment", label: "دفع إلكتروني عبر CIB و EDAHABIA" },
  { id: "delivery", label: "إدارة شركات التوصيل المحلية" },
  { id: "analytics", label: "تحليلات مبيعات متقدمة" },
  { id: "marketing", label: "أدوات التسويق عبر البريد والرسائل" },
  { id: "marketplace", label: "مزامنة مع واد كنيس ومنصات محلية" },
  { id: "inventory", label: "تتبع المخزون متعدد الفروع" },
];

type WizardData = {
  storeName: string;
  industry: string;
  city: string;
  goal: string;
  palette: string;
  features: string[];
};

const initialData: WizardData = {
  storeName: "",
  industry: industries[0],
  city: "",
  goal: businessGoals[0],
  palette: brandPalettes[0].name,
  features: ["payment", "delivery"],
};

const steps = [
  { id: 1, title: "معلومات المتجر" },
  { id: 2, title: "الهوية البصرية" },
  { id: 3, title: "الخصائص الرقمية" },
  { id: 4, title: "التوصية النهائية" },
];

export default function StoreWizard() {
  const [currentStep, setCurrentStep] = useState(1);
  const [data, setData] = useState<WizardData>(initialData);

  const recommendedPlan = useMemo(() => {
    const featureCount = data.features.length;
    if (featureCount >= 5) return "مؤسسة برو";
    if (featureCount >= 3) return "نمو متقدم";
    return "إطلاق سريع";
  }, [data.features.length]);

  const summaryPoints = useMemo(() => {
    return [
      `اسم المتجر: ${data.storeName || "متجرك"}`,
      `النشاط: ${data.industry}`,
      `المدينة: ${data.city || "لم يتم تحديدها"}`,
      `هدف العمل: ${data.goal}`,
      `هوية الألوان: ${data.palette}`,
      `الخصائص الأساسية: ${data.features
        .map((featureId) => {
          const found = digitalFeatures.find(({ id }) => id === featureId);
          return found?.label ?? "";
        })
        .filter(Boolean)
        .join("، ")}`,
    ];
  }, [data]);

  const handleFeatureToggle = (feature: string) => {
    setData((prev) => {
      const exists = prev.features.includes(feature);
      return {
        ...prev,
        features: exists
          ? prev.features.filter((item) => item !== feature)
          : [...prev.features, feature],
      };
    });
  };

  const canMoveForward = useMemo(() => {
    if (currentStep === 1) {
      return Boolean(data.storeName && data.city);
    }
    return true;
  }, [currentStep, data.storeName, data.city]);

  const nextStep = () => {
    if (!canMoveForward) return;
    setCurrentStep((prev) => Math.min(prev + 1, steps.length));
  };

  const previousStep = () => {
    setCurrentStep((prev) => Math.max(prev - 1, 1));
  };

  return (
    <section className="rounded-3xl bg-white p-8 shadow-xl">
      <div className="flex flex-wrap items-center justify-between gap-4">
        <div>
          <h3 className="text-2xl font-bold text-foreground">
            اصنع متجرك في دقائق
          </h3>
          <p className="text-sm text-stone-500">
            إجاباتك تساعدنا على تشكيل تجربة تتناسب مع السوق الجزائري.
          </p>
        </div>
        <div className="flex items-center gap-2">
          {steps.map((step) => (
            <span
              key={step.id}
              className={`h-2 w-8 rounded-full transition-colors ${
                step.id <= currentStep ? "bg-emerald-600" : "bg-stone-200"
              }`}
              aria-hidden="true"
            />
          ))}
          <span className="text-xs text-stone-500">
            {currentStep} / {steps.length}
          </span>
        </div>
      </div>

      <div className="mt-8">
        {currentStep === 1 && (
          <div className="space-y-6">
            <div>
              <label className="mb-2 block text-sm font-medium text-stone-700">
                اسم المتجر
              </label>
              <input
                className="w-full rounded-2xl border border-stone-200 bg-stone-50 px-4 py-3 text-sm outline-none transition focus:border-emerald-500 focus:bg-white"
                type="text"
                placeholder="مثال: سوق القصبة"
                value={data.storeName}
                onChange={(event) =>
                  setData((prev) => ({
                    ...prev,
                    storeName: event.target.value,
                  }))
                }
              />
            </div>
            <div>
              <label className="mb-2 block text-sm font-medium text-stone-700">
                المدينة الرئيسية
              </label>
              <input
                className="w-full rounded-2xl border border-stone-200 bg-stone-50 px-4 py-3 text-sm outline-none transition focus:border-emerald-500 focus:bg-white"
                type="text"
                placeholder="مثال: الجزائر العاصمة"
                value={data.city}
                onChange={(event) =>
                  setData((prev) => ({
                    ...prev,
                    city: event.target.value,
                  }))
                }
              />
            </div>
            <div>
              <label className="mb-2 block text-sm font-medium text-stone-700">
                المجال
              </label>
              <div className="grid gap-2 md:grid-cols-2">
                {industries.map((industry) => (
                  <button
                    type="button"
                    key={industry}
                    onClick={() =>
                      setData((prev) => ({ ...prev, industry }))
                    }
                    className={`rounded-2xl border px-4 py-3 text-sm transition ${
                      data.industry === industry
                        ? "border-transparent bg-emerald-600 text-white shadow-lg"
                        : "border-stone-200 bg-white text-stone-700 hover:border-emerald-200"
                    }`}
                  >
                    {industry}
                  </button>
                ))}
              </div>
            </div>
            <div>
              <label className="mb-2 block text-sm font-medium text-stone-700">
                الهدف الأساسي
              </label>
              <div className="flex flex-wrap gap-2">
                {businessGoals.map((goal) => (
                  <button
                    type="button"
                    key={goal}
                    onClick={() => setData((prev) => ({ ...prev, goal }))}
                    className={`rounded-full border px-4 py-2 text-xs transition ${
                      data.goal === goal
                        ? "border-transparent bg-emerald-500 text-white"
                        : "border-stone-200 bg-white text-stone-600 hover:border-emerald-200"
                    }`}
                  >
                    {goal}
                  </button>
                ))}
              </div>
            </div>
          </div>
        )}

        {currentStep === 2 && (
          <div className="space-y-6">
            <p className="text-sm text-stone-600">
              اختر هوية لونية تعكس طابع متجرك الجزائري. يمكن تغييرها لاحقًا من
              لوحة التحكم.
            </p>
            <div className="grid gap-4 md:grid-cols-2">
              {brandPalettes.map((palette) => (
                <button
                  key={palette.name}
                  type="button"
                  onClick={() =>
                    setData((prev) => ({ ...prev, palette: palette.name }))
                  }
                    className={`flex flex-col gap-3 rounded-3xl border p-4 transition ${
                    data.palette === palette.name
                      ? "border-transparent bg-emerald-600 text-white shadow-lg"
                      : "border-stone-200 bg-white text-stone-700 hover:border-emerald-200"
                  }`}
                >
                  <span className="text-sm font-semibold">{palette.name}</span>
                  <div className="flex gap-2">
                    {palette.colors.map((color) => (
                      <span
                        key={color}
                        className="h-10 w-10 rounded-full border border-white/40 shadow-inner"
                        style={{ backgroundColor: color }}
                      />
                    ))}
                  </div>
                </button>
              ))}
            </div>
          </div>
        )}

        {currentStep === 3 && (
          <div className="space-y-6">
            <p className="text-sm text-stone-600">
              خصّص أدوات المتجر حسب احتياجاتك. نوصي دائمًا بدمج الدفع الإلكتروني
              مع إدارة التوصيل لضمان تجربة كاملة.
            </p>
            <div className="grid gap-3 md:grid-cols-2">
              {digitalFeatures.map((feature) => {
                const isActive = data.features.includes(feature.id);
                return (
                  <button
                    key={feature.id}
                    type="button"
                    onClick={() => handleFeatureToggle(feature.id)}
                    className={`flex items-start gap-3 rounded-3xl border p-4 text-right transition ${
                      isActive
                        ? "border-transparent bg-emerald-50 text-emerald-700 shadow-inner"
                        : "border-stone-200 bg-white text-stone-700 hover:border-emerald-200"
                    }`}
                  >
                    <span
                      className={`mt-1 inline-flex h-5 w-5 items-center justify-center rounded-full border text-[10px] font-semibold transition ${
                        isActive
                          ? "border-emerald-600 bg-emerald-600 text-white"
                          : "border-stone-300"
                      }`}
                    >
                      {isActive ? "✓" : ""}
                    </span>
                    <span className="text-sm">{feature.label}</span>
                  </button>
                );
              })}
            </div>
          </div>
        )}

        {currentStep === 4 && (
          <div className="rounded-3xl border border-emerald-200 bg-emerald-50 p-6 text-emerald-800">
            <h4 className="text-lg font-semibold">
              خطة {recommendedPlan} هي الأنسب لك
            </h4>
            <p className="mt-2 text-sm">
              ستحصل على إعداد متجر عربي مع دعم فني محلي، تكاملات جاهزة مع خدمات
              التوصيل والدفعات الإلكترونية، بالإضافة إلى تدريبات شخصية لفريقك.
            </p>
            <ul className="mt-4 space-y-2 text-sm leading-6">
              {summaryPoints.map((point) => (
                <li key={point} className="flex items-start gap-2">
                  <span className="mt-1 text-base font-bold text-emerald-600">
                    •
                  </span>
                  <span>{point}</span>
                </li>
              ))}
            </ul>
            <div className="mt-6 rounded-2xl bg-white p-4 text-sm text-stone-600">
              <p>
                عند متابعة الاشتراك سنقوم بإرسال عرض تقني مفصل خلال{" "}
                <strong>48 ساعة عمل</strong> مع جدول زمني للتنفيذ وخيارات
                التمويل عبر البنوك الجزائرية.
              </p>
            </div>
          </div>
        )}
      </div>

      <div className="mt-8 flex flex-wrap items-center justify-between gap-4">
        <button
          type="button"
          onClick={previousStep}
          disabled={currentStep === 1}
          className="rounded-full border border-transparent bg-white px-6 py-3 text-sm font-semibold text-stone-500 transition hover:text-stone-700 disabled:cursor-not-allowed disabled:opacity-50"
        >
          السابق
        </button>
        {currentStep < steps.length ? (
          <button
            type="button"
            onClick={nextStep}
            disabled={!canMoveForward}
          className="rounded-full bg-emerald-600 px-8 py-3 text-sm font-semibold text-white shadow-lg transition hover:bg-emerald-700 disabled:cursor-not-allowed disabled:opacity-50"
          >
            متابعة
          </button>
        ) : (
          <button
            type="button"
            className="rounded-full bg-emerald-600 px-8 py-3 text-sm font-semibold text-white shadow-lg transition hover:bg-emerald-700"
          >
            اطلب جلسة إطلاق
          </button>
        )}
      </div>
    </section>
  );
}
