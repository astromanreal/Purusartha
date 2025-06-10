
// src/app/astrology-courses/[courseId]/page.tsx
import { notFound } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';
import type { Metadata, ResolvingMetadata } from 'next';
import { astrologyCoursesData } from '@/data/astrology-courses-data';
import type { Course, CourseModule, LessonItem, InstructorProfile, CourseReview } from '@/types';
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from '@/components/ui/button';
import { Separator } from "@/components/ui/separator";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { ScrollArea } from '@/components/ui/scroll-area';
import { 
    ArrowLeftCircle, BookOpenCheck, Star, Clock, BarChart2, Users, Award, 
    FileText, MessageSquare, Download, PlayCircle, Edit3, CheckSquare, HelpCircle, 
    PuzzleIcon as Puzzle, PenSquare, CircleDot as CircleDotIcon, Video, UserCheck, Target, ListChecks, InfoIcon, BookOpen, Edit, Notebook, Milestone
} from "lucide-react";
import { APP_NAME } from '@/lib/constants';
import { cn } from '@/lib/utils';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";

const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL || 'http://localhost:3000'; 

type Props = {
  params: { courseId: string }; // No longer a Promise
};

const getLessonIcon = (type?: LessonItem['type']): React.ElementType => {
    switch (type) {
        case 'lesson': return BookOpen;
        case 'assignment': return Edit;
        case 'quiz': return HelpCircle;
        case 'activity': return Puzzle;
        case 'exercise': return Notebook;
        case 'capstone': return Milestone;
        default: return CircleDotIcon;
    }
};


export async function generateMetadata(
  { params }: Props, 
  parent: ResolvingMetadata
): Promise<Metadata> {
  const courseId = params.courseId;
  const course = astrologyCoursesData.courses.find(c => c.id === courseId);

  if (!course) {
    return {
      title: `Astrology Course Not Found | ${APP_NAME}`,
      description: `The requested Vedic astrology course could not be found on ${APP_NAME}. Explore our catalog of courses on Jyotish principles, Nakshatras, and more.`,
    };
  }

  const title = `${course.title} - Vedic Astrology Course | ${APP_NAME}`;
  const description = course.detailedDescription || `Learn ${course.title} with ${APP_NAME}. This ${course.level} level course covers ${course.keyTopics ? course.keyTopics.join(', ') : 'key Vedic astrology concepts'}. Duration: ${course.duration}.`;
  const keywords = [course.title, course.category, course.level, "Vedic Astrology Course", "Jyotish Course", ...(course.keyTopics || []), APP_NAME];
  const canonicalUrl = `${BASE_URL}/astrology-courses/${course.id}`;
  
  const ogImage = course.imageUrl && course.imageUrl !== 'https://placehold.co/600x400.png' 
                  ? course.imageUrl 
                  : `${BASE_URL}/og-images/og-image-course-${course.id}.png`; // Specific preferred
  const fallbackOgImage = `${BASE_URL}/og-images/og-image-courses-default.png`;

  return {
    title,
    description,
    keywords,
    alternates: { canonical: canonicalUrl },
    openGraph: {
      title,
      description,
      url: canonicalUrl,
      siteName: APP_NAME,
      images: [
        { url: ogImage, width: 1200, height: 630, alt: course.title },
        { url: fallbackOgImage, width: 1200, height: 630, alt: `${APP_NAME} Astrology Courses` }
      ],
      type: 'article', // Changed from 'website' to 'article' for course detail
      article: {
        authors: [course.instructor?.name || APP_NAME],
        section: course.category,
        publishedTime: new Date().toISOString(), // Placeholder, ideally use course creation date
        tags: keywords,
      }
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [ogImage, fallbackOgImage],
    },
  };
}

const SectionWrapper: React.FC<{ title: string; icon?: React.ElementType; children: React.ReactNode; className?: string; id?: string }> = ({ title, icon: Icon, children, className, id }) => (
  <section className={cn("py-6 scroll-mt-20", className)} id={id}>
    <div className="flex items-center mb-4">
      {Icon && <Icon className="h-7 w-7 mr-3 text-primary" />}
      <h2 className="text-2xl font-semibold text-accent">{title}</h2>
    </div>
    <div className="space-y-4 text-foreground/90 leading-relaxed text-base">
      {children}
    </div>
  </section>
);

