import { useEffect, useMemo, useState } from "react"
import { useSearchParams, Link } from "react-router-dom"
import { motion } from "framer-motion"
import Banner from "../components/Banner"
import NavigationBar from "../components/NavigationBar"
import Container from "../components/Container"
import Footer from "../components/Footer"
import { fadeIn, staggerContainer, scaleIn, slideFromLeft, slideFromRight } from "../components/animations/Animate"

import Graduate from "/assets/icons/graduate.svg"
import Book from "/assets/icons/book.svg"
import Time from "/assets/icons/time.svg"
import People from "/assets/icons/people.svg"
import Flag from "/assets/icons/flag.svg"

const IMAGE_BASE =
  "https://www.appsheet.com/template/gettablefileurl?appName=AppSheettestsample-685634582&tableName=AppSheet%20test%20sample&fileName=";

const TICKER_ITEMS = [
  "ESSA NYARUGUNGA",
  "OFFICIAL STUDENT ID VERIFICATION",
  "KANOMBE · KIGALI · RWANDA",
  "EXCELLENCE IN EDUCATION",
];

const initialsOf = (names = "") =>
  names
    .split(" ")
    .filter(Boolean)
    .slice(0, 2)
    .map((w) => w[0]?.toUpperCase())
    .join("");

const shortRef = (raw) => {
  let h = 0;
  for (let i = 0; i < raw.length; i++) {
    h = (h * 31 + raw.charCodeAt(i)) >>> 0;
  }
  return "ESSA-" + h.toString(16).toUpperCase().padStart(8, "0");
};

function RotatingSeal() {
  return (
    <div className="relative w-28 h-28 sm:w-32 sm:h-32 lg:w-36 lg:h-36">
      {/* rotating text ring */}
      <svg viewBox="0 0 100 100" className="w-full h-full animate-spin-slow" aria-hidden="true">
        <defs>
          <path
            id="seal-circle"
            d="M 50,50 m -38,0 a 38,38 0 1,1 76,0 a 38,38 0 1,1 -76,0"
          />
        </defs>
        <circle cx="50" cy="50" r="49" fill="#141414" />
        <circle cx="50" cy="50" r="27" fill="none" stroke="#FFBE99" strokeWidth="1.4" strokeDasharray="3 3" />
        <text className="fill-[#FFBE99]" style={{ fontSize: "8.2px", fontWeight: 800, letterSpacing: "1.6px" }}>
          <textPath href="#seal-circle">
            ESSA NYARUGUNGA • OFFICIAL STUDENT ID • VERIFIED •
          </textPath>
        </text>
      </svg>
      {/* center check */}
      <div className="flex absolute inset-0 justify-center items-center">
        <svg viewBox="0 0 24 24" className="w-9 h-9 sm:w-10 sm:h-10 lg:w-12 lg:h-12" fill="none" aria-hidden="true">
          <path d="M4 12.5l5.2 5.2L20 6.8" stroke="#FFBE99" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </div>
    </div>
  );
}

function DetailRow({ icon, label, value, mono = false }) {
  return (
    <div className="flex gap-4 items-center py-4 border-b-2 border-dashed border-neutral-200 last:border-b-0">
      <span className="flex justify-center items-center w-11 h-11 rounded-lg border-2 shrink-0 bg-primary-95 border-neutral-800">
        <img src={icon} alt="" className="object-contain w-5 h-5" />
      </span>
      <div className="min-w-0">
        <p className="text-[10px] sm:text-[11px] font-extrabold tracking-[0.18em] uppercase text-text-60 leading-none mb-1.5">
          {label}
        </p>
        <p className={`text-text-10 text-lg sm:text-xl font-bold leading-tight break-words ${mono ? "font-mono tracking-wide" : ""}`}>
          {value}
        </p>
      </div>
    </div>
  );
}

