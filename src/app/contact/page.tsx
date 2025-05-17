// src/app/contact/page.tsx
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Mail, Phone, Send, Linkedin, Github, Twitter, Instagram } from "lucide-react"; // Added Linkedin, Github, Twitter, Instagram
import Link from "next/link";

const socialLinks = [
  {
    name: "Twitter / X",
    href: "https://twitter.com/Sathyamsarthak",
    icon: Twitter,
    username: "@Sathyamsarthak",
  },
  {
    name: "Instagram",
    href: "https://instagram.com/srishikharji",
    icon: Instagram,
    username: "@srishikharji",
  },
  {
    name: "GitHub",
    href: "https://github.com/astromanreal",
    icon: Github,
    username: "astromanreal",
  },
  // Add other social links here if needed
];

export default function ContactPage() {
  return (
    <div className="container mx-auto py-12 px-4">
      <Card className="max-w-3xl mx-auto shadow-xl border-primary/20 rounded-lg">
        <CardHeader className="text-center pb-8">
          <div className="inline-flex items-center justify-center p-4 bg-primary/10 rounded-full mb-6 mx-auto">
            <Send className="h-16 w-16 text-primary" />
          </div>
          <CardTitle className="text-4xl font-bold tracking-tight text-primary sm:text-5xl">
            Get in Touch
          </CardTitle>
          <CardDescription className="mt-3 text-xl text-muted-foreground max-w-xl mx-auto">
            We&apos;d love to hear from you. Whether you have a question, feedback, or just want to connect, feel free to reach out through any of the channels below.
          </CardDescription>
        </CardHeader>

        <CardContent className="space-y-10">
          {/* Direct Contact Section */}
          <section>
            <h2 className="text-2xl font-semibold text-accent mb-6 text-center sm:text-left">Direct Contact</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <Card className="bg-card/50 p-6 rounded-md shadow-md hover:shadow-primary/20 transition-shadow">
                <div className="flex items-center mb-3">
                  <Mail className="h-7 w-7 text-primary mr-3" />
                  <h3 className="text-xl font-medium text-foreground">Email</h3>
                </div>
                <p className="text-muted-foreground mb-3">For direct inquiries, please email us.</p>
                <Button variant="outline" asChild className="w-full sm:w-auto hover:bg-primary/10 hover:text-primary-foreground border-primary/50">
                  <Link href="mailto:astroman6569@gmail.com">
                    astroman6569@gmail.com
                  </Link>
                </Button>
              </Card>

              <Card className="bg-card/50 p-6 rounded-md shadow-md hover:shadow-primary/20 transition-shadow">
                <div className="flex items-center mb-3">
                  <Phone className="h-7 w-7 text-primary mr-3" />
                  <h3 className="text-xl font-medium text-foreground">Phone</h3>
                </div>
                <p className="text-muted-foreground mb-3">You can also reach us by phone.</p>
                <Button variant="outline" asChild className="w-full sm:w-auto hover:bg-primary/10 hover:text-primary-foreground border-primary/50">
                  <Link href="tel:+918102116569">
                    +91 8102116569
                  </Link>
                </Button>
              </Card>
            </div>
          </section>

          {/* Connect Online Section */}
          <section>
            <h2 className="text-2xl font-semibold text-accent mb-6 text-center sm:text-left">Connect Online</h2>
            <p className="text-muted-foreground mb-6 text-center sm:text-left">
              Follow us and engage with our community on social media.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {socialLinks.map((link) => (
                <Card 
                  key={link.name}
                  className="bg-card/50 p-6 rounded-md shadow-md hover:shadow-primary/20 transition-shadow transform hover:scale-105 duration-300 ease-in-out flex flex-col items-center text-center"
                >
                  <link.icon className="h-10 w-10 text-primary mb-4" />
                  <h3 className="text-lg font-medium text-foreground mb-1">{link.name}</h3>
                  <p className="text-sm text-muted-foreground mb-4">{link.username}</p>
                  <Button variant="default" size="sm" asChild className="mt-auto bg-primary hover:bg-primary/90 text-primary-foreground">
                    <Link href={link.href} target="_blank" rel="noopener noreferrer">
                      Follow
                    </Link>
                  </Button>
                </Card>
              ))}
            </div>
          </section>
        </CardContent>
      </Card>
    </div>
  );
}