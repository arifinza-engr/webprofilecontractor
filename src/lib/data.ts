import type {
  Service,
  PortfolioItem,
  Testimonial,
  TeamMember,
  Partner,
  InstagramReel,
  Stat,
  FAQ,
} from "@/types";

// ─── Company Info ─────────────────────────────────────────────────────────────
export const COMPANY = {
  name: "GABEL Gemilang",
  tagline: "Membangun Ruang, Mewujudkan Impian.",
  description:
    "Kontraktor profesional berpengalaman lebih dari 10 tahun di bidang konstruksi, desain interior, dan jasa drafter. Kami menghadirkan solusi bangunan berkualitas tinggi dengan ketepatan waktu dan anggaran.",
  address: "Jl. Raya Soreang No. 88, Bandung, Jawa Barat 40911",
  phone: "+62 812-3456-7890",
  email: "hello@gabelgemilang.id",
  whatsapp: "6281234567890",
  whatsappMsg: "Halo GABEL Gemilang, saya ingin konsultasi proyek.",
  instagram: "https://www.instagram.com/gabelindones1a/",
  founded: 2013,
};

// ─── Navigation ───────────────────────────────────────────────────────────────
export const NAV_ITEMS = [
  { label: "Tentang", href: "#about" },
  { label: "Layanan", href: "#services" },
  { label: "Portofolio", href: "#portfolio" },
  { label: "Reels", href: "#reels" },
  { label: "Mitra", href: "#partners" },
  { label: "Tim", href: "#team" },
  { label: "Kontak", href: "#contact" },
];

// ─── Stats ────────────────────────────────────────────────────────────────────
export const STATS: Stat[] = [
  { value: "10", label: "Tahun Pengalaman", suffix: "+" },
  { value: "150", label: "Proyek Selesai", suffix: "+" },
  { value: "98", label: "Klien Puas", suffix: "%" },
  { value: "25", label: "Tim Profesional", suffix: "+" },
];

// ─── Services ─────────────────────────────────────────────────────────────────
export const SERVICES: Service[] = [
  {
    id: "konstruksi",
    title: "Konstruksi",
    description:
      "Pembangunan struktur dari pondasi hingga finishing dengan standar kualitas tinggi, ketepatan jadwal, dan efisiensi anggaran.",
    icon: "building",
    image:
      "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=800&q=80",
    features: [
      "Konstruksi Rumah Tinggal",
      "Gedung Komersial & Perkantoran",
      "Renovasi & Restorasi",
      "Manajemen Proyek End-to-End",
      "Pengawasan Lapangan",
    ],
  },
  {
    id: "interior",
    title: "Desain Interior",
    description:
      "Transformasi ruang menjadi lingkungan yang fungsional, estetis, dan mencerminkan kepribadian penghuni.",
    icon: "sofa",
    image:
      "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?w=800&q=80",
    features: [
      "Konsep & Perencanaan Ruang",
      "Pemilihan Material & Furnitur",
      "Custom Furniture & Joinery",
      "Pencahayaan & Mekanikal",
      "Eksekusi & Instalasi",
    ],
  },
  {
    id: "drafter",
    title: "Drafter & RAB",
    description:
      "Penyusunan gambar kerja, denah, tampak, potongan, dan Rencana Anggaran Biaya (RAB) yang akurat dan terperinci.",
    icon: "pencil-ruler",
    image:
      "https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=800&q=80",
    features: [
      "Gambar Kerja 2D (AutoCAD)",
      "Visualisasi 3D Rendering",
      "RAB Detail & Spesifikasi",
      "Gambar As-Built",
      "Revisi Tak Terbatas",
    ],
  },
];

