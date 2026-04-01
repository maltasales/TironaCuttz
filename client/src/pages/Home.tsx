import { Button } from "@/components/ui/button";
import { MapPin, Phone, Clock, Star, Menu, X } from "lucide-react";
import { useState } from "react";

/**
 * Design Philosophy: Bold Edgy Luxury with Logo Energy
 * - Deep charcoal backgrounds with warm cream text
 * - Vibrant red accents from logo for CTAs and highlights
 * - Bebas Neue for bold, edgy headings; Poppins for clean body text
 * - Asymmetric layouts with abundant whitespace
 * - Dynamic animations reflecting the eagle logo's energy
 * - Mobile-first responsive design with touch-friendly interactions
 */

export default function Home() {
  const [activeTab, setActiveTab] = useState("all");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Booking handler - opens WhatsApp or phone
  const handleBooking = () => {
    const phone = "+35699086767";
    const message = "Hi Tirona Cuttz! I'd like to book an appointment.";
    const whatsappUrl = `https://wa.me/${phone.replace(/[^0-9]/g, '')}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, "_blank");
  };

  // Scroll to section handler
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const services = [
    {
      name: "Classic Haircut",
      duration: "30 min",
      price: "€15",
      description: "Precision cut with attention to detail",
    },
    {
      name: "Beard Grooming",
      duration: "15 min",
      price: "€8",
      description: "Professional beard trim and shape",
    },
    {
      name: "Head Shave",
      duration: "30 min",
      price: "€10",
      description: "Clean, smooth head shave",
    },
    {
      name: "Haircut & Beard Grooming",
      duration: "40 min",
      price: "€18",
      description: "Complete grooming package",
      badge: "Best Value",
    },
    {
      name: "Hot Towel Beard Shave",
      duration: "50 min",
      price: "€22",
      description: "Our signature premium experience",
      badge: "Signature",
    },
    {
      name: "Anti Stress Treatment",
      duration: "40 min",
      price: "€40",
      description: "Relaxation and grooming combined",
    },
  ];

  const galleryImages = [
    {
      url: "https://d2xsxph8kpxj0f.cloudfront.net/310519663465467958/DqP78sxeaxSa9eZ2LnC4Yd/hero-barber-studio-YnVajmAZDZHmJTLhtbuAKa.webp",
      category: "studio",
      alt: "Barber Studio Interior",
    },
    {
      url: "https://d2xsxph8kpxj0f.cloudfront.net/310519663465467958/DqP78sxeaxSa9eZ2LnC4Yd/hero-hot-towel-shave-KAs6FghCq8CeAsj9wCc6ui.webp",
      category: "beard",
      alt: "Hot Towel Shave",
    },
    {
      url: "https://d2xsxph8kpxj0f.cloudfront.net/310519663465467958/DqP78sxeaxSa9eZ2LnC4Yd/barber-detail-fade-Bfzt9kbK4zPVfZ6mP8tnzo.webp",
      category: "haircuts",
      alt: "Precision Fade",
    },
  ];

  const reviews = [
    {
      author: "Naomi J",
      rating: 5,
      text: "Thank you guys for another fantastic service. My son has never been a fan of the barbers, but he loves coming to see you.",
      badge: "Local Guide",
    },
    {
      author: "Rudolf Cuka",
      rating: 5,
      text: "The best barber in Malta. The guys are amazing and very professional. Amazing place to recommend for everyone.",
    },
    {
      author: "Geraldo Harizi",
      rating: 5,
      text: "The best service and designs you can ever find. Very friendly and good prices. Amazing thank you.",
      badge: "Local Guide",
    },
  ];

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-background/95 backdrop-blur border-b border-border">
        <div className="container flex justify-between items-center py-3 md:py-4">
          <div className="flex items-center gap-3">
            <img
              src="https://d2xsxph8kpxj0f.cloudfront.net/310519663465467958/DqP78sxeaxSa9eZ2LnC4Yd/Screenshot_20260401_154903_0b6999ae.jpg"
              alt="Tirona Cuttz Logo"
              className="h-10 md:h-12 w-auto"
            />
          </div>
          {/* Desktop Menu */}
          <div className="hidden md:flex gap-8 items-center">
            <a href="#services" className="hover:text-primary transition">
              Services
            </a>
            <a href="#gallery" className="hover:text-primary transition">
              Gallery
            </a>
            <a href="#about" className="hover:text-primary transition">
              About
            </a>
            <a href="#contact" className="hover:text-primary transition">
              Contact
            </a>
            <Button className="btn-gold" onClick={handleBooking}>Book Now</Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 hover:bg-card rounded-lg transition"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-card border-t border-border">
            <div className="container py-4 space-y-3">
              <a
                href="#services"
                className="block py-2 px-2 hover:text-primary transition rounded hover:bg-background/50"
                onClick={() => setMobileMenuOpen(false)}
              >
                Services
              </a>
              <a
                href="#gallery"
                className="block py-2 px-2 hover:text-primary transition rounded hover:bg-background/50"
                onClick={() => setMobileMenuOpen(false)}
              >
                Gallery
              </a>
              <a
                href="#about"
                className="block py-2 px-2 hover:text-primary transition rounded hover:bg-background/50"
                onClick={() => setMobileMenuOpen(false)}
              >
                About
              </a>
              <a
                href="#contact"
                className="block py-2 px-2 hover:text-primary transition rounded hover:bg-background/50"
                onClick={() => setMobileMenuOpen(false)}
              >
                Contact
              </a>
              <Button
                className="btn-gold w-full mt-2"
                onClick={() => {
                  handleBooking();
                  setMobileMenuOpen(false);
                }}
              >
                Book Now
              </Button>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://d2xsxph8kpxj0f.cloudfront.net/310519663465467958/DqP78sxeaxSa9eZ2LnC4Yd/hero-barber-studio-YnVajmAZDZHmJTLhtbuAKa.webp"
            alt="Barber Studio"
            className="w-full h-full object-cover opacity-30"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-background via-background/50 to-transparent"></div>
        </div>

        <div className="container relative z-10 grid md:grid-cols-2 gap-8 md:gap-12 items-center py-12 md:py-0">
          <div className="fade-in-up">
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-4 md:mb-6 leading-tight">
              Craft Cuts. Gżira's Finest.
            </h1>
            <p className="text-base sm:text-lg md:text-xl text-foreground/80 mb-6 md:mb-8 max-w-lg">
              Premium barber studio specializing in precision cuts, hot towel shaves, and the art of grooming.
            </p>
            <Button className="btn-gold pulse-gold text-base md:text-lg px-6 md:px-10 py-3 md:py-4 min-h-12 md:min-h-auto" onClick={handleBooking}>
              Book Your Session
            </Button>
          </div>

          <div className="hidden md:block">
            <div className="bg-card/50 backdrop-blur border border-border rounded-lg p-6 md:p-8">
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <Star className="text-primary mt-1 flex-shrink-0" size={24} />
                  <div>
                    <p className="font-semibold text-lg">5.0 Rating</p>
                    <p className="text-foreground/70">14 verified reviews</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <Clock className="text-primary mt-1 flex-shrink-0" size={24} />
                  <div>
                    <p className="font-semibold">9 AM - 9 PM</p>
                    <p className="text-foreground/70">Open 7 days a week</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <MapPin className="text-primary mt-1 flex-shrink-0" size={24} />
                  <div>
                    <p className="font-semibold">Gżira, Malta</p>
                    <p className="text-foreground/70">Prime location</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-12 md:py-20 bg-card/30">
        <div className="container">
          <div className="max-w-2xl mb-12 md:mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 md:mb-6">Our Services</h2>
            <div className="divider-gold mb-6 md:mb-8"></div>
            <p className="text-base md:text-lg text-foreground/80">
              Each service is crafted with precision and care. We offer transparent pricing and flexible booking options.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
            {services.map((service, idx) => (
              <div
                key={idx}
                className="bg-background border border-border rounded-lg p-6 md:p-8 hover:border-primary transition-all duration-300 hover:shadow-lg flex flex-col"
              >
                {service.badge && (
                  <span className="inline-block bg-primary text-primary-foreground text-xs md:text-sm px-3 py-1 rounded mb-4 w-fit">
                    {service.badge}
                  </span>
                )}
                <h3 className="text-lg md:text-2xl font-semibold mb-2">{service.name}</h3>
                <p className="text-sm md:text-base text-foreground/70 mb-4 flex-grow">{service.description}</p>
                <div className="flex justify-between items-end mb-6">
                  <div>
                    <p className="text-xs md:text-sm text-foreground/60">{service.duration}</p>
                    <p className="text-2xl md:text-3xl font-bold text-primary">{service.price}</p>
                  </div>
                </div>
                <Button variant="outline" className="w-full border-primary text-primary hover:bg-primary/10 min-h-10" onClick={handleBooking}>
                  Book This
                </Button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section id="gallery" className="py-12 md:py-20">
        <div className="container">
          <div className="max-w-2xl mb-12 md:mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 md:mb-6">Our Work</h2>
            <div className="divider-gold mb-6 md:mb-8"></div>
            <p className="text-base md:text-lg text-foreground/80">
              Precision cuts, sharp fades, and impeccable grooming. See the quality of our craft.
            </p>
          </div>

          {/* Gallery Tabs */}
          <div className="flex gap-2 md:gap-4 mb-8 md:mb-12 border-b border-border pb-4 overflow-x-auto">
            {["all", "haircuts", "beard", "studio"].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`capitalize px-3 md:px-4 py-2 transition-all text-sm md:text-base whitespace-nowrap ${
                  activeTab === tab
                    ? "text-primary border-b-2 border-primary"
                    : "text-foreground/60 hover:text-foreground"
                }`}
              >
                {tab}
              </button>
            ))}
          </div>

          {/* Gallery Grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
            {galleryImages.map((image, idx) => (
              <div
                key={idx}
                className="group relative overflow-hidden rounded-lg aspect-square bg-card cursor-pointer"
              >
                <img
                  src={image.url}
                  alt={image.alt}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <Button className="btn-gold" onClick={() => window.open(image.url, "_blank")}>View</Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Reviews Section */}
      <section className="py-12 md:py-20 bg-card/30">
        <div className="container">
          <div className="max-w-2xl mb-12 md:mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 md:mb-6">Client Reviews</h2>
            <div className="divider-gold mb-6 md:mb-8"></div>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-8">
            {reviews.map((review, idx) => (
              <div key={idx} className="bg-background border border-border rounded-lg p-6 md:p-8">
                <div className="flex gap-1 mb-4">
                  {[...Array(review.rating)].map((_, i) => (
                    <Star key={i} size={16} className="fill-primary text-primary" />
                  ))}
                </div>
                <p className="text-sm md:text-base text-foreground/80 mb-6 leading-relaxed">{review.text}</p>
                <div className="flex items-center justify-between">
                  <p className="font-semibold text-sm md:text-base">{review.author}</p>
                  {review.badge && (
                    <span className="text-xs bg-primary/20 text-primary px-2 py-1 rounded">
                      {review.badge}
                    </span>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-12 md:py-20">
        <div className="container grid md:grid-cols-2 gap-8 md:gap-12 items-center">
          <div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 md:mb-6">The Tirona Story</h2>
            <div className="divider-gold mb-6 md:mb-8"></div>
            <p className="text-base md:text-lg text-foreground/80 mb-4 md:mb-6 leading-relaxed">
              Tirona Cuttz is more than a barbershop. We're a craft studio dedicated to the art of grooming and the precision of the cut.
            </p>
            <p className="text-base md:text-lg text-foreground/80 mb-4 md:mb-6 leading-relaxed">
              Every client who walks through our door receives the same attention to detail, the same respect for their time, and the same commitment to excellence that defines our brand.
            </p>
            <p className="text-base md:text-lg text-foreground/80 leading-relaxed">
              Located in the heart of Gżira, we serve the local community and travelers alike, offering a premium experience at competitive Maltese prices.
            </p>
          </div>
          <div className="relative">
            <img
              src="https://d2xsxph8kpxj0f.cloudfront.net/310519663465467958/DqP78sxeaxSa9eZ2LnC4Yd/hero-hot-towel-shave-KAs6FghCq8CeAsj9wCc6ui.webp"
              alt="Barber at work"
              className="rounded-lg shadow-xl w-full"
            />
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-12 md:py-20 bg-card/30">
        <div className="container">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 md:mb-6">Get In Touch</h2>
          <div className="divider-gold mb-8 md:mb-12"></div>

          <div className="grid md:grid-cols-2 gap-8 md:gap-12">
            <div className="space-y-6 md:space-y-8">
              <div>
                <h3 className="text-xl md:text-2xl font-semibold mb-3 md:mb-4 flex items-center gap-3">
                  <MapPin className="text-primary flex-shrink-0" size={28} />
                  Location
                </h3>
                <p className="text-base md:text-lg text-foreground/80">
                  79 Venezia Court<br />
                  Triq Nazju Ellul<br />
                  Gżira GZR 1624, Malta
                </p>
              </div>

              <div>
                <h3 className="text-xl md:text-2xl font-semibold mb-3 md:mb-4 flex items-center gap-3">
                  <Phone className="text-primary flex-shrink-0" size={28} />
                  Contact
                </h3>
                <a href="tel:+35699086767" className="text-base md:text-lg text-primary hover:text-primary/80 transition">
                  +356 9908 6767
                </a>
              </div>

              <div>
                <h3 className="text-xl md:text-2xl font-semibold mb-3 md:mb-4 flex items-center gap-3">
                  <Clock className="text-primary flex-shrink-0" size={28} />
                  Hours
                </h3>
                <div className="text-base md:text-lg text-foreground/80 space-y-1">
                  <p>Monday - Sunday: 9 AM - 9 PM</p>
                  <p className="text-sm text-foreground/60">Open 7 days a week</p>
                </div>
              </div>
            </div>

            <div className="bg-background border border-border rounded-lg overflow-hidden h-96">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3232.4567890123456!2d14.490466700000002!3d35.90379070000001!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x130e453cf3b98cfb%3A0x348b4a7599328733!2sTirona%20Cuttz%20-%20Barber%20Studio%20Gzira!5e0!3m2!1sen!2smt!4v1234567890123"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 md:py-20 bg-primary text-primary-foreground">
        <div className="container text-center">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 md:mb-6">Ready for a Fresh Cut?</h2>
          <p className="text-base md:text-xl mb-6 md:mb-8 max-w-2xl mx-auto opacity-90">
            Book your appointment now and experience the Tirona Cuttz difference.
          </p>
          <Button className="bg-primary-foreground text-primary hover:bg-primary-foreground/90 text-base md:text-lg px-6 md:px-10 py-3 md:py-4 min-h-12 md:min-h-auto" onClick={handleBooking}>
            Book Your Appointment
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-background border-t border-border py-8 md:py-12">
        <div className="container">
          <div className="flex flex-col items-center text-center mb-6 md:mb-8">
            <img
              src="https://d2xsxph8kpxj0f.cloudfront.net/310519663465467958/DqP78sxeaxSa9eZ2LnC4Yd/Screenshot_20260401_154903_0b6999ae.jpg"
              alt="Tirona Cuttz Logo"
              className="h-12 md:h-16 w-auto mb-4"
            />
            <p className="text-sm md:text-base text-foreground/70">
              Premium Barber Studio in Gżira, Malta
            </p>
          </div>
          <div className="border-t border-border pt-6 md:pt-8 text-center">
            <p className="text-xs md:text-sm text-foreground/60">
              © 2025 Tirona Cuttz. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
