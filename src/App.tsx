import { useEffect, useRef, useState } from "react";
import { fullMenu } from "./menuData";
import { ImageAutoSlider } from "./components/ui/image-auto-slider";

const images = {
  hero: "/images/terrace-night.jpg", // Kept for fallback, though video is used
  story: "/images/terrace-day.jpg",
  interior: "/images/terrace-bar.jpg",
  fish: "/images/steak.jpg",
  kebab: "/images/bbq-fries.jpg",
  feast: "/images/gravy-rice.jpg",
  curry: "/images/food-view.jpg",
  sign: "/images/terrace-sign.jpg"
};

const signatureDishes = [
  {
    name: "Classic Steak",
    detail: "",
    image: "/images/food_new_1.png",
    number: "",
  },
  {
    name: "Tandoori Special",
    detail: "",
    image: "/images/food_new_2.png",
    number: "",
  },
  {
    name: "Pepper Steak",
    detail: "",
    image: "/images/food_new_3.jpg",
    number: "",
  },
  {
    name: "Creamy Pasta",
    detail: "",
    image: "/images/food_new_4.png",
    number: "",
  },
  {
    name: "Tandoori Platter",
    detail: "",
    image: "/images/food_new_5.jpg",
    number: "",
  },
  {
    name: "Spicy Wings",
    detail: "",
    image: "/images/food_new_6.jpg",
    number: "",
  },
  {
    name: "Steak and Fries",
    detail: "",
    image: "/images/food_new_7.jpg",
    number: "",
  },
  {
    name: "Signature Sizzler",
    detail: "",
    image: "/images/food_new_8.jpg",
    number: "",
  },
  {
    name: "Rooftop View Dish",
    detail: "",
    image: "/images/food_new_9.png",
    number: "",
  },
];

// menuGroups replaced by fullMenu from menuData.ts

function ArrowIcon({ direction = "right" }: { direction?: "left" | "right" }) {
  return (
    <svg
      aria-hidden="true"
      className={direction === "left" ? "rotate-180" : ""}
      fill="none"
      height="16"
      viewBox="0 0 24 24"
      width="16"
    >
      <path d="M5 12h14M14 7l5 5-5 5" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
    </svg>
  );
}

function TerraceSeal({ className = "" }: { className?: string }) {
  return (
    <svg aria-hidden="true" className={className} fill="none" viewBox="0 0 48 48">
      <path d="M24 3.5 30.2 14 42 12l-2 11.8L44.5 34 34 40.2 24 44.5 14 40.2 3.5 34 8 23.8 6 12l11.8 2L24 3.5Z" stroke="currentColor" strokeWidth="1" />
      <path d="M24 10.5 28.3 18l8.7-1.4-1.4 8.7 3.3 7.4-7.5 4.4L24 40.2l-7.4-3.1-7.5-4.4 3.3-7.4-1.4-8.7 8.7 1.4 4.3-7.5Z" stroke="currentColor" strokeWidth=".75" />
      <circle cx="24" cy="25" r="5.5" stroke="currentColor" strokeWidth=".75" />
    </svg>
  );
}

