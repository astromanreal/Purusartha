
// src/app/astrology-courses/course-card.tsx
"use client";

import Image from 'next/image';
import Link from 'next/link';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import type { Course } from "@/types";
import { ArrowRight, Clock, BarChart2, CheckCircle, BookOpenCheck } from "lucide-react";

interface CourseCardProps {
  course: Course;
}

export function CourseCard({ course }: CourseCardProps) {
  return (
    <Card className="flex flex-col overflow-hidden shadow-lg hover:shadow-primary/30 transition-all duration-300 ease-in-out transform hover:scale-105 bg-card border border-border/20 rounded-xl h-full">
      <CardHeader className="p-0 relative">
        {course.imageUrl && (
          <Image
            src={course.imageUrl}
            alt={course.title}
            width={600}
            height={300}
            className="w-full h-48 object-cover rounded-t-xl"
            data-ai-hint={course.dataAiHint || course.title.toLowerCase().replace(/\s+/g, ' ')}
          />
        )}
        <div className="absolute top-2 right-2 flex gap-1">
          <Badge variant="secondary" className="bg-accent/20 text-accent-foreground backdrop-blur-sm">{course.level}</Badge>
          <Badge variant="outline" className="bg-background/70 backdrop-blur-sm">{course.category}</Badge>
        </div>
      </CardHeader>
      <CardContent className="p-5 flex-grow flex flex-col">
        <CardTitle className="text-xl font-semibold text-primary mb-2 line-clamp-2 group-hover:text-accent transition-colors">
          {course.title}
        </CardTitle>
        <CardDescription className="text-sm text-muted-foreground mb-3 line-clamp-3 flex-grow">
          {course.briefDescription}
        </CardDescription>
        
        <div className="text-xs text-muted-foreground space-y-1.5 mb-4">
          <div className="flex items-center">
            <Clock className="h-3.5 w-3.5 mr-1.5 text-primary/70" />
            Duration: {course.duration}
          </div>
          {course.prerequisites && course.prerequisites.length > 0 && (
            <div className="flex items-center">
              <CheckCircle className="h-3.5 w-3.5 mr-1.5 text-primary/70" />
              Prerequisites: {course.prerequisites.join(', ')}
            </div>
          )}
           {course.keyTopics && course.keyTopics.length > 0 && (
            <div className="flex items-center">
                <BookOpenCheck className="h-3.5 w-3.5 mr-1.5 text-primary/70 flex-shrink-0" />
                <span className="truncate">Topics: {course.keyTopics.slice(0,2).join(', ')}{course.keyTopics.length > 2 ? '...' : ''}</span>
            </div>
           )}
        </div>
      </CardContent>
      <CardFooter className="p-5 pt-0 border-t border-border/10 mt-auto">
        <Button asChild className="w-full bg-primary hover:bg-primary/90 text-primary-foreground group">
          <Link href={`/astrology-courses/${course.id}`}>
            View Course Details
            <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </Button>
      </CardFooter>
    </Card>
  );
}
