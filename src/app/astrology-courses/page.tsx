
// src/app/astrology-courses/page.tsx
"use client";

import * as React from "react";
import type { Metadata } from 'next';
import { astrologyCoursesData } from "@/data/astrology-courses-data";
import type { Course, CourseLevel, CourseCategory } from "@/types";
import { CourseCard } from "./course-card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { BookOpenCheck, Search, Filter, Users, Mic2 } from "lucide-react";
import { APP_NAME } from "@/lib/constants";
import Link from "next/link";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";


const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL || 'http://localhost:3000';

// Static metadata for the courses list page
export const metadataObject: Metadata = {
  title: `Astrology Courses & Certifications | ${APP_NAME}`,
  description: `Explore Vedic astrology courses on ${APP_NAME}. From beginner to advanced levels, learn about planets, signs, houses, Nakshatras, Dasha systems, and predictive techniques. Enhance your Jyotish knowledge.`,
  keywords: ['Astrology Courses', 'Vedic Astrology', 'Jyotish Learning', 'Online Astrology Classes', 'Beginner Astrology', 'Advanced Astrology', 'Nakshatra Course', 'Panchang Course', APP_NAME],
  alternates: {
    canonical: `${BASE_URL}/astrology-courses`,
  },
  openGraph: {
    title: `Astrology Courses & Certifications | ${APP_NAME}`,
    description: `Explore Vedic astrology courses on ${APP_NAME}. Learn about planets, signs, houses, Nakshatras, Dasha systems, and predictive techniques.`,
    url: `${BASE_URL}/astrology-courses`,
    siteName: APP_NAME,
    images: [
      {
        url: `${BASE_URL}/og-images/og-image-courses-list.png`, // Specific OG image for courses list
        width: 1200,
        height: 630,
        alt: `Astrology Courses - ${APP_NAME}`,
      },
    ],
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: `Astrology Courses & Certifications | ${APP_NAME}`,
    description: `Explore Vedic astrology courses on ${APP_NAME}.`,
    images: [`${BASE_URL}/og-images/og-image-courses-list.png`],
  },
};

const allLevels: CourseLevel[] = ["All Levels", "Beginner", "Intermediate", "Advanced"];
const allCategories: string[] = [
  "All Categories", 
  "Vedic Astrology", 
  "Nakshatra Study", 
  "Panchang", 
  "Sign Interpretation", 
  "Matchmaking", 
  "Planetary Studies", 
  "Dasha Analysis", 
  "Dosha & Remedies", 
  "Transit Analysis", 
  "Numerology", 
  "Predictive Astrology", 
  "Divisional Charts", 
  "Remedial Astrology", 
  "Professional Development", 
  "Applied Astrology"
];


