import Link from "next/link";
import { Button } from "@/components/ui/button";

export function LandingCTA() {
  return (
    <section className="relative overflow-hidden py-24 md:py-32">
      <div className="absolute inset-0 bg-gradient-to-t from-slate-100/50 to-transparent -z-10" />
      <div className="mx-auto w-full max-w-lg px-4 sm:px-6 lg:px-8">
        <div className="space-y-6 text-center">
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-transparent bg-clip-text bg-gradient-to-b from-zinc-900 to-zinc-600">
            Ready to share your links?
          </h2>
          <p className="text-base text-zinc-600 max-w-2xl mx-auto leading-relaxed">
            Join thousands of creators who use TapIn to showcase their work. 
            Get started in seconds.
          </p>
          <div className="flex flex-col sm:flex-row justify-center items-center gap-3 pt-4">
            <Button 
              render={<Link href="/signup" />}
              className="text-sm font-medium px-8 h-12 bg-zinc-900 text-white hover:bg-zinc-800 hover:-translate-y-0.5 hover:shadow-xl hover:shadow-zinc-900/20 transition-all duration-300 rounded-full"
            >
              Get Started
            </Button>

          </div>
        </div>
      </div>
    </section>
  );
}

