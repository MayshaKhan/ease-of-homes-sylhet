import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { MapPin, Bed, Bath, Square } from "lucide-react";

const FeaturedListings = () => {
  const listings = [
    {
      id: 1,
      title: "Modern Duplex House",
      location: "Sylhet, Zindabazar", 
      price: "$125,000",
      beds: 4,
      baths: 3,
      sqft: "2,400",
      image: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&h=600&fit=crop",
      type: "Buy"
    },
    {
      id: 2,
      title: "Luxury Apartment",
      location: "Sylhet, Amberkhana",
      price: "$850/month",
      beds: 3,
      baths: 2,
      sqft: "1,800",
      image: "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=800&h=600&fit=crop",
      type: "Rent"
    },
    {
      id: 3,
      title: "Family Villa",
      location: "Sylhet, Shahjalal Upashahar",
      price: "$180,000",
      beds: 5,
      baths: 4,
      sqft: "3,200",
      image: "https://images.unsplash.com/photo-1599427303058-835c29da2569?w=800&h=600&fit=crop",
      type: "Buy"
    },
    {
      id: 4,
      title: "Cozy Studio",
      location: "Sylhet, Bondor Bazar",
      price: "$450/month",
      beds: 1,
      baths: 1,
      sqft: "650",
      image: "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=800&h=600&fit=crop",
      type: "Rent"
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Featured Listings
          </h2>
          <p className="text-xl text-gray-600">
            Discover our handpicked selection of premium properties
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {listings.map((listing) => (
            <Card key={listing.id} className="overflow-hidden hover:shadow-xl transition-all duration-300 hover:scale-105">
              <div className="relative">
                <img
                  src={listing.image}
                  alt={listing.title}
                  className="w-full h-48 object-cover"
                />
                <div className="absolute top-4 left-4">
                  <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                    listing.type === 'Buy' 
                      ? 'bg-orange-500 text-white' 
                      : 'bg-blue-500 text-white'
                  }`}>
                    {listing.type}
                  </span>
                </div>
              </div>
              
              <CardContent className="p-4">
                <h3 className="font-semibold text-lg text-gray-900 mb-2">
                  {listing.title}
                </h3>
                
                <div className="flex items-center text-gray-600 mb-3">
                  <MapPin className="h-4 w-4 mr-1" />
                  <span className="text-sm">{listing.location}</span>
                </div>
                
                <div className="flex items-center justify-between text-sm text-gray-600 mb-3">
                  <div className="flex items-center">
                    <Bed className="h-4 w-4 mr-1" />
                    <span>{listing.beds}</span>
                  </div>
                  <div className="flex items-center">
                    <Bath className="h-4 w-4 mr-1" />
                    <span>{listing.baths}</span>
                  </div>
                  <div className="flex items-center">
                    <Square className="h-4 w-4 mr-1" />
                    <span>{listing.sqft} sq ft</span>
                  </div>
                </div>
                
                <div className="font-bold text-xl text-orange-500">
                  {listing.price}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <Button className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-3 text-lg rounded-lg">
            🏡 View All Listings
          </Button>
        </div>
      </div>
    </section>
  );
};

export default FeaturedListings;
