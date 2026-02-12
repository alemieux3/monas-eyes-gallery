import React, { useState } from 'react';
import { X } from 'lucide-react';

const MonasEyesGallery = () => {
  const [selectedPainting, setSelectedPainting] = useState(null);

  // Helper function to generate color based on painting title
  const getColorForPainting = (title) => {
    const colors = [
      { bg: '#2d1b4e', accent: '#7c3aed' }, // purple
      { bg: '#1e3a5f', accent: '#3b82f6' }, // blue
      { bg: '#1f3a2e', accent: '#10b981' }, // green
      { bg: '#4a2c2a', accent: '#ef4444' }, // red
      { bg: '#3d2817', accent: '#f59e0b' }, // amber
      { bg: '#2c3e50', accent: '#06b6d4' }, // cyan
      { bg: '#3a1f38', accent: '#ec4899' }, // pink
      { bg: '#2f2519', accent: '#d97706' }, // orange
    ];
    const index = title.charCodeAt(0) % colors.length;
    return colors[index];
  };

  const paintings = {
    louvre: [
      {
        id: 1,
        title: "La Joconde",
        artist: "Léonard de Vinci",
        year: "1503-1519",
        description: "Sans doute le tableau le plus célèbre au monde, la Joconde captive les spectateurs par son sourire énigmatique et la technique révolutionnaire du sfumato de Léonard. Son regard semble suivre les observateurs, créant une connexion intime à travers les siècles.",
        museum: "Le Louvre"
      },
      {
        id: 2,
        title: "L'Esclave mourant",
        artist: "Michel-Ange",
        year: "1513-1516",
        description: "L'une des sculptures inachevées de Michel-Ange destinées au tombeau du pape Jules II, cette figure de marbre incarne la lutte entre la beauté physique et la transcendance spirituelle. Les parties inachevées révèlent le processus créatif de l'artiste.",
        museum: "Le Louvre"
      },
      {
        id: 3,
        title: "Vénus et les Trois Grâces offrant des présents à une jeune femme",
        artist: "Sandro Botticelli",
        year: "1483-1485",
        description: "Une célébration de la beauté et de la grâce par le maître de la Renaissance, ce fragment de fresque met en valeur les lignes fluides et les figures éthérées caractéristiques de Botticelli, représentant l'idéal classique de la beauté et de la vertu féminines.",
        museum: "Le Louvre"
      },
      {
        id: 4,
        title: "Portrait d'une négresse",
        artist: "Marie-Guillemine Benoist",
        year: "1800",
        description: "Un portrait révolutionnaire qui défie les conventions de son époque, représentant une femme noire avec dignité, grâce et présence individuelle. Le tableau est une déclaration puissante sur l'identité et la représentation à l'ère néoclassique.",
        museum: "Le Louvre"
      },
      {
        id: 5,
        title: "La Conversation (Conversation dans un parc)",
        artist: "Thomas Gainsborough",
        year: "1746-1747",
        description: "Un chef-d'œuvre précoce démontrant la capacité de Gainsborough à fusionner le portrait et le paysage. Les figures élégantes s'intègrent harmonieusement dans la nature, créant une scène intime de la société anglaise du XVIIIe siècle.",
        museum: "Le Louvre"
      }
    ],
    orsay: [
      {
        id: 6,
        title: "Nature morte aux oiseaux morts",
        artist: "Francisco Goya",
        year: "1808-1812",
        description: "Une méditation obsédante sur la mortalité et le passage du temps, la nature morte de Goya transforme un sujet traditionnel en quelque chose de profondément psychologique, peint pendant la période tumultueuse de la guerre d'Espagne.",
        museum: "Musée d'Orsay"
      },
      {
        id: 7,
        title: "La Gare Saint-Lazare",
        artist: "Claude Monet",
        year: "1877",
        description: "La série révolutionnaire de Monet capturant la gare ferroviaire moderne transforme la vapeur et le fer industriels en poésie. Le jeu de lumière à travers la fumée et le verre démontre la capacité de l'impressionnisme à trouver la beauté dans la vie contemporaine.",
        museum: "Musée d'Orsay"
      },
      {
        id: 8,
        title: "Autoportrait",
        artist: "Vincent van Gogh",
        year: "1889",
        description: "L'auto-examen intense de Van Gogh révèle à la fois la vulnérabilité et une détermination féroce. Les coups de pinceau tourbillonnants et les couleurs vibrantes créent un portrait psychologique qui va au-delà de l'apparence physique pour capturer le tourment intérieur et le feu créatif.",
        museum: "Musée d'Orsay"
      }
    ],
    pompidou: [
      {
        id: 9,
        title: "Trait rouge jaune et noir",
        artist: "Georgia O'Keeffe",
        year: "1924",
        description: "L'œuvre abstraite audacieuse d'O'Keeffe démontre sa vision unique de la couleur et de la forme. La composition dynamique suggère à la fois des forces naturelles et une expression artistique pure, reliant représentation et abstraction.",
        museum: "Centre Pompidou"
      },
      {
        id: 10,
        title: "Coupé au couteau de cuisine",
        artist: "Hannah Höch",
        year: "1919-1920",
        description: "Un photomontage pionnier qui critique le paysage social et politique de l'Allemagne de Weimar. La technique radicale de Höch fragmente et réassemble les images pour défier les rôles de genre et les normes culturelles de l'ère post-Première Guerre mondiale.",
        museum: "Centre Pompidou"
      },
      {
        id: 11,
        title: "Sans titre",
        artist: "Jean-Michel Basquiat",
        year: "1982",
        description: "Le langage visuel explosif de Basquiat combine l'art de rue, le néo-expressionnisme et le commentaire culturel. Son énergie brute et son symbolisme stratifié créent un dialogue puissant sur l'identité, la race et la culture américaine contemporaine.",
        museum: "Centre Pompidou"
      },
      {
        id: 12,
        title: "Peinture",
        artist: "Pierre Soulages",
        year: "1979",
        description: "Les peintures noires monumentales de Soulages explorent la lumière elle-même à travers l'obscurité. Les surfaces texturées réfléchissent et absorbent la lumière de façon constamment changeante, créant ce qu'il appelle 'l'outrenoir' - au-delà du noir - une méditation sur la perception et la matérialité.",
        museum: "Centre Pompidou"
      }
    ]
  };

  const allPaintings = [...paintings.louvre, ...paintings.orsay, ...paintings.pompidou];

  const museumTitles = {
    louvre: "Le Louvre",
    orsay: "Musée d'Orsay", 
    pompidou: "Centre Pompidou"
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-800 text-white overflow-hidden">
      {/* Header */}
      <header className="relative z-10 py-16 px-8 text-center">
        <h1 className="text-7xl font-light tracking-tight mb-4" style={{ fontFamily: "'Playfair Display', serif" }}>
          Les Yeux de Mona
        </h1>
        <p className="text-slate-400 text-lg font-light tracking-wide" style={{ fontFamily: "'Crimson Text', serif" }}>
          Un Voyage à Travers 52 Chefs-d'œuvre
        </p>
        <p className="text-slate-500 text-sm mt-2 italic">par Thomas Schlesser</p>
      </header>

      {/* Gallery Sections */}
      <div className="max-w-7xl mx-auto px-8 pb-20">
        {Object.entries(paintings).map(([museum, works], sectionIndex) => (
          <section key={museum} className="mb-24" style={{ 
            animation: `fadeInUp 0.8s ease-out ${sectionIndex * 0.2}s both` 
          }}>
            <h2 className="text-4xl font-light mb-12 text-slate-200 border-b border-slate-700 pb-4" 
                style={{ fontFamily: "'Crimson Text', serif" }}>
              {museumTitles[museum]}
            </h2>
            
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {works.map((painting, index) => (
                <div
                  key={painting.id}
                  onClick={() => setSelectedPainting(painting)}
                  className="group cursor-pointer perspective-1000"
                  style={{
                    animation: `scaleIn 0.6s ease-out ${index * 0.1}s both`
                  }}
                >
                  <div className="relative overflow-hidden rounded-lg shadow-2xl transform transition-all duration-500 ease-out hover:scale-105 hover:-rotate-1 hover:shadow-amber-900/30"
                       style={{
                         transformStyle: 'preserve-3d',
                         transition: 'transform 0.5s cubic-bezier(0.34, 1.56, 0.64, 1), box-shadow 0.5s ease'
                       }}>
                    {painting.image ? (
                      <div className="aspect-[3/4] bg-slate-800">
                        <img
                          src={painting.image}
                          alt={painting.title}
                          className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                        />
                      </div>
                    ) : (
                      <div 
                        className="aspect-[3/4] flex items-center justify-center p-6 relative overflow-hidden"
                        style={{
                          background: `linear-gradient(135deg, ${getColorForPainting(painting.title).bg} 0%, ${getColorForPainting(painting.title).accent}15 100%)`
                        }}
                      >
                        {/* Decorative elements */}
                        <div className="absolute top-0 right-0 w-32 h-32 opacity-10"
                             style={{
                               background: `radial-gradient(circle, ${getColorForPainting(painting.title).accent} 0%, transparent 70%)`
                             }}></div>
                        <div className="absolute bottom-0 left-0 w-24 h-24 opacity-10"
                             style={{
                               background: `radial-gradient(circle, ${getColorForPainting(painting.title).accent} 0%, transparent 70%)`
                             }}></div>
                        
                        {/* Content */}
                        <div className="text-center z-10">
                          <div className="mb-3 opacity-30">
                            <svg width="48" height="48" viewBox="0 0 24 24" fill="none" className="mx-auto">
                              <rect x="3" y="3" width="18" height="18" rx="2" stroke="currentColor" strokeWidth="2"/>
                              <path d="M9 9L15 15M15 9L9 15" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                            </svg>
                          </div>
                          <h3 className="text-sm font-light text-white/90 leading-tight" 
                              style={{ fontFamily: "'Crimson Text', serif" }}>
                            {painting.title}
                          </h3>
                          <p className="text-xs text-white/60 mt-2">{painting.artist}</p>
                        </div>
                        
                        {/* Frame effect */}
                        <div className="absolute inset-4 border border-white/10 rounded pointer-events-none"></div>
                      </div>
                    )}
                    
                    {/* Overlay on hover */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-4">
                      <h3 className="text-sm font-light text-white mb-1" style={{ fontFamily: "'Crimson Text', serif" }}>
                        {painting.title}
                      </h3>
                      <p className="text-xs text-slate-300">{painting.artist}</p>
                      <p className="text-xs text-slate-400">{painting.year}</p>
                    </div>
                    
                    {/* 3D border effect */}
                    <div className="absolute inset-0 border-2 border-amber-700/0 group-hover:border-amber-700/40 transition-all duration-500 rounded-lg pointer-events-none"></div>
                  </div>
                </div>
              ))}
            </div>
          </section>
        ))}
      </div>

      {/* Modal Overlay */}
      {selectedPainting && (
        <div 
          className="fixed inset-0 bg-black/95 z-50 flex items-center justify-center p-4 backdrop-blur-sm"
          onClick={() => setSelectedPainting(null)}
          style={{
            animation: 'fadeIn 0.4s ease-out'
          }}
        >
          <div 
            className="relative bg-gradient-to-br from-slate-900 to-slate-950 rounded-2xl max-w-5xl w-full max-h-[90vh] overflow-y-auto shadow-2xl border border-amber-900/30"
            onClick={(e) => e.stopPropagation()}
            style={{
              animation: 'modalSlideIn 0.6s cubic-bezier(0.34, 1.56, 0.64, 1)'
            }}
          >
            {/* Close Button */}
            <button
              onClick={() => setSelectedPainting(null)}
              className="absolute top-6 right-6 z-10 bg-slate-800/90 hover:bg-slate-700 text-white rounded-full p-3 transition-all duration-300 hover:scale-110 hover:rotate-90"
            >
              <X size={24} />
            </button>

            <div className="grid md:grid-cols-2 gap-8 p-8">
              {/* Image */}
              <div className="flex items-center justify-center" style={{ animation: 'fadeInLeft 0.8s ease-out 0.2s both' }}>
                {selectedPainting.image ? (
                  <div className="relative rounded-xl overflow-hidden shadow-2xl border-4 border-amber-900/20">
                    <img
                      src={selectedPainting.image}
                      alt={selectedPainting.title}
                      className="w-full h-auto max-h-[70vh] object-contain"
                    />
                  </div>
                ) : (
                  <div 
                    className="relative rounded-xl overflow-hidden shadow-2xl border-4 border-amber-900/20 w-full aspect-[3/4] flex items-center justify-center p-12"
                    style={{
                      background: `linear-gradient(135deg, ${getColorForPainting(selectedPainting.title).bg} 0%, ${getColorForPainting(selectedPainting.title).accent}20 100%)`
                    }}
                  >
                    {/* Decorative elements */}
                    <div className="absolute top-0 right-0 w-48 h-48 opacity-10"
                         style={{
                           background: `radial-gradient(circle, ${getColorForPainting(selectedPainting.title).accent} 0%, transparent 70%)`
                         }}></div>
                    <div className="absolute bottom-0 left-0 w-40 h-40 opacity-10"
                         style={{
                           background: `radial-gradient(circle, ${getColorForPainting(selectedPainting.title).accent} 0%, transparent 70%)`
                         }}></div>
                    <div className="absolute inset-0 opacity-5"
                         style={{
                           backgroundImage: `repeating-linear-gradient(45deg, transparent, transparent 35px, ${getColorForPainting(selectedPainting.title).accent}20 35px, ${getColorForPainting(selectedPainting.title).accent}20 70px)`
                         }}></div>
                    
                    {/* Content */}
                    <div className="text-center z-10">
                      <div className="mb-6 opacity-20">
                        <svg width="80" height="80" viewBox="0 0 24 24" fill="none" className="mx-auto">
                          <rect x="3" y="3" width="18" height="18" rx="2" stroke="currentColor" strokeWidth="1.5"/>
                          <circle cx="8.5" cy="8.5" r="1.5" fill="currentColor"/>
                          <path d="M21 15L16 10L8 18" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                      </div>
                      <p className="text-xs text-white/40 uppercase tracking-widest mb-2">Image à venir</p>
                      <h3 className="text-xl font-light text-white/80 leading-tight px-4" 
                          style={{ fontFamily: "'Crimson Text', serif" }}>
                        {selectedPainting.title}
                      </h3>
                    </div>
                    
                    {/* Frame effect */}
                    <div className="absolute inset-8 border border-white/10 rounded pointer-events-none"></div>
                  </div>
                )}
              </div>

              {/* Details */}
              <div className="flex flex-col justify-center space-y-6" style={{ animation: 'fadeInRight 0.8s ease-out 0.4s both' }}>
                <div>
                  <p className="text-sm text-amber-600 uppercase tracking-wider mb-2" style={{ fontFamily: "'Crimson Text', serif" }}>
                    {selectedPainting.museum}
                  </p>
                  <h2 className="text-4xl font-light text-white mb-2" style={{ fontFamily: "'Playfair Display', serif" }}>
                    {selectedPainting.title}
                  </h2>
                  <p className="text-xl text-slate-300 mb-1" style={{ fontFamily: "'Crimson Text', serif" }}>
                    {selectedPainting.artist}
                  </p>
                  <p className="text-lg text-slate-400">{selectedPainting.year}</p>
                </div>

                <div className="border-t border-slate-700 pt-6">
                  <p className="text-slate-300 leading-relaxed" style={{ fontFamily: "'Crimson Text', serif", fontSize: '1.05rem' }}>
                    {selectedPainting.description}
                  </p>
                </div>

                <div className="bg-slate-800/50 rounded-lg p-6 border-l-4 border-amber-700">
                  <p className="text-sm text-slate-400 uppercase tracking-wider mb-2">Remarque</p>
                  <p className="text-slate-300 italic" style={{ fontFamily: "'Crimson Text', serif" }}>
                    La perspective de Mona et les citations du roman seront ajoutées ici une fois le texte complet disponible.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Custom CSS */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@300;400;600&family=Crimson+Text:ital,wght@0,400;0,600;1,400&display=swap');
        
        @keyframes fadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }

        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes fadeInLeft {
          from {
            opacity: 0;
            transform: translateX(-40px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes fadeInRight {
          from {
            opacity: 0;
            transform: translateX(40px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes scaleIn {
          from {
            opacity: 0;
            transform: scale(0.8) rotateY(10deg);
          }
          to {
            opacity: 1;
            transform: scale(1) rotateY(0deg);
          }
        }

        @keyframes modalSlideIn {
          from {
            opacity: 0;
            transform: scale(0.9) translateY(30px);
          }
          to {
            opacity: 1;
            transform: scale(1) translateY(0);
          }
        }

        .perspective-1000 {
          perspective: 1000px;
        }

        /* Smooth scrolling */
        html {
          scroll-behavior: smooth;
        }

        /* Custom scrollbar */
        ::-webkit-scrollbar {
          width: 10px;
        }

        ::-webkit-scrollbar-track {
          background: #1e293b;
        }

        ::-webkit-scrollbar-thumb {
          background: #94a3b8;
          border-radius: 5px;
        }

        ::-webkit-scrollbar-thumb:hover {
          background: #b45309;
        }
      `}</style>
    </div>
  );
};

export default MonasEyesGallery;