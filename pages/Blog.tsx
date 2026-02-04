import React from 'react';
import { Link } from 'react-router-dom';
import { BLOG_POSTS } from '../constants';
import EnhancedSEO from '../components/EnhancedSEO';
import { ArrowRight, Calendar, Tag } from 'lucide-react';

const Blog: React.FC = () => {
  const schemaData = {
    "@context": "https://schema.org",
    "@type": "Blog",
    "name": "Blog Lavanderia Inovata",
    "description": "Dicas de cuidados com roupas, calçados e casa em Osasco e região.",
    "publisher": {
      "@type": "Organization",
      "name": "Lavanderia Inovata"
    }
  };

  return (
    <>
      <EnhancedSEO 
        title="Blog Lavanderia Inovata | Dicas de Cuidados com Roupas e Casa"
        description="Confira nosso blog com as melhores dicas de limpeza de tênis, tapetes e cuidados têxteis em Osasco, Barueri e Zona Oeste de SP."
        structuredData={schemaData}
        breadcrumbs={[
          { name: 'Home', item: '/' },
          { name: 'Blog', item: '/blog' }
        ]}
      />

      <main className="pt-32 pb-20 bg-gray-50 min-h-screen">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-heading font-black text-secondary-dark mb-6">Blog Inovata</h1>
            <p className="text-xl text-gray-600">Informação e dicas de especialistas para cuidar do que é importante para você.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {BLOG_POSTS.map((post) => (
              <article key={post.id} className="bg-white rounded-3xl overflow-hidden shadow-sm border border-gray-100 hover:shadow-xl transition-all duration-300 group">
                <Link to={`/blog/${post.slug}`} className="block relative h-64 overflow-hidden">
                  <img 
                    src={post.image} 
                    alt={post.title} 
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="bg-primary-blue text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">
                      {post.category}
                    </span>
                  </div>
                </Link>
                
                <div className="p-8">
                  <div className="flex items-center gap-4 text-xs text-gray-400 mb-4">
                    <span className="flex items-center gap-1"><Calendar size={14}/> {post.date}</span>
                  </div>
                  
                  <h2 className="text-2xl font-bold text-secondary-dark mb-4 group-hover:text-primary-blue transition-colors">
                    <Link to={`/blog/${post.slug}`}>{post.title}</Link>
                  </h2>
                  
                  <p className="text-gray-600 mb-6 line-clamp-3">{post.excerpt}</p>
                  
                  <Link 
                    to={`/blog/${post.slug}`} 
                    className="inline-flex items-center gap-2 text-primary-gold font-bold group/link"
                  >
                    Ler mais <ArrowRight size={18} className="group-hover/link:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </main>
    </>
  );
};

export default Blog;