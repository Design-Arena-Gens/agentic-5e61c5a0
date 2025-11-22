import Link from "next/link";
import PricingPlans from "@/components/pricing-plans";
import StoreWizard from "@/components/store-wizard";

const featureHighlights = [
  {
    title: "منصة عربية 100%",
    description:
      "كل الشاشات والرسائل والتقارير باللغة العربية مع دعم للهجات الجزائرية لضمان تجربة سلسة لفريقك وزبائنك.",
  },
  {
    title: "تكاملات محلية جاهزة",
    description:
      "ربط فوري مع بوابات الدفع الجزائرية، وشركات التوصيل مثل Yalidine وZrExpress وإدارة كشوفات الضرائب.",
  },
  {
    title: "دعم ونمو مستمر",
    description:
      "فريق نجاح محلي يساعدك على التسويق الرقمي، إدارة الحملات، وتحليل الأداء التجاري ببيانات دقيقة.",
  },
];

const ecosystemStats = [
  { value: "2,500+", label: "متجر جزائري تم بناؤه معنا" },
  { value: "48h", label: "متوسط مدة إطلاق المتجر الأولي" },
  { value: "92%", label: "نسبة رضا العملاء عن الدعم الفني" },
  { value: "27%", label: "نسبة نمو المبيعات بعد 3 أشهر" },
];

const roadmap = [
  {
    title: "جلسة اكتشاف",
    description:
      "نفهم نشاطك التجاري، نوع المنتجات، طرق الدفع والتوصيل التي تحتاجها، ونحدد أهداف النمو للثلاثة أشهر القادمة.",
  },
  {
    title: "تصميم وبناء",
    description:
      "نصمّم واجهة متجرك بالعربية مع تجربة شراء سلسة، ربط مع البنوك وشركات التوصيل، وإنشاء صفحات قانونية جزائرية.",
  },
  {
    title: "إطلاق وتدريب",
    description:
      "نختبر المتجر معك، نفعّل التنبيهات، ونقوم بتدريب فريقك على إدارة الطلبات، المخزون، والتحليلات.",
  },
  {
    title: "نمو مستدام",
    description:
      "نتابع الأداء شهريًا، نطلق حملات تسويق مؤتمتة، ونربط متجرك بقنوات البيع مثل واد كنيس وإنستغرام.",
  },
];

