// src/components/ProfileCard.jsx

import React, { useState } from 'react';
import { Card, CardHeader, CardContent, CardFooter } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Briefcase, MapPin, School, Users, ChevronLeft, ChevronRight, BookmarkPlus, Share2 } from 'lucide-react';

const ProfileCard = ({ profiles }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [savedProfiles, setSavedProfiles] = useState([]);
  const [connectedProfiles, setConnectedProfiles] = useState([]);

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % profiles.length);
  };

  const handlePrevious = () => {
    setCurrentIndex((prev) => (prev - 1 + profiles.length) % profiles.length);
  };

  const handleConnect = () => {
    const currentProfile = profiles[currentIndex];
    setConnectedProfiles((prev) => [...prev, currentProfile.id]);
    handleNext();
  };

  const handleSave = () => {
    const currentProfile = profiles[currentIndex];
    setSavedProfiles((prev) => [...prev, currentProfile.id]);
  };

  const calculateSimilarityScore = (similarities) => {
    const totalFactors = Object.keys(similarities).length;
    const matchingFactors = Object.values(similarities).filter(Boolean).length;
    return Math.round((matchingFactors / totalFactors) * 100);
  };

  const profile = profiles[currentIndex];
  const isConnected = connectedProfiles.includes(profile.id);
  const isSaved = savedProfiles.includes(profile.id);

  return (
    <div className="flex flex-col items-center justify-center w-full bg-gray-100 p-4">
      <Card className="w-full bg-white shadow-xl">
        <CardHeader className="relative pb-0">
          <div className="absolute top-4 right-4 flex space-x-2">
            <Badge variant="secondary" className="mb-2">
              {calculateSimilarityScore(profile.similarities)}% Match
            </Badge>
            {isConnected && (
              <Badge variant="outline" className="bg-green-50 text-green-700 border-green-200">
                Connected
              </Badge>
            )}
            {isSaved && (
              <Badge variant="outline" className="bg-blue-50 text-blue-700 border-blue-200">
                Saved
              </Badge>
            )}
          </div>
          <div className="flex items-center space-x-4">
            <img
              src={profile.photo}
              alt={profile.name}
              className="w-24 h-24 rounded-full object-cover border-2 border-gray-200"
            />
            <div>
              <h2 className="text-2xl font-bold">{profile.name}</h2>
              <p className="text-gray-600">{profile.role}</p>
              <p className="text-gray-500 text-sm">{profile.company}</p>
            </div>
          </div>
        </CardHeader>

        <CardContent className="pt-6">
          <div className="space-y-4">
            <p className="text-gray-700">{profile.summary}</p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
              <div className="flex items-center space-x-2 text-gray-600">
                <Briefcase className="w-4 h-4" />
                <span>{profile.company}</span>
              </div>
              <div className="flex items-center space-x-2 text-gray-600">
                <MapPin className="w-4 h-4" />
                <span>{profile.location}</span>
              </div>
              <div className="flex items-center space-x-2 text-gray-600">
                <School className="w-4 h-4" />
                <span>{profile.education}</span>
              </div>
              <div className="flex items-center space-x-2 text-gray-600">
                <Users className="w-4 h-4" />
                <span>{profile.mutualConnections} mutual connections</span>
              </div>
            </div>

            <div className="flex flex-wrap gap-2">
              {profile.skills.map((skill, index) => (
                <Badge key={index} variant="secondary">
                  {skill}
                </Badge>
              ))}
            </div>

            <div className="bg-gray-50 p-4 rounded-lg">
              <h3 className="font-semibold mb-2">Similarities</h3>
              <div className="grid grid-cols-2 gap-2">
                {Object.entries(profile.similarities).map(([key, value]) => (
                  <div key={key} className={`flex items-center space-x-2 ${value ? 'text-green-600' : 'text-gray-400'}`}>
                    <div className={`w-2 h-2 rounded-full ${value ? 'bg-green-600' : 'bg-gray-300'}`} />
                    <span className="capitalize">{key}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </CardContent>

        <CardFooter className="flex justify-between space-x-2 pt-4">
          <Button variant="outline" size="lg" onClick={handlePrevious}>
            <ChevronLeft className="w-4 h-4 mr-2" />
            Skip
          </Button>
          <div className="flex space-x-2">
            <Button variant="outline" size="lg" onClick={handleSave}>
              <BookmarkPlus className={`w-4 h-4 mr-2 ${isSaved ? 'fill-blue-500' : ''}`} />
              {isSaved ? 'Saved' : 'Save'}
            </Button>
            <Button variant="outline" size="lg">
              <Share2 className="w-4 h-4 mr-2" />
              Share
            </Button>
          </div>
          <Button 
            size="lg" 
            onClick={handleConnect}
            disabled={isConnected}
            className={isConnected ? 'bg-green-600' : ''}
          >
            {isConnected ? 'Connected' : 'Connect'}
            {!isConnected && <ChevronRight className="w-4 h-4 ml-2" />}
          </Button>
        </CardFooter>
      </Card>

      <div className="w-full mt-4 flex justify-between items-center">
        <span className="text-sm text-gray-500">
          Profile {currentIndex + 1} of {profiles.length}
        </span>
        <div className="flex space-x-1">
          {profiles.map((_, idx) => (
            <div 
              key={idx} 
              className={`w-2 h-2 rounded-full ${idx === currentIndex ? 'bg-blue-600' : 'bg-gray-300'}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProfileCard;