// ─── Portfolio ────────────────────────────────────────────────────────────────
export const PORTFOLIO_ITEMS: PortfolioItem[] = [
  {
    id: "p1",
    title: "Rumah Modern Minimalis",
    location: "Bandung",
    category: "konstruksi",
    year: 2024,
    image:
      "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=700&q=80",
    area: "220 m²",
  },
  {
    id: "p2",
    title: "Kantor Startup 3 Lantai",
    location: "Jakarta",
    category: "konstruksi",
    year: 2023,
    image:
      "https://images.unsplash.com/photo-1497366216548-37526070297c?w=700&q=80",
    area: "540 m²",
  },
  {
    id: "p3",
    title: "Interior Apartemen Mewah",
    location: "Surabaya",
    category: "interior",
    year: 2024,
    image:
      "https://images.unsplash.com/photo-1615529182904-14819c35db37?w=700&q=80",
    area: "95 m²",
  },
  {
    id: "p4",
    title: "Restoran Fine Dining",
    location: "Bandung",
    category: "interior",
    year: 2024,
    image:
      "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=700&q=80",
    area: "180 m²",
  },
  {
    id: "p5",
    title: "Villa Tepi Danau",
    location: "Lembang",
    category: "konstruksi",
    year: 2023,
    image:
      "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=700&q=80",
    area: "310 m²",
  },
  {
    id: "p6",
    title: "Gambar Kerja Rumah 2 Lantai",
    location: "Cimahi",
    category: "drafter",
    year: 2024,
    image:
      "https://images.unsplash.com/photo-1574359411659-15573a27fd0c?w=700&q=80",
  },
  {
    id: "p7",
    title: "Showroom Otomotif",
    location: "Bekasi",
    category: "interior",
    year: 2023,
    image:
      "https://images.unsplash.com/photo-1486325212027-8081e485255e?w=700&q=80",
    area: "400 m²",
  },
  {
    id: "p8",
    title: "Renovasi Ruko 4 Unit",
    location: "Soreang",
    category: "konstruksi",
    year: 2022,
    image:
      "https://images.unsplash.com/photo-1486591038519-44fc01e22b4f?w=700&q=80",
    area: "480 m²",
  },
  {
    id: "p9",
    title: "RAB Kompleks Perumahan",
    location: "Padalarang",
    category: "drafter",
    year: 2023,
    image:
      "https://images.unsplash.com/photo-1460472178825-e5240623afd5?w=700&q=80",
  },
];

// ─── Testimonials ─────────────────────────────────────────────────────────────
export const TESTIMONIALS: Testimonial[] = [
  {
    id: "t1",
    name: "Budi Santoso",
    role: "Pemilik Rumah",
    content:
      "GABEL Gemilang benar-benar profesional. Rumah saya selesai sesuai jadwal dan hasilnya melebihi ekspektasi. Komunikasi mereka sangat baik dari awal hingga akhir proyek.",
    rating: 5,
    avatar:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&q=80",
  },
  {
    id: "t2",
    name: "Indah Permata",
    role: "Owner",
    company: "Kafe Nusantara",
    content:
      "Tim interior ARKON sangat kreatif. Mereka berhasil mentransformasi ruang kosong menjadi kafe yang instagrammable dan nyaman. Pelanggan kami terus bertambah!",
    rating: 5,
    avatar:
      "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=100&q=80",
  },
  {
    id: "t3",
    name: "Dr. Hendra Wijaya",
    role: "Direktur",
    company: "PT. Maju Bersama",
    content:
      "Jasa drafter dan RAB mereka sangat detail dan akurat. Membantu kami menghemat biaya signifikan karena perencanaan yang matang sejak awal.",
    rating: 5,
    avatar:
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&q=80",
  },
  {
    id: "t4",
    name: "Sari Dewi",
    role: "Pemilik Villa",
    content:
      "Villa impian saya terwujud berkat ARKON. Dari desain hingga pembangunan, semua terkoordinasi dengan sangat baik. Saya sangat merekomendasikan mereka!",
    rating: 5,
    avatar:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&q=80",
  },
];

// ─── Team ─────────────────────────────────────────────────────────────────────
export const TEAM: TeamMember[] = [
  {
    id: "m1",
    name: "Arif Kurniawan",
    role: "Founder & Principal Architect",
    bio: "15 tahun pengalaman di bidang arsitektur dan konstruksi. Lulusan ITB dengan spesialisasi sustainable design.",
    image:
      "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400&q=80",
  },
  {
    id: "m2",
    name: "Konita Rahayu",
    role: "Head of Interior Design",
    bio: "Desainer interior berpengalaman dengan portofolio ratusan proyek residensial dan komersial di seluruh Indonesia.",
    image:
      "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&q=80",
  },
  {
    id: "m3",
    name: "Bima Prasetyo",
    role: "Senior Structural Engineer",
    bio: "Ahli struktur dengan sertifikasi internasional. Memastikan setiap bangunan aman, kuat, dan sesuai standar.",
    image:
      "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=400&q=80",
  },
  {
    id: "m4",
    name: "Putri Maharani",
    role: "Project Manager",
    bio: "Ahli manajemen proyek bersertifikat PMP dengan rekam jejak menyelesaikan proyek tepat waktu dan sesuai anggaran.",
    image:
      "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&q=80",
  },
];

