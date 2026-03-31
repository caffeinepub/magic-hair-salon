import { ChevronLeft, ChevronRight, X } from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import { useCallback, useEffect, useState } from "react";

const images = [
  {
    src: "/assets/img-20260330-wa0027-019d3fb9-a667-777c-ba92-c3dd7c0ce68c.jpg",
    alt: "Elegant salon interior with green styling chairs",
  },
  {
    src: "/assets/img-20260330-wa0021-019d3fb9-a852-74dc-b096-80f14daa0711.jpg",
    alt: "Happy customer after a beautiful haircut",
  },
  {
    src: "/assets/img-20260330-wa0025-019d3fb9-a856-72a9-8393-96cbfa159817.jpg",
    alt: "Stylist at work on opening day with balloons",
  },
  {
    src: "/assets/img-20260330-wa0023-019d3fb9-a8dc-71f8-b5e4-ead5ba2baa0b.jpg",
    alt: "Busy salon with happy customers",
  },
  {
    src: "/assets/img-20260330-wa0022-019d3fb9-a90e-763d-91f3-c60c766cbd10.jpg",
    alt: "Beautifully lit mirror row in the salon",
  },
  {
    src: "/assets/img-20260330-wa0026-019d3fb9-a968-75a8-9407-efc510e19cde.jpg",
    alt: "Salon styling chairs and mirrors close-up",
  },
  {
    src: "/assets/img-20260330-wa0024-019d3fb9-a9b9-73fe-b0f3-4737ce40b93a.jpg",
    alt: "Salon exterior with Hair Magic Z signboard",
  },
];

