import React from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { BLOG_POSTS, NEIGHBORHOODS, CONTACT } from '../constants';
import EnhancedSEO from '../components/EnhancedSEO';
import { ArrowLeft, Calendar, User, Share2, MapPin } from 'lucide-react';

const BlogPost: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const post = BLOG_POSTS.find(p => p.slug === slug);

  if (!post) return <Navigate to="/blog" replace />;

  const schemaData = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "headline": post.title,
    "image": post.image,
    "datePublished": post.date,
    "author": { "@type": "Organization", "name": "Lavanderia Inovata" },
    "publisher": { "@type": "Organization", "name": "Lavanderia Inovata" },
    "description": post.excerpt
  };

  return (
    <>
      <EnhancedSEO 
        title={`${post.title} | Blog Lavanderia Inovata`}
        description={post.excerpt}
        image={post.image}
        type="article"
        structuredData={schemaData}
        breadcrumbs={[
          { name: 'Home', item: '/' },
          { name: 'Blog', item: '/blog' },
          { name: post.title, item: `/blog/${post.slug}` }
        ]}
      />

      <main className="pt-32 pb-20 bg-white min-h-screen">
        <article className="container mx-auto px-4 max-w-4xl">
          <Link to="/blog" className="inline-flex items-center gap-2 text-primary-blue font-bold mb-8 hover:translate-x-1 transition-transform">
            <ArrowLeft size={20} /> Voltar para o Blog
          </Link>

          <header className="mb-12">
            <div className="flex items-center gap-4 text-sm text-gray-400 mb-4">
              <span className="bg-blue-50 text-primary-blue px-3 py-1 rounded-full font-bold uppercase text-[10px]">{post.category}</span>
              <span className="flex items-center gap-1"><Calendar size={14}/> {post.date}</span>
              <span className="flex items-center gap-1"><User size={14}/> Por Lavanderia Inovata</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-black text-secondary-dark mb-8 leading-tight">
              {post.title}
            </h1>
            <div className="aspect-video w-full rounded-3xl overflow-hidden shadow-2xl">
              <img src={post.image} alt={post.title} className="w-full h-full object-cover" />
            </div>
          </header>

          <div className="prose prose-lg prose-blue max-w-none text-gray-700 leading-relaxed mb-16">
            <p className="text-xl font-medium text-gray-600 italic border-l-4 border-primary-gold pl-6 mb-8">
              {post.excerpt}
            </p>
            <div className="whitespace-pre-line">
              {post.content}
            </div>
            
            <h3 className="text-2xl font-bold mt-12 mb-6">Atendimento em toda a região</h3>
            <p>
              A Lavanderia Inovata tem orgulho de atender diversos bairros e cidades com nosso serviço de delivery rápido. 
              Garantimos qualidade premium e praticidade para moradores de:
            </p>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mt-6">
              {Array.from(new Set(NEIGHBORHOODS.map(n => n.city))).map(city => (
                <div key={city} className="flex items-center gap-2 bg-gray-50 p-3 rounded-xl border border-gray-100">
                  <MapPin size={18} className="text-primary-blue" />
                  <span className="font-bold text-secondary-dark">{city}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-secondary-dark rounded-3xl p-8 md:p-12 text-white text-center relative overflow-hidden">
             <div className="relative z-10">
               <h3 className="text-3xl font-bold mb-6">Gostou das dicas?</h3>
               <p className="text-gray-300 mb-8 text-lg">Deixe o trabalho pesado conosco e tenha mais tempo para você.</p>
               <a href={`https://wa.me/${CONTACT.whatsapp}`} className="inline-block bg-primary-gold text-secondary-dark px-10 py-4 rounded-full font-bold text-lg hover:bg-white transition-all btn-premium shadow-xl">
                 Chamar no WhatsApp Agora
               </a>
             </div>
          </div>
        </article>
      </main>
    </>
  );
};

export default BlogPost;