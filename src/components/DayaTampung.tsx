import Image from "next/image";
import React, { useRef, useState } from "react";
import Tabs from "./elements/Tabs";
import Slider, { Settings } from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const DayaTampung = () => {
  const textMobiles = ["Reguler", "Non-Reguler", "KKI"];

  const [regulerMode, setRegulerMode] = useState<boolean>(true);
  const [nonRegulerMode, setNonRegulerMode] = useState<boolean>(true);
  const [indexTitle, setIndexTitle] = useState<number>(0);

  const sliderRefLaptop = useRef<Slider | null>(null);
  const sliderRefMobile = useRef<Slider | null>(null);

  const settings: Settings = {
    arrows: false,
    centerPadding: "16px",
  };

  const settingsMobile: Settings = {
    arrows: false,
    centerPadding: "8px",
  };

  const handleNextProduct = () => {
    setIndexTitle(() => {
      if (indexTitle == 2) {
        return 0;
      } else {
        return indexTitle + 1;
      }
    });
    sliderRefMobile.current?.slickNext();
    sliderRefLaptop.current?.slickNext();
  };

  const handlePrevProduct = () => {
    setIndexTitle(() => {
      if (indexTitle == 0) {
        return 2;
      } else {
        return indexTitle - 1;
      }
    });
    sliderRefMobile.current?.slickPrev();
    sliderRefLaptop.current?.slickPrev();
  };

  return (
    <section className="h-max md:h-[1024px] bg-[url(/about/background-jalur-masuk-and-daya-tampung.webp)] bg-cover bg-center">

      <div
        id="daya-tampung-laptop"
        className="hidden md:flex w-screen relative flex-col gap-8 h-full justify-center"
      >
        <h1 className="font-satoshi font-bold text-[64px] text-center">
          Jalur Masuk & Daya Tampung
        </h1>

        <div
          id="daya-tampung-cards-container"
          className="flex gap-2 justify-center items-center"
        >
          <button
            onClick={handlePrevProduct}
            className="w-[55px] h-[55px] bg-gradient-to-tr from-[#86FFA7] to-[#17A334] rounded-full flex justify-center items-center"
          >
            <Image
              src="icon/arrow-left.svg"
              alt=""
              width={55}
              height={55}
            />
          </button>

          <Slider
            {...settings}
            ref={sliderRefLaptop}
            className="w-[850px] h-[500px]"
          >
            <div
              id="reguler-card"
              className="w-[850px] h-[500px]"
            >
              <div className="h-full p-8 flex flex-col justify-around bg-opacity-25 bg-blur-lg rounded-lg shadow-lg backdrop-filter backdrop-blur-lg border border-gray-300">
                <div className="flex flex-col gap-8">
                  <h3 className="font-satoshi font-bold text-[32px] text-white-1 text-center">
                    Reguler
                  </h3>
                  <Tabs
                    buttonsText={["Ilmu Komputer", "Sistem Informasi"]}
                    defaultIndex={0}
                    className="w-[331px] mx-auto text-xs"
                    onClicks={[
                      () => setRegulerMode(true),
                      () => setRegulerMode(false),
                    ]}
                  />
                </div>

                <div className="flex justify-between items-center">
                  {regulerMode ? (
                    <div className="flex flex-col gap-9 flex-1">
                      <div>
                        <h4 className="font-bold text-xl text-white-1">SNBP</h4>
                        <p>
                          Jalur seleksi nasional untuk siswa SMA dan sederajat
                          berdasarkan prestasi dan nilai rapor yang
                          diselenggarakan oleh pemerintah. Kuota penerimaan
                          2023: 48 orang.
                        </p>
                      </div>
                      <div>
                        <h4 className="font-bold text-xl text-white-1">SNBT</h4>
                        <p>
                          Jalur seleksi nasional dengan menggunakan hasil Ujian
                          Tulis Berbasis Komputer (UTBK) yang diselenggarakan
                          oleh pemerintah. Kuota penerimaan 2023: 72 orang.
                        </p>
                      </div>
                    </div>
                  ) : (
                    <div className="flex flex-col gap-9 flex-1">
                      <div>
                        <h4 className="font-bold text-xl text-white-1">SNBP</h4>
                        <p>
                          Jalur seleksi nasional untuk siswa SMA dan sederajat
                          berdasarkan prestasi dan nilai rapor yang
                          diselenggarakan oleh pemerintah. Kuota penerimaan
                          2023: 48 orang.
                        </p>
                      </div>
                      <div>
                        <h4 className="font-bold text-xl text-white-1">SNBT</h4>
                        <p>
                          Jalur seleksi nasional dengan menggunakan hasil Ujian
                          Tulis Berbasis Komputer (UTBK) yang diselenggarakan
                          oleh pemerintah. Kuota penerimaan 2023: 72 orang.
                        </p>
                      </div>
                    </div>
                  )}

                  <Image
                    src="./about/circle-diagram-reg.svg"
                    alt=""
                    width={264}
                    height={292}
                    className="flex-1"
                  />

                  {regulerMode ? (
                    <div className="flex flex-col gap-9 flex-1">
                      <div>
                        <h4 className="font-bold text-xl text-white-1 text-right">
                          PPKB
                        </h4>
                        <p className="text-right">
                          Jalur seleksi mandiri yang diselenggarakan oleh UI
                          berdasarkan nilai rapor dan prestasi bagi sekolah yang
                          telah mengajukan permohonan pendaftaran. Kuota
                          penerimaan 2023: 12 orang.
                        </p>
                      </div>
                      <div>
                        <h4 className="font-bold text-xl text-white-1 text-right">
                          SIMAK
                        </h4>
                        <p className="text-right">
                          Jalur seleksi tertulis mandiri yang hanya
                          diselenggarakan oleh Universitas Indonesia. Kuota
                          penerimaan 2023: 12 orang.
                        </p>
                      </div>
                    </div>
                  ) : (
                    <div className="flex flex-col gap-9 flex-1">
                      <div>
                        <h4 className="font-bold text-xl text-white-1 text-right">
                          PPKB
                        </h4>
                        <p className="text-right">
                          Jalur seleksi mandiri yang diselenggarakan oleh UI
                          berdasarkan nilai rapor dan prestasi bagi sekolah yang
                          telah mengajukan permohonan pendaftaran. Kuota
                          penerimaan 2023: 12 orang.
                        </p>
                      </div>
                      <div>
                        <h4 className="font-bold text-xl text-white-1 text-right">
                          SIMAK
                        </h4>
                        <p className="text-right">
                          Jalur seleksi tertulis mandiri yang hanya
                          diselenggarakan oleh Universitas Indonesia. Kuota
                          penerimaan 2023: 12 orang.
                        </p>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>

            <div
              id="nonreguler-card"
              className="w-[850px] h-[500px]"
            >
              <div className="h-full p-8 flex flex-col justify-around bg-opacity-25 bg-blur-lg rounded-lg shadow-lg backdrop-filter backdrop-blur-lg border border-gray-300">
                <div className="flex flex-col gap-8">
                  <h3 className="font-satoshi font-bold text-[32px] text-white-1 text-center">
                    Non-Reguler
                  </h3>
                  <Tabs
                    buttonsText={["Ilmu Komputer", "Sistem Informasi"]}
                    defaultIndex={0}
                    className="w-[331px] mx-auto text-xs"
                    onClicks={[
                      () => setNonRegulerMode(true),
                      () => setNonRegulerMode(false),
                    ]}
                  />
                </div>

                <div className="flex justify-between items-center">
                  {nonRegulerMode ? (
                    <div className="flex flex-col gap-9 justify-start h-full">
                      <div>
                        <h4 className="font-bold text-xl text-white-1">PPKB</h4>
                        <p>
                          Jalur seleksi mandiri yang diselenggarakan oleh UI
                          berdasarkan nilai rapor dan prestasi bagi sekolah yang
                          telah mengajukan permohonan pendaftaran. Kuota
                          penerimaan 2023: 28 orang.
                        </p>
                      </div>
                    </div>
                  ) : (
                    <div className="flex flex-col gap-9 justify-start h-full">
                      <div>
                        <h4 className="font-bold text-xl text-white-1">PPKB</h4>
                        <p>
                          Jalur seleksi mandiri yang diselenggarakan oleh UI
                          berdasarkan nilai rapor dan prestasi bagi sekolah yang
                          telah mengajukan permohonan pendaftaran. Kuota
                          penerimaan 2023: 48 orang.
                        </p>
                      </div>
                    </div>
                  )}

                  <Image
                    src="./about/circle-diagram-nonreg.svg"
                    alt=""
                    width={264}
                    height={292}
                  />
                  {nonRegulerMode ? (
                    <div className="flex flex-col gap-9 justify-end h-full">
                      <div>
                        <h4 className="font-bold text-xl text-white-1 text-right">
                          SIMAK
                        </h4>
                        <p className="text-right">
                          Jalur seleksi tertulis mandiri yang hanya
                          diselenggarakan oleh Universitas Indonesia. Kuota
                          penerimaan 2023: 28 orang.
                        </p>
                      </div>
                    </div>
                  ) : (
                    <div className="flex flex-col gap-9 justify-end h-full">
                      <div>
                        <h4 className="font-bold text-xl text-white-1 text-right">
                          SIMAK
                        </h4>
                        <p className="text-right">
                          Jalur seleksi tertulis mandiri yang hanya
                          diselenggarakan oleh Universitas Indonesia. Kuota
                          penerimaan 2023: 48 orang.
                        </p>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>

            <div
              id="kki-card"
              className="w-[850px] h-[500px]"
            >
              <div className="h-full p-8 flex flex-col justify-around bg-opacity-25 bg-blur-lg rounded-lg shadow-lg backdrop-filter backdrop-blur-lg border border-gray-300">
                <div className="flex flex-col gap-8">
                  <h3 className="font-satoshi font-bold text-[32px] text-white-1 text-center">
                    Kelas Khusus Internasional (KKI)
                  </h3>
                </div>

                <div className="flex justify-between items-center">
                  <div className="flex flex-col gap-9 justify-start h-full">
                    <div>
                      <h4 className="font-bold text-xl text-white-1">
                        TALENT SCOUTING
                      </h4>
                      <p>
                        Jalur seleksi mandiri berdasarkan nilai rapor dan
                        prestasi yang diselenggarakan oleh UI dengan tambahan
                        sertifikat TOEFL atau IELTS yang masih berlaku. Kuota
                        penerimaan 2023: 20 orang.
                      </p>
                    </div>
                  </div>
                  <Image
                    src="./about/circle-diagram-kki.svg"
                    alt=""
                    width={264}
                    height={292}
                  />
                  <div className="flex flex-col gap-9 justify-end h-full">
                    <div>
                      <h4 className="font-bold text-xl text-white-1 text-right">
                        SIMAK
                      </h4>
                      <p className="text-right">
                        Jalur seleksi tertulis mandiri yang diselenggarakan oleh
                        UI dengan tambahan sertifikat TOEFL atau IELTS yang
                        masih berlaku. Kuota penerimaan 2023: 22 orang.
                      </p>
                    </div>
                  </div>
                </div>

                <div
                  id="info"
                  className="flex gap-3 py-2 px-3 mx-auto w-[531px] border border-icy-1 rounded-lg bg-gradient-to-r from-[#ffffff4a] to-[#0000001A]"
                >
                  <Image
                    src="about/information-circle.svg"
                    alt=""
                    width={28}
                    height={28}
                  />
                  <p>
                    Kelas Khusus Internasional hanya terdapat pada jurusan{" "}
                    <strong>Ilmu Komputer</strong>
                  </p>
                </div>
              </div>
            </div>
          </Slider>

          <button
            onClick={handleNextProduct}
            className="w-[55px] h-[55px] bg-gradient-to-tr from-[#86FFA7] to-[#17A334] rounded-full flex justify-center items-center"
          >
            <Image
              src="icon/arrow-left.svg"
              alt=""
              width={55}
              height={55}
              className="rotate-180"
            />
          </button>
        </div>
      </div>

      <div
        id="daya-tampung-mobile"
        className="mx-7 flex flex-col gap-5 md:hidden"
      >
        <h1 className="font-satoshi font-bold text-[32px] text-center">
          Jalur Masuk & Daya Tampung
        </h1>

        <div className="flex justify-between mx-7 items-center">
          <button
            onClick={handlePrevProduct}
            className="w-[55px] h-[55px] bg-gradient-to-tr from-[#86FFA7] to-[#17A334] rounded-full flex justify-center items-center"
          >
            <Image
              src="icon/arrow-left.svg"
              alt=""
              width={55}
              height={55}
            />
          </button>

          <h2 className="font-satoshi font-bold text-2xl">
            {textMobiles[indexTitle]}
          </h2>

          <button
            onClick={handleNextProduct}
            className="w-[55px] h-[55px] bg-gradient-to-tr from-[#86FFA7] to-[#17A334] rounded-full flex justify-center items-center"
          >
            <Image
              src="icon/arrow-left.svg"
              alt=""
              width={55}
              height={55}
              className="rotate-180"
            />
          </button>
        </div>

        <Slider
          {...settingsMobile}
          ref={sliderRefMobile}
        >
          <div>
            <div
              id="reguler-mobile-container"
              className="flex flex-col gap-8"
            >
              <Tabs
                buttonsText={["Ilmu Komputer", "Sistem Informasi"]}
                defaultIndex={0}
                className="w-[331px] mx-auto text-xs"
                onClicks={[
                  () => setRegulerMode(true),
                  () => setRegulerMode(false),
                ]}
              />
              <Image
                src="about/circle-diagram-reg.svg"
                alt=""
                width={264}
                height={292}
                className="mx-auto"
              />
              <div className="flex flex-col gap-4 px-7 py-8 border border-icy-1 rounded-lg bg-gradient-to-r from-[#ffffff2e] to-[#0000001A]">
                <div className="flex flex-col gap-1">
                  <h4 className="font-bold text-white-1">SNBP</h4>
                  <p className="text-sm">
                    {regulerMode
                      ? `Jalur seleksi nasional untuk siswa SMA dan sederajat
                          berdasarkan prestasi dan nilai rapor yang
                          diselenggarakan oleh pemerintah. Kuota penerimaan
                          2023: 48 orang.`
                      : `Jalur seleksi nasional untuk siswa SMA dan sederajat
                          berdasarkan prestasi dan nilai rapor yang
                          diselenggarakan oleh pemerintah. Kuota penerimaan
                          2023: 48 orang.`}
                  </p>
                </div>
                <div className="flex flex-col gap-1">
                  <h4 className="font-bold text-white-1">SNBT</h4>
                  <p className="text-sm">
                    {regulerMode
                      ? `Jalur seleksi nasional dengan menggunakan hasil Ujian
                          Tulis Berbasis Komputer (UTBK) yang diselenggarakan
                          oleh pemerintah. Kuota penerimaan 2023: 72 orang.`
                      : `Jalur seleksi nasional dengan menggunakan hasil Ujian
                          Tulis Berbasis Komputer (UTBK) yang diselenggarakan
                          oleh pemerintah. Kuota penerimaan 2023: 72 orang.`}
                  </p>
                </div>
                <div className="flex flex-col gap-1">
                  <h4 className="font-bold text-white-1">PPKB</h4>
                  <p className="text-sm">
                    {regulerMode
                      ? `Jalur seleksi mandiri yang diselenggarakan oleh UI
                          berdasarkan nilai rapor dan prestasi bagi sekolah yang
                          telah mengajukan permohonan pendaftaran. Kuota
                          penerimaan 2023: 12 orang.`
                      : `Jalur seleksi mandiri yang diselenggarakan oleh UI
                          berdasarkan nilai rapor dan prestasi bagi sekolah yang
                          telah mengajukan permohonan pendaftaran. Kuota
                          penerimaan 2023: 12 orang.`}
                  </p>
                </div>
                <div className="flex flex-col gap-1">
                  <h4 className="font-bold text-white-1">SIMAK</h4>
                  <p className="text-sm">
                    {regulerMode
                      ? `Jalur seleksi tertulis mandiri yang hanya diselenggarakan oleh
                Universitas Indonesia. Kuota penerimaan 2023: 12 orang.`
                      : `Jalur seleksi tertulis mandiri yang hanya
                diselenggarakan oleh Universitas Indonesia. Kuota
                penerimaan 2023: 12 orang.`}
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div>
            <div
              id="nonreguler-mobile-container"
              className="flex flex-col gap-8"
            >
              <Tabs
                buttonsText={["Ilmu Komputer", "Sistem Informasi"]}
                defaultIndex={0}
                className="w-[331px] mx-auto text-xs"
                onClicks={[
                  () => setNonRegulerMode(true),
                  () => setNonRegulerMode(false),
                ]}
              />
              <Image
                src="about/circle-diagram-nonreg.svg"
                alt=""
                width={264}
                height={292}
                className="mx-auto"
              />
              <div className="flex flex-col gap-4 px-7 py-8 border border-icy-1 rounded-lg bg-gradient-to-r from-[#ffffff2e] to-[#0000001A]">
                <div className="flex flex-col gap-1">
                  <h4 className="font-bold text-white-1">PPKB</h4>
                  <p className="text-sm">
                    {nonRegulerMode
                      ? `Jalur seleksi mandiri yang diselenggarakan oleh UI
                          berdasarkan nilai rapor dan prestasi bagi sekolah yang
                          telah mengajukan permohonan pendaftaran. Kuota
                          penerimaan 2023: 28 orang.`
                      : `Jalur seleksi mandiri yang diselenggarakan oleh UI
                          berdasarkan nilai rapor dan prestasi bagi sekolah yang
                          telah mengajukan permohonan pendaftaran. Kuota
                          penerimaan 2023: 48 orang.`}
                  </p>
                </div>
                <div className="flex flex-col gap-1">
                  <h4 className="font-bold text-white-1">SIMAK</h4>
                  <p className="text-sm">
                    {nonRegulerMode
                      ? `Jalur seleksi tertulis mandiri yang hanya
                          diselenggarakan oleh Universitas Indonesia. Kuota
                          penerimaan 2023: 28 orang.`
                      : `Jalur seleksi tertulis mandiri yang hanya
                          diselenggarakan oleh Universitas Indonesia. Kuota
                          penerimaan 2023: 48 orang.`}
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div>
            <div
              id="kki-mobile-container"
              className="flex flex-col gap-8"
            >
              <Image
                src="about/circle-diagram-kki.svg"
                alt=""
                width={264}
                height={292}
                className="mx-auto"
              />

              <div
                id="info"
                className="flex gap-3 py-2 px-3 mx-auto w-full border border-icy-1 rounded-lg bg-gradient-to-r from-[#ffffff4a] to-[#0000001A]"
              >
                <Image
                  src="about/information-circle.svg"
                  alt=""
                  width={28}
                  height={28}
                />
                <p>
                  Kelas Khusus Internasional hanya terdapat pada jurusan{" "}
                  <strong>Ilmu Komputer</strong>
                </p>
              </div>

              <div className="flex flex-col gap-4 px-7 py-8 border border-icy-1 rounded-lg bg-gradient-to-r from-[#ffffff2e] to-[#0000001A]">
                <div className="flex flex-col gap-1">
                  <h4 className="font-bold text-white-1">TALENT SCOUTING</h4>
                  <p className="text-sm">
                    Jalur seleksi mandiri berdasarkan nilai rapor dan prestasi
                    yang diselenggarakan oleh UI dengan tambahan sertifikat
                    TOEFL atau IELTS yang masih berlaku. Kuota penerimaan 2023:
                    20 orang.
                  </p>
                </div>
                <div className="flex flex-col gap-1">
                  <h4 className="font-bold text-white-1">SIMAK</h4>
                  <p className="text-sm">
                    Jalur seleksi tertulis mandiri yang diselenggarakan oleh UI
                    dengan tambahan sertifikat TOEFL atau IELTS yang masih
                    berlaku. Kuota penerimaan 2023: 22 orang.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </Slider>
      </div>
    </section>
  );
};

export default DayaTampung;
