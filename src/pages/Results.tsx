import { Trophy, TrendingUp, Award, Star, GraduationCap, Target, ArrowUp } from 'lucide-react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { percent } from 'motion/react';

const Results = () => {
  const topRankers = [
    {
      name: "Saransh Gupta",
      previousRank: "65 Percentile",
      currentRank: "98.2 Percentile",
      exam: "JEE Main 2024",
      college: "IIT Bombay - Computer Science",
      improvement: 33.2,
      image: "/Testimonial/Saransh.webp"
    },
    {
      name: "Saquib Siddique", 
      previousRank: "80 Percentile",
      currentRank: "97.9 Percentile",
      exam: "JEE Main 2024",
      college: "IIT Delhi - Electrical Engineering",
      improvement: 17.9,
      image: "/Testimonial/Saquib.webp"
    },
    {
      name: "Navrun Singh",
      previousRank: "84.2 Percentile",
      currentRank: "97.6 Percentile",
      exam: "JEE Main 2024", 
      college: "IIIT Delhi",
      improvement: 13.4,
      image: "/Result/Navrun.webp"
    },
    {
      name: "Harsh Shankar Pandey",
      previousRank: "97.1 Percentile",
      currentRank: "99.5 Percentile",
      exam: "JEE Main 2024",
      college: "NIT Allahabad - Computer Science",
      improvement: 2.4,
      image: "/Result/harshPandey.webp"
    },
    {
      name: "Aadya Arya",
      previousRank: "84.7 Percentile",
      currentRank: "92 Percentile",
      exam: "JEE Main 2024",
      college: "NIT Allahabad - Computer Science ",
      improvement: 7.3,
      image: "/Result/Aadya.webp"
    },
    {
      name: "Ikjot Singh",
      previousRank: "74.5 Percentile",
      currentRank: "89.1 Percentile",
      exam: "JEE Main 2024",
      college: "NIT Allahabad - Computer Science",
      improvement: 14.6,
      image: "/Result/Ikjot.webp"
    },
    {
      name: "Pradeep Jangir",
      previousRank: "98.2 Percentile",
      currentRank: "98.9 Percentile",
      exam: "JEE Main 2024",
      college: "NIT Allahabad - Computer Science",
      improvement: 0.7,
      image: "/Result/Pradeep.webp"
    },
    {
      name: "Vatsal Dwivedi",
      previousRank: "80.5 Percentile",
      currentRank: "87.5 Percentile",
      exam: "JEE Main 2024",
      college: "NIT Allahabad - Computer Science",
      improvement: 7.0,
      image: "/Result/Vatsal.webp"
    }

  ];

  const yearlyStats = [
    {
      year: "2025",
      totalStudents:100 ,
      qualified: 83.30,
      successRate: 83.30,
      topRanks: 83.30,
      averageImprovement: 69701
    },
    {
      year: "2024",
      totalStudents: 81.25,
      qualified: 65.28,
      successRate: 59.57,
      topRanks: 78,
      averageImprovement: 178304
    },
    
    {
      year: "2023",
      totalStudents: 81.25,
      qualified: 65.28,
      successRate: 59.57,
      topRanks: 78,
      averageImprovement: 178304
    }
  ];

  const achievements = [
    {
      icon: Trophy,
      title: "20+ AIR Under 10000",
      description: "Students achieving ranks in top 100"
    },
    {
      icon: TrendingUp,
      title: "95% Success Rate",
      description: "Consistent performance year over year"
    },
    {
      icon: Award,
      title: "70K+ Rank Improvement",
      description: "Rank improvement from previous attempts"
    },
    {
      icon: Star,
      title: "100+ JEE Qualifiers",
      description: "Total students who cleared JEE Mains"
    }
  ];

  return (
    <div className="min-h-screen bg-white mt-10">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-to-br from-blue-900 via-blue-700 to-blue-600">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center text-white">
            <Trophy className="h-16 w-16 mx-auto mb-6 text-blue-200 animate-bounce" />
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 animate-fade-in">
              Success <span className="text-blue-200">Results</span>
            </h1>
            <p className="text-xl sm:text-2xl text-blue-100 mb-8 animate-fade-in" style={{ animationDelay: '200ms' }}>
              Celebrating Our Students' Outstanding Rank Improvements
            </p>
          </div>
        </div>
      </section>

      {/* Key Achievements */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
              Key <span className="text-blue-600">Achievements</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {achievements.map((achievement, index) => (
              <div 
                key={achievement.title}
                className="text-center group animate-fade-in"
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-8 rounded-2xl hover:shadow-lg transition-all duration-300 group-hover:scale-105">
                  <div className="inline-flex p-4 rounded-2xl bg-blue-600 bg-opacity-10 mb-6 group-hover:scale-110 transition-transform duration-300">
                    <achievement.icon className="h-8 w-8 text-blue-600" />  
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">{achievement.title}</h3>
                  <p className="text-gray-600">{achievement.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Top Rankers with Before/After */}
      <section className="py-20 bg-blue-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
              Top <span className="text-blue-600">Rank Improvements</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              See how our students dramatically improved their JEE ranks with dedicated preparation
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {topRankers.map((student, index) => (
              <div 
                key={student.name}
                className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden group animate-fade-in hover:scale-105"
                style={{ animationDelay: `${index * 200}ms` }}
              >
                <div className="bg-gradient-to-br from-blue-600 to-blue-800 p-6 text-white">
                  <div className="text-center mb-4">
                    
                    <div className="w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center mx-auto mb-3">
                      <img
                        src={student.image}
                        alt={student.name}
                        className="w-14 h-14 rounded-full object-cover"
                      />
                    </div>
                    <h3 className="text-xl font-bold">{student.name}</h3>
                  </div>
                  
                  {/* Rank Improvement Display */}
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <div className="bg-red-500/20 text-red-100 px-3 py-1 rounded text-sm font-semibold">
                        Before: {student.previousRank}
                      </div>
                      <ArrowUp className="h-5 w-5 text-blue-200" />
                    </div>
                    <div className="flex items-center justify-between">
                      <div className="bg-blue-400/30 text-blue-100 px-3 py-1 rounded text-sm font-semibold">
                        After: {student.currentRank}
                      </div>
                    </div>
                    <div className="text-center">
                      <div className="bg-blue-500 text-white px-3 py-1 rounded-full text-sm font-bold">
                        +{student.improvement} percentile increased!
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="p-6">
                  <p className="text-blue-600 font-semibold mb-2">{student.exam}</p>
                  <p className="text-gray-600 text-sm">{student.college}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Yearly Performance */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
              Yearly <span className="text-blue-600">Performance</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Consistent excellence in JEE results year after year
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {yearlyStats.map((year, index) => (
              <div 
                key={year.year}
                className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl p-8 animate-fade-in"
                style={{ animationDelay: `${index * 200}ms` }}
              >
                <div className="text-center mb-8">
                  <h3 className="text-3xl font-bold text-gray-900 mb-4">{year.year}</h3>
                  <div className="w-16 h-1 bg-blue-600 mx-auto rounded-full"></div>
                </div>

                <div className="space-y-6">
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600">% JEE Main Selection</span>
                    <span className="font-bold text-2xl text-gray-900">{year.totalStudents}%</span>
                  </div>
                  
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600">% JEE Advanced Selections</span>
                    <span className="font-bold text-2xl text-blue-600">{year.qualified}%</span>
                  </div>
                  
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600">% Students in IIT</span>
                    <span className="font-bold text-2xl text-blue-700">{year.successRate}%</span>
                  </div>
                  
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600">% Students Above 98%ile</span>
                    <span className="font-bold text-2xl text-blue-800">{year.topRanks}%</span>
                  </div>
                  
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600">Avg. Rank Improvement</span>
                    <span className="font-bold text-2xl text-blue-600">+{year.averageImprovement}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-gradient-to-br from-blue-900 via-blue-700 to-blue-600 text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <GraduationCap className="h-16 w-16 mx-auto mb-8 text-blue-200 animate-pulse" />
            <h2 className="text-4xl sm:text-5xl font-bold mb-8">
              Ready to Improve Your JEE Rank?
            </h2>
            <p className="text-xl sm:text-2xl text-blue-100 leading-relaxed mb-12">
              Join hundreds of students who have dramatically improved their ranks with our proven methodology.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <button className="bg-white text-blue-600 px-8 py-4 rounded-full font-semibold text-lg hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl">
                Start Your Journey
                <Target className="inline-block ml-2 h-5 w-5" />
              </button>
              
              <button className="border-2 border-blue-200 text-blue-100 px-8 py-4 rounded-full font-semibold text-lg hover:bg-blue-200 hover:text-blue-600 transition-all duration-300">
                View All Results
                <Award className="inline-block ml-2 h-5 w-5" />
              </button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Results;
