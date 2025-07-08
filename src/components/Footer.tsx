import { Badge } from "@/components/ui/badge";
import { GraduationCap, Heart, Globe } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground py-16 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="md:col-span-2 space-y-4">
            <div className="flex items-center space-x-3">
              <div className="p-2 bg-primary-foreground/10 rounded-lg">
                <GraduationCap className="h-6 w-6" />
              </div>
              <div>
                <h3 className="text-xl font-bold">StudyFlow</h3>
                <p className="text-sm text-primary-foreground/80">Study... Smarter!</p>
              </div>
            </div>
            <p className="text-primary-foreground/80 max-w-md leading-relaxed">
              Transform your learning experience with AI-powered quiz generation, smart file management, 
              and personalized study plans. Perfect for students worldwide.
            </p>
            <div className="flex items-center space-x-4">
              <Badge variant="secondary" className="bg-primary-foreground/10 text-primary-foreground border-primary-foreground/20">
                <Globe className="mr-1 h-3 w-3" />
                4 Languages
              </Badge>
              <Badge variant="secondary" className="bg-primary-foreground/10 text-primary-foreground border-primary-foreground/20">
                🆓 Free to Start
              </Badge>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="font-semibold text-lg">Quick Links</h4>
            <div className="space-y-2">
              <a href="#features" className="block text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                Features
              </a>
              <a href="#" className="block text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                How it Works
              </a>
              <a href="#" className="block text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                Pricing
              </a>
              <a href="#" className="block text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                Support
              </a>
            </div>
          </div>

          {/* Contact & Legal */}
          <div className="space-y-4">
            <h4 className="font-semibold text-lg">Support</h4>
            <div className="space-y-2">
              <a href="#" className="block text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                Help Center
              </a>
              <a href="#" className="block text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="block text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                Terms of Service
              </a>
              <a href="#" className="block text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                Contact Us
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-primary-foreground/20 mt-12 pt-8">
          <div className="flex flex-col sm:flex-row items-center justify-between">
            <p className="text-primary-foreground/60 text-sm">
              © 2024 StudyFlow. All rights reserved.
            </p>
            <div className="flex items-center space-x-2 mt-4 sm:mt-0">
              <span className="text-primary-foreground/60 text-sm">Made with</span>
              <Heart className="h-4 w-4 text-red-400 fill-current" />
              <span className="text-primary-foreground/60 text-sm">for students worldwide</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;