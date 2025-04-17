import { blogPost as post1 } from '../data/blogs/post-1';
import { blogPost as post2 } from '../data/blogs/post-2';
import { blogPost as post3 } from '../data/blogs/post-3';

export default function Blog() {
  // Static blog posts array
  const blogPosts = [post3, post2, post1];
  
  return (
    <div className="min-h-screen bg-white">
      <header className="fixed top-0 w-full bg-white/80 backdrop-blur-sm border-b z-10">
        <nav className="max-w-5xl mx-auto px-6 h-16 flex items-center justify-between">
          <a href="/" className="text-xl font-semibold transition-colors hover:text-blue-600">
            Mohit Bhatia
          </a>
          <div className="space-x-8">
            <a href="/" className="transition-all hover:text-blue-600 hover:underline hover:underline-offset-4">Home</a>
            <a href="/blog" className="transition-all hover:text-blue-600 hover:underline hover:underline-offset-4">Blog</a>
            <a href="/projects" className="transition-all hover:text-blue-600 hover:underline hover:underline-offset-4">Projects</a>
          </div>
        </nav>
      </header>

      <main className="pt-32 pb-20">
        <div className="max-w-3xl mx-auto px-6">
          <h1 className="text-4xl font-bold mb-12">Blog</h1>
          <div className="space-y-12">
            {blogPosts.map((post) => (
              <article 
                key={post.slug} 
                className="group p-6 border border-transparent rounded-lg transition-all duration-300 hover:border-gray-200 hover:shadow-md hover:bg-gray-50"
              >
                <div className="space-y-3">
                  <span className="text-sm text-gray-500">{post.date}</span>
                  <h2 className="text-2xl font-semibold transition-colors duration-300 group-hover:text-blue-600">
                    <a href={`/blog/${post.slug}`} className="block relative">
                      {post.title}
                      <span className="absolute inset-0" aria-hidden="true" />
                    </a>
                  </h2>
                  <p className="text-gray-600 leading-relaxed">
                    {post.excerpt}
                  </p>
                  <div className="pt-2">
                    <span className="inline-flex items-center text-sm font-medium text-blue-600 opacity-0 transform translate-x-0 transition-all duration-300 group-hover:opacity-100 group-hover:translate-x-2">
                      <a href={`/blog/${post.slug}`} className="block relative">
                        Read more 
                      </a>
                      <svg className="ml-1 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
                      </svg>
                    </span>
                  </div>
                </div>
              </article>
            ))}
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