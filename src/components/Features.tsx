import { Zap, Shield, Heart } from "lucide-react";

const features = [
  {
    icon: <Zap className="h-6 w-6 text-primary-500" />,
    title: "Lightning Fast",
    description: "Experience blazing fast performance with our optimized platform.",
  },
  {
    icon: <Shield className="h-6 w-6 text-primary-500" />,
    title: "Secure",
    description: "Your data is protected with enterprise-grade security.",
  },
  {
    icon: <Heart className="h-6 w-6 text-primary-500" />,
    title: "User Friendly",
    description: "Intuitive interface designed with users in mind.",
  },
];

const Features = () => {
  return (
    <section id="features" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
            Amazing Features
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            Discover what makes our platform special
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, index) => (
            <div
              key={index}
              className="relative p-8 bg-white border border-gray-200 rounded-lg hover:shadow-lg transition-shadow duration-300"
            >
              <div className="inline-block p-4 bg-primary-50 rounded-lg mb-4">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                {feature.title}
              </h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;