export default function AstrologyCoursesPage() {
  const [searchTerm, setSearchTerm] = React.useState("");
  const [selectedLevel, setSelectedLevel] = React.useState<CourseLevel>("All Levels");
  const [selectedCategory, setSelectedCategory] = React.useState<string>("All Categories"); 

  const filteredCourses = React.useMemo(() => {
    return astrologyCoursesData.courses.filter((course) => {
      const matchesSearch =
        searchTerm.toLowerCase() === "" ||
        course.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        course.briefDescription.toLowerCase().includes(searchTerm.toLowerCase()) ||
        (course.keyTopics && course.keyTopics.some(topic => topic.toLowerCase().includes(searchTerm.toLowerCase())));
      
      const matchesLevel = selectedLevel === "All Levels" || course.level === selectedLevel;
      
      const matchesCategoryFilter = selectedCategory === "All Categories" || course.category === selectedCategory;

      return matchesSearch && matchesLevel && matchesCategoryFilter;
    });
  }, [searchTerm, selectedLevel, selectedCategory]);

  // JSON-LD for the astrology courses list page
  const coursesListJsonLd = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    "name": metadataObject.title as string,
    "description": metadataObject.description as string,
    "url": `${BASE_URL}/astrology-courses`,
    "mainEntity": {
      "@type": "ItemList",
      "itemListElement": astrologyCoursesData.courses.map((course, index) => ({
        "@type": "ListItem",
        "position": index + 1,
        "item": {
          "@type": "Course",
          "name": course.title,
          "description": course.briefDescription,
          "url": `${BASE_URL}/astrology-courses/${course.id}`,
          "provider": {
            "@type": "Organization",
            "name": APP_NAME
          },
          "coursePrerequisites": course.prerequisites?.join(', ') || "None",
          "educationalLevel": course.level,
          // "image": course.imageUrl || `${BASE_URL}/og-images/og-image-courses-default.png`, // Add if specific course images are final
        }
      }))
    },
    "publisher": {
      "@type": "Organization",
      "name": APP_NAME,
      "logo": {
        "@type": "ImageObject",
        "url": `${BASE_URL}/logo-icon.png` 
      }
    }
  };

  return (
    <div className="container mx-auto py-8 space-y-12">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(coursesListJsonLd) }}
      />
      <header className="text-center">
        <div className="inline-flex items-center justify-center p-4 bg-primary/10 rounded-full mb-6 mx-auto shadow-lg">
          <BookOpenCheck className="h-16 w-16 text-primary" />
        </div>
        <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight text-primary mb-3">
          Astrology Courses & Certifications
        </h1>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          Deepen your understanding of Vedic wisdom with our structured courses, from foundational concepts to advanced predictive techniques.
        </p>
      </header>

      <Card className="p-4 sm:p-6 shadow-lg bg-card border-border/20">
        <CardHeader className="p-0 pb-4 mb-4 border-b border-border/20">
          <CardTitle className="text-xl font-semibold text-primary flex items-center">
            <Filter className="h-5 w-5 mr-2"/> Filter Courses
          </CardTitle>
        </CardHeader>
        <CardContent className="p-0">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-end">
            <div className="md:col-span-1">
              <label htmlFor="search-courses" className="block text-sm font-medium text-foreground mb-1">Search Courses</label>
              <div className="relative">
                <Input
                  id="search-courses"
                  type="text"
                  placeholder="Search by title, topic..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10 text-base"
                />
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-muted-foreground" />
              </div>
            </div>
            <div>
              <label htmlFor="filter-level" className="block text-sm font-medium text-foreground mb-1">Filter by Level</label>
              <Select value={selectedLevel} onValueChange={(value) => setSelectedLevel(value as CourseLevel)}>
                <SelectTrigger id="filter-level" className="text-base">
                  <SelectValue placeholder="Select Level" />
                </SelectTrigger>
                <SelectContent>
                  {allLevels.map(level => (
                    <SelectItem key={level} value={level}>{level}</SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
            <div>
              <label htmlFor="filter-category" className="block text-sm font-medium text-foreground mb-1">Filter by Category</label>
              <Select value={selectedCategory} onValueChange={(value) => setSelectedCategory(value)}>
                <SelectTrigger id="filter-category" className="text-base">
                  <SelectValue placeholder="Select Category" />
                </SelectTrigger>
                <SelectContent>
                  {allCategories.map(category => (
                    <SelectItem key={category} value={category}>{category}</SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </div>
        </CardContent>
      </Card>

      {filteredCourses.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredCourses.map((course) => (
            <CourseCard key={course.id} course={course} />
          ))}
        </div>
      ) : (
        <div className="text-center py-12">
          <Search className="h-16 w-16 text-muted-foreground mx-auto mb-4" />
          <p className="text-xl text-muted-foreground">No courses found matching your criteria.</p>
          <p className="text-sm text-muted-foreground mt-2">Try adjusting your search or filters.</p>
        </div>
      )}

      <section className="mt-16 py-12 bg-gradient-to-r from-accent/10 to-primary/10 rounded-lg shadow-xl border border-primary/20 text-center">
        <div className="container mx-auto px-4">
          <Users className="h-12 w-12 text-primary mx-auto mb-4" />
          <h2 className="text-3xl font-bold text-primary mb-4">
            Share Your Wisdom
          </h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-xl mx-auto">
            Are you a professional astrologer or Vedic scholar? Partner with {APP_NAME} to create and share your courses with a global audience.
          </p>
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger asChild>
                  <Button size="lg" variant="default" className="bg-accent hover:bg-accent/90 text-accent-foreground shadow-md hover:shadow-lg" disabled>
                    Become a Course Contributor
                    <Mic2 className="ml-2 h-5 w-5"/>
                  </Button>
              </TooltipTrigger>
              <TooltipContent>
                <p>This feature is planned for future development.</p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
           <p className="text-xs text-muted-foreground mt-3">(This feature is planned for future development.)</p>
        </div>
      </section>
    </div>
  );
}
    
