"use client";
import { useState } from "react";
import {
  Star,
  Clock,
  Users,
  BookOpen,
  Award,
  CheckCircle,
  Play,
  ArrowRight,
  Sparkles,
  Code,
  Palette,
  Smartphone,
  Database,
  Globe,
  Zap,
  TrendingUp,
  MapPin,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const courses = [
  {
    id: 1,
    title: "Full-Stack Web Development",
    description:
      "Master modern web development with Next.js, React, Node.js, and MongoDB. Build real-world projects and deploy your portfolio.",
    category: "development",
    level: "Beginner to Advanced",
    duration: "12 weeks",
    students: "1.2k",
    rating: 4.9,
    price: "₦550,000",
    originalPrice: "₦700,000",
    featured: true,
    instructor: "David Tech",
    image: "/images/course-webdev.jpg",
    technologies: ["Next.js", "React", "Node.js", "MongoDB", "TypeScript"],
    benefits: [
      "Portfolio Projects",
      "Job Ready Skills",
      "1-on-1 Mentoring",
      "Certificate",
    ],
  },
  {
    id: 2,
    title: "UI/UX Design Masterclass",
    description:
      "Learn user-centered design principles, prototyping, and design tools to create stunning digital experiences.",
    category: "design",
    level: "Beginner to Pro",
    duration: "8 weeks",
    students: "850",
    rating: 4.8,
    price: "₦120,000",
    originalPrice: "₦150,000",
    featured: true,
    instructor: "Sarah Designs",
    image: "/images/course-uiux.jpg",
    technologies: ["Figma", "Adobe XD", "Prototyping", "User Research"],
    benefits: ["Design System", "Portfolio", "Client Projects", "Certificate"],
  },
  {
    id: 3,
    title: "Mobile App Development",
    description:
      "Build cross-platform mobile applications with React Native and Flutter. Learn to publish on App Store and Play Store.",
    category: "mobile",
    level: "Intermediate",
    duration: "10 weeks",
    students: "720",
    rating: 4.7,
    price: "₦180,000",
    originalPrice: "₦220,000",
    featured: false,
    instructor: "Mike Mobile",
    image: "/images/course-mobile.jpg",
    technologies: ["React Native", "Flutter", "Firebase", "APIs"],
    benefits: [
      "App Publishing",
      "Real Projects",
      "API Integration",
      "Certificate",
    ],
  },
  {
    id: 4,
    title: "Python & Data Science",
    description:
      "Dive into data analysis, machine learning, and automation with Python. Perfect for aspiring data scientists.",
    category: "data",
    level: "Beginner to Advanced",
    duration: "14 weeks",
    students: "950",
    rating: 4.9,
    price: "₦200,000",
    originalPrice: "₦250,000",
    featured: true,
    instructor: "Dr. Data",
    image: "/images/course-python.jpg",
    technologies: ["Python", "Pandas", "NumPy", "Machine Learning", "SQL"],
    benefits: ["Data Projects", "ML Models", "Portfolio", "Certificate"],
  },
  {
    id: 5,
    title: "Frontend Development",
    description:
      "Master HTML, CSS, JavaScript and modern frameworks. Create responsive and interactive web applications.",
    category: "development",
    level: "Beginner",
    duration: "6 weeks",
    students: "2.1k",
    rating: 4.8,
    price: "₦80,000",
    originalPrice: "₦100,000",
    featured: false,
    instructor: "Jane Frontend",
    image: "/images/course-frontend.jpg",
    technologies: ["HTML5", "CSS3", "JavaScript", "React", "Tailwind"],
    benefits: ["Responsive Design", "Modern Tools", "Projects", "Certificate"],
  },
  {
    id: 6,
    title: "Digital Marketing & SEO",
    description:
      "Learn to drive traffic, generate leads, and grow businesses with digital marketing strategies and SEO techniques.",
    category: "marketing",
    level: "Beginner to Pro",
    duration: "8 weeks",
    students: "680",
    rating: 4.7,
    price: "₦100,000",
    originalPrice: "₦130,000",
    featured: false,
    instructor: "Marketer Pro",
    image: "/images/course-marketing.jpg",
    technologies: ["SEO", "Google Ads", "Social Media", "Analytics"],
    benefits: ["Campaigns", "Certification", "Tools", "Portfolio"],
  },
];

const categories = [
  { id: "all", name: "All Courses", icon: BookOpen, count: 6 },
  { id: "development", name: "Web Development", icon: Code, count: 2 },
  { id: "design", name: "UI/UX Design", icon: Palette, count: 1 },
  { id: "mobile", name: "Mobile Development", icon: Smartphone, count: 1 },
  { id: "data", name: "Data Science", icon: Database, count: 1 },
  { id: "marketing", name: "Digital Marketing", icon: TrendingUp, count: 1 },
];

const stats = [
  { number: "5,000+", label: "Students Trained" },
  { number: "98%", label: "Completion Rate" },
  { number: "4.8/5", label: "Average Rating" },
  { number: "500+", label: "Job Placements" },
];

const features = [
  {
    icon: Award,
    title: "Industry-Recognized Certificates",
    description:
      "Get certified with credentials that employers value and recognize",
  },
  {
    icon: Users,
    title: "Expert Instructors",
    description:
      "Learn from industry professionals with years of real-world experience",
  },
  {
    icon: Play,
    title: "Lifetime Access",
    description:
      "Access course materials forever with continuous updates and support",
  },
  {
    icon: Zap,
    title: "Hands-On Projects",
    description:
      "Build real projects that you can add to your portfolio and showcase",
  },
];

export default function CoursesPage() {
  const [activeCategory, setActiveCategory] = useState("all");

  const filteredCourses =
    activeCategory === "all"
      ? courses
      : courses.filter((course) => course.category === activeCategory);

  const featuredCourses = courses.filter((course) => course.featured);

  return (
    <div
      className="min-h-screen bg-gradient-to-br from-background via-background to-muted/30 pt-32 pb-20"
      style={{
        backgroundImage: `
        radial-gradient(circle at 50% 50%, 
          rgba(203, 213, 225, 0.12) 0%, 
          rgba(203, 213, 225, 0.07) 25%, 
          rgba(203, 213, 225, 0.03) 35%, 
          transparent 50%
        )
      `,
        backgroundSize: "100% 100%",
      }}
    >
      {/* Background Elements */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl" />
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-green-500/5 rounded-full blur-3xl" />
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <div className="text-center mb-16 lg:mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/20 mb-6">
            <Sparkles className="h-4 w-4 text-blue-500" />
            <span className="text-sm font-medium text-blue-600 dark:text-blue-400">
              Learn In-Demand Tech Skills in Nigeria
            </span>
          </div>
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl bg-gradient-to-b from-foreground to-foreground/70 bg-clip-text text-transparent mb-6">
            Tech Courses
            <span className="block bg-gradient-to-r from-blue-600 to-blue-600 bg-clip-text text-transparent">
              For The Future
            </span>
          </h1>
          <p className="mx-auto max-w-3xl text-xl text-muted-foreground mb-8">
            Check out our online tech courses in Nigeria on Website Development,
            Design, Programming, UI/UX Design and other high-income skills.
            Start your journey to becoming a tech professional today.
          </p>

          {/* Location Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-green-500/10 border border-green-500/20 rounded-full">
            <MapPin className="h-4 w-4 text-green-500" />
            <span className="text-sm font-medium text-green-600">
              Available Across Nigeria
            </span>
          </div>
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-3xl lg:text-4xl font-bold bg-gradient-to-r from-blue-600 to-blue-600 bg-clip-text text-transparent mb-2">
                {stat.number}
              </div>
              <div className="text-sm lg:text-base text-muted-foreground font-medium">
                {stat.label}
              </div>
            </div>
          ))}
        </div>

        {/* Features Section */}
        <section className="mb-20 lg:mb-32">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold bg-gradient-to-r from-foreground to-foreground/80 bg-clip-text text-transparent mb-4">
              Why Learn With Us?
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              We provide the best learning experience with practical, job-ready
              skills that Nigerian employers are looking for.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => {
              const IconComponent = feature.icon;
              return (
                <div
                  key={index}
                  className="group text-center bg-background/50 backdrop-blur-sm border border-border/50 rounded-2xl p-6 hover:shadow-xl hover:shadow-blue-500/10 transition-all duration-500 hover:-translate-y-2"
                >
                  <div className="p-3 rounded-full bg-blue-500/10 w-fit mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                    <IconComponent className="h-8 w-8 text-blue-500" />
                  </div>
                  <h3 className="text-lg font-bold text-foreground mb-3">
                    {feature.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              );
            })}
          </div>
        </section>

        {/* Featured Courses */}
        <section className="mb-20 lg:mb-32">
          <div className="flex items-center justify-between mb-12">
            <div>
              <h2 className="text-3xl lg:text-4xl font-bold bg-gradient-to-r from-foreground to-foreground/80 bg-clip-text text-transparent mb-2">
                Featured Courses
              </h2>
              <p className="text-muted-foreground">
                Most popular courses among Nigerian students
              </p>
            </div>
            <div className="flex items-center gap-2 text-yellow-600">
              <Star className="h-5 w-5 fill-yellow-500" />
              <span className="font-medium">Student Favorites</span>
            </div>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {featuredCourses.map((course) => (
              <div
                key={course.id}
                className="group relative bg-background/50 backdrop-blur-sm border border-border/50 rounded-2xl overflow-hidden hover:shadow-2xl hover:shadow-blue-500/10 transition-all duration-500 hover:-translate-y-2"
              >
                {/* Course Header */}
                <div className="relative h-48 bg-gradient-to-br from-blue-500/10 to-blue-500/10 flex items-center justify-center">
                  <Globe className="h-12 w-12 text-blue-500" />

                  {/* Featured Badge */}
                  <div className="absolute top-4 left-4 flex items-center gap-1 px-3 py-1 bg-yellow-500/10 border border-yellow-500/20 rounded-full">
                    <Star className="h-3 w-3 text-yellow-500 fill-yellow-500" />
                    <span className="text-xs font-medium text-yellow-600">
                      Featured
                    </span>
                  </div>

                  {/* Discount Badge */}
                  <div className="absolute top-4 right-4 px-3 py-1 bg-green-500/10 border border-green-500/20 rounded-full">
                    <span className="text-xs font-medium text-green-600">
                      Save ₦50,000
                    </span>
                  </div>
                </div>

                {/* Course Content */}
                <div className="p-6">
                  <div className="flex items-center gap-2 mb-3">
                    <span className="text-xs font-medium text-blue-600 bg-blue-500/10 px-2 py-1 rounded-full">
                      {course.category.toUpperCase()}
                    </span>
                    <span className="text-xs text-muted-foreground">
                      {course.level}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-foreground mb-3 line-clamp-2">
                    {course.title}
                  </h3>

                  <p className="text-muted-foreground mb-4 text-sm leading-relaxed line-clamp-2">
                    {course.description}
                  </p>

                  {/* Instructor */}
                  <div className="flex items-center gap-2 mb-4">
                    <div className="w-6 h-6 bg-blue-500/10 rounded-full flex items-center justify-center">
                      <Users className="h-3 w-3 text-blue-500" />
                    </div>
                    <span className="text-sm text-muted-foreground">
                      By {course.instructor}
                    </span>
                  </div>

                  {/* Course Stats */}
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-4 text-sm text-muted-foreground">
                      <div className="flex items-center gap-1">
                        <Clock className="h-4 w-4" />
                        <span>{course.duration}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Users className="h-4 w-4" />
                        <span>{course.students}</span>
                      </div>
                    </div>
                    <div className="flex items-center gap-1">
                      <Star className="h-4 w-4 text-yellow-500 fill-yellow-500" />
                      <span className="text-sm font-medium text-foreground">
                        {course.rating}
                      </span>
                    </div>
                  </div>

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-1 mb-4">
                    {course.technologies.slice(0, 3).map((tech, index) => (
                      <span
                        key={index}
                        className="px-2 py-1 bg-muted/50 border border-border/50 rounded text-xs text-foreground/80"
                      >
                        {tech}
                      </span>
                    ))}
                    {course.technologies.length > 3 && (
                      <span className="px-2 py-1 bg-muted/50 border border-border/50 rounded text-xs text-foreground/80">
                        +{course.technologies.length - 3}
                      </span>
                    )}
                  </div>

                  {/* Price & Enroll */}
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-2">
                      <span className="text-2xl font-bold text-foreground">
                        {course.price}
                      </span>
                      <span className="text-sm text-muted-foreground line-through">
                        {course.originalPrice}
                      </span>
                    </div>
                    <div className="text-xs text-green-600 font-medium bg-green-500/10 px-2 py-1 rounded">
                      25% OFF
                    </div>
                  </div>

                  <Button
                    asChild
                    className="w-full bg-gradient-to-r from-blue-600 to-blue-600 hover:from-blue-700 hover:to-blue-700"
                  >
                    <Link
                      href={`/courses/${course.id}`}
                      className="flex items-center gap-2"
                    >
                      <BookOpen className="h-4 w-4" />
                      <span>Enroll Now</span>
                    </Link>
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Course Categories */}
        <section className="mb-12">
          <div className="text-center mb-8">
            <h2 className="text-2xl lg:text-3xl font-bold bg-gradient-to-r from-foreground to-foreground/80 bg-clip-text text-transparent mb-2">
              Browse By Category
            </h2>
            <p className="text-muted-foreground">
              Find the perfect course for your career goals
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 mb-12">
            {categories.map((category) => {
              const IconComponent = category.icon;
              return (
                <button
                  key={category.id}
                  onClick={() => setActiveCategory(category.id)}
                  className={`flex flex-col items-center gap-3 p-4 rounded-xl border transition-all duration-300 ${
                    activeCategory === category.id
                      ? "bg-gradient-to-r from-blue-600 to-blue-600 text-white border-transparent shadow-lg shadow-blue-500/25"
                      : "bg-background/50 backdrop-blur-sm border-border/50 text-foreground/70 hover:border-blue-500/50"
                  }`}
                >
                  <IconComponent className="h-6 w-6" />
                  <span className="text-sm font-medium text-center">
                    {category.name}
                  </span>
                  <span
                    className={`px-2 py-1 rounded-full text-xs ${
                      activeCategory === category.id
                        ? "bg-white/20 text-white"
                        : "bg-muted text-muted-foreground"
                    }`}
                  >
                    {category.count}
                  </span>
                </button>
              );
            })}
          </div>
        </section>

        {/* All Courses Grid */}
        <section className="mb-20">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredCourses.map((course) => (
              <div
                key={course.id}
                className="group relative bg-background/50 backdrop-blur-sm border border-border/50 rounded-xl overflow-hidden hover:shadow-lg hover:shadow-blue-500/10 transition-all duration-300 hover:-translate-y-1"
              >
                {/* Course Image */}
                <div className="relative h-40 bg-gradient-to-br from-blue-500/10 to-blue-500/10 flex items-center justify-center">
                  <Globe className="h-10 w-10 text-blue-500" />

                  {course.featured && (
                    <div className="absolute top-3 left-3">
                      <Star className="h-4 w-4 text-yellow-500 fill-yellow-500" />
                    </div>
                  )}
                </div>

                {/* Course Content */}
                <div className="p-4">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-xs font-medium text-blue-600 bg-blue-500/10 px-2 py-1 rounded-full">
                      {course.category.toUpperCase()}
                    </span>
                  </div>

                  <h3 className="font-bold text-foreground mb-2 line-clamp-2 text-sm">
                    {course.title}
                  </h3>

                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center gap-1">
                      <Star className="h-3 w-3 text-yellow-500 fill-yellow-500" />
                      <span className="text-xs font-medium text-foreground">
                        {course.rating}
                      </span>
                    </div>
                    <div className="flex items-center gap-4 text-xs text-muted-foreground">
                      <div className="flex items-center gap-1">
                        <Clock className="h-3 w-3" />
                        <span>{course.duration}</span>
                      </div>
                    </div>
                  </div>

                  {/* Benefits */}
                  <div className="space-y-1 mb-3">
                    {course.benefits.slice(0, 2).map((benefit, index) => (
                      <div key={index} className="flex items-center gap-2">
                        <CheckCircle className="h-3 w-3 text-green-500" />
                        <span className="text-xs text-muted-foreground">
                          {benefit}
                        </span>
                      </div>
                    ))}
                  </div>

                  <div className="flex items-center justify-between">
                    <span className="text-lg font-bold text-foreground">
                      {course.price}
                    </span>
                    <Button asChild size="sm" variant="outline">
                      <Link href={`/courses/${course.id}`}>
                        <span>View</span>
                      </Link>
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* CTA Section */}
        <section className="text-center">
          <div className="bg-gradient-to-r from-blue-500/10 to-blue-500/10 border border-blue-500/20 rounded-3xl p-8 lg:p-12">
            <h3 className="text-2xl lg:text-3xl font-bold mb-4">
              Start Your Tech Journey Today
            </h3>
            <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
              Join thousands of Nigerian students who have transformed their
              careers with our industry-leading tech courses. No prior
              experience required.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                asChild
                size="lg"
                className="bg-gradient-to-r from-blue-600 to-blue-600 hover:from-blue-700 hover:to-blue-700"
              >
                <Link href="/contact" className="flex items-center gap-2">
                  <BookOpen className="h-5 w-5" />
                  <span>Browse All Courses</span>
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link href="/contact" className="flex items-center gap-2">
                  <span>Get Course Advice</span>
                  <ArrowRight className="h-5 w-5" />
                </Link>
              </Button>
            </div>

            {/* Additional Info */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8 pt-8 border-t border-border/50">
              {[
                { text: "Flexible Payment Plans Available" },
                { text: "100% Online Learning" },
                { text: "Job Placement Support" },
              ].map((item, index) => (
                <div
                  key={index}
                  className="flex items-center gap-2 justify-center"
                >
                  <CheckCircle className="h-4 w-4 text-green-500" />
                  <span className="text-sm text-muted-foreground">
                    {item.text}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
