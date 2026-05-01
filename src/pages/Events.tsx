import { Calendar, MapPin, Clock, ArrowRight } from "lucide-react";
import { Button } from "../components/ui/Button";

const upcomingEvents = [
  {
    id: 1,
    title: "Picnic and Playlists",
    date: "May 23, 2026",
    time: "1:00 PM - 7:00 PM",
    location: "Trinis Park, Kerman CA",
    description: "Join us for an afternoon of music, delicious food vendors, and local crafts. Bring a blanket, lawn chair, grab some food and enjoy the community.",
    image: "https://images.unsplash.com/photo-1533174000220-410a0e5b72e5?auto=format&fit=crop&q=80&w=800",
    status: "Selling Fast"
  },
  {
    id: 3,
    title: "Dough for a Cause Fundraiser",
    date: "June 14, 2026",
    time: "9:00 AM - 2:00 PM",
    location: "Kateys Park, Kerman CA",
    description: "Join us in Kerman, CA for Dough for a Cause, a community fundraiser supporting the Rizo’s Pizzeria family and The Design Hub Studios. Half of all vendor fees will be donated directly to help reunite their family, making every sign-up a meaningful contribution. The event will feature local vendors, artists, and food businesses coming together for a great cause. To participate as a vendor, text (559) 515-9558 with your name, business name, and what you sell.",
    image: "https://images.unsplash.com/photo-1555244162-803834f70033?auto=format&fit=crop&q=80&w=800",
    status: "Upcoming"
  },
  {
    id: 2,
    title: "Summer Paint & Sip",
    date: "June 15, 2026",
    time: "6:00 PM - 9:00 PM",
    location: "Kerman Community Center",
    description: "A guided painting session with local artists. Perfect for date night or a friends' night out. All materials provided.",
    image: "https://images.unsplash.com/photo-1460661419201-fd4cecdf8a8b?auto=format&fit=crop&q=80&w=800",
    status: "Open"
  }
];

const pastEvents = [
  "https://images.unsplash.com/photo-1511895426328-dc8714191300?auto=format&fit=crop&q=80&w=600",
  "https://images.unsplash.com/photo-1472653431158-6364773b2a56?auto=format&fit=crop&q=80&w=600",
  "https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&q=80&w=600",
  "https://images.unsplash.com/photo-1555244162-803834f70033?auto=format&fit=crop&q=80&w=600",
  "https://images.unsplash.com/photo-1528605248644-14dd04022da1?auto=format&fit=crop&q=80&w=600",
  "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?auto=format&fit=crop&q=80&w=600",
];

export default function Events() {
  return (
    <div className="flex flex-col w-full max-w-6xl mx-auto px-6 py-12 md:py-20">
      <div className="text-center mb-16">
        <h1 className="text-4xl md:text-6xl font-display font-bold text-brand-dark mb-6">Upcoming Events</h1>
        <p className="text-lg md:text-xl text-brand-dark/70 max-w-2xl mx-auto">
          Mark your calendars. Here's where the community comes together.
        </p>
      </div>

      <div className="space-y-12 mb-24">
        {upcomingEvents.map((event) => (
          <div key={event.id} className="bg-white rounded-3xl overflow-hidden shadow-sm border border-gray-100 flex flex-col md:flex-row group transition-all hover:shadow-md">
            <div className="md:w-2/5 relative overflow-hidden h-64 md:h-auto">
              <img 
                src={event.image} 
                alt={event.title} 
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-md px-3 py-1 rounded-full text-xs font-bold text-brand-dark tracking-wider uppercase">
                {event.status}
              </div>
            </div>
            <div className="p-8 md:w-3/5 flex flex-col justify-center">
              <h2 className="text-3xl font-display font-bold mb-4">{event.title}</h2>
              <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 mb-6 text-sm text-brand-dark/70 font-medium">
                <div className="flex items-center gap-2">
                  <Calendar className="text-brand-coral w-4 h-4" /> {event.date}
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="text-brand-coral w-4 h-4" /> {event.time}
                </div>
                <div className="flex items-center gap-2">
                  <MapPin className="text-brand-coral w-4 h-4" /> {event.location}
                </div>
              </div>
              <p className="text-brand-dark/80 mb-8 leading-relaxed">
                {event.description}
              </p>
              <div className="flex flex-wrap gap-4 mt-auto">
                <Button>Attend / RSVP</Button>
                <Button variant="outline" href="/vendor">Vending Info</Button>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="text-center mb-12">
        <h2 className="text-3xl font-display font-bold text-brand-dark mb-4">Past Memories</h2>
        <p className="text-brand-dark/70 max-w-2xl mx-auto">
          Take a look at the good times we've shared. Don't miss out on the next one!
        </p>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 gap-4 lg:gap-6">
        {pastEvents.map((img, i) => (
          <div key={i} className={`rounded-2xl overflow-hidden aspect-square ${i === 0 || i === 3 ? 'md:col-span-2 md:aspect-auto' : ''}`}>
            <img src={img} alt="Past event memory" className="w-full h-full object-cover hover:scale-110 transition-transform duration-700" />
          </div>
        ))}
      </div>
    </div>
  );
}
