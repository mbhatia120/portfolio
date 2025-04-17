// app/blog/[slug]/page.js
import { notFound } from 'next/navigation';

// Import all blog posts
import { blogPost as post1 } from '../../data/blogs/post-1';
import { blogPost as post2 } from '../../data/blogs/post-2';
import { blogPost as post3 } from '../../data/blogs/post-3';

// In a real application, you would likely fetch this data dynamically
const blogPosts = {
  'post-1': post1,
  'post-2': post2,
  'post-3': post3
};

// This function tells Next.js which paths to pre-render
export async function generateStaticParams() {
  // Return an array of objects with the slug parameter
  return [
    { slug: 'post-1' },
    { slug: 'post-2' },
    { slug: 'post-3' },
  ];
}

export default function BlogPost({ params }) {
  const { slug } = params;
  const post = blogPosts[slug];
  
  // If the post doesn't exist, show a 404 page
  if (!post) {
    notFound();
  }

  // Convert markdown-like content to paragraphs and headers
  const renderContent = () => {
    return post.content.split('\n').map((line, index) => {
      if (line.trim().startsWith('# ')) {
        return <h1 key={index} className="text-3xl font-bold mt-8 mb-4">{line.replace('# ', '')}</h1>;
      } else if (line.trim().startsWith('## ')) {
        return <h2 key={index} className="text-2xl font-bold mt-6 mb-3">{line.replace('## ', '')}</h2>;
      } else if (line.trim()) {
        return <p key={index} className="mb-4 text-gray-700 leading-relaxed">{line}</p>;
      }
      return null;
    }).filter(Boolean);
  };

  return (
    <div className="min-h-screen bg-white">
      <header className="fixed top-0 w-full bg-white/80 backdrop-blur-sm border-b z-10">
        <nav className="max-w-5xl mx-auto px-6 h-16 flex items-center justify-between">
          <a href="/" className="text-xl font-semibold">Mohit Bhatia</a>
          <div className="space-x-8">
            <a href="/" className="hover:text-gray-600">Home</a>
            <a href="/blog" className="hover:text-gray-600">Blog</a>
            <a href="/projects" className="hover:text-gray-600">Projects</a>
          </div>
        </nav>
      </header>

      <main className="pt-32 pb-20">
        <div className="max-w-3xl mx-auto px-6">
          <div className="mb-8">
            <span className="text-sm text-gray-500">{post.date}</span>
            <h1 className="text-4xl font-bold mt-2">{post.title}</h1>
          </div>
          
          <div className="prose max-w-none">
            {renderContent()}
          </div>
          
          <div className="mt-12">
            <a href="/blog" className="text-blue-600 hover:underline">
              ← Back to all posts
            </a>
          </div>
        </div>
      </main>

      <footer className="border-t py-8">
        <div className="max-w-5xl mx-auto px-6 text-center text-gray-600">
          <p>© {new Date().getFullYear()} Mohit Bhatia. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}