import { useState } from "react";

// ── DATA PLACEHOLDER (ganti dengan API call nanti) ──────────────────────────
const STATS = [
  { value: "50+", label: "Destinasi" },
  { value: "4.8", label: "Rating" },
  { value: "10K+", label: "Pengunjung" },
];

const CATEGORIES = [
  { icon: "🌿", name: "Wisata Alam", count: 12 },
  { icon: "🏛️", name: "Wisata Budaya", count: 8 },
  { icon: "🍜", name: "Kuliner", count: 19 },
  { icon: "🏙️", name: "Kota", count: 6 },
];

const DESTINATIONS = [
  {
    id: 1,
    name: "Patung Seribu",
    rating: 4.7,
    visitors: "1,174K",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3f/Patung_ikan_dan_burung_Tanjung_Pinang.jpg/320px-Patung_ikan_dan_burung_Tanjung_Pinang.jpg",
    tag: "Landmark",
  },
  {
    id: 2,
    name: "Masjid Raya Sultan Riau Penyengat",
    rating: 4.9,
    visitors: "46,500",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2e/Mesjid_Penyengat.JPG/320px-Mesjid_Penyengat.JPG",
    tag: "Religi",
  },
  {
    id: 3,
    name: "Gedung Gonggong",
    rating: 4.6,
    visitors: "30,200",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/87/Gonggong_building.jpg/320px-Gonggong_building.jpg",
    tag: "Landmark",
  },
  {
    id: 4,
    name: "Klenteng Ibadah Putri Gunung Kawi",
    rating: 4.5,
    visitors: "18,900",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/61/Vihara_Ksitigarbha_Bodhisattva%2C_Tanjung_Pinang%2C_Riau_Islands%2C_Indonesia.jpg/320px-Vihara_Ksitigarbha_Bodhisattva%2C_Tanjung_Pinang%2C_Riau_Islands%2C_Indonesia.jpg",
    tag: "Budaya",
  },
];

const NAV_LINKS = ["Home", "Destinasi", "Akomodasi", "Q"];

// ── COMPONENT PARTS ─────────────────────────────────────────────────────────

function StarIcon() {
  return (
    <svg width="12" height="12" viewBox="0 0 12 12" fill="currentColor">
      <path d="M6 1l1.4 2.8 3.1.4-2.2 2.2.5 3.1L6 8.1 3.2 9.5l.5-3.1L1.5 4.2l3.1-.4z" />
    </svg>
  );
}

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-md shadow-sm">
      <div className="max-w-6xl mx-auto px-4 h-16 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-full bg-sky-500 flex items-center justify-center">
            <svg width="16" height="16" viewBox="0 0 16 16" fill="white">
              <path d="M8 1C4.13 1 1 4.13 1 8s3.13 7 7 7 7-3.13 7-7-3.13-7-7-7zm0 2c1.66 0 3 1.34 3 3S9.66 9 8 9 5 7.66 5 6s1.34-3 3-3zm0 10c-1.74 0-3.41-.81-4.5-2.19C4.72 9.76 6.28 9 8 9s3.28.76 4.5 1.81C11.41 12.19 9.74 13 8 13z" />
            </svg>
          </div>
          <span className="font-bold text-sky-600 text-sm leading-tight">
            Tanjung Pinang<br />
            <span className="font-normal text-gray-500 text-xs">Guide</span>
          </span>
        </div>

        {/* Desktop Nav */}
        <ul className="hidden md:flex items-center gap-6 text-sm font-medium text-gray-600">
          {NAV_LINKS.map((link) => (
            <li key={link}>
              <a href="#" className="hover:text-sky-600 transition-colors">{link}</a>
            </li>
          ))}
        </ul>

        {/* CTA */}
        <div className="flex items-center gap-2">
          <button className="hidden md:block text-sm text-gray-600 hover:text-sky-600 px-3 py-1.5 transition-colors">
            Masuk
          </button>
          <button className="bg-sky-500 hover:bg-sky-600 text-white text-sm font-semibold px-4 py-2 rounded-full transition-colors">
            Daftar
          </button>
          {/* Mobile menu toggle */}
          <button
            className="md:hidden p-2 rounded-lg text-gray-600 hover:bg-gray-100"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              {menuOpen
                ? <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                : <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-white border-t border-gray-100 px-4 py-3 flex flex-col gap-3">
          {NAV_LINKS.map((link) => (
            <a key={link} href="#" className="text-sm text-gray-700 hover:text-sky-600 py-1">{link}</a>
          ))}
        </div>
      )}
    </nav>
  );
}

