import React from 'react';
import { ChefHat, Users, Heart, Star, Award, Clock, BookOpen, Globe } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const AboutComponent = () => {
  const stats = [
    { icon: Users, value: '50K+', label: 'Active Chefs', color: 'text-blue-400' },
    { icon: BookOpen, value: '25K+', label: 'Recipes Shared', color: 'text-green-400' },
    { icon: Heart, value: '1M+', label: 'Favorites', color: 'text-red-400' },
    { icon: Globe, value: '120+', label: 'Countries', color: 'text-purple-400' }
  ];

  const features = [
    {
      icon: ChefHat,
      title: 'Expert Curation',
      description: 'Every recipe is carefully reviewed by our community of professional chefs and home cooking enthusiasts.',
      color: 'text-orange-400'
    },
    {
      icon: Star,
      title: 'Quality First',
      description: 'We maintain the highest standards for recipe clarity, ingredient lists, and cooking instructions.',
      color: 'text-yellow-400'
    },
    {
      icon: Clock,
      title: 'Time-Tested',
      description: 'Our recipes have been tried and perfected by thousands of home cooks around the world.',
      color: 'text-blue-400'
    },
    {
      icon: Award,
      title: 'Award Winning',
      description: 'Recognized as the leading platform for authentic, accessible, and delicious home cooking.',
      color: 'text-green-400'
    }
  ];

  const team = [
    {
      name: 'Suraj Verma',
      role: 'Head Chef & Founder',
      image: 'https://images.unsplash.com/photo-1494790108755-2616b512c31d?w=150&h=150&fit=crop&crop=face',
      description: 'Michelin-starred chef with 15 years of culinary excellence.'
    },
    {
      name: 'Divyanshu',
      role: 'Community Manager',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face',
      description: 'Passionate about connecting food lovers worldwide.'
    },
    {
      name: 'Rachit Gandhi',
      role: 'Recipe Developer',
      image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face',
      description: 'Expert in international cuisines and dietary adaptations.'
    }
  ];

  const Create = useNavigate()
  const CreateHandler = () => {
      Create("/Create")
  }
  const Recipe = useNavigate()
  const RecipeHandler = () => {
      Recipe("/Recipes")
  }
  return (
    <div className="min-h-screen bg-black">
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-black to-gray-900"></div>
        <div className="relative max-w-6xl mx-auto px-6 py-20">
          <div className="text-center">
            <div className="inline-flex items-center gap-3 mb-6 px-4 py-2 rounded-full border border-gray-800/50 bg-gray-900/50 backdrop-blur-sm">
              <ChefHat className="w-5 h-5 text-orange-400" />
              <span className="text-gray-300 text-sm font-medium">About RecipeCraft</span>
            </div>
            
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 tracking-tight">
              Crafting Culinary
              <span className="block bg-gradient-to-r from-orange-400 via-yellow-400 to-orange-400 bg-clip-text text-transparent">
                Experiences
              </span>
            </h1>
            
            <p className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
              We're a passionate community of food lovers, professional chefs, and home cooks united by our belief that great food brings people together. Since 2020, we've been building the world's most trusted platform for sharing and discovering exceptional recipes.
            </p>
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <div className="max-w-6xl mx-auto px-6 py-16">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="text-center group hover:scale-105 transition-all duration-300"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="rounded-2xl border border-gray-800/70 bg-gray-900/80 backdrop-blur-sm p-6 hover:border-gray-700/90 transition-all duration-500">
                <stat.icon className={`w-8 h-8 ${stat.color} mx-auto mb-4 group-hover:scale-110 transition-transform duration-300`} />
                <div className="text-3xl font-bold text-white mb-2">{stat.value}</div>
                <div className="text-gray-400 font-medium">{stat.label}</div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Mission Section */}
      <div className="max-w-6xl mx-auto px-6 py-16">
        <div className="rounded-2xl border border-gray-800/70 bg-gray-900/80 backdrop-blur-sm p-8 md:p-12 hover:border-gray-700/90 transition-all duration-500">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Our Mission</h2>
            <p className="text-lg text-gray-400 max-w-4xl mx-auto leading-relaxed">
              To democratize great cooking by making exceptional recipes accessible to everyone, regardless of their skill level or kitchen setup. We believe that cooking is an art form that should be shared, celebrated, and continuously improved through community collaboration.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-3 h-3 rounded-full bg-orange-400 mt-2 flex-shrink-0"></div>
                <div>
                  <h3 className="text-white font-semibold mb-2">Authenticity First</h3>
                  <p className="text-gray-400">Every recipe tells a story, preserving cultural traditions while embracing modern innovations.</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-3 h-3 rounded-full bg-blue-400 mt-2 flex-shrink-0"></div>
                <div>
                  <h3 className="text-white font-semibold mb-2">Community Driven</h3>
                  <p className="text-gray-400">Our platform thrives on the contributions and feedback from our vibrant cooking community.</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-3 h-3 rounded-full bg-green-400 mt-2 flex-shrink-0"></div>
                <div>
                  <h3 className="text-white font-semibold mb-2">Innovation & Tradition</h3>
                  <p className="text-gray-400">We balance time-honored cooking methods with cutting-edge culinary techniques.</p>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="aspect-square rounded-2xl bg-gradient-to-br from-orange-400/20 via-yellow-400/20 to-red-400/20 border border-gray-800/50 p-8 flex items-center justify-center">
                <ChefHat className="w-24 h-24 text-orange-400" />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="max-w-6xl mx-auto px-6 py-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Why Choose RecipeCraft</h2>
          <p className="text-lg text-gray-400 max-w-3xl mx-auto">
            We've built our platform with care, focusing on the details that matter most to passionate cooks.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="rounded-2xl border border-gray-800/70 bg-gray-900/80 backdrop-blur-sm p-6 hover:border-gray-700/90 transition-all duration-500 hover:scale-[1.02] group"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <div className="flex items-start gap-4">
                <div className={`p-3 rounded-xl bg-gray-800/80 border border-gray-700/50 group-hover:scale-110 transition-transform duration-300`}>
                  <feature.icon className={`w-6 h-6 ${feature.color}`} />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-white mb-3">{feature.title}</h3>
                  <p className="text-gray-400 leading-relaxed">{feature.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Team Section */}
      <div className="max-w-6xl mx-auto px-6 py-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Meet Our Team</h2>
          <p className="text-lg text-gray-400 max-w-3xl mx-auto">
            The passionate individuals behind RecipeCraft, dedicated to bringing you the best culinary experiences.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {team.map((member, index) => (
            <div
              key={index}
              className="text-center group hover:scale-[1.02] transition-all duration-300"
              style={{ animationDelay: `${index * 200}ms` }}
            >
              <div className="rounded-2xl border border-gray-800/70 bg-gray-900/80 backdrop-blur-sm p-6 hover:border-gray-700/90 transition-all duration-500">
                <div className="relative w-24 h-24 mx-auto mb-4">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full rounded-full object-cover border-2 border-gray-700 group-hover:border-gray-600 transition-all duration-300"
                  />
                  <div className="absolute inset-0 rounded-full bg-gradient-to-br from-orange-400/20 to-transparent group-hover:from-orange-400/30 transition-all duration-300"></div>
                </div>
                <h3 className="text-xl font-bold text-white mb-1">{member.name}</h3>
                <p className="text-orange-400 font-medium mb-3">{member.role}</p>
                <p className="text-gray-400 text-sm leading-relaxed">{member.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* CTA Section */}
      <div className="max-w-6xl mx-auto px-6 py-16">
        <div className="rounded-2xl border border-gray-800/70 bg-gradient-to-br from-gray-900/90 via-gray-900/80 to-gray-800/90 backdrop-blur-sm p-8 md:p-12 text-center hover:border-gray-700/90 transition-all duration-500">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Start Cooking?
          </h2>
          <p className="text-lg text-gray-400 mb-8 max-w-2xl mx-auto">
            Join our community of passionate cooks and start sharing your culinary creations with the world.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button onClick={CreateHandler} className="inline-flex items-center gap-3 px-8 py-4 font-semibold text-white rounded-xl border border-orange-600/50 bg-gradient-to-r from-orange-600 to-orange-500 hover:from-orange-500 hover:to-orange-400 transition-all duration-300 hover:scale-[1.02] hover:shadow-lg hover:shadow-orange-500/25 active:scale-[0.98]">
              <ChefHat className="w-5 h-5" />
              Create Your First Recipe
            </button>
            <button onClick={RecipeHandler} className="inline-flex items-center gap-3 px-8 py-4 font-semibold text-white rounded-xl border border-gray-600 bg-gray-800 hover:bg-gray-700 hover:border-gray-500 transition-all duration-300 hover:scale-[1.02] hover:shadow-lg hover:shadow-black/50 active:scale-[0.98]">
              <BookOpen className="w-5 h-5" />
              Browse Recipes
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutComponent;