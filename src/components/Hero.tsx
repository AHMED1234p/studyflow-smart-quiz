import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Brain, FileText, Smartphone } from "lucide-react";
import heroImage from "@/assets/hero-image.jpg";

const Hero = () => {
  return (
    <section className="pt-24 pb-16 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Content */}
          <div className="space-y-8 animate-slide-up">
            <div className="space-y-4">
              <Badge variant="secondary" className="w-fit">
                🤖 AI-Powered Learning
              </Badge>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-primary leading-tight">
                Study...{" "}
                <span className="bg-gradient-hero bg-clip-text text-transparent animate-glow">
                  Smarter!
                </span>
              </h1>
              <p className="text-xl text-muted-foreground leading-relaxed max-w-2xl">
                Transform your learning experience with StudyFlow's AI-powered quiz generation, 
                smart file management, and personalized study plans. Perfect for students from 
                middle school to university.
              </p>
            </div>

            {/* Key Features */}
            <div className="grid sm:grid-cols-3 gap-4">
              <div className="flex items-center space-x-3 p-3 rounded-lg bg-gradient-card border border-border/50">
                <Brain className="h-8 w-8 text-primary" />
                <div>
                  <p className="font-semibold text-sm">AI Quiz Generator</p>
                  <p className="text-xs text-muted-foreground">From any content</p>
                </div>
              </div>
              <div className="flex items-center space-x-3 p-3 rounded-lg bg-gradient-card border border-border/50">
                <FileText className="h-8 w-8 text-primary" />
                <div>
                  <p className="font-semibold text-sm">Smart Notes</p>
                  <p className="text-xs text-muted-foreground">Organize & convert</p>
                </div>
              </div>
              <div className="flex items-center space-x-3 p-3 rounded-lg bg-gradient-card border border-border/50">
                <Smartphone className="h-8 w-8 text-primary" />
                <div>
                  <p className="font-semibold text-sm">Cross-Platform</p>
                  <p className="text-xs text-muted-foreground">Study anywhere</p>
                </div>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" variant="hero" className="group">
                Start Learning for Free
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button size="lg" variant="outline">
                Watch Demo
              </Button>
            </div>

            {/* Social Proof */}
            <div className="flex items-center space-x-6 text-sm text-muted-foreground">
              <div className="flex items-center space-x-2">
                <div className="flex -space-x-2">
                  <div className="w-8 h-8 bg-gradient-hero rounded-full border-2 border-background"></div>
                  <div className="w-8 h-8 bg-success rounded-full border-2 border-background"></div>
                  <div className="w-8 h-8 bg-warning rounded-full border-2 border-background"></div>
                </div>
                <p><span className="font-semibold text-primary">1000+</span> students already studying smarter</p>
              </div>
            </div>
          </div>

          {/* Right Column - Hero Image */}
          <div className="lg:order-2 animate-float">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-hero rounded-3xl blur-3xl opacity-20 transform rotate-6"></div>
              <img
                src={heroImage}
                alt="StudyFlow - Smart Learning Interface"
                className="relative w-full h-auto rounded-3xl shadow-hero border border-border/20"
              />
              
              {/* Floating Elements */}
              <div className="absolute top-4 right-4 bg-background/90 backdrop-blur-sm p-3 rounded-xl shadow-card border border-border/50">
                <div className="flex items-center space-x-2">
                  <div className="w-3 h-3 bg-success rounded-full animate-pulse"></div>
                  <p className="text-sm font-medium">AI Active</p>
                </div>
              </div>
              
              <div className="absolute bottom-4 left-4 bg-background/90 backdrop-blur-sm p-3 rounded-xl shadow-card border border-border/50">
                <p className="text-sm font-medium text-primary">+85% Study Efficiency</p>
                <p className="text-xs text-muted-foreground">vs traditional methods</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;