function Hero() {
  return (
    <section className="relative min-h-[90vh] flex items-center overflow-hidden pt-16">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-sky-600 via-sky-500 to-blue-700" />
      <div
        className="absolute inset-0 opacity-20 bg-cover bg-center mix-blend-overlay"
        style={{
          backgroundImage:
            "url('https://upload.wikimedia.org/wikipedia/commons/thumb/8/8e/Tanjungpinang_waterfront.jpg/1280px-Tanjungpinang_waterfront.jpg')",
        }}
      />
      {/* Wave bottom */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 80" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M0 40C360 80 1080 0 1440 40V80H0V40Z" fill="white" />
        </svg>
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-4 w-full py-16">
        <div className="flex flex-col lg:flex-row items-center gap-10">
          {/* Text */}
          <div className="flex-1 text-white">
            <span className="inline-block bg-white/20 backdrop-blur-sm text-white text-xs font-semibold px-3 py-1 rounded-full mb-4 border border-white/30">
              📍 Kepulauan Riau, Indonesia
            </span>
            <h1 className="text-4xl md:text-5xl font-extrabold leading-tight mb-4">
              Jelajahi Keindahan<br />
              <span className="text-yellow-300">Tanjung Pinang</span>
            </h1>
            <p className="text-white/80 text-base md:text-lg mb-8 max-w-md leading-relaxed">
              Temukan destinasi wisata, kuliner enak, dan budaya yang kaya di kota tertua di Provinsi Kepulauan Riau.
            </p>
            <div className="flex flex-wrap gap-3">
              <button className="bg-white text-sky-600 font-bold px-6 py-3 rounded-full shadow hover:shadow-md hover:scale-105 transition-all">
                Jelajahi Sekarang →
              </button>
              <button className="border border-white/60 text-white font-semibold px-6 py-3 rounded-full hover:bg-white/10 transition-all">
                Lihat Semua
              </button>
            </div>
          </div>

          {/* Stats Card */}
          <div className="flex gap-4 lg:flex-col lg:gap-3">
            {STATS.map((s) => (
              <div
                key={s.label}
                className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl px-5 py-4 text-white text-center min-w-[90px]"
              >
                <p className="text-2xl font-extrabold">{s.value}</p>
                <p className="text-xs text-white/70 mt-0.5">{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function CategoryCard({ icon, name, count }) {
  return (
    <div className="group flex flex-col items-center gap-2 p-5 bg-white rounded-2xl border border-gray-100 hover:border-sky-200 hover:shadow-md hover:-translate-y-1 transition-all cursor-pointer">
      <div className="w-12 h-12 rounded-xl bg-sky-50 group-hover:bg-sky-100 flex items-center justify-center text-2xl transition-colors">
        {icon}
      </div>
      <p className="font-semibold text-sm text-gray-800">{name}</p>
      <p className="text-xs text-gray-400">{count} tempat</p>
    </div>
  );
}

function Categories() {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex items-center justify-between mb-8">
          <div>
            <p className="text-sky-500 text-xs font-bold uppercase tracking-widest mb-1">Kategori Wisata</p>
            <h2 className="text-2xl md:text-3xl font-extrabold text-gray-900">Temukan Sesuai Minat</h2>
          </div>
          <a href="#" className="text-sky-500 text-sm font-semibold hover:underline">
            Lihat Semua →
          </a>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {CATEGORIES.map((cat) => (
            <CategoryCard key={cat.name} {...cat} />
          ))}
        </div>
      </div>
    </section>
  );
}

function DestinationCard({ name, rating, visitors, image, tag }) {
  return (
    <div className="group relative rounded-2xl overflow-hidden shadow hover:shadow-lg transition-all cursor-pointer">
      <img
        src={image}
        alt={name}
        className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-500"
        onError={(e) => {
          e.target.src = `https://placehold.co/400x250/e0f2fe/0284c7?text=${encodeURIComponent(name.substring(0,15))}`;
        }}
      />
      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />
      {/* Tag */}
      <span className="absolute top-3 left-3 bg-sky-500 text-white text-xs font-semibold px-2.5 py-1 rounded-full">
        {tag}
      </span>
      {/* Info */}
      <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
        <p className="font-bold text-sm leading-snug mb-1">{name}</p>
        <div className="flex items-center justify-between text-xs text-white/80">
          <span className="flex items-center gap-1 text-yellow-300">
            <StarIcon /> {rating}
          </span>
          <span>👁 {visitors} views</span>
        </div>
      </div>
    </div>
  );
}

function Destinations() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex items-center justify-between mb-8">
          <div>
            <p className="text-sky-500 text-xs font-bold uppercase tracking-widest mb-1">Destinasi Pilihan</p>
            <h2 className="text-2xl md:text-3xl font-extrabold text-gray-900">Destinasi Unggulan</h2>
          </div>
          <a href="#" className="text-sky-500 text-sm font-semibold hover:underline">
            Lihat Semua →
          </a>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {DESTINATIONS.map((dest) => (
            <DestinationCard key={dest.id} {...dest} />
          ))}
        </div>
      </div>
    </section>
  );
}

function CTA() {
  return (
    <section className="py-20 bg-gradient-to-br from-sky-600 to-blue-700 relative overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 right-0 w-64 h-64 rounded-full bg-white translate-x-1/3 -translate-y-1/3" />
        <div className="absolute bottom-0 left-0 w-48 h-48 rounded-full bg-white -translate-x-1/3 translate-y-1/3" />
      </div>
      <div className="relative max-w-3xl mx-auto px-4 text-center text-white">
        <h2 className="text-3xl md:text-4xl font-extrabold mb-4 leading-tight">
          Siap Menjelajahi<br />Tanjung Pinang?
        </h2>
        <p className="text-white/70 mb-8 text-base md:text-lg">
          Temukan destinasi terbaik sesuai budget, waktu, dan selera kamu. Perjalanan menyenangkan dimulai dari sini.
        </p>
        <button className="bg-white text-sky-600 font-bold px-8 py-3.5 rounded-full shadow-lg hover:shadow-xl hover:scale-105 transition-all">
          Mulai Jelajah →
        </button>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="bg-sky-700 text-white/80 py-12">
      <div className="max-w-6xl mx-auto px-4 grid grid-cols-2 md:grid-cols-4 gap-8 text-sm">
        <div>
          <p className="font-bold text-white text-base mb-2">Tanjung Pinang Guide</p>
          <p className="text-xs leading-relaxed text-white/60">
            Platform wisata lokal terpercaya untuk menjelajahi keindahan Tanjung Pinang.
          </p>
        </div>
        {[
          { title: "Navigasi", links: ["Home", "Destinasi", "Akomodasi", "Kontak"] },
          { title: "Kategori Wisata", links: ["Wisata Alam", "Wisata Budaya", "Kuliner", "Belanja"] },
          { title: "Kontak", links: ["+62 771 123 456", "info@tpguide.id", "Tanjung Pinang, Riau"] },
        ].map((col) => (
          <div key={col.title}>
            <p className="font-semibold text-white mb-3">{col.title}</p>
            <ul className="space-y-1.5">
              {col.links.map((l) => (
                <li key={l}><a href="#" className="hover:text-white transition-colors text-xs">{l}</a></li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <div className="max-w-6xl mx-auto px-4 mt-10 pt-6 border-t border-white/10 text-xs text-white/40 flex flex-col md:flex-row items-center justify-between gap-2">
        <p>© 2025 Tanjung Pinang Guide. All rights reserved.</p>
        <p>Made with ❤️ in Tanjung Pinang</p>
      </div>
    </footer>
  );
}

// ── PAGE ─────────────────────────────────────────────────────────────────────

export default function TanjungPinangHome() {
  return (
    <div className="font-sans antialiased">
      <Navbar />
      <Hero />
      <Categories />
      <Destinations />
      <CTA />
      <Footer />
    </div>
  );
}
