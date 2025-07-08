import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { 
  Brain, 
  FileText, 
  Zap, 
  Globe, 
  Users, 
  Moon,
  Upload,
  Clock,
  Target
} from "lucide-react";

const Features = () => {
  const features = [
    {
      icon: Brain,
      title: "AI-Powered Quiz Generator",
      description: "Transform any text, image, or PDF into smart quizzes with multiple choice, true/false, or written-answer formats.",
      badge: "Core Feature",
      color: "text-primary"
    },
    {
      icon: Upload,
      title: "Smart File Management",
      description: "Convert images to PDF and PDF to images easily. Organize all your study materials in one place.",
      badge: "Productivity",
      color: "text-success"
    },
    {
      icon: Zap,
      title: "Exam Emergency Mode",
      description: "Last-minute study plans and focused review sessions designed for exam crunch time.",
      badge: "Study Mode",
      color: "text-warning"
    },
    {
      icon: Globe,
      title: "Multilingual Support",
      description: "Study in Arabic, English, French, or Turkish - perfect for international students.",
      badge: "Global",
      color: "text-primary-glow"
    },
    {
      icon: Moon,
      title: "Auto Dark/Light Mode",
      description: "Comfortable studying at any time with automatic theme switching based on your preference.",
      badge: "Comfort",
      color: "text-muted-foreground"
    },
    {
      icon: Users,
      title: "Study Community",
      description: "Share questions and notes with fellow students. Learn together and stay motivated.",
      badge: "Coming Soon",
      color: "text-primary-light"
    },
    {
      icon: Target,
      title: "Smart Analytics",
      description: "Track your learning progress with intelligent insights and performance analytics.",
      badge: "Premium",
      color: "text-success"
    },
    {
      icon: Clock,
      title: "Study Scheduler",
      description: "Get personalized study plans and smart schedule suggestions based on your goals.",
      badge: "Premium",
      color: "text-warning"
    }
  ];

  return (
    <section id="features" className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/30">
      <div className="container mx-auto">
        <div className="text-center space-y-6 mb-16">
          <Badge variant="secondary" className="w-fit mx-auto">
            ✨ Powerful Features
          </Badge>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-primary">
            Everything You Need to{" "}
            <span className="bg-gradient-hero bg-clip-text text-transparent">
              Study Smarter
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            From AI-powered quiz generation to smart file management, StudyFlow provides 
            all the tools you need for academic success.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <Card 
              key={index} 
              className="group hover:shadow-hero transition-all duration-300 hover:-translate-y-2 bg-gradient-card border-border/50"
            >
              <CardHeader className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className={`p-3 rounded-lg bg-background/50 ${feature.color}`}>
                    <feature.icon className="h-6 w-6" />
                  </div>
                  <Badge variant={feature.badge === "Coming Soon" ? "outline" : "secondary"} className="text-xs">
                    {feature.badge}
                  </Badge>
                </div>
                <div>
                  <CardTitle className="text-lg group-hover:text-primary transition-colors">
                    {feature.title}
                  </CardTitle>
                  <CardDescription className="text-sm leading-relaxed">
                    {feature.description}
                  </CardDescription>
                </div>
              </CardHeader>
            </Card>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <p className="text-lg text-muted-foreground mb-4">
            Ready to revolutionize your study habits?
          </p>
          <Badge variant="secondary" className="bg-success/10 text-success border-success/20">
            🎉 Free to start - Premium features coming soon
          </Badge>
        </div>
      </div>
    </section>
  );
};

export default Features;