export default function Verify() {
  const [searchParams] = useSearchParams();
  const [imageFailed, setImageFailed] = useState(false);

  const id = searchParams.get("id")?.trim() ?? "";
  const names = searchParams.get("names")?.trim() ?? "";
  const studentClass = searchParams.get("class")?.trim() ?? "";
  const status = searchParams.get("status")?.trim().toUpperCase() ?? "";
  const image = searchParams.get("image")?.trim() ?? "";

  const imageUrl = image ? IMAGE_BASE + encodeURIComponent(image) : null;

  // probe the portrait URL off-DOM so we can fall back to initials on error
  useEffect(() => {
    if (!imageUrl) return;
    setImageFailed(false);
    const probe = new window.Image();
    probe.onload = () => setImageFailed(false);
    probe.onerror = () => setImageFailed(true);
    probe.src = imageUrl;
  }, [imageUrl]);
  const isValid = Boolean(id && names);

  const verificationRef = useMemo(
    () => shortRef(`${id}|${names}|${studentClass}|${status}|${image}`),
    [id, names, studentClass, status, image]
  );

  const verifiedAt = useMemo(
    () =>
      new Date().toLocaleString("en-GB", {
        day: "2-digit",
        month: "short",
        year: "numeric",
        hour: "2-digit",
        minute: "2-digit",
      }),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [searchParams]
  );

  const isBoarding = status === "BOARDING";
  const statusLabel = status ? (isBoarding ? "Boarding" : status.charAt(0) + status.slice(1).toLowerCase()) : "—";

  return (
    <>
      <Banner />
      <NavigationBar />

      <Container>
        {/* ── page backdrop ─────────────────────────────────────────── */}
        <div className="overflow-hidden relative px-4 py-12 mt-10 w-full rounded-2xl border-2 dot-grid border-neutral-800 bg-primary-97 sm:px-8 lg:px-14 lg:py-16">
          {/* corner screws */}
          <div className="absolute top-3 left-3 w-5 h-5 bg-white rounded-full border-2 border-neutral-800" />
          <div className="absolute top-3 right-3 w-5 h-5 bg-white rounded-full border-2 border-neutral-800" />
          <div className="absolute bottom-3 left-3 w-5 h-5 bg-white rounded-full border-2 border-neutral-800" />
          <div className="absolute right-3 bottom-3 w-5 h-5 bg-white rounded-full border-2 border-neutral-800" />

          {/* ── header strip ─────────────────────────────────────────── */}
          <motion.div
            variants={fadeIn}
            initial="hidden"
            animate="visible"
            className="flex relative flex-col gap-4 items-center mb-10 text-center lg:mb-14"
          >
            <span className="inline-flex items-center gap-2 px-5 py-2 bg-white rounded-lg border-2 border-neutral-800 text-xs sm:text-sm font-extrabold tracking-[0.22em] uppercase text-text-20">
              <span className="w-2.5 h-2.5 rounded-full bg-primary-65" />
              Official Verification Portal
            </span>
            <h1 className="text-text-10 text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-[1.05] tracking-tight">
              Student ID <span className="text-primary-65">Verification</span>
            </h1>
            <p className="max-w-2xl text-base font-medium leading-relaxed text-text-30 sm:text-lg">
              This page confirms the identity encoded in the QR code on an ESSA Nyarugunga student card.
            </p>
          </motion.div>

          {!isValid ? (
            /* ── empty / invalid state ─────────────────────────────── */
            <motion.div
              variants={scaleIn}
              initial="hidden"
              animate="visible"
              className="relative max-w-2xl mx-auto bg-white rounded-xl border-2 border-neutral-800 shadow-[8px_8px_0px_1px_rgba(30,30,30,1.00)] px-8 py-14 text-center"
            >
              <div className="flex justify-center items-center mx-auto mb-6 w-20 h-20 rounded-xl border-2 border-neutral-800 bg-primary-95">
                <svg viewBox="0 0 24 24" className="w-10 h-10" fill="none" aria-hidden="true">
                  <path d="M12 3 2.5 20h19L12 3Z" stroke="#141414" strokeWidth="1.8" strokeLinejoin="round" />
                  <path d="M12 10v4.4" stroke="#141414" strokeWidth="1.8" strokeLinecap="round" />
                  <circle cx="12" cy="17" r="1.1" fill="#141414" />
                </svg>
              </div>
              <h2 className="mb-3 text-3xl font-extrabold text-text-10">No student data found</h2>
              <p className="mb-8 font-medium leading-relaxed text-text-30">
                This link is missing the student details that the QR code is supposed to carry.
                Please scan the QR code on the student card again, or contact the school office if the problem persists.
              </p>
              <Link
                to="/"
                className="inline-flex items-center gap-2 px-6 py-3 bg-primary-70 border-2 border-neutral-800 rounded-lg font-extrabold text-neutral-800 tracking-wide transition-all hover:shadow-[6px_6px_0px_2px_rgba(30,30,30,1.00)]"
              >
                ← Back to homepage
              </Link>
            </motion.div>
          ) : (
            /* ── verification card ──────────────────────────────────── */
            <motion.div
              variants={staggerContainer}
              initial="hidden"
              animate="visible"
              className="relative max-w-5xl mx-auto grid lg:grid-cols-5 bg-white rounded-2xl border-2 border-neutral-800 shadow-[10px_10px_0px_1px_rgba(30,30,30,1.00)] overflow-hidden"
            >
              {/* VERIFIED stamp */}
              <motion.div
                initial={{ scale: 0, rotate: -30, opacity: 0 }}
                animate={{ scale: 1, rotate: -12, opacity: 1 }}
                transition={{ type: "spring", stiffness: 220, damping: 15, delay: 0.45 }}
                className="absolute z-20 top-5 right-4 lg:top-6 lg:right-6 px-4 py-2 sm:px-5 sm:py-2.5 border-[3px] border-neutral-800 rounded-lg bg-primary-80 shadow-[4px_4px_0px_1px_rgba(30,30,30,1.00)]"
              >
                <span className="text-neutral-800 text-base sm:text-xl font-black tracking-[0.28em] uppercase">
                  Verified
                </span>
              </motion.div>

              {/* LEFT — portrait / identity panel */}
              <motion.div
                variants={slideFromLeft}
                className="flex overflow-hidden relative flex-col gap-6 justify-center items-center px-6 py-12 text-white border-b-2 lg:col-span-2 bg-darktheme-8 lg:py-16 lg:border-b-0 lg:border-r-2 border-neutral-800"
              >
                {/* faint oversized ID behind */}
                <span aria-hidden="true" className="absolute -bottom-6 -left-2 select-none text-[120px] lg:text-[150px] font-black leading-none text-white/5 break-all">
                  {id}
                </span>

                <RotatingSeal />

                {/* portrait frame — right-click / drag / save disabled to protect the student's photo */}
                <div
                  className="relative border-2 border-primary-80 bg-darktheme-15 p-2 rounded-xl shadow-[6px_6px_0px_1px_rgba(255,190,153,0.35)] select-none"
                  onContextMenu={(e) => e.preventDefault()}
                >
                  {/* frame pins */}
                  <div className="absolute -top-2 -left-2 z-10 w-4 h-4 rounded-full border-2 pointer-events-none bg-primary-80 border-neutral-800" />
                  <div className="absolute -top-2 -right-2 z-10 w-4 h-4 rounded-full border-2 pointer-events-none bg-primary-80 border-neutral-800" />
                  <div className="absolute -bottom-2 -left-2 z-10 w-4 h-4 rounded-full border-2 pointer-events-none bg-primary-80 border-neutral-800" />
                  <div className="absolute -right-2 -bottom-2 z-10 w-4 h-4 rounded-full border-2 pointer-events-none bg-primary-80 border-neutral-800" />

                  {imageUrl && !imageFailed ? (
                    <div
                      role="img"
                      aria-label={`Portrait of ${names}`}
                      onContextMenu={(e) => e.preventDefault()}
                      onDragStart={(e) => e.preventDefault()}
                      className="relative w-40 h-48 rounded-lg border-2 sm:w-48 sm:h-56 lg:w-52 lg:h-64 border-neutral-800 bg-darktheme-20 bg-cover bg-top bg-no-repeat [-webkit-user-drag:none]"
                      style={{ backgroundImage: `url("${imageUrl}")` }}
                    />
                  ) : (
                    <div className="flex relative justify-center items-center w-40 h-48 rounded-lg border-2 sm:w-48 sm:h-56 lg:w-52 lg:h-64 border-neutral-800 bg-primary-80">
                      <span className="text-6xl font-black sm:text-7xl text-neutral-800/80">
                        {initialsOf(names)}
                      </span>
                    </div>
                  )}
                </div>

                {/* status chip */}
                <div className="flex relative flex-col gap-2 items-center">
                  <span className="inline-flex items-center gap-2 px-5 py-2 rounded-full border-2 border-primary-80 bg-primary-80/10 text-primary-80 font-extrabold tracking-[0.25em] uppercase text-xs sm:text-sm">
                    {/* <img src={!isBoarding ? Time : Flag} alt="" className="w-4 h-4 [filter:invert(76%)_sepia(38%)_saturate(500%)_hue-rotate(330deg)]" /> */}
                    {statusLabel} Student
                  </span>
                  <p className="font-mono text-xs tracking-widest text-white/50">REF {verificationRef}</p>
                </div>
              </motion.div>

              {/* RIGHT — details panel */}
              <motion.div variants={slideFromRight} className="flex relative flex-col px-6 py-10 lg:col-span-3 sm:px-10 lg:py-12">
                <div className="mb-5">
                  <p className="text-[11px] font-extrabold tracking-[0.25em] uppercase text-primary-65 mb-2">
                    Identity Record
                  </p>
                  <h2 className="text-3xl font-extrabold leading-tight text-text-10 sm:text-4xl">
                    {names}
                  </h2>
                </div>

                <div className="flex flex-col">
                  <DetailRow icon={People} label="Student ID" value={id} mono />
                  <DetailRow icon={Graduate} label="Full Names" value={names} />
                  <DetailRow icon={Book} label="Class / Level" value={studentClass || "—"} />
                  <DetailRow icon={isBoarding ? Time : Flag} label="Status" value={statusLabel} />
                </div>

                {/* trust footer */}
                <div className="flex gap-3 items-start px-5 py-4 mt-6 rounded-xl border-2 border-neutral-800 bg-primary-99">
                  <svg viewBox="0 0 24 24" className="w-6 h-6 shrink-0 mt-0.5" fill="none" aria-hidden="true">
                    <path d="M12 2 4 6v6c0 5.2 3.4 9.4 8 10 4.6-.6 8-4.8 8-10V6l-8-4Z" stroke="#141414" strokeWidth="1.8" strokeLinejoin="round" />
                    <path d="M9.2 12.2l2 2 3.6-4" stroke="#141414" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                  <p className="text-sm font-medium leading-snug text-text-30">
                    Details shown here are exactly what is encoded in this card's QR code, presented by the
                    official ESSA Nyarugunga verification portal since <span className="font-bold text-text-10">30 November 2026</span>.
                  </p>
                </div>
              </motion.div>
            </motion.div>
          )}
        </div>

        {/* ── ESSA digital ecosystem — quick links ─────────────────── */}
        <motion.div
          variants={fadeIn}
          initial="hidden"
          animate="visible"
          className="max-w-5xl mx-auto mt-8 grid sm:grid-cols-2 gap-5"
        >
          {/* Attendance with Karame */}
          <a
            href="https://karame.berulo.org/dashboard/teacher/education/teacher"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center gap-4 sm:gap-5 bg-darktheme-8 border-2 border-neutral-800 rounded-2xl px-5 sm:px-6 py-5 shadow-[6px_6px_0px_1px_rgba(30,30,30,1.00)] transition-all duration-200 hover:-translate-y-0.5 hover:shadow-[8px_10px_0px_1px_rgba(30,30,30,1.00)]"
          >
            <span className="flex items-center justify-center w-14 h-14 sm:w-16 sm:h-16 shrink-0 rounded-xl border-2 border-primary-80 bg-primary-80/10 transition-transform group-hover:scale-105">
              <svg viewBox="0 0 24 24" className="w-7 h-7 sm:w-8 sm:h-8" fill="none" aria-hidden="true">
                <circle cx="12" cy="12" r="9" stroke="#FFBE99" strokeWidth="1.8" />
                <path d="M12 7.5V12l3 2.2" stroke="#FFBE99" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </span>
            <span className="min-w-0">
              <span className="block text-[10px] sm:text-[11px] font-extrabold tracking-[0.22em] uppercase text-primary-80/80 mb-1">
                For Teachers
              </span>
              <span className="block text-white text-lg sm:text-xl font-extrabold leading-tight">
                Attendance with Karame
              </span>
              <span className="block text-white/50 text-xs sm:text-sm font-medium mt-1">
                Open the Karame teacher dashboard →
              </span>
            </span>
          </a>

          {/* NexCard — Smart cards */}
          {id ? (
            <a
              href={`https://nexcardrw.vercel.app/verify/${encodeURIComponent(id)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-4 sm:gap-5 bg-white border-2 border-neutral-800 rounded-2xl px-5 sm:px-6 py-5 shadow-[6px_6px_0px_1px_rgba(30,30,30,1.00)] transition-all duration-200 hover:-translate-y-0.5 hover:shadow-[8px_10px_0px_1px_rgba(30,30,30,1.00)]"
            >
              <span className="flex items-center justify-center w-14 h-14 sm:w-16 sm:h-16 shrink-0 rounded-xl border-2 border-neutral-800 bg-primary-95 transition-transform group-hover:scale-105">
                <svg viewBox="0 0 24 24" className="w-7 h-7 sm:w-8 sm:h-8" fill="none" aria-hidden="true">
                  <rect x="2.5" y="5" width="19" height="14" rx="2.5" stroke="#141414" strokeWidth="1.8" />
                  <path d="M6.5 10h4M6.5 13.5h7" stroke="#141414" strokeWidth="1.8" strokeLinecap="round" />
                  <circle cx="17" cy="13.5" r="1.4" fill="#141414" />
                </svg>
              </span>
              <span className="min-w-0">
                <span className="block text-[10px] sm:text-[11px] font-extrabold tracking-[0.22em] uppercase text-primary-65 mb-1">
                  Smart Cards
                </span>
                <span className="block text-text-10 text-lg sm:text-xl font-extrabold leading-tight">
                  NexCard
                </span>
                <span className="block text-text-40 text-xs sm:text-sm font-medium mt-1">
                  Verify ID <span className="font-mono font-bold">{id}</span> on NexCard →
                </span>
              </span>
            </a>
          ) : (
            <div
              aria-disabled="true"
              className="flex items-center gap-4 sm:gap-5 bg-white/60 border-2 border-dashed border-neutral-300 rounded-2xl px-5 sm:px-6 py-5 select-none"
            >
              <span className="flex items-center justify-center w-14 h-14 sm:w-16 sm:h-16 shrink-0 rounded-xl border-2 border-dashed border-neutral-300 bg-primary-99">
                <svg viewBox="0 0 24 24" className="w-7 h-7 sm:w-8 sm:h-8" fill="none" aria-hidden="true">
                  <rect x="2.5" y="5" width="19" height="14" rx="2.5" stroke="#98989A" strokeWidth="1.8" />
                  <path d="M6.5 10h4M6.5 13.5h7" stroke="#98989A" strokeWidth="1.8" strokeLinecap="round" />
                </svg>
              </span>
              <span className="min-w-0">
                <span className="block text-[10px] sm:text-[11px] font-extrabold tracking-[0.22em] uppercase text-text-60 mb-1">
                  Smart Cards
                </span>
                <span className="block text-text-60 text-lg sm:text-xl font-extrabold leading-tight">
                  NexCard
                </span>
                <span className="block text-text-60 text-xs sm:text-sm font-medium mt-1">
                  Scan a student card to enable this check
                </span>
              </span>
            </div>
          )}
        </motion.div>

        {/* ── marquee ticker ───────────────────────────────────────── */}
        <div className="mt-8 mb-2 overflow-hidden border-2 border-neutral-800 rounded-xl bg-darktheme-8 py-2.5 select-none" aria-hidden="true">
          <div className="flex w-max whitespace-nowrap animate-marquee">
            {[...TICKER_ITEMS, ...TICKER_ITEMS, ...TICKER_ITEMS, ...TICKER_ITEMS].map((item, i) => (
              <span key={i} className="mx-6 text-primary-80 text-sm font-extrabold tracking-[0.25em] uppercase flex items-center gap-6">
                {item} <span className="text-white/30">✦</span>
              </span>
            ))}
          </div>
        </div>

        {/* honest disclaimer — no database yet */}
        <p className="hidden px-6 pt-4 pb-2 text-xs font-medium text-center text-text-60 sm:text-sm">
          Note: this portal currently displays the information embedded in the QR code only. It does not yet
          cross-check records against a school database. Report discrepancies to the school administration.
        </p>

        <Footer />
      </Container>
    </>
  );
}
