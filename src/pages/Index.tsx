
import { useState } from "react";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import WhyChooseUs from "@/components/WhyChooseUs";
import FeaturedListings from "@/components/FeaturedListings";
import PopularNeighborhoods from "@/components/PopularNeighborhoods";
import Testimonials from "@/components/Testimonials";
import BlogPreview from "@/components/BlogPreview";
import FinalCTA from "@/components/FinalCTA";
import SearchFilters from "@/components/SearchFilters";
import { allListings, filterListings, type Listing } from "@/data/listings";
import Footer from "@/components/Footer";

const Index = () => {
  const [filteredListings, setFilteredListings] = useState<Listing[]>(allListings);

  const handleFiltersChange = (filters: any) => {
    const filtered = filterListings(allListings, filters);
    setFilteredListings(filtered);
  };

  return (
    <div className="min-h-screen">
      <Navbar />
      <HeroSection />
      
      {/* Search Filters Section */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Find Your Perfect Property</h2>
            <p className="text-lg text-gray-600">Use our advanced filters to discover properties that match your needs</p>
          </div>
          <SearchFilters onFiltersChange={handleFiltersChange} />
        </div>
      </section>

      {/* Filtered Results */}
      {filteredListings.length !== allListings.length && (
        <section className="py-12 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-2">
                Search Results ({filteredListings.length} properties found)
              </h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {filteredListings.map((listing) => (
                <div key={listing.id} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow">
                  <img
                    src={listing.image}
                    alt={listing.title}
                    className="w-full h-48 object-cover"
                  />
                  <div className="p-4">
                    <div className="flex justify-between items-start mb-2">
                      <h3 className="font-semibold text-lg text-gray-900">{listing.title}</h3>
                      <span className={`px-2 py-1 rounded text-xs font-medium ${
                        listing.type === 'Buy' ? 'bg-orange-100 text-orange-800' : 'bg-blue-100 text-blue-800'
                      }`}>
                        {listing.type}
                      </span>
                    </div>
                    <p className="text-gray-600 text-sm mb-2">{listing.location}</p>
                    <div className="flex justify-between items-center text-sm text-gray-500 mb-2">
                      {listing.beds > 0 && <span>{listing.beds} beds</span>}
                      <span>{listing.baths} baths</span>
                      <span>{listing.sqft} sq ft</span>
                    </div>
                    <div className="font-bold text-lg text-orange-500">{listing.priceDisplay}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}
      
      <FeaturedListings />
      <WhyChooseUs />
      <PopularNeighborhoods />
      <Testimonials />
      <BlogPreview />
      <FinalCTA />
      <Footer />
    </div>
  );
};

export default Index;
