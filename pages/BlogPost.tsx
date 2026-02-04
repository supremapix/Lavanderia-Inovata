import React from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { BLOG_POSTS, NEIGHBORHOODS, CONTACT } from '../constants';
import EnhancedSEO from '../components/EnhancedSEO';
import { ArrowLeft, Calendar, User, MapPin, Share2, MessageCircle } from 'lucide-react';

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
    "description": post.excerpt,
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": `https://www.lavanderiainovata.com.br/blog/${post.slug}`
    }
  };

  return (
    <>
      <EnhancedSEO 
        title={`${post.title} | Blog Lavanderia Inovata Osasco`}
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

      <main className="pt-32 pb-24 bg-white min-h-screen">
        <article className="container mx-auto px-4 max-w-4xl">
          <Link to="/blog" className="inline-flex items-center gap-2 text-primary-blue font-bold mb-10 hover:translate-x-1 transition-transform group">
            <ArrowLeft size={20} className="group-hover:-translate-x-1 transition-transform" /> VOLTAR PARA O BLOG
          </Link>

          <header className="mb-12">
            <div className="flex flex-wrap items-center gap-4 text-xs font-bold text-gray-400 mb-6">
              <span className="bg-blue-50 text-primary-blue px-3 py-1 rounded-full uppercase tracking-widest">{post.category}</span>
              <span className="flex items-center gap-1 uppercase tracking-widest"><Calendar size={14}/> {post.date}</span>
              <span className="flex items-center gap-1 uppercase tracking-widest"><User size={14}/> POR INOVATA</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-black text-secondary-dark mb-10 leading-tight">
              {post.title}
            </h1>
            <div className="aspect-video w-full rounded-3xl overflow-hidden shadow-2xl relative">
               <img src={post.image} alt={post.title} className="w-full h-full object-cover" />
               <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
            </div>
          </header>

          <div className="prose prose-lg prose-blue max-w-none text-gray-700 leading-relaxed mb-16">
            <p className="text-2xl font-medium text-gray-500 italic border-l-8 border-primary-gold pl-8 mb-12">
              {post.excerpt}
            </p>
            
            <div className="whitespace-pre-line text-lg text-gray-700">
              {post.content}
            </div>
            
            <div className="my-16 p-8 bg-blue-50 rounded-3xl border border-blue-100">
               <h3 className="text-2xl font-bold text-primary-blue mb-6 flex items-center gap-2">
                 <MapPin size={24}/> Atendimento Premium em Osasco e Região
               </h3>
               <p className="mb-6">
                 Nossa <strong>lavanderia profissional</strong> cobre diversas áreas com o serviço de <strong>lavanderia osasco leva e traz</strong>. Se você está em algum desses locais, conte com a Inovata:
               </p>
               <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                 {NEIGHBORHOODS.slice(0, 9).map(n => (
                   <Link 
                     key={n.id} 
                     to={`/lavanderia/${n.slug}`}
                     className="bg-white p-3 rounded-xl border border-gray-200 text-sm font-bold text-gray-600 hover:text-primary-blue hover:border-primary-blue transition-all text-center"
                   >
                     {n.name}
                   </Link>
                 ))}
               </div>
            </div>
            
            <h3 className="text-3xl font-bold mt-12 mb-6">Pronto para ter suas roupas renovadas?</h3>
            <p className="mb-10">
              Não deixe para depois a <strong>lavagem de edredons</strong> ou aquela <strong>passadoria profissional</strong> que você tanto precisa. A Lavanderia Inovata é a sua <strong>lavanderia delivery em Osasco</strong> de confiança.
            </p>
          </div>

          <div className="bg-secondary-dark rounded-[3rem] p-10 md:p-16 text-white text-center relative overflow-hidden shadow-2xl">
             <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary-gold via-white to-primary-gold opacity-30"></div>
             <div className="relative z-10">
               <h3 className="text-3xl md:text-5xl font-heading font-black mb-8 text-primary-gold">Agende sua Coleta</h3>
               <p className="text-xl text-gray-300 mb-12 max-w-2xl mx-auto leading-relaxed">
                 Fale agora com nossos especialistas via WhatsApp e descubra por que somos a lavanderia mais bem avaliada de Osasco.
               </p>
               <div className="flex flex-col md:flex-row items-center justify-center gap-6">
                 <a href={`https://wa.me/${CONTACT.whatsapp}`} className="flex items-center gap-3 bg-primary-gold text-secondary-dark px-12 py-5 rounded-full font-bold text-xl hover:bg-white transition-all btn-premium shadow-[0_10px_30px_rgba(212,175,55,0.3)]">
                   <MessageCircle size={28}/> CHAMAR NO WHATSAPP
                 </a>
                 <Link to="/precos" className="text-white font-bold underline underline-offset-8 hover:text-primary-gold transition-colors">
                   VER TABELA DE PREÇOS
                 </Link>
               </div>
             </div>
          </div>
        </article>
      </main>
    </>
  );
};

export default BlogPost;