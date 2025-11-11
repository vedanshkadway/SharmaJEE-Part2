import { Star, Quote } from 'lucide-react';

const TestimonialsSection = () => {
  const testimonials = [
  {
    id: 1,
    name: "Aditya Yadav",
    rank: "IIT Delhi",
    image: "/Testimonial/Aditya.webp",
    text: "My IIT journey began late, but finding the right teacher changed everything. Vaibhav Sir made boring topics interesting and supported me every step of the way.",
    rating: 5,
    year: "2024"
  },
  {
    id: 2,
    name: "Aviral Agarwal",
    rank: "IIT Kharagpur",
    image: "/Testimonial/Aviral.webp",
    text: "I had settled for an average rank, but Vaibhav Sir made me believe I could achieve under AIR 1000. That belief changed everything and helped me succeed.",
    rating: 5,
    year: "2024"
  },
  {
    id: 3,
    name: "Dhruv Dhupar",
    rank: "IIT Delhi",
    image: "/Testimonial/Dhruv.webp",
    text: "My marks weren’t great at first, but Vaibhav Bhaiya’s support made all the difference. I became confident, and his guidance extended even after JEE.",
    rating: 5,
    year: "2024"
  },
  {
    id: 4,
    name: "Harsh Shankar Pandey",
    rank: "NIT Allahabad",
    image: "/Testimonial/harshPandey.webp",
    text: "Vaibhav Bhaiya’s calm and clear teaching style made Maths easy to grasp. His mentorship continued even after I got into NIT, helping me beyond academics.",
    rating: 5,
    year: "2024"
  },
  {
    id: 5,
    name: "Ishwin Kumar",
    rank: "IIT Kanpur",
    image: "/Testimonial/Ishwin.webp",
    text: "This journey taught me consistency. Vaibhav Bhaiya treated us like younger siblings and believed in us even when we doubted ourselves.",
    rating: 5,
    year: "2024"
  },
  {
    id: 6,
    name: "Molik Tyagi",
    rank: "IIT Mandi",
    image: "/Testimonial/MolikTyagi.webp",
    text: "Balancing boards and JEE was tough, but Vaibhav Bhaiya helped me through it. His motivation after my Olympiad failure kept me going strong.",
    rating: 5,
    year: "2024"
  },
  {
    id: 7,
    name: "Mudit Tiwari",
    rank: "IIT Indore",
    image: "/Testimonial/Mudit.webp",
    text: "Vaibhav Bhaiya is approachable, humorous, and motivating. His positive attitude made every class enjoyable and learning stress-free.",
    rating: 5,
    year: "2024"
  },
  {
    id: 8,
    name: "Navrun Singh",
    rank: "IIIT Delhi",
    image: "/Testimonial/Navrun.webp",
    text: "My JEE journey had its ups and downs, but Vaibhav Sir guided me through it all. After my first Mains attempt, his mentorship helped me recover and improve.",
    rating: 5,
    year: "2024"
  },
  
  {
    id: 9,
    name: "Subal Manchanda",
    rank: "IIT Hyderabad",
    image: "/Testimonial/Subal.webp",
    text: "When Vaibhav Bhaiya taught Maths, four hours felt like minutes. His sessions were fun, engaging, and something I’ll always cherish.",
    rating: 5,
    year: "2024"
  },
  {
    id: 10,
    name: "Utkarsh Garg",
    rank: "IIIT Delhi",
    image: "/Testimonial/UtkarshGarg.webp",
    text: "He wasn’t just a teacher; he was a mentor. His practical advice and chill class environment made learning smooth and effective.",
    rating: 5,
    year: "2024"
  }
];

  
  return (<>
    
    <section id="testimonials" className="py-20 bg-gradient-to-br from-blue-50 to-purple-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
            Success <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Stories</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Hear from our students who have achieved their dreams and secured top ranks in JEE.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <div 
            key={testimonial.id}
            className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 p-8 relative overflow-hidden animate-fade-in hover:scale-105"
            style={{ animationDelay: `${index * 150}ms` }}
            >
              {/* Quote Icon */}
              <div className="absolute top-4 right-4 opacity-10 group-hover:opacity-20 transition-opacity duration-300">
                <Quote className="h-16 w-16 text-blue-600" />
              </div>

              {/* Rating */}
              <div className="flex items-center space-x-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                ))}
              </div>

              {/* Testimonial Text */}
              <p className="text-gray-700 leading-relaxed mb-6 text-lg italic">
                "{testimonial.text}"
              </p>

              {/* Student Info */}
              <div className="flex items-center space-x-4">
                <div className="relative">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-14 h-14 rounded-full object-cover ring-4 ring-blue-100 group-hover:ring-blue-200 transition-all duration-300"
                    />
                  <div className="absolute -bottom-1 -right-1 bg-green-500 text-white text-xs px-2 py-1 rounded-full font-bold">
                    {testimonial.year}
                  </div>
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 text-lg">{testimonial.name}</h4>
                  <p className="text-blue-600 font-semibold">{testimonial.rank}</p>
                </div>
              </div>

              {/* Decorative Element */}
              <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 to-purple-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
            </div>
          ))}
        </div>

        <div className="text-center mt-16">
          <div className="inline-flex items-center space-x-6 bg-white px-8 py-6 rounded-2xl shadow-lg">
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-600 mb-1">50+</div>
              <div className="text-gray-600 text-sm">JEE Qualifiers</div>
            </div>
            <div className="w-px h-12 bg-gray-200" />
            <div className="text-center">
              <div className="text-3xl font-bold text-purple-600 mb-1">10+</div>
              <div className="text-gray-600 text-sm">AIR Under 5000</div>
            </div>
            <div className="w-px h-12 bg-gray-200" />
            <div className="text-center">
              <div className="text-3xl font-bold text-orange-600 mb-1">95%</div>
              <div className="text-gray-600 text-sm">Success Rate</div>
            </div>
          </div>
        </div>
      </div>
    </section>
          </>
  );
};

export default TestimonialsSection;
