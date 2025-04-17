"use client";

import { Github, Linkedin, Mail, Twitter } from "lucide-react";
import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="fixed top-0 w-full bg-white/80 backdrop-blur-sm border-b z-10">
        <nav className="max-w-5xl mx-auto px-6 h-16 flex items-center justify-between">
          <Link href="/" className="text-xl font-semibold">
            Mohit Bhatia
          </Link>
          <div className="space-x-8">
            <Link href="#about" className="hover:text-gray-600">About</Link>
            <Link href="/blog" className="hover:text-gray-600">Blog</Link>
            <Link href="/projects" className="hover:text-gray-600">Projects</Link>
          </div>
        </nav>
      </header>

      {/* Main Content */}
      <main className="pt-16">
        {/* Hero Section */}
        <section className="min-h-[calc(100vh-4rem)] flex items-center justify-center">
          <div className="max-w-5xl mx-auto px-6 py-20">
            <div className="flex flex-col md:flex-row items-center md:items-start gap-12">
              <img
                src="/Mohit_Bhatia.jpg"
                alt="Profile"
                className="w-48 h-48 rounded-full object-cover"
              />
              <div>
                <h1 className="text-4xl md:text-5xl font-bold mb-6">Hey, I'm Mohit Bhatia</h1>
                <p className="text-lg md:text-xl text-gray-600 leading-relaxed">
                  Software Engineer at Questt AI, where I work on developing AI agents.
                </p>
                <div className="flex gap-6 mt-8">
                  <Link 
                    href="https://github.com/mbhatia120" 
                    target="_blank"
                    className="p-2 hover:text-gray-600 transition-colors"
                  >
                    <Github size={24} />
                  </Link>
                  <Link 
                    href="https://linkedin.com/in/mbhatia120" 
                    target="_blank"
                    className="p-2 hover:text-gray-600 transition-colors"
                  >
                    <Linkedin size={24} />
                  </Link>
                  <Link 
                    href="https://twitter.com/mbhatia120" 
                    target="_blank"
                    className="p-2 hover:text-gray-600 transition-colors"
                  >
                    <Twitter size={24} />
                  </Link>
                  <Link 
                    href="mailto:mbhatia120@gmail.com" 
                    className="p-2 hover:text-gray-600 transition-colors"
                  >
                    <Mail size={24} />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="bg-gray-50 py-20">
          <div className="max-w-3xl mx-auto px-6">
            <h2 className="text-3xl font-bold mb-8">About Me</h2>
            <div className="space-y-6 text-gray-600">
              <p className="text-lg md:text-xl leading-relaxed">
                I'm passionate about building at the intersection of technology and society, maybe re-imagine the distribution network.
              </p>
              <p className="text-lg md:text-xl leading-relaxed">
                I studied at BITS Pilani, where I nurtured my curiosity and love for systems, history, and design.
              </p>
              <p className="text-lg md:text-xl leading-relaxed">
                As the saying goes, history tends to repeat itself. I'm deeply interested in reading history, especially through a political lens.
              </p>
              <p className="text-lg md:text-xl leading-relaxed">
                Lately, I've been exploring fitness through Cult.fit and occasionally blog about my learnings from a philosophical perspective in my blog.
              </p>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t py-8">
        <div className="max-w-5xl mx-auto px-6 text-center text-gray-600">
          <p>© {new Date().getFullYear()} Mohit Bhatia. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}