export default async function CourseDetailPage({ params }: Props) {
  const courseId = params.courseId;
  const course = astrologyCoursesData.courses.find(c => c.id === courseId);

  if (!course) {
    notFound();
  }

  const courseJsonLd = {
    "@context": "https://schema.org",
    "@type": "Course",
    "name": course.title,
    "description": course.detailedDescription || course.briefDescription,
    "provider": {
      "@type": "Organization",
      "name": APP_NAME,
      "sameAs": BASE_URL
    },
    "courseCode": course.id,
    "educationalLevel": course.level,
    "keywords": [course.title, course.category, course.level, "Vedic Astrology Course", ...(course.keyTopics || []), APP_NAME].join(", "),
    "inLanguage": course.language || "English",
    "timeRequired": `P${course.duration.replace(/\s+/g, '').toUpperCase()}`, // Convert duration to ISO 8601 (e.g., "4 Weeks" -> "P4W")
    "learningResourceType": "Online Course",
    "url": `${BASE_URL}/astrology-courses/${course.id}`,
    "image": course.imageUrl && course.imageUrl !== 'https://placehold.co/600x400.png' ? course.imageUrl : `${BASE_URL}/og-images/og-image-course-${course.id}.png`,
    ...(course.instructor && {
      "instructor": {
        "@type": "Person",
        "name": course.instructor.name,
        "jobTitle": "Vedic Astrologer", // Generic
        "description": course.instructor.bio
      }
    }),
    ...(course.price && {
      "offers": {
        "@type": "Offer",
        "price": course.price.replace('$', ''),
        "priceCurrency": "USD"
      }
    }),
    "coursePrerequisites": course.prerequisites?.join(', ') || "Basic understanding of Vedic concepts recommended.",
    "syllabusSections": course.syllabus.map(module => ({
      "@type": "SyllabusSection",
      "name": module.title,
      "description": module.description || `Module ${module.week || ''}: ${module.title}`,
      "learningOutcome": module.lessons.map(lesson => lesson.title).join('; '),
      "timeRequired": module.lessons.reduce((acc, lesson) => { // Simplified duration sum, needs proper ISO 8601 conversion
        if (lesson.duration) {
          const match = lesson.duration.match(/(\d+)\s*(hour|hours|min|mins)/i);
          if (match && match[1]) {
            const value = parseInt(match[1]);
            const unit = match[2].toLowerCase();
            if (unit.startsWith('hour')) return acc + value * 60;
            if (unit.startsWith('min')) return acc + value;
          }
        }
        return acc;
      }, 0) + "M" // Total minutes - ideally convert this better
    }))
  };
  
  // Helper function to convert course duration to ISO 8601 (very basic)
  // For example, "4 Weeks" -> "P4W", "10 Hours" -> "PT10H"
  // This needs to be robust based on your duration string format
  if (course.duration) {
    let isoDuration = "P";
    const weeksMatch = course.duration.match(/(\d+)\s*Weeks/i);
    const hoursMatch = course.duration.match(/(\d+)\s*Hours/i);
    if (weeksMatch && weeksMatch[1]) isoDuration += `${weeksMatch[1]}W`;
    if (hoursMatch && hoursMatch[1]) {
        if (!isoDuration.endsWith("P")) isoDuration += "T";
        isoDuration += `${hoursMatch[1]}H`;
    }
    if (isoDuration !== "P") {
        // @ts-ignore
        courseJsonLd.timeRequired = isoDuration;
    }
  }


  return (
    <div className="container mx-auto py-10 px-4">
       <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(courseJsonLd) }}
      />
      <Button variant="outline" asChild className="mb-8 group">
        <Link href="/astrology-courses">
          <ArrowLeftCircle className="h-5 w-5 mr-2 transition-transform group-hover:-translate-x-1" />
          Back to All Courses
        </Link>
      </Button>

      <Card className="overflow-hidden shadow-2xl border-primary/20 bg-card">
        <CardHeader className="p-0 relative">
          {course.imageUrl && (
            <Image
              src={course.imageUrl}
              alt={course.title}
              width={1200}
              height={400}
              className="w-full h-64 md:h-80 object-cover"
              priority
              data-ai-hint={course.dataAiHint || course.title.toLowerCase().replace(/\s+/g, ' ')}
            />
          )}
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent p-6 md:p-8 flex flex-col justify-end">
            <h1 className="text-3xl md:text-4xl font-extrabold text-primary-foreground mb-2 shadow-text">
              {course.title}
            </h1>
            {course.subtitle && <p className="text-lg text-primary-foreground/90 italic mb-3 shadow-text">{course.subtitle}</p>}
            <div className="flex flex-wrap gap-2">
              <Badge variant="secondary" className="text-sm bg-primary/80 text-primary-foreground backdrop-blur-sm">{course.level}</Badge>
              <Badge variant="outline" className="text-sm border-primary-foreground/50 text-primary-foreground bg-black/30 backdrop-blur-sm">{course.category}</Badge>
              <Badge variant="outline" className="text-sm border-primary-foreground/50 text-primary-foreground bg-black/30 backdrop-blur-sm flex items-center">
                <Clock className="h-4 w-4 mr-1.5" /> {course.duration}
              </Badge>
              {course.language && <Badge variant="outline" className="text-sm border-primary-foreground/50 text-primary-foreground bg-black/30 backdrop-blur-sm">Language: {course.language}</Badge>}
            </div>
          </div>
        </CardHeader>

        <CardContent className="p-6 md:p-8 grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-8">
            {course.detailedDescription && (
              <SectionWrapper title="About This Course" icon={BookOpenCheck} id="about-course">
                <p className="text-lg whitespace-pre-wrap">{course.detailedDescription}</p>
              </SectionWrapper>
            )}

            {course.objectives && course.objectives.length > 0 && (
              <SectionWrapper title="Learning Objectives" icon={Target} id="objectives">
                <ul className="list-disc list-inside space-y-1 pl-2">
                  {course.objectives.map((obj, index) => <li key={index}>{obj}</li>)}
                </ul>
              </SectionWrapper>
            )}
            
            {course.format && (
              <SectionWrapper title="Course Format" icon={ListChecks} id="format">
                {course.format.mode && <p><strong className="text-foreground/80">Mode:</strong> {course.format.mode}</p>}
                {course.format.materials && course.format.materials.length > 0 && (
                  <div>
                    <strong className="text-foreground/80">Materials:</strong>
                    <ul className="list-disc list-inside pl-5 space-y-0.5">
                      {course.format.materials.map((mat, index) => <li key={index}>{mat}</li>)}
                    </ul>
                  </div>
                )}
              </SectionWrapper>
            )}

            {course.syllabus && course.syllabus.length > 0 && (
              <SectionWrapper title="Course Syllabus" icon={BarChart2} id="syllabus">
                <Accordion type="multiple" defaultValue={course.syllabus.length > 0 ? [course.syllabus[0].id] : []} className="w-full space-y-3">
                  {course.syllabus.map((module: CourseModule) => (
                    <AccordionItem value={module.id} key={module.id} className="border bg-background/50 rounded-lg shadow-sm">
                      <AccordionTrigger className="px-4 py-3 text-left hover:no-underline text-lg font-medium text-accent/90 data-[state=open]:bg-accent/10">
                        {module.week && <span className="mr-2 text-sm text-muted-foreground">(Week {module.week})</span>} {module.title}
                      </AccordionTrigger>
                      <AccordionContent className="px-4 py-3 border-t text-sm space-y-3">
                        {module.description && <p className="text-muted-foreground mb-3 italic">{module.description}</p>}
                        {module.lessons && module.lessons.length > 0 ? (
                          <ul className="space-y-2.5">
                            {module.lessons.map((lesson: LessonItem) => {
                              const LessonIcon = getLessonIcon(lesson.type);
                              return (
                                <li key={lesson.id} className="ml-2 py-1">
                                  <div className="flex items-start gap-2.5">
                                    <LessonIcon className="h-4 w-4 mt-1 text-primary/80 shrink-0" />
                                    <div className="flex-1">
                                      <span className="font-medium text-foreground/95">
                                        {lesson.title}
                                        {lesson.duration && ` (${lesson.duration})`}
                                      </span>
                                      {lesson.summary && <p className="text-xs text-muted-foreground mt-0.5">{lesson.summary}</p>}
                                      {lesson.content && <p className="text-xs text-muted-foreground mt-0.5 whitespace-pre-wrap">{lesson.content}</p>}
                                    </div>
                                  </div>
                                </li>
                              );
                            })}
                          </ul>
                        ) : <p className="text-muted-foreground italic">Detailed lessons coming soon.</p>}
                         {module.assignment && <p className="mt-2 text-sm"><strong className="text-orange-500">Assignment:</strong> {module.assignment}</p>}
                         {module.quiz && <p className="mt-2 text-sm"><strong className="text-purple-500">Quiz:</strong> {module.quiz}</p>}
                         {module.activity && <p className="mt-2 text-sm"><strong className="text-green-500">Activity:</strong> {module.activity}</p>}
                         {module.exercise && <p className="mt-2 text-sm"><strong className="text-blue-500">Exercise:</strong> {module.exercise}</p>}
                         {module.finalAssignment && <p className="mt-2 text-sm"><strong className="text-red-500">Final Assignment:</strong> {module.finalAssignment}</p>}
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </SectionWrapper>
            )}

            {course.benefits && course.benefits.length > 0 && (
              <SectionWrapper title="Course Benefits & Materials" icon={Award} id="benefits">
                <ul className="list-disc list-inside space-y-1 pl-2 grid grid-cols-1 sm:grid-cols-2 gap-x-4">
                  {course.benefits.map((benefit, index) => <li key={index}>{benefit}</li>)}
                </ul>
              </SectionWrapper>
            )}

            {course.reviews && course.reviews.length > 0 && (
              <SectionWrapper title="Student Reviews" icon={MessageSquare} id="reviews">
                <div className="space-y-4">
                  {course.reviews.map((review: CourseReview) => (
                    <Card key={review.id} className="p-4 bg-muted/30 border-border/50">
                      <div className="flex items-center mb-1">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} className={cn("h-4 w-4", i < review.rating ? "text-yellow-400 fill-yellow-400" : "text-muted-foreground")} />
                        ))}
                        <p className="ml-2 text-sm font-semibold">{review.userName}</p>
                        <p className="ml-auto text-xs text-muted-foreground">{new Date(review.date).toLocaleDateString()}</p>
                      </div>
                      <p className="text-sm text-foreground/80">{review.comment}</p>
                    </Card>
                  ))}
                </div>
              </SectionWrapper>
            )}
            {course.nextCourseRecommendation && (
                 <SectionWrapper title="Next Steps" icon={Milestone} id="next-steps">
                    <p>After completing this course, consider exploring: <strong className="text-accent">{course.nextCourseRecommendation}</strong></p>
                </SectionWrapper>
            )}
             <div className="text-center pt-6">
                <p className="text-muted-foreground text-sm">More interactive features like progress tracking, quizzes, and downloadable materials will be available soon for enrolled students.</p>
            </div>
          </div>

          <aside className="lg:col-span-1 space-y-6">
            <Card className="shadow-lg border-primary/20 bg-primary/5">
              <CardHeader>
                <CardTitle className="text-xl text-primary">Course Overview</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3 text-sm">
                <p><strong className="text-foreground/80">Level:</strong> {course.level}</p>
                <p><strong className="text-foreground/80">Category:</strong> {course.category}</p>
                <p><strong className="text-foreground/80">Duration:</strong> {course.duration}</p>
                 {course.language && <p><strong className="text-foreground/80">Language:</strong> {course.language}</p>}
                {course.prerequisites && course.prerequisites.length > 0 && (
                  <p><strong className="text-foreground/80">Prerequisites:</strong> {course.prerequisites.join(', ')}</p>
                )}
                {course.price && <p className="text-2xl font-bold text-accent mt-2">{course.price}</p>}
                <TooltipProvider>
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <Button size="lg" className="w-full mt-4 bg-primary hover:bg-primary/90 text-primary-foreground text-lg" disabled>
                        Enroll Now
                      </Button>
                    </TooltipTrigger>
                    <TooltipContent>
                      <p>Enrollment feature coming soon</p>
                    </TooltipContent>
                  </Tooltip>
                </TooltipProvider>
                <p className="text-xs text-muted-foreground text-center mt-1">(Enrollment feature coming soon)</p>
              </CardContent>
            </Card>

            {course.instructor && (
              <Card className="shadow-md bg-card/80">
                <CardHeader>
                  <CardTitle className="text-lg text-accent flex items-center"><Users className="mr-2"/>Instructor</CardTitle>
                </CardHeader>
                <CardContent className="text-sm">
                  <div className="flex items-center gap-3 mb-2">
                    {course.instructor.imageUrl ? (
                       <Image src={course.instructor.imageUrl} alt={course.instructor.name} width={60} height={60} className="rounded-full" data-ai-hint="instructor profile" />
                    ) : (
                      <div className="w-14 h-14 bg-muted rounded-full flex items-center justify-center">
                        <UserCheck className="h-7 w-7 text-muted-foreground"/>
                      </div>
                    )}
                    <div>
                      <h4 className="font-semibold text-foreground">{course.instructor.name}</h4>
                      {course.instructor.qualifications && <p className="text-xs text-muted-foreground">{course.instructor.qualifications.join(', ')}</p>}
                    </div>
                  </div>
                  <p className="text-muted-foreground">{course.instructor.bio}</p>
                </CardContent>
              </Card>
            )}
            
             <Card className="shadow-md bg-card/80">
                <CardHeader>
                    <CardTitle className="text-lg text-accent flex items-center"><FileText className="mr-2"/>Resources</CardTitle>
                </CardHeader>
                <CardContent className="space-y-2 text-sm">
                  <TooltipProvider>
                    <Tooltip>
                      <TooltipTrigger asChild>
                        <Button variant="outline" className="w-full justify-start" disabled><Download className="mr-2"/> Download Syllabus PDF</Button>
                      </TooltipTrigger>
                      <TooltipContent><p>Coming soon</p></TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                  <TooltipProvider>
                    <Tooltip>
                      <TooltipTrigger asChild>
                         <Button variant="outline" className="w-full justify-start" disabled><PlayCircle className="mr-2"/> Watch Intro Video</Button>
                      </TooltipTrigger>
                      <TooltipContent><p>Coming soon</p></TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                  <TooltipProvider>
                    <Tooltip>
                      <TooltipTrigger asChild>
                        <Button variant="outline" className="w-full justify-start" disabled><Edit3 className="mr-2"/> Take Pre-assessment Quiz</Button>
                      </TooltipTrigger>
                      <TooltipContent><p>Coming soon</p></TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </CardContent>
            </Card>

            {course.certificationCriteria && course.certificationCriteria.length > 0 && (
              <Card className="shadow-md bg-card/80">
                <CardHeader>
                  <CardTitle className="text-lg text-accent flex items-center"><Award className="mr-2"/>Certification</CardTitle>
                </CardHeader>
                <CardContent className="text-sm">
                  <ul className="list-disc list-inside space-y-1 text-muted-foreground">
                    {course.certificationCriteria.map((criterion, index) => <li key={index}>{criterion}</li>)}
                  </ul>
                  {course.certificationBadge && <p className="mt-2 text-sm font-medium text-primary">Badge: {course.certificationBadge}</p>}
                   <p className="text-xs text-muted-foreground mt-2">(Certificate generation on completion coming soon)</p>
                </CardContent>
              </Card>
            )}
          </aside>
        </CardContent>

        <CardFooter className="p-6 md:p-8 border-t border-border/30 bg-muted/30 text-center">
          <p className="text-sm text-muted-foreground">
            Embark on your astrological learning journey with {APP_NAME}. For any queries, please <Link href="/contact" className="text-primary hover:underline">contact us</Link>.
          </p>
        </CardFooter>
      </Card>
    </div>
  );
}

export async function generateStaticParams() {
  return astrologyCoursesData.courses.map((course) => ({
    courseId: course.id,
  }));
}
    