const faqs = [
  {
    question: "هل يمكن ربط المنصة مع طرق الدفع الجزائرية؟",
    answer:
      "نعم، ندعم كافة بوابات الدفع المحلية بما في ذلك CIB، EDAHABIA، و BaridiMob، مع إمكانية الدفع عند الاستلام وإدارة التحصيل بشكل متكامل.",
  },
  {
    question: "كم يستغرق إطلاق المتجر؟",
    answer:
      "بعد تأكيد تفاصيل الهوية والمنتجات، نستغرق عادة من 5 إلى 10 أيام عمل لإطلاق متجر متكامل مع التكاملات الضرورية.",
  },
  {
    question: "هل أحتاج إلى فريق تقني؟",
    answer:
      "لا تحتاج إلى فريق تقني. نحن نتكفل بالبنية التحتية والتحديثات، وتستلم لوحة تحكم سهلة مع تدريب كامل لفريق المبيعات والدعم.",
  },
  {
    question: "كيف تتم عملية الدعم والصيانة؟",
    answer:
      "نوفر قنوات دعم عبر الهاتف، واتساب، ومنصة التذاكر. كما تحصل على تقرير فني شهري وضبط للحماية والسرعة بدون أي تكاليف إضافية.",
  },
];

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white via-white to-stone-100 text-stone-900">
      <div className="relative isolate overflow-hidden">
        <div className="absolute right-10 top-10 h-72 w-72 rounded-full bg-emerald-100 blur-3xl" />
        <header className="mx-auto flex max-w-6xl items-center justify-between px-6 py-8">
          <Link
            href="#"
            className="text-2xl font-black text-emerald-700 md:text-3xl"
          >
            متاجر الجزائر
          </Link>
          <nav className="hidden items-center gap-8 text-sm font-medium text-stone-600 md:flex">
            <Link href="#features" className="transition hover:text-emerald-600">
              المزايا
            </Link>
            <Link href="#roadmap" className="transition hover:text-emerald-600">
              منهجية العمل
            </Link>
            <Link href="#wizard" className="transition hover:text-emerald-600">
              صمم متجرك
            </Link>
            <Link href="#pricing" className="transition hover:text-emerald-600">
              الخطط
            </Link>
            <Link href="#faq" className="transition hover:text-emerald-600">
              الأسئلة
            </Link>
          </nav>
          <div className="flex items-center gap-3">
            <button
              type="button"
              className="hidden rounded-full border border-emerald-200 px-5 py-2 text-sm font-semibold text-emerald-700 transition hover:border-emerald-400 md:inline-flex"
            >
              تجربة مباشرة
            </button>
            <button
              type="button"
              className="rounded-full bg-emerald-600 px-5 py-2 text-sm font-semibold text-white shadow-lg transition hover:bg-emerald-700"
            >
              حجز استشارة
            </button>
          </div>
        </header>

        <main className="mx-auto max-w-6xl px-6 pb-24">
          <section className="grid gap-10 rounded-3xl border border-white/60 bg-white/90 p-10 shadow-xl backdrop-blur">
            <div className="grid gap-8 md:grid-cols-[3fr_2fr] md:items-center">
              <div>
                <span className="inline-flex items-center gap-2 rounded-full bg-emerald-100 px-4 py-1 text-xs font-semibold text-emerald-700">
                  منصة جزائرية لإنشاء المتاجر الرقمية
                </span>
                <h1 className="mt-6 text-4xl font-black leading-snug text-stone-900 md:text-5xl">
                  أطلق متجرك الإلكتروني بالعربية مع خطط اشتراك متطورة تدعم نموك في
                  الجزائر.
                </h1>
                <p className="mt-4 text-sm text-stone-600 md:text-base">
                  نوفر لك كل ما تحتاجه من تصميم، إدماج وسائل الدفع المحلية،
                  تشبيك مع شركات التوصيل، وأدوات تسويق مهيأة للسوق الجزائري.
                  كل ذلك مع دعم تقني واستراتيجي متواصل.
                </p>
                <div className="mt-6 flex flex-wrap items-center gap-4 text-sm">
                  <button
                    type="button"
                  className="rounded-full bg-emerald-600 px-6 py-3 font-semibold text-white shadow-lg transition hover:bg-emerald-700"
                  >
                    ابدأ في بناء متجرك الآن
                  </button>
                  <button
                    type="button"
                    className="rounded-full border border-stone-200 bg-white px-6 py-3 font-semibold text-stone-700 transition hover:border-emerald-200"
                  >
                    شاهد قصص نجاح
                  </button>
                </div>
                <div className="mt-8 grid gap-4 text-xs text-stone-600 md:grid-cols-3 md:text-sm">
                  <div className="rounded-3xl bg-stone-50 p-4">
                    <span className="text-lg font-bold text-emerald-600">
                      100% عربية
                    </span>
                    <p className="mt-2">
                      لغة واجهات، فواتير، إشعارات، ودعم فني محلي طوال الأسبوع.
                    </p>
                  </div>
                  <div className="rounded-3xl bg-stone-50 p-4">
                    <span className="text-lg font-bold text-emerald-600">
                      تكاملات جاهزة
                    </span>
                    <p className="mt-2">
                      ربط مع Epay، Edahabia، CIB، البريد الجزائري وشركات التوصيل.
                    </p>
                  </div>
                  <div className="rounded-3xl bg-stone-50 p-4">
                    <span className="text-lg font-bold text-emerald-600">
                      خطة نمو مخصصة
                    </span>
                    <p className="mt-2">
                      تحليل بيانات أسبوعي وتوصيات تسويق مهيأة لقطاعك.
                    </p>
                  </div>
                </div>
              </div>
              <div className="relative overflow-hidden rounded-3xl border border-emerald-200 bg-gradient-to-b from-emerald-50 via-white to-emerald-50 p-8 shadow-xl">
                <div className="absolute -top-10 left-0 right-0 h-32 bg-gradient-to-b from-emerald-200/30 via-transparent to-transparent blur-3xl" />
                <h3 className="text-lg font-semibold text-emerald-800">
                  لوحة نمو المتاجر
                </h3>
                <p className="mt-2 text-sm text-emerald-700">
                  مراقبة فورية لمؤشرات الطلب والدفع مع توصيات ذكية.
                </p>
                <div className="mt-6 space-y-4 text-sm">
                  <div className="rounded-3xl bg-white p-4 shadow-inner">
                    <div className="flex items-center justify-between">
                      <span className="font-semibold text-stone-700">
                        متوسط قيمة الطلب
                      </span>
                      <span className="text-emerald-600">+27%</span>
                    </div>
                    <div className="mt-3 h-2 rounded-full bg-emerald-100">
                      <div className="h-2 w-4/5 rounded-full bg-emerald-500" />
                    </div>
                  </div>
                  <div className="rounded-3xl bg-white p-4 shadow-inner">
                    <div className="flex items-center justify-between">
                      <span className="font-semibold text-stone-700">
                        الطلبات المدفوعة رقمياً
                      </span>
                      <span className="text-emerald-600">68%</span>
                    </div>
                    <div className="mt-3 h-2 rounded-full bg-emerald-100">
                      <div className="h-2 w-3/5 rounded-full bg-emerald-400" />
                    </div>
                  </div>
                  <div className="rounded-3xl bg-white p-4 shadow-inner">
                    <div className="flex items-center justify-between">
                      <span className="font-semibold text-stone-700">
                        وقت المعالجة
                      </span>
                      <span className="text-emerald-600">سريع</span>
                    </div>
                    <div className="mt-3 grid grid-cols-3 gap-2 text-center text-xs">
                      <span className="rounded-full bg-emerald-500 px-3 py-2 text-white">
                        دفع
                      </span>
                      <span className="rounded-full bg-emerald-100 px-3 py-2 text-emerald-700">
                        شحن
                      </span>
                      <span className="rounded-full bg-emerald-50 px-3 py-2 text-emerald-700">
                        تسليم
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section
            id="features"
            className="mt-20 grid gap-6 md:grid-cols-2 lg:grid-cols-3"
          >
            {featureHighlights.map((feature) => (
              <div
                key={feature.title}
                className="rounded-3xl border border-stone-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-xl"
              >
                <h3 className="text-xl font-bold text-stone-900">
                  {feature.title}
                </h3>
                <p className="mt-3 text-sm text-stone-600">
                  {feature.description}
                </p>
              </div>
            ))}
          </section>

          <section className="mt-16 grid gap-6 rounded-3xl bg-white p-8 shadow-inner md:grid-cols-4">
            {ecosystemStats.map((stat) => (
              <div
                key={stat.value}
                className="flex flex-col items-center justify-center rounded-3xl bg-emerald-50/60 p-6 text-center"
              >
                <span className="text-3xl font-black text-emerald-600">
                  {stat.value}
                </span>
                <span className="mt-2 text-sm text-stone-600">
                  {stat.label}
                </span>
              </div>
            ))}
          </section>

          <section
            id="roadmap"
            className="mt-20 rounded-3xl border border-stone-200 bg-white p-10 shadow-lg"
          >
            <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
              <div>
                <h2 className="text-3xl font-bold text-stone-900">
                  منهجية إطلاق مجربة ومتكاملة
                </h2>
                <p className="mt-2 text-sm text-stone-600 md:text-base">
                  نتبع خطوات واضحة لتأمين إطلاق ناجح لمتجرك، مع مسار نمو مستمر
                  ونتائج قابلة للقياس.
                </p>
              </div>
              <button
                type="button"
                className="rounded-full border border-emerald-200 px-6 py-3 text-sm font-semibold text-emerald-700 transition hover:border-emerald-400"
              >
                اكتشف خطة التنفيذ بالتفصيل
              </button>
            </div>
            <div className="mt-10 grid gap-6 md:grid-cols-2">
              {roadmap.map((step, index) => (
                <div
                  key={step.title}
                  className="rounded-3xl border border-stone-200 p-6"
                >
                  <span className="text-xs font-semibold text-emerald-500">
                    المرحلة {index + 1}
                  </span>
                  <h3 className="mt-3 text-xl font-bold text-stone-900">
                    {step.title}
                  </h3>
                  <p className="mt-2 text-sm text-stone-600">
                    {step.description}
                  </p>
                </div>
              ))}
            </div>
          </section>

          <section id="wizard" className="mt-20">
            <StoreWizard />
          </section>

          <section id="pricing" className="mt-20">
            <PricingPlans />
          </section>

          <section
            id="faq"
            className="mt-20 rounded-3xl border border-stone-200 bg-white p-10 shadow-lg"
          >
            <h2 className="text-3xl font-bold text-stone-900">
              أسئلة نسمعها كثيرًا
            </h2>
            <div className="mt-8 grid gap-6 md:grid-cols-2">
              {faqs.map((faq) => (
                <div
                  key={faq.question}
                  className="rounded-3xl bg-stone-50 p-6 text-sm text-stone-700"
                >
                  <h3 className="text-lg font-semibold text-stone-900">
                    {faq.question}
                  </h3>
                  <p className="mt-3 leading-7 text-stone-600">{faq.answer}</p>
                </div>
              ))}
            </div>
          </section>

          <section className="mt-20 rounded-3xl bg-gradient-to-l from-emerald-600 to-emerald-500 p-10 text-white">
            <div className="grid gap-6 md:grid-cols-[3fr_2fr] md:items-center">
              <div>
                <h2 className="text-3xl font-bold md:text-4xl">
                  جاهز لتسريع تجارتك الإلكترونية في الجزائر؟
                </h2>
                <p className="mt-4 text-sm text-emerald-50 md:text-base">
                  احجز جلسة مجانية مع أحد خبرائنا لتقييم وضعك الحالي، دراسة
                  منتجاتك، وتحديد خطة انتقلت إلى السوق خلال أقل من أسبوعين.
                </p>
                <div className="mt-6 flex flex-wrap items-center gap-4">
                  <button
                    type="button"
                    className="rounded-full bg-white px-6 py-3 text-sm font-semibold text-emerald-700 transition hover:bg-emerald-50"
                  >
                    حجز جلسة مجانية
                  </button>
                  <button
                    type="button"
                    className="rounded-full border border-white/40 px-6 py-3 text-sm font-semibold text-white/80 transition hover:border-white hover:text-white"
                  >
                    تواصل معنا عبر واتساب
                  </button>
                </div>
              </div>
              <div className="rounded-3xl bg-white/10 p-6 text-sm backdrop-blur">
                <h3 className="text-lg font-semibold">ماذا بعد الحجز؟</h3>
                <ul className="mt-4 space-y-3 leading-7 text-emerald-50">
                  <li>نرسل لك استبيانًا بسيطًا حول منتجاتك وعملائك.</li>
                  <li>نحدد موعد جلسة عبر الإنترنت أو حضورياً في الجزائر العاصمة.</li>
                  <li>تحصل على توصية مكتوبة بخطة العمل خلال 48 ساعة.</li>
                </ul>
              </div>
            </div>
          </section>
        </main>
      </div>

      <footer className="mt-16 border-t border-stone-200 bg-white/70">
        <div className="mx-auto flex max-w-6xl flex-col gap-6 px-6 py-8 text-sm text-stone-600 md:flex-row md:items-center md:justify-between">
          <div>
            <span className="text-lg font-semibold text-emerald-700">
              متاجر الجزائر
            </span>
            <p className="mt-2">
              حلول رقمية متكاملة لتطوير التجارة الإلكترونية باللغة العربية في
              الجزائر.
            </p>
          </div>
          <div className="flex flex-wrap gap-6">
            <Link href="#" className="transition hover:text-emerald-600">
              شروط الاستخدام
            </Link>
            <Link href="#" className="transition hover:text-emerald-600">
              سياسة الخصوصية
            </Link>
            <Link href="#" className="transition hover:text-emerald-600">
              الدعم الفني
            </Link>
          </div>
          <p className="text-xs text-stone-400">
            © {new Date().getFullYear()} متاجر الجزائر - جميع الحقوق محفوظة.
          </p>
        </div>
      </footer>
    </div>
  );
}
