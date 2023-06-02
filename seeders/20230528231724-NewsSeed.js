"use strict";
const dayjs = require("dayjs");
require("dayjs/locale/id");

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "News",
      [
        {
          id: "news-3g7s",
          judul:
            "Perubahan Iklim: Tantangan Besar yang Menghadang Kehidupan Bumi",
          isi: "Perubahan iklim merupakan salah satu tantangan terbesar yang dihadapi oleh manusia dan kehidupan di Bumi. Dampak dari perubahan iklim sangat luas dan dapat mempengaruhi berbagai aspek kehidupan, termasuk kesehatan, ekonomi, dan lingkungan. Salah satu efek yang paling terlihat adalah peningkatan suhu rata-rata global. Hal ini mengakibatkan pencairan es di kutub, naiknya permukaan air laut, dan intensitas cuaca yang ekstrem. Banyak spesies hewan dan tumbuhan yang terancam punah karena habitat alaminya terganggu.\n\nDalam menghadapi tantangan perubahan iklim, organisasi seperti Greenpeace memainkan peran penting dalam meningkatkan kesadaran publik, melakukan penelitian ilmiah, dan melakukan advokasi kebijakan. Mereka berupaya untuk mendorong negara-negara dan perusahaan agar mengurangi emisi gas rumah kaca, memperkuat energi terbarukan, dan melindungi ekosistem penting di seluruh dunia.\n\nKesadaran akan perubahan iklim juga penting bagi setiap individu. Tindakan sehari-hari seperti mengurangi penggunaan energi fosil, memilih transportasi ramah lingkungan, dan mendukung produk-produk yang berkelanjutan dapat membantu mengurangi dampak negatif perubahan iklim. Dalam menjaga keberlanjutan planet ini, kolaborasi dan aksi kolektif sangat diperlukan.",
          gambar: "https://i.ibb.co/CMk61Fw/perubahan-iklim.jpg",
          waktu: dayjs().locale("id").format("DD-MMMM-YYYY HH:mm:ss"), // 1 Mei 2023, pukul 09:30:00
        },
        {
          id: "news-g2ad",
          judul:
            "Dampak Penebangan Hutan: Ancaman bagi Keanekaragaman Hayati dan Manusia",
          isi: "Penebangan hutan telah menjadi salah satu masalah lingkungan yang mendesak di seluruh dunia. Dampaknya sangat merugikan keanekaragaman hayati, menghancurkan habitat satwa liar, dan menyebabkan kerugian ekonomi yang signifikan. Penebangan hutan juga berkontribusi terhadap perubahan iklim, karena pohon-pohon yang ditebang tidak dapat lagi menyerap karbon dioksida dari atmosfer.\n\nOrganisasi lingkungan seperti Greenpeace berusaha untuk menghentikan penebangan hutan yang tidak bertanggung jawab melalui kampanye dan advokasi. Mereka mendesak perusahaan dan pemerintah untuk menerapkan praktik penebangan yang berkelanjutan dan melindungi hutan-hutan penting di seluruh dunia. \n\nSebagai individu, kita juga dapat berkontribusi dengan cara menggunakan produk-produk kayu yang berasal dari sumber yang berkelanjutan, mendukung program penanaman kembali hutan, dan memilih bahan bangunan alternatif yang ramah lingkungan. Langkah-langkah kecil ini dapat membantu mempertahankan keanekaragaman hayati dan melindungi masa depan planet ini.",
          gambar: "https://i.ibb.co/x3j2Nm0/penebangan-hutan.jpg",
          waktu: dayjs().locale("id").format("DD-MMMM-YYYY HH:mm:ss"),
        },
        {
          id: "news-6eg8",
          judul:
            "Pencemaran Laut: Krisis Global yang Mengancam Ekosistem dan Manusia",
          isi: "Pencemaran laut merupakan krisis global yang mengancam ekosistem laut dan kesehatan manusia. Peningkatan polusi dari limbah industri, pembuangan sampah plastik, dan aktivitas perkapalan telah menyebabkan kerusakan yang serius terhadap laut dan makhluk hidup di dalamnya. Hewan-hewan laut sering kali terjebak dalam sampah plastik atau terkena dampak zat beracun yang terlarut dalam air laut. \n\nOrganisasi lingkungan seperti Greenpeace melakukan kampanye untuk menghentikan pencemaran laut dan melindungi ekosistem laut yang rapuh. Mereka mendesak pemerintah dan industri untuk mengurangi penggunaan plastik sekali pakai, meningkatkan sistem pengolahan limbah, dan melindungi kawasan laut yang kritis. \n\nSebagai individu, kita juga dapat berperan dengan mengurangi penggunaan plastik sekali pakai, mendukung kebijakan pengelolaan sampah yang baik, serta ikut serta dalam kegiatan pembersihan pantai dan laut. Melindungi laut adalah tanggung jawab bersama, dan langkah-langkah kita hari ini akan berdampak pada kelestarian laut dan kehidupan di masa depan.",
          gambar: "https://i.ibb.co/P9Q1Ypp/pencemaran-laut.jpg",
          waktu: dayjs().locale("id").format("DD-MMMM-YYYY HH:mm:ss"),
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("News", null, {});
  },
};
