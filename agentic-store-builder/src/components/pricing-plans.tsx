const plans = [
  {
    name: "إطلاق سريع",
    price: "9,900 دج / شهر",
    badge: "الأكثر طلبًا للمتاجر الناشئة",
    features: [
      "موقع عربي جاهز مع دعم للهاتف",
      "ربط مع وسائل الدفع عند الاستلام",
      "قوالب تصميم جزائرية",
      "دعم فني عبر واتساب",
    ],
    cta: "ابدأ الآن",
    highlighted: false,
  },
  {
    name: "نمو متقدم",
    price: "19,500 دج / شهر",
    badge: "مثالي للمتاجر النامية",
    features: [
      "تكامل مع CIB و EDAHABIA",
      "إدارة طلبات وشركات توصيل محلية",
      "تقارير مالية متقدمة",
      "نظام ولاء وبرنامج تسويق",
    ],
    cta: "احجز تجربة مجانية",
    highlighted: true,
  },
  {
    name: "مؤسسة برو",
    price: "39,000 دج / شهر",
    badge: "حلول متقدمة للشركات",
    features: [
      "ربط مع ERP و CRM داخلي",
      "متاجر فرعية متعددة",
      "دعم حسابات B2B واتفاقيات خاصة",
      "مدير نجاح مخصص وتدريب على الفريق",
    ],
    cta: "تواصل مع المستشار",
    highlighted: false,
  },
];

export default function PricingPlans() {
  return (
    <section className="space-y-8">
      <div className="text-center md:text-right">
        <span className="inline-block rounded-full bg-emerald-100 px-4 py-1 text-xs font-semibold text-emerald-700">
          خطط مرنة تدعم نموك
        </span>
        <h2 className="mt-4 text-3xl font-bold text-stone-900 md:text-4xl">
          أسعار واضحة تناسب السوق الجزائري
        </h2>
        <p className="mt-3 text-sm text-stone-600 md:text-base">
          ادفع بالعملة المحلية واستفد من عروض تمويل حصرية مع بنوك الشراكة. جميع
          الخطط تشمل فريق دعم عربي على مدار الساعة.
        </p>
      </div>
      <div className="grid gap-6 md:grid-cols-3">
        {plans.map((plan) => (
          <div
            key={plan.name}
            className={`flex h-full flex-col rounded-3xl border bg-white p-6 shadow-lg transition ${
              plan.highlighted
                ? "border-emerald-500 ring-4 ring-emerald-100"
                : "border-stone-200"
            }`}
          >
            <div>
              <div className="text-sm font-semibold text-emerald-600">
                {plan.badge}
              </div>
              <h3 className="mt-4 text-2xl font-bold text-stone-900">
                {plan.name}
              </h3>
              <p className="mt-2 text-lg font-semibold text-emerald-700">
                {plan.price}
              </p>
            </div>
            <ul className="mt-6 space-y-3 text-sm text-stone-700">
              {plan.features.map((feature) => (
                <li key={feature} className="flex items-start gap-2">
                  <span className="mt-1 text-emerald-500">✓</span>
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
            <div className="mt-8">
              <button
                type="button"
                className={`w-full rounded-full px-6 py-3 text-sm font-semibold transition ${
                  plan.highlighted
                    ? "bg-emerald-600 text-white shadow-lg hover:bg-emerald-700"
                    : "border border-emerald-200 bg-white text-emerald-600 hover:border-emerald-400"
                }`}
              >
                {plan.cta}
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