export default function Gallery() {
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const openLightbox = (index: number) => setLightboxIndex(index);
  const closeLightbox = useCallback(() => setLightboxIndex(null), []);

  const goNext = useCallback(() => {
    setLightboxIndex((prev) =>
      prev === null ? null : (prev + 1) % images.length,
    );
  }, []);

  const goPrev = useCallback(() => {
    setLightboxIndex((prev) =>
      prev === null ? null : (prev - 1 + images.length) % images.length,
    );
  }, []);

  useEffect(() => {
    if (lightboxIndex === null) return;
    const handler = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeLightbox();
      if (e.key === "ArrowRight") goNext();
      if (e.key === "ArrowLeft") goPrev();
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [lightboxIndex, closeLightbox, goNext, goPrev]);

  useEffect(() => {
    if (lightboxIndex !== null) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [lightboxIndex]);

  return (
    <section
      className="py-24 bg-[oklch(0.12_0.018_52)] relative overflow-hidden"
      data-ocid="gallery.section"
    >
      {/* Subtle background orbs */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/4 w-96 h-96 rounded-full opacity-[0.04] bg-[oklch(0.76_0.135_72)] blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-80 h-80 rounded-full opacity-[0.04] bg-[oklch(0.76_0.135_72)] blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section heading */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="text-center mb-14"
        >
          <p className="text-sm tracking-[0.3em] uppercase font-body text-[oklch(0.76_0.135_72)] mb-3">
            Take a Look Inside
          </p>
          <h2 className="font-display text-4xl sm:text-5xl font-bold text-[oklch(0.95_0.01_84)] mb-5">
            Our Salon
          </h2>
          <div className="flex items-center justify-center gap-3">
            <div className="h-px w-16 bg-[oklch(0.76_0.135_72/0.4)]" />
            <div className="w-2 h-2 rounded-full bg-[oklch(0.76_0.135_72)]" />
            <div className="h-px w-16 bg-[oklch(0.76_0.135_72/0.4)]" />
          </div>
        </motion.div>

        {/* Photo grid */}
        <div
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4"
          data-ocid="gallery.list"
        >
          {images.map((image, index) => (
            <motion.div
              key={image.src}
              data-ocid={`gallery.item.${index + 1}`}
              initial={{ opacity: 0, scale: 0.96 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.5, delay: (index % 4) * 0.08 }}
              className="group relative overflow-hidden rounded-xl cursor-pointer bg-[oklch(0.17_0.018_52)] aspect-square"
              onClick={() => openLightbox(index)}
            >
              <img
                src={image.src}
                alt={image.alt}
                loading="lazy"
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-[oklch(0.76_0.135_72/0)] group-hover:bg-[oklch(0.12_0.018_52/0.35)] transition-colors duration-300" />
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="w-10 h-10 rounded-full border-2 border-[oklch(0.76_0.135_72)] flex items-center justify-center backdrop-blur-sm bg-[oklch(0.12_0.018_52/0.4)]">
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="oklch(0.76 0.135 72)"
                    strokeWidth="2"
                    role="img"
                    aria-label="Expand image"
                  >
                    <path d="M15 3h6v6M9 21H3v-6M21 3l-7 7M3 21l7-7" />
                  </svg>
                </div>
              </div>
              <div className="absolute bottom-0 left-0 right-0 p-3 bg-gradient-to-t from-[oklch(0.08_0.012_52/0.9)] to-transparent translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                <p className="text-xs font-body text-[oklch(0.87_0.095_78)] truncate">
                  {image.alt}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {lightboxIndex !== null && (
          <motion.div
            data-ocid="gallery.modal"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-[oklch(0.06_0.01_52/0.97)] backdrop-blur-md"
            onClick={closeLightbox}
          >
            <button
              type="button"
              data-ocid="gallery.close_button"
              className="absolute top-4 right-4 z-50 w-11 h-11 rounded-full flex items-center justify-center bg-[oklch(0.2_0.018_52/0.8)] border border-[oklch(0.76_0.135_72/0.3)] text-[oklch(0.95_0.01_84)] hover:bg-[oklch(0.76_0.135_72)] hover:text-[oklch(0.12_0.018_52)] transition-colors duration-200"
              onClick={(e) => {
                e.stopPropagation();
                closeLightbox();
              }}
              aria-label="Close"
            >
              <X size={18} />
            </button>

            <button
              type="button"
              data-ocid="gallery.pagination_prev"
              className="absolute left-3 sm:left-6 z-50 w-11 h-11 rounded-full flex items-center justify-center bg-[oklch(0.2_0.018_52/0.8)] border border-[oklch(0.76_0.135_72/0.3)] text-[oklch(0.95_0.01_84)] hover:bg-[oklch(0.76_0.135_72)] hover:text-[oklch(0.12_0.018_52)] transition-colors duration-200"
              onClick={(e) => {
                e.stopPropagation();
                goPrev();
              }}
              aria-label="Previous image"
            >
              <ChevronLeft size={20} />
            </button>

            <button
              type="button"
              data-ocid="gallery.pagination_next"
              className="absolute right-3 sm:right-6 z-50 w-11 h-11 rounded-full flex items-center justify-center bg-[oklch(0.2_0.018_52/0.8)] border border-[oklch(0.76_0.135_72/0.3)] text-[oklch(0.95_0.01_84)] hover:bg-[oklch(0.76_0.135_72)] hover:text-[oklch(0.12_0.018_52)] transition-colors duration-200"
              onClick={(e) => {
                e.stopPropagation();
                goNext();
              }}
              aria-label="Next image"
            >
              <ChevronRight size={20} />
            </button>

            <motion.div
              key={lightboxIndex}
              initial={{ opacity: 0, scale: 0.92 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.92 }}
              transition={{ duration: 0.3 }}
              className="relative max-w-5xl max-h-[85vh] w-full mx-16 sm:mx-24"
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={images[lightboxIndex].src}
                alt={images[lightboxIndex].alt}
                className="w-full h-full max-h-[80vh] object-contain rounded-xl shadow-2xl"
              />
              <div className="mt-3 text-center">
                <p className="text-sm font-body text-[oklch(0.76_0.135_72)]">
                  {images[lightboxIndex].alt}
                </p>
                <p className="text-xs text-[oklch(0.63_0.022_70)] mt-1">
                  {lightboxIndex + 1} / {images.length}
                </p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
