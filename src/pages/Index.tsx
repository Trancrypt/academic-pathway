
import { Link } from "react-router-dom";
import Navigation from "../components/Navigation";
import { Avatar, AvatarImage, AvatarFallback } from "../components/ui/avatar";

const Index = () => {
  return (
    <div className="min-h-screen bg-gray-50 relative">
      {/* Background image */}
      <div 
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: 'url("https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7")',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          opacity: '0.1'
        }}
      />
      
      <Navigation />
      
      <main className="container mx-auto px-4 py-12 relative z-10">
        <section className="max-w-4xl mx-auto animate-fade-in">
          <div className="flex items-center gap-6 mb-6">
            <Avatar className="h-24 w-24">
              <AvatarImage src="/placeholder.svg" alt="Thato Thapo" />
              <AvatarFallback>TT</AvatarFallback>
            </Avatar>
            <div>
              <h1 className="text-4xl font-bold text-primary">
                Thato Thapo
              </h1>
              <p className="text-xl text-gray-600 mt-4">
                Masters graduate in Applied Mathematics from the University of Cape Town focusing on Theoretical Cosmology. A passion for physics and championing science outreach.
              </p>
            </div>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h2 className="text-2xl font-bold text-primary mb-4">Research Interests</h2>
              <ul className="space-y-2 text-gray-600">
                <li>• Quantum Field Theory</li>
                <li>• String Theory</li>
                <li>• Particle Physics</li>
                <li>• Quantum Gravity</li>
              </ul>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h2 className="text-2xl font-bold text-primary mb-4">Education</h2>
              <div className="space-y-4">
                <div>
                  <h3 className="font-medium text-gray-900">Masters in Physics</h3>
                  <p className="text-gray-600">University Name, 2023</p>
                </div>
                <div>
                  <h3 className="font-medium text-gray-900">Bachelor in Physics</h3>
                  <p className="text-gray-600">University Name, 2021</p>
                </div>
              </div>
            </div>
          </div>
          
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-primary mb-6">Latest Blog Posts</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <Link to="/blog/1" className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
                <h3 className="font-bold text-xl mb-2">Recent Developments in String Theory</h3>
                <p className="text-gray-600">Exploring the latest breakthroughs in string theory and their implications...</p>
              </Link>
              <Link to="/blog/2" className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
                <h3 className="font-bold text-xl mb-2">Quantum Computing Progress</h3>
                <p className="text-gray-600">Analyzing recent advancements in quantum computing and their potential impact...</p>
              </Link>
            </div>
          </section>
        </section>
      </main>
    </div>
  );
};

export default Index;