// ─── Partners ─────────────────────────────────────────────────────────────────
export const PARTNERS: Partner[] = [
  {
    id:          "pr1",
    name:        "TB Kunci",
    logo:        "/images/partners/partner-1.svg",
    website:     "https://tokobangunan-sejahtera.id",
    tagline:     "Supplier Bahan Bangunan Terpercaya",
    description: "Kemitraan strategis kami dengan TB Kunci memastikan setiap proyek mendapatkan material berkualitas tinggi, ketersediaan stok yang terjamin, dan harga kompetitif — sehingga hasil kerja selalu optimal.",
    benefits: [
      "Material bersertifikat & berstandar SNI",
      "Stok lengkap & pengiriman tepat waktu",
      "Harga mitra eksklusif untuk setiap proyek",
    ],
  },
];

// ─── Instagram Reels ──────────────────────────────────────────────────────────
export const REELS: InstagramReel[] = [
  {
    id: "r1",
    title: "Proses Konstruksi Rumah 3 Lantai",
    thumbnail:
      "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=400&q=80",
    url: "https://www.instagram.com/reel/contoh1/",
    views: "12.4K",
  },
  {
    id: "r2",
    title: "Before & After Interior Apartemen",
    thumbnail:
      "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?w=400&q=80",
    url: "https://www.instagram.com/reel/contoh2/",
    views: "28.7K",
  },
  {
    id: "r3",
    title: "Time-lapse Pembangunan Villa Lembang",
    thumbnail:
      "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=400&q=80",
    url: "https://www.instagram.com/reel/contoh3/",
    views: "45.2K",
  },
  {
    id: "r4",
    title: "Tips Memilih Material Bangunan Murah",
    thumbnail:
      "https://images.unsplash.com/photo-1460472178825-e5240623afd5?w=400&q=80",
    url: "https://www.instagram.com/reel/contoh4/",
    views: "9.1K",
  },
  {
    id: "r5",
    title: "Transformasi Ruang Kerja Modern",
    thumbnail:
      "https://images.unsplash.com/photo-1497366216548-37526070297c?w=400&q=80",
    url: "https://www.instagram.com/reel/contoh5/",
    views: "19.3K",
  },
  {
    id: "r6",
    title: "Rahasia Finishing Dinding Sempurna",
    thumbnail:
      "https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=400&q=80",
    url: "https://www.instagram.com/reel/contoh6/",
    views: "33.8K",
  },
];

// ─── FAQ ──────────────────────────────────────────────────────────────────────
export const FAQS: FAQ[] = [
  {
    question: "Berapa estimasi biaya untuk membangun rumah?",
    answer:
      "Biaya konstruksi tergantung pada luas bangunan, spesifikasi material, dan lokasi proyek. Secara umum berkisar antara Rp 3.000.000 – Rp 8.000.000 per m². Hubungi kami untuk konsultasi dan estimasi gratis yang lebih akurat.",
  },
  {
    question: "Berapa lama pengerjaan proyek konstruksi?",
    answer:
      "Durasi proyek bergantung pada kompleksitas dan luas bangunan. Rumah tinggal 2 lantai biasanya membutuhkan waktu 4–8 bulan. Kami selalu menyusun timeline proyek yang jelas dan realistis bersama klien.",
  },
  {
    question: "Apakah GABEL Gemilang menyediakan garansi pekerjaan?",
    answer:
      "Ya. Kami memberikan garansi struktur 5 tahun dan garansi finishing 1 tahun. Setiap kekurangan yang timbul dalam periode garansi akan kami perbaiki tanpa biaya tambahan.",
  },
  {
    question: "Apakah bisa menggunakan material sendiri?",
    answer:
      "Tentu bisa. Kami fleksibel dan dapat bekerja dengan material yang Anda siapkan sendiri, atau kami dapat membantu pengadaan material berkualitas melalui jaringan mitra terpercaya kami.",
  },
  {
    question: "Bagaimana proses konsultasi awal?",
    answer:
      "Cukup hubungi kami melalui WhatsApp atau formulir kontak. Tim kami akan menjadwalkan pertemuan (tatap muka atau online) untuk mendiskusikan kebutuhan, visi, dan anggaran proyek Anda secara gratis.",
  },
  {
    question: "Apakah GABEL Gemilang melayani di luar Bandung?",
    answer:
      "Ya. Kami melayani proyek di seluruh wilayah Jawa Barat dan sekitarnya, termasuk Jakarta, Bogor, Bekasi, dan Karawang. Untuk proyek di luar area, silakan diskusikan terlebih dahulu.",
  },
];
