export default function AstromedicLanding() {
  return (
    <div dir="rtl" className="min-h-screen bg-gray-50 text-gray-900">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-white/90 backdrop-blur border-b">
        <div className="mx-auto max-w-7xl px-4 py-3 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="h-9 w-9 rounded-xl bg-gradient-to-tr from-sky-400 to-cyan-500" />
            <span className="font-bold text-xl">Astromedic</span>
          </div>
          <nav className="hidden md:flex items-center gap-6 text-sm">
            <a href="#services" className="hover:text-sky-600">خدمات</a>
            <a href="#packages" className="hover:text-sky-600">پکیج‌ها</a>
            <a href="#process" className="hover:text-sky-600">فرایند درمان</a>
            <a href="#testimonials" className="hover:text-sky-600">تجربه بیماران</a>
            <a href="#contact" className="hover:text-sky-600">تماس</a>
          </nav>
          <div className="flex items-center gap-2">
            <a href="#book" className="rounded-2xl px-4 py-2 bg-sky-600 text-white hover:bg-sky-700 transition">رزرو وقت</a>
            <a href="https://wa.me/989000000000" target="_blank" rel="noreferrer" className="rounded-2xl px-4 py-2 border border-sky-600 text-sky-700 hover:bg-sky-50 transition">واتس‌اپ</a>
          </div>
        </div>
      </header>

      {/* Hero */}
      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-4 py-16 grid md:grid-cols-2 gap-8 items-center">
          <div>
            <h1 className="text-3xl md:text-5xl font-extrabold leading-tight">پزشکی دقیق، تجربه انسانی</h1>
            <p className="mt-4 text-lg text-gray-600">از مشاوره تا درمان، کنار شما هستیم. قیمت‌های شفاف، تیم تاییدشده، پشتیبانی سریع.</p>
            <div className="mt-6 flex flex-wrap gap-3">
              <a href="#book" className="rounded-2xl px-5 py-3 bg-sky-600 text-white hover:bg-sky-700 transition">مشاوره رایگان</a>
              <a href="#services" className="rounded-2xl px-5 py-3 border border-gray-300 hover:bg-gray-100 transition">مشاهده خدمات</a>
            </div>
            <ul className="mt-6 grid grid-cols-2 gap-3 text-sm text-gray-700">
              <li className="flex items-center gap-2"><span className="h-2 w-2 rounded-full bg-emerald-500"/>پاسخ‌گویی کمتر از ۲۴ ساعت</li>
              <li className="flex items-center gap-2"><span className="h-2 w-2 rounded-full bg-emerald-500"/>قیمت شفاف و مرحله‌ای</li>
              <li className="flex items-center gap-2"><span className="h-2 w-2 rounded-full bg-emerald-500"/>پزشکان تاییدشده</li>
              <li className="flex items-center gap-2"><span className="h-2 w-2 rounded-full bg-emerald-500"/>پیگیری پس از درمان</li>
            </ul>
          </div>
          <div className="relative aspect-[4/3] rounded-3xl bg-gradient-to-tr from-gray-100 to-gray-200 border overflow-hidden">
            <div className="absolute inset-4 rounded-2xl border-2 border-dashed border-gray-300 flex items-center justify-center text-gray-400">Placeholder Image</div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section id="services" className="bg-gray-50">
        <div className="mx-auto max-w-7xl px-4 py-14">
          <div className="flex items-end justify-between mb-6">
            <h2 className="text-2xl md:text-3xl font-bold">خدمات</h2>
            <a href="#" className="text-sky-700 hover:underline">مشاهده همه</a>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { title: "عمل بینی", price: "از 1200$", desc: "متن نمونه—توضیح کوتاه خدمت." },
              { title: "لیفت صورت", price: "از 2500$", desc: "متن نمونه—مزایا، ریسک‌ها، کاندید مناسب." },
              { title: "کاشت مو", price: "از 900$", desc: "متن نمونه—روش‌ها و مراقبت‌های پس از عمل." },
              { title: "ارتوپدی", price: "از 1500$", desc: "متن نمونه—جراحی‌های مفصل/بازسازی." },
              { title: "IVF", price: "از 2000$", desc: "متن نمونه—مراحل، موفقیت، مراقبت‌ها." },
              { title: "جراحی قلب", price: "از 5000$", desc: "متن نمونه—مرکزهای همکار و تیم." },
            ].map((s, i) => (
              <a key={i} href="#" className="group block rounded-2xl bg-white border hover:shadow-sm transition overflow-hidden">
                <div className="h-40 bg-gray-100" />
                <div className="p-4">
                  <div className="flex items-center justify-between">
                    <h3 className="font-semibold text-lg">{s.title}</h3>
                    <span className="text-sm text-sky-700 font-medium">{s.price}</span>
                  </div>
                  <p className="mt-2 text-sm text-gray-600">{s.desc}</p>
                  <div className="mt-4 text-sm text-sky-700 opacity-0 group-hover:opacity-100 transition">جزئیات بیشتر →</div>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Packages */}
      <section id="packages" className="bg-white">
        <div className="mx-auto max-w-7xl px-4 py-14">
          <h2 className="text-2xl md:text-3xl font-bold mb-6">پکیج‌های درمانی</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              {name: "Basic", features: ["ویزیت + جراحی", "ترنسفر فرودگاهی"], price: "از 799$"},
              {name: "Standard", features: ["Basic +", "هتل ۳ ستاره", "مترجم"], price: "از 1199$"},
              {name: "VIP", features: ["Standard +", "هتل ۵ ستاره", "پرستار خصوصی"], price: "از 1999$"},
            ].map((p, i) => (
              <div key={i} className={`rounded-2xl border bg-gray-50 p-6 ${i===2 ? 'ring-2 ring-sky-500' : ''}`}>
                <div className="flex items-baseline justify-between">
                  <h3 className="text-xl font-bold">{p.name}</h3>
                  <span className="text-sky-700 font-semibold">{p.price}</span>
                </div>
                <ul className="mt-4 space-y-2 text-sm text-gray-700">
                  {p.features.map((f, j) => (
                    <li key={j} className="flex items-center gap-2"><span className="h-1.5 w-1.5 rounded-full bg-sky-500"/> {f}</li>
                  ))}
                </ul>
                <a href="#book" className="mt-5 inline-block rounded-xl px-4 py-2 bg-sky-600 text-white hover:bg-sky-700 transition">انتخاب پکیج</a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section id="process" className="bg-gray-50">
        <div className="mx-auto max-w-7xl px-4 py-14">
          <h2 className="text-2xl md:text-3xl font-bold mb-8">فرایند درمان با ما</h2>
          <ol className="grid md:grid-cols-4 gap-6">
            {[
              {t: "مشاوره آنلاین", d: "پر کردن فرم و گفت‌وگو"},
              {t: "طرح درمان و هزینه", d: "دریافت برنامه شخصی‌سازی‌شده"},
              {t: "رزرو و سفر", d: "هماهنگی ترنسفر و اقامت"},
              {t: "درمان و پیگیری", d: "مراقبت پس از ترخیص"},
            ].map((step, i) => (
              <li key={i} className="relative rounded-2xl bg-white border p-5">
                <div className="absolute -top-3 -left-3 h-8 w-8 rounded-full bg-sky-600 text-white flex items-center justify-center text-sm font-bold">{i+1}</div>
                <h3 className="font-semibold">{step.t}</h3>
                <p className="mt-2 text-sm text-gray-600">{step.d}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* Testimonials */}
      <section id="testimonials" className="bg-white">
        <div className="mx-auto max-w-7xl px-4 py-14">
          <h2 className="text-2xl md:text-3xl font-bold mb-6">تجربه بیماران</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {[1,2,3].map((i) => (
              <div key={i} className="rounded-2xl border bg-gray-50 p-5">
                <div className="h-36 rounded-xl bg-gray-200 mb-4 flex items-center justify-center text-gray-500">ویدیو/عکس</div>
                <p className="text-sm text-gray-700">«من از خدمات Astromedic استفاده کردم و همه‌چیز عالی بود.» — بیمار فرضی از آلمان</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact / CTA */}
      <section id="contact" className="bg-sky-50">
        <div className="mx-auto max-w-7xl px-4 py-14 grid md:grid-cols-2 gap-8 items-center">
          <div>
            <h2 className="text-2xl md:text-3xl font-bold">همین حالا مشاوره رایگان بگیرید</h2>
            <p className="mt-3 text-gray-700">برای دریافت طرح درمان و هزینه شفاف، فرم زیر را پر کنید یا در واتس‌اپ پیام دهید.</p>
            <div className="mt-5 flex gap-3">
              <a href="https://wa.me/989000000000" target="_blank" rel="noreferrer" className="rounded-xl px-4 py-2 bg-emerald-600 text-white hover:bg-emerald-700 transition">چت در واتس‌اپ</a>
              <a href="#" className="rounded-xl px-4 py-2 border border-emerald-600 text-emerald-700 hover:bg-emerald-50 transition">ایمیل به info@astromedic.com</a>
            </div>
          </div>
          <form className="rounded-2xl bg-white border p-6 grid gap-4">
            <div>
              <label className="block text-sm mb-1">نام و نام خانوادگی</label>
              <input className="w-full rounded-xl border px-3 py-2 outline-none focus:ring-2 focus:ring-sky-500" placeholder="مثال: محمد محمدی"/>
            </div>
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm mb-1">ایمیل</label>
                <input type="email" className="w-full rounded-xl border px-3 py-2 outline-none focus:ring-2 focus:ring-sky-500" placeholder="you@example.com"/>
              </div>
              <div>
                <label className="block text-sm mb-1">واتس‌اپ</label>
                <input className="w-full rounded-xl border px-3 py-2 outline-none focus:ring-2 focus:ring-sky-500" placeholder="+98912xxxxxxx"/>
              </div>
            </div>
            <div>
              <label className="block text-sm mb-1">نوع خدمت</label>
              <select className="w-full rounded-xl border px-3 py-2 outline-none focus:ring-2 focus:ring-sky-500">
                <option>عمل بینی</option>
                <option>کاشت مو</option>
                <option>IVF</option>
                <option>دیگر...</option>
              </select>
            </div>
            <div>
              <label className="block text-sm mb-1">توضیحات</label>
              <textarea className="w-full rounded-xl border px-3 py-2 outline-none focus:ring-2 focus:ring-sky-500" rows={4} placeholder="شرح کوتاهی از نیاز پزشکی شما"></textarea>
            </div>
            <button className="rounded-xl px-4 py-2 bg-sky-600 text-white hover:bg-sky-700 transition">ارسال درخواست</button>
            <p className="text-xs text-gray-500">با ارسال فرم، با سیاست حریم خصوصی موافقت می‌کنید.</p>
          </form>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t bg-white">
        <div className="mx-auto max-w-7xl px-4 py-8 grid md:grid-cols-3 gap-6 text-sm">
          <div>
            <div className="font-bold">Astromedic</div>
            <p className="mt-2 text-gray-600">تهران، خیابان مثال، پلاک ۱۰ — info@astromedic.com</p>
          </div>
          <div className="grid grid-cols-2 gap-3">
            <a href="#services" className="hover:text-sky-700">خدمات</a>
            <a href="#packages" className="hover:text-sky-700">پکیج‌ها</a>
            <a href="#process" className="hover:text-sky-700">فرایند درمان</a>
            <a href="#testimonials" className="hover:text-sky-700">تجربه بیماران</a>
          </div>
          <div className="text-gray-600">© {new Date().getFullYear()} Astromedic — همه حقوق محفوظ است.</div>
        </div>
      </footer>
    </div>
  );
}
