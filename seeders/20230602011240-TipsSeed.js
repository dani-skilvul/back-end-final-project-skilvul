"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "Tips",
      [
        {
          id: "tips-3g7s",
          judul: "Berita Terkini: Penemuan Planet Baru",
          isi: "Para ilmuwan baru-baru ini menemukan sebuah planet baru di galaksi Andromeda. Planet tersebut memiliki ukuran yang hampir sama dengan Bumi dan diyakini memiliki kondisi yang mendukung kehidupan. Penemuan ini telah mengejutkan komunitas ilmiah di seluruh dunia dan membuka potensi baru dalam pencarian kehidupan di luar Bumi.\n\nPlanet baru tersebut diberi nama Andromeda-1 dan telah menjadi objek penelitian intensif. Para ilmuwan sedang mempelajari atmosfer planet ini, memeriksa kemungkinan adanya tanda-tanda kehidupan mikroba, dan mengumpulkan data lebih lanjut tentang komposisi dan struktur planet. Penemuan ini diharapkan dapat mengubah pemahaman kita tentang alam semesta dan meningkatkan peluang untuk menemukan kehidupan di planet lain.",
        },
        {
          id: "tips-g2ad",
          judul: "Kisah Inspiratif: Pemuda Berhasil Meraih Emas Olimpiade",
          isi: "Seorang pemuda berusia 21 tahun berhasil meraih medali emas dalam cabang olahraga renang pada Olimpiade Musim Panas tahun ini. Prestasinya menjadi inspirasi bagi banyak generasi muda di seluruh dunia. Dengan kerja keras, dedikasi, dan semangat juangnya, pemuda tersebut berhasil mengalahkan pesaing-pesaing tangguh dan meraih prestasi tertinggi di ajang olahraga paling bergengsi ini.\n\nPerjalanan menuju medali emas tidaklah mudah. Pemuda ini telah melewati berbagai latihan intensif, cedera, dan pengorbanan pribadi untuk mencapai cita-citanya. Keberhasilannya tidak hanya menginspirasi atlet muda lainnya, tetapi juga mengingatkan kita semua akan pentingnya ketekunan, fokus, dan tekad dalam menghadapi tantangan hidup. Pemuda ini adalah bukti bahwa impian dapat terwujud jika kita memiliki keyakinan dan tekad yang kuat.",
        },
        {
          id: "tips-6eg8",
          judul: "Teknologi Terbaru: Peluncuran Smartphone Canggih",
          isi: "Perusahaan teknologi terkemuka mengumumkan peluncuran smartphone terbaru mereka. Smartphone ini dilengkapi dengan fitur-fitur canggih seperti kamera berkualitas tinggi, kecerdasan buatan, dan baterai tahan lama. Dengan desain yang elegan dan performa yang luar biasa, smartphone ini menawarkan pengalaman pengguna yang unik dan memenuhi kebutuhan masyarakat modern.\n\nPeluncuran smartphone ini telah menjadi sorotan media dan banyak penggemar teknologi yang antusias untuk mencobanya. Perusahaan tersebut berharap bahwa inovasi ini akan mengubah cara kita menggunakan teknologi sehari-hari dan membuka jalan bagi perkembangan lebih lanjut dalam industri smartphone.",
        },
        {
          id: "tips-s2ff",
          judul: "Dunia Fashion: Tren Terbaru Musim Panas",
          isi: "Industri fashion sedang menghadapi tren terbaru untuk musim panas ini. Pakaian dengan warna-warna cerah dan motif yang segar menjadi sorotan utama. Bahan-bahan ringan dan nyaman digunakan dalam desain pakaian musim panas yang stylish.\n\nSelain itu, aksesori seperti topi lebar, kacamata hitam, dan sandal yang nyaman juga menjadi bagian penting dalam menambahkan sentuhan gaya pada penampilan. Desainer terkemuka telah merilis koleksi terbaru mereka yang mengikuti tren ini, memberikan inspirasi bagi pecinta fashion untuk mengeksplorasi gaya pribadi mereka dalam menghadapi musim panas yang cerah dan hangat.",
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("Tips", null, {});
  },
};
