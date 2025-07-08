import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { Upload, Sparkles, CheckCircle, Clock } from "lucide-react";

const QuizDemo = () => {
  const [selectedAnswer, setSelectedAnswer] = useState("");
  const [showResult, setShowResult] = useState(false);

  const handleSubmit = () => {
    setShowResult(true);
  };

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto">
        <div className="text-center space-y-6 mb-16">
          <Badge variant="secondary" className="w-fit mx-auto">
            🚀 Try It Now
          </Badge>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-primary">
            See the{" "}
            <span className="bg-gradient-hero bg-clip-text text-transparent">
              Magic
            </span>{" "}
            in Action
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Upload your study material and watch as our AI instantly creates personalized quizzes 
            to test your knowledge and reinforce learning.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Upload Section */}
          <div className="space-y-6">
            <Card className="border-2 border-dashed border-primary/20 hover:border-primary/40 transition-colors bg-gradient-card">
              <CardHeader className="text-center">
                <div className="mx-auto p-4 bg-gradient-hero rounded-full w-fit mb-4">
                  <Upload className="h-8 w-8 text-primary-foreground" />
                </div>
                <CardTitle className="text-xl">Upload Your Study Material</CardTitle>
                <CardDescription>
                  Drop your PDFs, images, or text files here and let AI do the rest
                </CardDescription>
              </CardHeader>
              <CardContent className="text-center">
                <Button variant="hero" className="w-full">
                  <Sparkles className="mr-2 h-5 w-5" />
                  Choose Files or Drag & Drop
                </Button>
                <p className="text-sm text-muted-foreground mt-4">
                  Supports: PDF, JPG, PNG, TXT • Max 10MB
                </p>
              </CardContent>
            </Card>

            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-primary">Supported Features:</h3>
              <div className="grid grid-cols-2 gap-3">
                <div className="flex items-center space-x-2 p-3 rounded-lg bg-muted/50">
                  <CheckCircle className="h-5 w-5 text-success" />
                  <span className="text-sm">Multiple Choice</span>
                </div>
                <div className="flex items-center space-x-2 p-3 rounded-lg bg-muted/50">
                  <CheckCircle className="h-5 w-5 text-success" />
                  <span className="text-sm">True/False</span>
                </div>
                <div className="flex items-center space-x-2 p-3 rounded-lg bg-muted/50">
                  <CheckCircle className="h-5 w-5 text-success" />
                  <span className="text-sm">Written Answers</span>
                </div>
                <div className="flex items-center space-x-2 p-3 rounded-lg bg-muted/50">
                  <CheckCircle className="h-5 w-5 text-success" />
                  <span className="text-sm">Auto-Grading</span>
                </div>
              </div>
            </div>
          </div>

          {/* Demo Quiz */}
          <div className="space-y-6">
            <Card className="shadow-hero bg-background border-border/50">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <div>
                    <CardTitle className="text-xl">Sample Quiz Generated</CardTitle>
                    <CardDescription>From: "Introduction to Biology.pdf"</CardDescription>
                  </div>
                  <Badge variant="secondary" className="bg-success/10 text-success border-success/20">
                    <Clock className="mr-1 h-3 w-3" />
                    2 min
                  </Badge>
                </div>
              </CardHeader>
              <CardContent className="space-y-6">
                <div>
                  <h4 className="font-semibold text-lg mb-4 text-primary">
                    Question 1: What is the primary function of mitochondria in cells?
                  </h4>
                  
                  <RadioGroup value={selectedAnswer} onValueChange={setSelectedAnswer}>
                    <div className="space-y-3">
                      <div className="flex items-center space-x-2 p-3 rounded-lg hover:bg-muted/50 transition-colors">
                        <RadioGroupItem value="a" id="a" />
                        <Label htmlFor="a" className="cursor-pointer flex-1">
                          A) Protein synthesis
                        </Label>
                      </div>
                      <div className="flex items-center space-x-2 p-3 rounded-lg hover:bg-muted/50 transition-colors">
                        <RadioGroupItem value="b" id="b" />
                        <Label htmlFor="b" className="cursor-pointer flex-1">
                          B) Energy production (ATP synthesis)
                        </Label>
                      </div>
                      <div className="flex items-center space-x-2 p-3 rounded-lg hover:bg-muted/50 transition-colors">
                        <RadioGroupItem value="c" id="c" />
                        <Label htmlFor="c" className="cursor-pointer flex-1">
                          C) DNA replication
                        </Label>
                      </div>
                      <div className="flex items-center space-x-2 p-3 rounded-lg hover:bg-muted/50 transition-colors">
                        <RadioGroupItem value="d" id="d" />
                        <Label htmlFor="d" className="cursor-pointer flex-1">
                          D) Waste removal
                        </Label>
                      </div>
                    </div>
                  </RadioGroup>
                </div>

                {!showResult ? (
                  <Button 
                    onClick={handleSubmit} 
                    disabled={!selectedAnswer}
                    variant="hero" 
                    className="w-full"
                  >
                    Submit Answer
                  </Button>
                ) : (
                  <div className="p-4 rounded-lg bg-success/10 border border-success/20">
                    <div className="flex items-center space-x-2 mb-2">
                      <CheckCircle className="h-5 w-5 text-success" />
                      <span className="font-semibold text-success">
                        {selectedAnswer === "b" ? "Correct!" : "Incorrect"}
                      </span>
                    </div>
                    <p className="text-sm text-muted-foreground">
                      The correct answer is B. Mitochondria are known as the "powerhouses" of the cell 
                      because they produce ATP through cellular respiration.
                    </p>
                  </div>
                )}

                <div className="text-center pt-4 border-t border-border">
                  <p className="text-sm text-muted-foreground">
                    This is just one question. AI can generate entire quizzes instantly!
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default QuizDemo;