export default function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [fullMenuOpen, setFullMenuOpen] = useState(false);
  const [isMuted, setIsMuted] = useState(true);
  const [storyVideoMuted, setStoryVideoMuted] = useState(true);
  const dishRail = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((entry) => entry.isIntersecting && entry.target.classList.add("is-visible")),
      { threshold: 0.14 },
    );
    document.querySelectorAll(".reveal").forEach((element) => observer.observe(element));
    return () => observer.disconnect();
  }, []);

  const scrollDishes = (direction: number) => {
    dishRail.current?.scrollBy({ left: direction * Math.min(window.innerWidth * 0.72, 760), behavior: "smooth" });
  };

  return (
    <main className="overflow-hidden bg-ivory text-charcoal">
      <header className="absolute inset-x-0 top-0 z-50 border-b border-white/20 text-white">
        <div className="mx-auto flex h-32 max-w-[1500px] items-center justify-between px-6 lg:px-12">
          <a className="flex flex-col items-start hover:opacity-80 transition-opacity" href="#top" aria-label="Terrace by Makkawao home">
            <span className="font-display text-3xl font-bold uppercase tracking-[0.25em] text-white leading-none">Terrace</span>
            <span className="font-sans text-[0.65rem] font-light uppercase tracking-[0.4em] text-brass mt-1.5 ml-0.5">By Makkawao</span>
          </a>
          <nav className="hidden items-center gap-8 text-[0.69rem] font-medium uppercase tracking-[0.2em] lg:flex xl:gap-11">
            <a className="nav-link" href="#story">About</a>
            <a className="nav-link" href="#menu">Menu</a>
            <a className="nav-link" href="#experience">Rooftop</a>
            <a className="nav-link" href="#reels">Reels</a>
            <a className="nav-link" href="#gallery">Gallery</a>
            <a className="button button-light ml-2" href="#reserve">Book a table</a>
          </nav>
          <button
            aria-expanded={menuOpen}
            aria-label="Toggle navigation"
            className="flex h-11 w-11 flex-col items-center justify-center gap-1.5 border border-white/40 lg:hidden"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <span className="h-px w-5 bg-white" />
            <span className="h-px w-5 bg-white" />
          </button>
        </div>
        {menuOpen && (
          <nav className="flex flex-col gap-6 border-t border-white/20 bg-navy px-6 py-8 text-sm uppercase tracking-[0.2em] lg:hidden">
            {["story", "menu", "experience", "reels", "gallery", "reserve"].map((item) => (
              <a href={`#${item}`} key={item} onClick={() => setMenuOpen(false)}>
                {item === "reserve" ? "Book a table" : item}
              </a>
            ))}
          </nav>
        )}
      </header>

      <section id="top" className="hero relative flex min-h-[760px] h-[100svh] items-end overflow-hidden">
        <video 
          autoPlay 
          loop 
          muted={isMuted} 
          playsInline 
          className="absolute inset-0 h-full w-full object-cover z-0"
          src="/hero-video.mp4"
        />
        <div className="absolute inset-0 bg-charcoal/40 z-0" />
        
        <button 
          onClick={() => setIsMuted(!isMuted)}
          className="absolute bottom-6 left-6 z-10 flex h-10 w-10 items-center justify-center rounded-full bg-black/40 text-white backdrop-blur-md transition hover:bg-black/60 md:bottom-12 md:left-12"
          aria-label={isMuted ? "Unmute video" : "Mute video"}
        >
          {isMuted ? (
            <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z" clipRule="evenodd" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2" /></svg>
          ) : (
            <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15.536 8.464a5 5 0 010 7.072m2.828-9.9a9 9 0 010 12.728M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z" /></svg>
          )}
        </button>

        <div className="hero-copy relative mx-auto w-full max-w-[1500px] px-6 pb-14 text-white md:pb-16 lg:px-12 z-10">
          <h1 className="sr-only">Terrace by Makkawao — premium rooftop dining in Trivandrum</h1>
          <div className="flex max-w-3xl flex-col gap-7 border-l border-brass pl-5 md:pl-7">
            <p className="max-w-xl text-base font-normal leading-7 text-white md:text-lg md:leading-8">
              A premium yet welcoming rooftop restaurant. Elevated urban atmosphere, global cuisine, and a distinctly social spirit in Trivandrum.
            </p>
            <div className="flex flex-wrap gap-3">
              <a className="button button-light" href="#menu">Explore menu</a>
              <a className="button button-outline" href="#reserve">Book a table</a>
            </div>
          </div>
        </div>
      </section>

      <section id="story" className="px-6 py-24 md:py-32 lg:px-12 lg:py-40">
        <div className="reveal mx-auto grid max-w-[1400px] gap-14 lg:grid-cols-12 lg:items-center lg:gap-8">
          <div className="relative lg:col-span-6 group">
            <div className="image-frame aspect-[4/5] max-h-[760px] overflow-hidden relative">
              <video 
                autoPlay 
                loop 
                muted={storyVideoMuted} 
                playsInline 
                className="h-full w-full object-cover"
                src="/rooftop-video.mp4"
              />
              <button 
                onClick={() => setStoryVideoMuted(!storyVideoMuted)}
                className="absolute bottom-4 left-4 z-10 flex h-10 w-10 items-center justify-center rounded-full bg-black/40 text-white backdrop-blur-md transition hover:bg-black/60 md:bottom-8 md:left-8 opacity-0 group-hover:opacity-100"
                aria-label={storyVideoMuted ? "Unmute story video" : "Mute story video"}
              >
                {storyVideoMuted ? (
                  <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z" clipRule="evenodd" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2" /></svg>
                ) : (
                  <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15.536 8.464a5 5 0 010 7.072m2.828-9.9a9 9 0 010 12.728M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z" /></svg>
                )}
              </button>
            </div>
            <div className="absolute -bottom-10 -right-2 hidden aspect-square w-52 border-[14px] border-ivory bg-royal p-6 text-ivory md:flex md:flex-col md:justify-end lg:-right-14 z-20">
              <span className="font-display text-5xl">7th</span>
              <span className="mt-2 text-[0.58rem] uppercase leading-relaxed tracking-[0.22em]">Above the city</span>
            </div>
          </div>
          <div className="lg:col-span-5 lg:col-start-8">
            <p className="eyebrow">About Terrace</p>
            <h2 className="section-title mt-6">Good food,<br /><em>great company.</em></h2>
            <p className="mt-8 text-lg leading-8 text-charcoal/72">
              Terrace by Makkawao is your elevated escape in the city. A place designed for family gatherings, friends, celebrations, and relaxed rooftop dining.
            </p>
            <p className="mt-5 leading-7 text-charcoal/60">
              With contemporary Kerala hospitality, an inviting urban atmosphere, and a menu spanning global cuisine—from signature smash burgers to wok-tossed classics—every evening here is meant to be shared.
            </p>
            <a className="text-link mt-9" href="#experience">Discover the rooftop <ArrowIcon /></a>
          </div>
        </div>
      </section>

      <section className="brand-pattern bg-royal py-24 text-ivory md:py-32">
        <div className="reveal mx-auto max-w-[1500px] px-6 lg:px-12 mb-12">
          <div>
            <p className="eyebrow text-brass">From our kitchen</p>
            <h2 className="section-title mt-5">Signature <em>dishes.</em></h2>
          </div>
        </div>
        <style>{`
          @keyframes signature-scroll {
            0% { transform: translateX(0); }
            100% { transform: translateX(-50%); }
          }
          .signature-marquee {
            animation: signature-scroll 40s linear infinite;
            will-change: transform;
          }
          .signature-marquee:hover {
            animation-play-state: paused;
          }
        `}</style>
        <div className="overflow-hidden py-4 w-full">
          <div className="signature-marquee flex gap-5 w-max">
            {[...signatureDishes, ...signatureDishes].map((dish, index) => (
              <article className="group relative min-w-[84vw] md:min-w-[56vw] lg:min-w-[43vw] overflow-hidden rounded-md" key={`${dish.name}-${index}`}>
                <div className="aspect-[5/4] overflow-hidden">
                  <img 
                    className="h-full w-full object-cover transition duration-700 ease-out group-hover:scale-[1.035]" 
                    src={dish.image} 
                    alt={dish.name} 
                    onError={(e) => {
                      (e.target as HTMLImageElement).src = `https://images.unsplash.com/photo-1546069901-ba9599a7e63c?q=80&w=800&auto=format&fit=crop&sig=${index}`;
                    }}
                  />
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="menu" className="px-6 py-24 md:py-32 lg:px-12 lg:py-40">
        <div className="reveal mx-auto max-w-[1240px]">
          <div className="grid gap-7 border-b border-charcoal/20 pb-12 md:grid-cols-2 md:items-end">
            <div>
              <p className="eyebrow">A taste of Terrace</p>
              <h2 className="section-title mt-5">The <em>menu.</em></h2>
            </div>
            <p className="max-w-md text-base leading-7 text-charcoal/65 md:justify-self-end">
              Global flavours, sizzling steaks, and refreshing coolers—served generously for the perfect social dining experience.
            </p>
          </div>
          
          <div className="grid gap-14 py-14 md:grid-cols-2 md:gap-20 lg:gap-28">
            <div>
              <h3 className="mb-8 font-display text-3xl text-navy">House Favourites</h3>
              <div className="space-y-7">
                {fullMenu.find(c => c.category === "Indian & BBQ")?.items.slice(0, 3).map(item => (
                  <div className="group" key={item.name}>
                    <div className="flex items-baseline gap-3">
                      <h4 className="text-[0.75rem] font-bold uppercase tracking-[0.12em]">{item.name}</h4>
                      <span className="h-[1px] flex-1 border-b border-dotted border-charcoal/30 transition group-hover:border-brass" />
                      <span className="font-display text-lg">₹{item.price}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <h3 className="mb-8 font-display text-3xl text-navy">From the Grill</h3>
              <div className="space-y-7">
                {fullMenu.find(c => c.category === "Steaks & Continental")?.items.slice(0, 3).map(item => (
                  <div className="group" key={item.name}>
                    <div className="flex items-baseline gap-3">
                      <h4 className="text-[0.75rem] font-bold uppercase tracking-[0.12em]">{item.name}</h4>
                      <span className="h-[1px] flex-1 border-b border-dotted border-charcoal/30 transition group-hover:border-brass" />
                      <span className="font-display text-lg">₹{item.price}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="text-center mt-4">
            <button onClick={() => setFullMenuOpen(true)} className="button button-dark">View complete menu</button>
          </div>
        </div>
      </section>

      <section id="experience" className="relative min-h-[760px] bg-charcoal text-white">
        <img className="absolute inset-0 h-full w-full object-cover object-center" src={images.interior} alt="Vibrant rooftop dining experience" />
        <div className="absolute inset-0 bg-charcoal/65" />
        <div className="relative mx-auto grid min-h-[760px] max-w-[1500px] items-end px-6 py-20 lg:grid-cols-12 lg:px-12 lg:py-28">
          <div className="reveal lg:col-span-7">
              <p className="eyebrow text-brass">The Rooftop Experience</p>
            <h2 className="mt-6 font-display text-[clamp(3.5rem,7vw,7.2rem)] leading-[0.9]">
              Views.<br /><em>Vibes.</em>
            </h2>
          </div>
          <div className="reveal mt-10 border-l border-brass pl-6 lg:col-span-3 lg:col-start-10 lg:mt-0">
            <p className="leading-7 text-white/72">
              City views from the seventh floor, artistic interiors, colourful murals, and an atmosphere built for good times.
            </p>
            <a className="text-link mt-7 text-white" href="#gallery">Step inside <ArrowIcon /></a>
          </div>
        </div>
      </section>

      <section id="reels" className="bg-charcoal px-6 py-24 text-ivory md:py-32 lg:px-12">
        <div className="reveal mx-auto max-w-[1400px]">
          <div className="mb-14 flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <div>
              <p className="eyebrow text-brass">Watch our story</p>
              <h2 className="section-title mt-5">Drone &amp; <em>Reels.</em></h2>
            </div>
            <p className="max-w-xs text-sm leading-6 text-white/55">Experience the rooftop energy, culinary craft, and stunning exterior views from above.</p>
          </div>
          <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            {/* Thumbnails for reels */}
            {[images.sign, images.foodView || "/images/food-view.jpg", images.steak || "/images/steak.jpg", images.bbqFries || "/images/bbq-fries.jpg"].map((item, index) => (
              <div key={index} className="group relative aspect-[9/16] overflow-hidden rounded-xl bg-navy/50">
                <img src={item} alt={`Reel thumbnail ${index + 1}`} className="h-full w-full object-cover transition duration-700 group-hover:scale-105 opacity-60 group-hover:opacity-100" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-white/20 backdrop-blur-sm transition group-hover:bg-brass/90">
                    <svg className="ml-1 h-5 w-5 text-white" fill="currentColor" viewBox="0 0 24 24"><path d="M8 5v14l11-7z" /></svg>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="gallery" className="bg-ivory px-6 py-24 md:py-32 lg:px-12 lg:py-40">
        <div className="reveal mx-auto max-w-[1400px]">
          <div className="mb-14 flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <div>
              <p className="eyebrow">Moments at Terrace</p>
              <h2 className="section-title mt-5">At the <em>table.</em></h2>
            </div>
            <p className="max-w-xs text-sm leading-6 text-charcoal/55">An evening unfolds in details: a passing plate, a poured drink, the glow after dusk.</p>
          </div>
          <div className="gallery-grid">
            <figure className="gallery-a"><img src="/images/terrace-night.jpg" alt="Terrace night view" /></figure>
            <figure className="gallery-b"><img src="/images/bbq-leg.jpg" alt="Grilled BBQ Leg" /></figure>
            <figure className="gallery-c"><img src="/images/nuggets-fries.jpg" alt="Fries and Nuggets with city view" /></figure>
            <figure className="gallery-d"><img src="/images/terrace-day.jpg" alt="Terrace daytime ambiance" /></figure>
          </div>
        </div>
      </section>

      <section className="bg-navy px-6 py-24 text-ivory md:py-32 lg:px-12">
        <div className="reveal mx-auto max-w-[1300px]">
          <div className="grid gap-10 border-b border-white/15 pb-14 md:grid-cols-2 md:items-end">
            <div>
              <p className="eyebrow text-brass">Around our tables</p>
              <h2 className="section-title mt-5">Guest <em>notes.</em></h2>
            </div>
            <p className="max-w-sm text-sm leading-6 text-white/55 md:justify-self-end">The kind words that bring us back to the kitchen, service after service.</p>
          </div>
          <div className="grid md:grid-cols-3">
            {[
              ["“Amazing ambiance and great food! The rooftop view at night is totally worth it.”", "Google Reviewer"],
              ["“Perfect spot for a family dinner. The Chicken Steak was fantastic, and the service was top-notch.”", "Local Diner"],
              ["“Loved the vibrant atmosphere and the Smash Porotta Beef Burger. A great hangout spot in Kazhakkoottam!”", "Weekend Guest"],
            ].map(([quote, source], index) => (
              <blockquote className={`py-10 md:px-8 ${index > 0 ? "border-t border-white/15 md:border-l md:border-t-0" : ""}`} key={source}>
                <TerraceSeal className="mb-7 h-7 w-7 text-brass" />
                <p className="font-display text-2xl leading-snug text-white">{quote}</p>
                <footer className="mt-7 text-[0.58rem] uppercase tracking-[0.2em] text-white/45">{source}</footer>
              </blockquote>
            ))}
          </div>
          <div className="mt-10 text-center">
            <p className="text-sm text-white/60">Rated 4.1/5 from over 6,700 reviews on Google.</p>
          </div>
        </div>
      </section>

      <section id="reserve" className="brand-pattern bg-royal px-6 py-24 text-ivory md:py-32 lg:px-12">
        <div className="reveal mx-auto grid max-w-[1250px] gap-12 lg:grid-cols-2 lg:items-end">
          <div>
            <p className="eyebrow text-brass">Your table awaits</p>
            <h2 className="mt-6 font-display text-[clamp(3.6rem,7vw,7rem)] leading-[0.88]">
              Make an evening<br /><em>of it.</em>
            </h2>
          </div>
          <div className="lg:pb-2">
            <p className="max-w-md text-lg leading-8 text-ivory/70">
              Intimate dinners, family gatherings, or a celebration worth remembering. Let us set the table at the rooftop.
            </p>
            <div className="mt-9 flex flex-wrap gap-3">
              <a className="button button-light" href="https://www.instagram.com/terrace.makkawao/" target="_blank" rel="noreferrer">DM to Reserve</a>
              <a className="button button-outline" href="tel:+917559006605">Call +91 75590 06605</a>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-ivory">
        <div className="grid lg:grid-cols-2">
          <div className="px-6 py-20 md:px-12 lg:px-[max(3rem,calc((100vw-1400px)/2))] lg:py-28">
            <p className="eyebrow">Find us in Trivandrum</p>
            <h2 className="section-title mt-5">Come <em>by.</em></h2>
            <div className="mt-12 grid gap-9 sm:grid-cols-2">
              <div>
                <p className="info-label">Address</p>
                <p className="mt-3 leading-7 text-charcoal/65">7th Floor, Asiatic Business Center<br />Attinkuzhy Road, near Toyota Showroom<br />Kazhakkoottam, Thiruvananthapuram, Kerala 695583</p>
              </div>
              <div>
                <p className="info-label">Hours</p>
                <p className="mt-3 leading-7 text-charcoal/65">Monday–Sunday<br />12:00 PM – 12:00 AM</p>
              </div>
              <div>
                <p className="info-label">Contact</p>
              <a className="mt-3 block leading-7 text-charcoal/65 hover:text-royal" href="tel:+917559006605">+91 75590 06605</a>
              <a className="leading-7 text-charcoal/65 hover:text-royal" href="https://www.instagram.com/terrace.makkawao/" target="_blank" rel="noreferrer">@terrace.makkawao</a>
              </div>
              <div className="flex items-end">
                <a className="text-link" href="https://maps.app.goo.gl/vJp6Vk2dLQyALe2A9" target="_blank" rel="noreferrer">Get directions <ArrowIcon /></a>
              </div>
            </div>
          </div>
          <iframe
            className="min-h-[460px] w-full border-0 grayscale-[.65] contrast-[.9]"
            loading="lazy"
            src="https://maps.google.com/maps?q=Terrace%20By%20Makkawao,%20Asiatic%20Business%20Center,%20Kazhakkoottam&t=&z=15&ie=UTF8&iwloc=&output=embed"
            title="Map showing Terrace by Makkawao in Kazhakkoottam"
          />
        </div>
      </section>

      <footer className="bg-navy px-6 pb-9 pt-16 text-white/60 lg:px-12">
        <div className="mx-auto max-w-[1400px]">
          <div className="flex flex-col justify-between gap-12 border-b border-white/15 pb-14 md:flex-row md:items-end">
            <div className="flex items-center gap-6">
              <div className="flex flex-col items-start">
                <span className="font-display text-4xl font-bold uppercase tracking-[0.25em] text-white leading-none">Terrace</span>
                <span className="font-sans text-[0.7rem] font-light uppercase tracking-[0.4em] text-brass mt-1.5 ml-0.5">By Makkawao</span>
              </div>
              <p className="max-w-xs text-sm leading-6 ml-2 border-l border-white/15 pl-6">The ultimate rooftop dining experience, served with a vibrant Trivandrum spirit.</p>
            </div>
            <div className="flex flex-wrap gap-x-8 gap-y-4 text-[0.62rem] uppercase tracking-[0.2em] text-white/80">
              <a className="hover:text-brass" href="#story">About</a>
              <a className="hover:text-brass" href="#menu">Menu</a>
              <a className="hover:text-brass" href="#reels">Reels</a>
              <a className="hover:text-brass" href="#gallery">Gallery</a>
              <a className="hover:text-brass" href="#reserve">Reservations</a>
              <a className="hover:text-brass" href="https://www.instagram.com/terrace.makkawao/" target="_blank" rel="noreferrer">Instagram</a>
            </div>
          </div>
          <div className="flex flex-col justify-between gap-2 pt-8 text-[0.58rem] uppercase tracking-[0.16em] sm:flex-row">
            <p>© 2026 Terrace by Makkawao, Trivandrum</p>
            <p>Made for evenings worth remembering</p>
          </div>
        </div>
      </footer>

      {/* Floating Social Action Buttons */}
      <div className="fixed bottom-6 right-6 md:bottom-8 md:right-8 z-50 flex flex-col gap-3">
        <a 
          href="https://wa.me/917559006605" 
          target="_blank" 
          rel="noreferrer"
          className="flex h-11 w-11 items-center justify-center rounded-full bg-charcoal/60 backdrop-blur-md text-white/90 shadow-lg transition-all duration-300 hover:scale-110 hover:bg-brass hover:text-white border border-white/10 group relative"
          aria-label="Chat on WhatsApp"
        >
          <span className="absolute right-14 whitespace-nowrap rounded-md bg-charcoal/90 backdrop-blur-md px-3 py-1.5 text-[0.65rem] tracking-widest uppercase font-bold text-white opacity-0 transition-all duration-300 translate-x-2 group-hover:translate-x-0 group-hover:opacity-100 pointer-events-none">
            WhatsApp
          </span>
          <svg viewBox="0 0 24 24" fill="currentColor" stroke="none" className="w-[1.1rem] h-[1.1rem]">
            <path d="M12.031 0C5.385 0 .012 5.372.012 12.019c0 2.128.555 4.195 1.611 6.012L0 24l6.126-1.607a11.97 11.97 0 0 0 5.905 1.554h.005c6.645 0 12.022-5.372 12.022-12.019S18.675 0 12.031 0zm0 21.968h-.004a9.962 9.962 0 0 1-5.077-1.38l-.364-.216-3.774.99.999-3.682-.237-.377a9.957 9.957 0 0 1-1.523-5.302C2.047 5.485 6.536 1.002 12.03 1.002c5.312 0 9.986 4.673 9.986 9.986 0 5.31-4.673 9.98-9.985 9.98zM17.51 14.53c-.302-.15-1.787-.881-2.064-.981-.277-.101-.479-.151-.68.151-.201.302-.782.981-.958 1.182-.176.201-.353.226-.655.075-1.547-.773-2.61-1.464-3.6-2.91-.256-.375-.027-.581.123-.732.136-.137.302-.353.453-.53.151-.176.201-.302.302-.504.101-.202.05-.378-.025-.529-.076-.151-.68-1.643-.933-2.25-.246-.592-.496-.511-.68-.521h-.579c-.201 0-.529.076-.805.378-.277.302-1.057 1.033-1.057 2.518 0 1.485 1.082 2.92 1.233 3.12.151.202 2.134 3.256 5.166 4.563 2.148.924 2.87.828 3.393.75 5.25.762-.976-1.51-1.204-.378-.228-.68-.228-.958-.302z" />
          </svg>
        </a>
        
        <a 
          href="https://www.instagram.com/terrace.makkawao/" 
          target="_blank" 
          rel="noreferrer"
          className="flex h-11 w-11 items-center justify-center rounded-full bg-charcoal/60 backdrop-blur-md text-white/90 shadow-lg transition-all duration-300 hover:scale-110 hover:bg-brass hover:text-white border border-white/10 group relative"
          aria-label="Follow on Instagram"
        >
          <span className="absolute right-14 whitespace-nowrap rounded-md bg-charcoal/90 backdrop-blur-md px-3 py-1.5 text-[0.65rem] tracking-widest uppercase font-bold text-white opacity-0 transition-all duration-300 translate-x-2 group-hover:translate-x-0 group-hover:opacity-100 pointer-events-none">
            Instagram
          </span>
          <svg viewBox="0 0 24 24" fill="currentColor" stroke="none" className="w-[1.2rem] h-[1.2rem]">
            <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
          </svg>
        </a>
      </div>
      
      {/* Full Screen Menu Modal */}
      {fullMenuOpen && (
        <div className="fixed inset-0 z-[100] overflow-y-auto bg-[#F7F5F0] pb-24 animate-in fade-in duration-300">
          <div className="sticky top-0 z-10 flex justify-end p-6 bg-gradient-to-b from-[#F7F5F0] to-transparent">
            <button 
              className="text-charcoal bg-white/50 backdrop-blur-md px-4 py-2 rounded-full uppercase tracking-widest text-[0.65rem] font-bold hover:bg-charcoal hover:text-white transition-colors border border-charcoal/10" 
              onClick={() => setFullMenuOpen(false)}
            >
              Close Menu ✕
            </button>
          </div>
          <div className="mx-auto max-w-[1400px] px-6 lg:px-12 mt-4">
            <div className="text-center mb-20">
              <p className="eyebrow mb-4 text-charcoal/60">A Taste of Terrace</p>
              <h2 className="font-display text-5xl md:text-7xl text-charcoal tracking-tight">The Complete Menu.</h2>
            </div>
            
            <div className="columns-1 md:columns-2 lg:columns-3 gap-16 space-y-16">
              {fullMenu.map((cat, idx) => (
                <div className="break-inside-avoid" key={cat.category}>
                  <h3 className="font-display text-2xl md:text-3xl text-navy mb-8">{cat.category}</h3>
                  <div className="space-y-5">
                    {cat.items.map(item => (
                      <div key={item.name} className="flex items-baseline gap-2 group">
                        <span className="text-[0.65rem] md:text-[0.7rem] font-bold uppercase tracking-widest text-charcoal">{item.name}</span>
                        <span className="flex-1 border-b-[1.5px] border-dotted border-charcoal/20 relative -top-1 mx-2 transition-colors group-hover:border-brass/60"></span>
                        <span className="font-display text-sm md:text-base text-charcoal">₹{item.price}</span>
                      </div>
                    ))}
                  </div>
                  
                  {/* Strategic large food images interspersed in the columns */}
                  {idx === 0 && <img src="/images/bbq-fries.jpg" alt="BBQ and Fries" className="mt-12 rounded-xl w-full object-cover shadow-sm" />}
                  {idx === 3 && <img src="/images/steak.jpg" alt="Chicken Steak" className="mt-12 rounded-xl w-full object-cover shadow-sm" />}
                  {idx === 6 && <img src="/images/nuggets-fries.jpg" alt="Fries and Nuggets" className="mt-12 rounded-xl w-full object-cover shadow-sm" />}
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </main>
  );
}
