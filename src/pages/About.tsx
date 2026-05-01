import { Button } from "../components/ui/Button";

export default function About() {
  return (
    <div className="flex flex-col w-full max-w-5xl mx-auto px-6 py-12 md:py-20">
      <div className="grid md:grid-cols-2 gap-12 lg:gap-20 items-center mb-24">
        <div>
          <h1 className="text-4xl md:text-5xl font-display font-bold text-brand-dark mb-6 leading-tight">
            Our Story & <br />
            <span className="text-brand-coral">Our Vision</span>
          </h1>
          <p className="text-lg text-brand-dark/70 mb-6 leading-relaxed">
            The Design Hub Studios started with a simple idea: the Central Valley
            needs more spaces for creativity and connection. We began by organizing
            local vendor markets in Kerman, bringing together small businesses
            and families.
          </p>
          <p className="text-lg text-brand-dark/70 mb-8 leading-relaxed">
            Today, we're building a movement. From the "Picnic & Playlist" 
            afternoons to our "Summer Paint & Sip" nights, we are proving that 
            art and community thrive right here in our hometown.
          </p>
          <Button href="/contact">Get in Touch</Button>
        </div>
        <div className="relative">
          <div className="absolute inset-0 bg-brand-yellow/20 translate-x-4 translate-y-4 rounded-[2rem] -z-10"></div>
          <img 
            src="https://images.unsplash.com/photo-1528605248644-14dd04022da1?auto=format&fit=crop&q=80&w=800" 
            alt="Community gathering" 
            className="rounded-[2rem] shadow-xl object-cover aspect-[4/5] w-full"
          />
        </div>
      </div>

      <div className="bg-white rounded-[3rem] p-10 md:p-16 shadow-sm border border-brand-dark/5 text-center relative overflow-hidden">
        <div className="absolute top-0 right-0 w-32 h-32 bg-brand-teal/10 rounded-bl-full"></div>
        <div className="absolute bottom-0 left-0 w-32 h-32 bg-brand-coral/10 rounded-tr-full"></div>
        
        <div className="max-w-3xl mx-auto relative z-10">
          <h2 className="text-3xl font-display font-bold mb-6 text-brand-dark">The Ultimate Goal</h2>
          <p className="text-2xl font-display text-brand-dark/80 mb-8 leading-relaxed font-medium">
            "To open a physical, permanent art studio in Kerman, CA where creators of all ages can learn, make, and sell."
          </p>
          <p className="text-brand-dark/70 mb-10">
            Every market you attend, every booth you rent, and every event you sponsor gets us one step closer to opening our doors. We envision a space with workshops, gallery walls for local artists, and a permanent home for The Design Hub Studios. 
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button variant="secondary" href="/sponsors">Support the Vision</Button>
            <Button variant="outline" href="/events">Attend Next Event</Button>
          </div>
        </div>
      </div>
    </div>
  );
}
