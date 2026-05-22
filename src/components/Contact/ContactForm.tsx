import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";
import { Card, CardContent } from "@/components/ui/card";

const formSchema = z.object({
  fullName: z.string().min(2, {
    message: "Name must be at least 2 characters.",
  }),
  email: z.string().email({
    message: "Please enter a valid email address.",
  }),
  phoneNumber: z.string().optional(),
  service: z.string({
    required_error: "Please select a service.",
  }),
  budget: z.string().optional(),
  message: z.string().min(10, {
    message: "Message must be at least 10 characters.",
  }),
});

export default function ContactForm() {
  const { toast } = useToast();
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      fullName: "",
      email: "",
      phoneNumber: "",
      message: "",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);
    toast({
      title: "Message Sent!",
      description: "Thank you for reaching out. We'll get back to you within 24 hours.",
    });
    form.reset();
  }

  return (
    <Card className="border-none shadow-xl bg-white overflow-hidden" id="contact-form">
      <div className="bg-primary px-8 py-6 text-white">
        <h2 className="text-2xl font-bold mb-1 text-white">Send Us a Message</h2>
        <p className="text-white/70 text-sm">Fill in the form and our team will get back to you within 24 hours.</p>
      </div>
      <CardContent className="p-8">
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <FormField
                control={form.control}
                name="fullName"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-foreground/80 font-semibold">Full Name*</FormLabel>
                    <FormControl>
                      <Input placeholder="Your full name" {...field} className="border-border/60 focus:ring-accent" />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-foreground/80 font-semibold">Email Address*</FormLabel>
                    <FormControl>
                      <Input type="email" placeholder="your@email.com" {...field} className="border-border/60 focus:ring-accent" />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <FormField
                control={form.control}
                name="phoneNumber"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-foreground/80 font-semibold">Phone Number</FormLabel>
                    <FormControl>
                      <Input placeholder="+254 700 000 000" {...field} className="border-border/60 focus:ring-accent" />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="service"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-foreground/80 font-semibold">Service Required*</FormLabel>
                    <Select onValueChange={field.onChange} defaultValue={field.value}>
                      <FormControl>
                        <SelectTrigger className="border-border/60 focus:ring-accent">
                          <SelectValue placeholder="Select a service" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        {[
                          "Paper Printing",
                          "Screen Printing",
                          "Large Format Printing",
                          "Signages",
                          "Embroidery",
                          "Promotional Items",
                          "Advertisement Solutions",
                          "Branding",
                          "Other"
                        ].map((s) => (
                          <SelectItem key={s} value={s}>{s}</SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            <FormField
              control={form.control}
              name="budget"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-foreground/80 font-semibold">Project Budget</FormLabel>
                  <Select onValueChange={field.onChange} defaultValue={field.value}>
                    <FormControl>
                      <SelectTrigger className="border-border/60 focus:ring-accent">
                        <SelectValue placeholder="Select budget range" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      <SelectItem value="under-10k">Under KES 10,000</SelectItem>
                      <SelectItem value="10k-50k">KES 10,000–50,000</SelectItem>
                      <SelectItem value="50k-100k">KES 50,000–100,000</SelectItem>
                      <SelectItem value="over-100k">Over KES 100,000</SelectItem>
                    </SelectContent>
                  </Select>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="message"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-foreground/80 font-semibold">Message/Project Details*</FormLabel>
                  <FormControl>
                    <Textarea 
                      placeholder="Tell us about your project, requirements, quantities, and timeline..." 
                      className="min-h-[150px] border-border/60 focus:ring-accent" 
                      {...field} 
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <Button type="submit" className="w-full gradient-accent hover:opacity-90 text-white font-bold h-12 text-lg shadow-lg shadow-accent/20 transition-all active:scale-[0.98]">
              Send Message & Get Quote
              <Send className="ml-2 h-5 w-5" />
            </Button>
          </form>
        </Form>
      </CardContent>
    </Card>
  );
}