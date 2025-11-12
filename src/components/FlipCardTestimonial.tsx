// import { useState } from "react";
// import { Play, Quote, Star, X } from 'lucide-react';
// import { Button } from '@/components/ui/button';
// import Image from "next/image";
// interface FlipCardTestimonialProp {
//     id: number;
//   frontContent: React.ReactNode;
//   backYoutubeUrl: string;
//   studentName: string;
//   collegeName: string;
//   studentPhoto: string;
//   studentRank: string;
//   rating: number;
//   year: string;
//   className?: string;

// }

// export default function FlipCardTestimonial({
//     id,
//   frontContent,
//   backYoutubeUrl,
//   studentName,
//   collegeName,
//   studentPhoto,
//     studentRank,
//     rating,
//     year,
//   className = "transform transition duration-300 hover:scale-105 hover:bg-red-50"

// }: FlipCardTestimonialProp) {
//   const [isFlipped, setIsFlipped] = useState(false);
//   const [videoSrc, setVideoSrc] = useState(backYoutubeUrl); // state to control iframe src

//   const handleFlip = () => {
//     setVideoSrc(backYoutubeUrl); // Reset video src when flipped
//     setIsFlipped(true);
//   };

//   const handleUnflip = () => {
//     setIsFlipped(false);
//     setVideoSrc(""); // Clear the video src to stop playback
//   };

//   return (
//     <div className={`relative w-120 h-80 bg-white rounded-3xl hover:bg-blue [perspective:1000px] ${className}`}>
//       <div
//         className={`relative w-full h-full transition-transform duration-700 [transform-style:preserve-3d] ${isFlipped ? "[transform:rotateY(180deg)]" : ""
//           }`}
//       >
//         {/* Front Side */}
//         <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
//           (
//             <div 
//             key={id}
//             className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 p-8 relative overflow-hidden animate-fade-in hover:scale-105"
//             style={{ animationDelay: `${id * 150}ms` }}
//             >
//               {/* Quote Icon */}
//               <div className="absolute top-4 right-4 opacity-10 group-hover:opacity-20 transition-opacity duration-300">
//                 <Quote className="h-16 w-16 text-blue-600" />
//               </div>

//               {/* Rating */}
//               <div className="flex items-center space-x-1 mb-4">
//                 {[...Array(rating)].map((_, i) => (
//                   <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
//                 ))}
//               </div>

//               {/* Testimonial Text */}
//               <p className="text-gray-700 leading-relaxed mb-6 text-lg italic">
//                 "{frontContent}"
//               </p>

//               {/* Student Info */}
//               <div className="flex items-center space-x-4">
//                 <div className="relative">
//                   <img
//                     src={studentPhoto}
//                     alt={studentName}
//                     className="w-14 h-14 rounded-full object-cover ring-4 ring-blue-100 group-hover:ring-blue-200 transition-all duration-300"
//                     />
                  
//                 </div>
//                 <div>
//                   <h4 className="font-bold text-gray-900 text-lg">{studentName}</h4>
//                   <p className="text-blue-600 font-semibold">{studentRank}</p>
//                 </div>
//               </div>

//               {/* Decorative Element */}
//               <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 to-purple-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
//             </div>
//           )
//         </div>

//         {/* Back Side with YouTube Iframe */}
//         <div className="absolute w-full h-full bg-white  rounded-xl p-4 flex flex-col [backface-visibility:hidden] [transform:rotateY(180deg)] text-white relative">
//           <Button
//             onClick={handleUnflip}
//             variant="secondary"
//             size="sm"
//             className="rounded-full w-8 h-8 p-0"
//           >
//             <X className="w-4 h-4" />
//           </Button>

//           <div className="text-center mb-2">
//             <h2 className="text-xl font-bold text-black">{studentName}</h2>
//             <p className="text-sm text-gray-800">{collegeName}</p>
//           </div>

//           <div className="flex-grow flex items-center justify-center mt-4">
//             {videoSrc && (
//               <iframe
//                 width="100%"
//                 height="100%"
//                 src={videoSrc}
//                 title={`YouTube video of ${studentName}`}
//                 allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
//                 allowFullScreen
//                 className="rounded-lg w-full h-full"
//               ></iframe>
//             )}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }
