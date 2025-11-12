import { useState } from 'react';
import { Star, Quote, Play, Award, Users, MessageSquare } from 'lucide-react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import TestimonialsSection from '@/components/TestimonialsSection';
import { useNavigate } from 'react-router-dom';


const Testimonials = () => {
  const navigate = useNavigate();
 const detailedTestimonials = [
  {
    id: 1,
    name: "Aashna Suman",
    college: "",
    rank: "",
    image: "/Testimonial/Aashna.webp",
    rating: 5,
    testimonial:
      "This journey was a big step for me. Vaibhav Bhaiya has been one of the most helpful and interactive teachers I’ve ever met. More than a teacher, he feels like a friend who truly understands his students. His emotional support, encouragement, and unique teaching style kept me motivated and confident throughout my preparation.",
    videoUrl: "https://www.youtube.com/embed/ZJja6pMCGhI",
    year: "2025",
  },
  {
    id: 2,
    name: "Aditya Yadav",
    college: "IIT Delhi",
    rank: "",
    image: "/Testimonial/Aditya.webp",
    rating: 5,
    testimonial:
      "My IIT journey started late, but Vaibhav Sir changed everything. His engaging style made even boring math topics fun. I once texted him at 3 AM with a doubt, and he replied instantly! His constant guidance helped me crack JEE Advanced with confidence, and that emotional connection with him still remains strong.",
    videoUrl: "https://www.youtube.com/embed/8g_5jr9HXXo",
    year: "2025",
  },
  {
    id: 3,
    name: "Ananya Bhardwaj",
    college: "IGDTUW",
    rank: "",
    image: "/Testimonial/Ananya.webp",
    rating: 5,
    testimonial:
      "Math was my weakest subject. I almost gave up, but after personal classes with Vaibhav Sir, everything changed. He tracked my tests, gave me focused strategies, and helped me rebuild my confidence. His mentorship made me believe I could actually enjoy and excel at Math.",
    videoUrl: "https://www.youtube.com/embed/4A4Qy1eNApw",
    year: "2025",
  },
  {
    id: 4,
    name: "Aniket Saxena",
    college: "",
    rank: "",
    image: "/Testimonial/Aniket.webp",
    rating: 5,
    testimonial:
      "This journey taught me discipline and the importance of deadlines. Vaibhav Bhaiya was like an elder brother—someone I could discuss anything with. His classes were full of energy, humor, and deep learning. I even started loving coordinate geometry, which I once disliked!",
    videoUrl: "https://www.youtube.com/embed/aExO7EJPBz4",
    year: "2023",
  },
  {
    id: 5,
    name: "Anshika Sharma",
    college: "IGDTUW",
    rank: "",
    image: "/Testimonial/Anshika.webp",
    rating: 5,
    testimonial:
      "Vaibhav Sir was more than a teacher—he felt like a caring elder brother. He could tell when I didn’t understand something just by my expression and patiently explained it again without making me feel bad. His constant motivation helped me push through my drop year.",
    videoUrl: "https://www.youtube.com/embed/dPRYkhdDMkM",
    year: "2025",
  },
  {
    id: 6,
    name: "Anushree",
    college: "IGDTUW",
    rank: "",
    image: "/Testimonial/Anushree.webp",
    rating: 5,
    testimonial:
      "This journey boosted my confidence, especially in Math. Vaibhav Sir taught every concept in depth and made sure every doubt was cleared—no matter how many times I asked. That patience and dedication made me love learning again.",
    videoUrl: "https://www.youtube.com/embed/YL6XEA81SdI",
    year: "2025",
  },
  {
    id: 7,
    name: "Arpit Singh",
    college: "",
    rank: "",
    image: "/Testimonial/ArpitSingh.webp",
    rating: 5,
    testimonial:
      "This journey taught me how to handle pressure. Just like Chandragupta had Chanakya, I had Vaibhav Sir—guiding me every step of the way. He supported me academically and personally. Whatever I’ve achieved today is because of his mentorship.",
    videoUrl: "https://www.youtube.com/embed/XULkrYhcbaM",
    year: "2025",
  },
  {
    id: 8,
    name: "Aviral Agarwal, IIT Kharagpur",
    college: "IIT Kharagpur",
    rank: "",
    image: "/Testimonial/Aviral.webp",
    rating: 5,
    testimonial:
      "My JEE journey was transformative. I had mentally settled for an average rank, but Vaibhav Sir made me believe that even under AIR 1000 was possible. That belief changed my mindset completely and helped me reach my goal.",
    videoUrl: "https://www.youtube.com/embed/mA7j85gudHY",
    year: "2024",
  },
  {
    id: 9,
    name: "Avni Agnihotri",
    college: "IGDTUW",
    rank: "",
    image: "/Testimonial/Avni.webp",
    rating: 5,
    testimonial:
      "The JEE journey taught me perseverance and discipline. Vaibhav Sir made Maths enjoyable, clearing tough concepts with patience. His humor kept the class fun, and his guidance helped me bridge the gap between Mains and Advanced.",
    videoUrl: "https://www.youtube.com/embed/4QE7Ni3taHg",
    year: "2024",
  },
  {
    id: 10,
    name: "Dhruv Dhupar",
    college: "IIT Delhi",
    rank: "",
    image: "/Testimonial/Dhruv.webp",
    rating: 5,
    testimonial:
      "When I started coaching, my marks were low, but Vaibhav Bhaiya made me feel comfortable sharing doubts. Gradually, my confidence grew, and I started performing better. He even guided me about college life later on.",
    videoUrl: "https://www.youtube.com/embed/zfgKf6p5Pwc",
    year: "2025",
  },
  {
    id: 11,
    name: "Harsh Shankar Pandey, NIT Allahabad",
    college: "NIT Allahabad",
    rank: "",
    image: "/Testimonial/harshPandey.webp",
    rating: 5,
    testimonial:
      "Nothing in life comes easy—this journey proved it. Vaibhav Bhaiya’s calm, concept-driven approach made Maths feel simple. His mentoring continued even after I joined college, and I’m grateful for his constant support.",
    videoUrl: "https://www.youtube.com/embed/aOCtJAlDOPE",
    year: "2025",
  },
  {
    id: 12,
    name: "Ikjot Singh",
    college: "",
    rank: "",
    image: "/Testimonial/Ikjot.webp",
    rating: 4,
    testimonial:
      "This journey taught me self-discipline and how to prioritize. Vaibhav Bhaiya supported me through every high and low. His mentorship and care truly shaped my growth.",
    videoUrl: "https://www.youtube.com/embed/zT1xWF0fZWo",
    year: "2025",
  },
  {
    id: 13,
    name: "Ishank Gupta",
    college: "IIIT Delhi",
    rank: "",
    image: "/Testimonial/Ishank.webp",
    rating: 5,
    testimonial:
      "At my lowest point in Class 12, I couldn’t solve even simple problems. Vaibhav Bhaiya was always there to guide me. His advice — 'Just keep going, don’t stop' — gave me strength to push through.",
    videoUrl: "https://www.youtube.com/embed/W1KGIA-Sybw",
    year: "2025",
  },
  {
    id: 14,
    name: "Ishwin Kumar",
    college: "IIT Kanpur",
    rank: "",
    image: "/Testimonial/Ishwin.webp",
    rating: 5,
    testimonial:
      "Consistency is what I learned from Vaibhav Bhaiya. His teaching was clear and engaging, and his emotional support made tough times easier. He believed in me even when I doubted myself.",
    videoUrl: "https://www.youtube.com/embed/TDfjBFTBBcs",
    year: "2025",
  },
  {
    id: 15,
    name: "Mohammad Saqib",
    college: "DTU",
    rank: "",
    image: "/Testimonial/Saqib.webp",
    rating: 5,
    testimonial:
      "As a dropper, this journey was my second chance. Vaibhav Bhaiya was approachable, supportive, and always there to help—academically and personally. His mentorship made my JEE prep much smoother.",
    videoUrl: "https://www.youtube.com/embed/l7iY3TpIbe4",
    year: "2025",
  },
  {
    id: 16,
    name: "Molik Tyagi",
    college: "IIT Mandi",
    rank: "",
    image: "/Testimonial/MolikTyagi.webp",
    rating: 5,
    testimonial:
      "Balancing boards and JEE in 12th was hard, but Vaibhav Bhaiya handled all my Maths doubts. When I failed Olympiads, his personal motivation lifted me up. His support meant the world to me.",
    videoUrl: "https://www.youtube.com/embed/3a3ZkoRnrAQ",
    year: "2025",
  },
  {
    id: 17,
    name: "Chandramauli Joarder",
    college: "",
    rank: "",
    image: "/Testimonial/Chandramauli.webp",
    rating: 5,
    testimonial:
      "My JEE journey taught me resilience and hard work. Vaibhav Bhaiya’s humor made classes stress-free and kept everyone engaged. He created a positive environment that made even tough topics enjoyable.",
    videoUrl: "https://www.youtube.com/embed/KKEWiMNYU5Q",
    year: "2024",
  },
  {
    id: 18,
    name: "Mudit Tiwari",
    college: "IIT Indore",
    rank: "",
    image: "/Testimonial/Mudit.webp",
    rating: 5,
    testimonial:
      "Vaibhav Bhaiya is approachable, funny, and an amazing mentor. His humor and personality make it easy to discuss problems without hesitation. His sessions were both helpful and fun.",
    videoUrl: "https://www.youtube.com/embed/pl7fCtEdXYc",
    year: "2025",
  },
  {
    id: 19,
    name: "Navrun Singh",
    college: "IIIT Delhi",
    rank: "",
    image: "/Testimonial/Navrun.webp",
    rating: 5,
    testimonial:
      "My JEE journey had ups and downs, but Vaibhav Sir guided me throughout. After my first JEE Mains didn’t go well, he helped me reset and prepare better for the next attempt. His mentorship was invaluable.",
    videoUrl: "https://www.youtube.com/embed/on1xt06SQTI",
    year: "2024",
  },
  {
    id: 20,
    name: "Pranjal Gangwani",
    college: "BITS Goa",
    rank: "",
    image: "/Testimonial/Pranjal.webp",
    rating: 5,
    testimonial:
      "From 10th grade onward, Vaibhav Bhaiya has been more than just a teacher. He made me fall in love with Math and taught me how to stay calm under pressure. His care and positivity inspired me a lot.",
    videoUrl: "https://www.youtube.com/embed/SOUzmnEFBh8",
    year: "2025",
  },
  {
    id: 21,
    name: "Priyal Anand",
    college: "IGDTUW",
    rank: "",
    image: "/Testimonial/Priyal.webp",
    rating: 5,
    testimonial:
      "This journey taught me consistency. Vaibhav Bhaiya reminded us that it’s not about studying for hours but showing up every day. His advice to focus on the process, not just results, changed my approach completely.",
    videoUrl: "https://www.youtube.com/embed/dFf4LuNuJ8o",
    year: "2024",
  },
  {
    id: 22,
    name: "Riddhi Sood",
    college: "",
    rank: "",
    image: "/Testimonial/Riddhi.webp",
    rating: 5,
    testimonial:
      "This journey was challenging, but Vaibhav Bhaiya guided and supported me through it all. He connected personally with every student and taught us that staying strong is a victory in itself.",
    videoUrl: "https://www.youtube.com/embed/hVMFe6Kp3dA",
    year: "2025",
  },
  {
    id: 23,
    name: "Subal Manchanda, IIT Hyderabad",
    college: "IIT Hyderabad",
    rank: "",
    image: "/Testimonial/Subal.webp",
    rating: 5,
    testimonial:
      "Whenever Vaibhav Bhaiya taught Maths, four hours passed like minutes. His sessions were both informative and fun. Learning from him was one of the best parts of my journey.",
    videoUrl: "https://www.youtube.com/embed/rc2JwEuNBaE",
    year: "2025",
  },
  {
    id: 24,
    name: "Utkarsh Garg",
    college: "IIIT Delhi",
    rank: "",
    image: "/Testimonial/UtkarshGarg.webp",
    rating: 5,
    testimonial:
      "He wasn’t just a teacher; he was a mentor. His practical guidance and relaxed classroom environment made learning smooth and enjoyable. He truly shaped my approach to studying.",
    videoUrl: "https://www.youtube.com/embed/joelTss_TDw",
    year: "2025",
  },
];




  const stats = [
    { number: "1000+", label: "Happy Students", icon: Users },
    { number: "95%", label: "Success Rate", icon: Award },
    { number: "4.9/5", label: "Average Rating", icon: Star },
    { number: "500+", label: "Video Reviews", icon: Play }
  ];

  const years = ["All", "2025", "2024"];
  const [selectedYear, setSelectedYear] = useState("All");

  const filteredTestimonials = selectedYear === "All" 
    ? detailedTestimonials 
    : detailedTestimonials.filter(t => t.year === selectedYear);

  return (
    <div className="min-h-screen bg-white mt-10">
      <Header />
      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-to-br from-blue-900 via-blue-700 to-blue-600">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center text-white">
            <MessageSquare className="h-16 w-16 mx-auto mb-6 text-blue-200 animate-bounce" />
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 animate-fade-in">
              Student <span className="bg-gradient-to-r from-blue-200 to-blue-400 bg-clip-text text-transparent">Testimonials</span>
            </h1>
            <p className="text-xl sm:text-2xl text-blue-100 mb-8 animate-fade-in" style={{ animationDelay: '200ms' }}>
              Hear What Our Successful Students Have to Say
            </p>
          </div>
        </div>
      </section>
      <TestimonialsSection/>

      {/* Stats Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 max-w-4xl mx-auto">
            {stats.map((stat, index) => (
              <div 
                key={stat.label}
                className="text-center group animate-fade-in"
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-6 rounded-2xl mb-4 group-hover:scale-105 transition-transform duration-300">
                  <stat.icon className="h-8 w-8 text-blue-600 mx-auto mb-4" />
                  <div className="text-3xl sm:text-4xl font-bold text-gray-900 mb-2">{stat.number}</div>
                  <div className="text-gray-600 font-medium">{stat.label}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Filter Section */}
      <section className="py-8 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-4">
            {years.map((year) => (
              <button
                key={year}
                onClick={() => setSelectedYear(year)}
                className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
                  selectedYear === year
                    ? 'bg-blue-600 text-white shadow-lg'
                    : 'bg-white text-gray-600 hover:bg-blue-50 hover:text-blue-600 shadow-md'
                }`}
              >
                {year}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Detailed Testimonials */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-7xl mx-auto">
            {filteredTestimonials.map((testimonial, index) => (
              <div 
                key={testimonial.id}
                className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 p-8 relative overflow-hidden group animate-fade-in"
                style={{ animationDelay: `${index * 150}ms` }}
              >
                {/* Quote Background */}
                <div className="absolute top-4 right-4 opacity-5 group-hover:opacity-10 transition-opacity duration-300">
                  <Quote className="h-20 w-20 text-blue-600" />
                </div>

                {/* Header */}
                <div className="flex items-start justify-between mb-6">
                  <div className="flex items-center space-x-4">
                    <div className="relative">
                      <img
                        src={testimonial.image}
                        alt={testimonial.name}
                        className="w-16 h-16 rounded-full object-cover ring-4 ring-blue-100 group-hover:ring-blue-200 transition-all duration-300"
                      />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-900">{testimonial.name}</h3>
                      <p className="text-blue-600 font-semibold text-sm">{testimonial.rank}</p>
                      <p className="text-gray-600 text-sm">{testimonial.college}</p>
                    </div>
                  </div>
                  
                  {/* Play Button */}
                  <button onClick={() => window.open(testimonial.videoUrl, "_blank")} className="bg-blue-600 text-white p-3 rounded-full hover:bg-blue-700 transition-colors duration-300 group-hover:scale-110">
                    <Play className="h-5 w-5" />
                  </button>
                </div>

                {/* Rating */}
                <div className="flex items-center space-x-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                  ))}
                  <span className="ml-2 text-sm text-gray-600">({testimonial.rating}.0)</span>
                </div>

                {/* Testimonial Text */}
                <p className="text-gray-700 leading-relaxed text-base italic mb-6">
                  "{testimonial.testimonial}"
                </p>

                {/* Bottom Gradient */}
                <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 to-purple-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call-to-Action */}
      <section className="py-20 bg-gradient-to-br from-blue-900 via-blue-700 to-blue-600 text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <Award className="h-16 w-16 mx-auto mb-8 text-blue-200 animate-pulse" />
            <h2 className="text-4xl sm:text-5xl font-bold mb-8">
              Ready to Write Your Success Story?
            </h2>
            <p className="text-xl sm:text-2xl text-blue-100 leading-relaxed mb-12">
              Join thousands of students who have achieved their IIT dreams with SharmaJEE's proven methodology.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <button onClick={()=>navigate("/")} className="bg-gradient-to-r from-blue-500 to-blue-700 text-white px-8 py-4 rounded-full font-semibold text-lg hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl">
                Start Your Journey Today
                <Star className="inline-block ml-2 h-5 w-5" />
              </button>
              
              <button onClick={()=>navigate("/results")} className="border-2 border-white text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-white hover:text-blue-600 transition-all duration-300">
                Watch More Reviews
                <Play className="inline-block ml-2 h-5 w-5" />
              </button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Testimonials;
