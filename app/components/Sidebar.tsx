'use client';

import React from 'react';
import Image from 'next/image';

interface SidebarProps {
  images: {
    url: string;
    title: string;
    description: string;
  }[];
}

export default function Sidebar({ images }: SidebarProps) {

  return (
    <div className="w-full px-4">
      <div className="space-y-20">
    {/* Section 1 - Image gauche, Texte droite (super agrandie) */}
  <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-center p-8 md:p-12 rounded-3xl bg-gradient-to-br from-black/40 via-green-900/20 to-black/40 backdrop-blur-md border border-green-500/20 shadow-2xl hover:shadow-green-500/10 transition-all duration-500">
          <div
            data-aos="fade-right"
            data-aos-duration="1000"
            className="relative group"
          >
            <div className="overflow-hidden rounded-2xl shadow-2xl ring-2 ring-green-500/30 hover:ring-green-400/50 transition-all duration-300">
              <Image
                src={'/images/gallery/back.jpg'}
                alt={images[0]?.title || 'back'}
                width={600}
                height={400}
                className="w-full h-96 md:h-[44rem] object-cover transform group-hover:scale-110 transition-transform duration-700"
              />
            </div>
          </div>
          <div
            data-aos="fade-left"
            data-aos-duration="1000"
            data-aos-delay="200"
            className="space-y-8"
          >
            <div className="flex items-center gap-4 mb-4" data-aos="fade-right" data-aos-delay="80">
              <span className="px-4 py-1.5 rounded-full bg-green-600 text-white text-sm md:text-base font-semibold shadow-lg shadow-green-600/30">Culture stratégique</span>
              <span className="px-4 py-1.5 rounded-full bg-emerald-500/20 text-emerald-200 text-xs md:text-sm font-medium backdrop-blur-sm border border-emerald-400/30">Recherche appliquée</span>
            </div>
              <h3 className="text-3xl md:text-4xl lg:text-5xl font-extrabold leading-tight tracking-tight bg-gradient-to-r from-green-400 via-emerald-300 to-green-500 bg-clip-text text-transparent drop-shadow-2xl" data-aos="fade-right" data-aos-delay="140">
                {images[0]?.title || 'Programme d\'Amélioration du Manioc'}
              </h3>
              <p className="text-2xl md:text-3xl lg:text-4xl text-gray-200 leading-relaxed font-light drop-shadow-lg" data-aos="fade-up" data-aos-delay="240">
                {images[0]?.description || 'INERA s’engage à créer et diffuser des variétés de manioc innovantes, capables de résister aux principales maladies virales et aux stress climatiques, afin d’assurer une production stable et abondante pour les familles congolaises. Nos recherches ciblent la mosaïque africaine, la striure brune et la tolérance à la sécheresse, pour un manioc plus fort, plus productif et durable.'}
              </p>
            <p className="text-lg md:text-xl lg:text-2xl text-gray-300 font-light drop-shadow" data-aos="fade-up" data-aos-delay="320">
              Sélection participative, essais multi‑locaux, caractérisation de la diversité génétique, optimisation des itinéraires techniques (bouturage sain, fertilisation raisonnée) et transfert accéléré vers les producteurs.
            </p>
            <div className="flex flex-wrap gap-3 mt-6" data-aos="zoom-in" data-aos-delay="380">
              {['Sélection manioc','Tolérance maladies','Germplasm','Stress hydrique','Transfert paysan'].map(tag => (
                <span key={tag} className="px-3 py-1 rounded-full bg-green-500/20 text-green-300 text-xs md:text-sm font-medium backdrop-blur-sm border border-green-400/30 shadow-lg">
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Section 2 - Texte gauche, Image droite */}
  <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-center p-8 md:p-12 rounded-3xl bg-gradient-to-br from-black/40 via-green-900/20 to-black/40 backdrop-blur-md border border-green-500/20 shadow-2xl hover:shadow-green-500/10 transition-all duration-500">
          <div
            data-aos="fade-right"
            data-aos-duration="1000"
            data-aos-delay="200"
            className="space-y-8 order-2 lg:order-1"
          >
            <h3 className="text-3xl md:text-4xl lg:text-5xl font-extrabold bg-gradient-to-r from-green-400 via-emerald-300 to-green-500 bg-clip-text text-transparent drop-shadow-2xl leading-tight">
              {images[1]?.title || 'Recherche agronomique'}
            </h3>
            <p className="text-2xl md:text-3xl lg:text-4xl text-gray-200 leading-relaxed font-light drop-shadow-lg">
              {images[1]?.description || 'Notre équipe de chercheurs travaille sans relâche pour développer des solutions innovantes adaptées aux défis agricoles actuels.'}
            </p>
          </div>
          <div
            data-aos="fade-left"
            data-aos-duration="1000"
            className="relative group order-1 lg:order-2"
          >
            <div className="overflow-hidden rounded-2xl shadow-2xl ring-2 ring-green-500/30 hover:ring-green-400/50 transition-all duration-300">
              <Image
                src={images[1]?.url || '/logo.svg'}
                alt={images[1]?.title || 'Image 2'}
                width={600}
                height={400}
                className="w-full h-72 md:h-[32rem] object-cover transform group-hover:scale-110 transition-transform duration-700"
              />
            </div>
          </div>
        </div>

        {/* Section 3 - Image gauche, Texte droite */}
  <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-center p-8 md:p-12 rounded-3xl bg-gradient-to-br from-black/40 via-green-900/20 to-black/40 backdrop-blur-md border border-green-500/20 shadow-2xl hover:shadow-green-500/10 transition-all duration-500">
          <div
            data-aos="fade-up-right"
            data-aos-duration="1200"
            className="relative group"
          >
            <div className="overflow-hidden rounded-2xl shadow-2xl ring-2 ring-green-500/30 hover:ring-green-400/50 transition-all duration-300">
              <Image
                src={images[2]?.url || '/hero-farm.svg'}
                alt={images[2]?.title || 'Image 3'}
                width={600}
                height={400}
                className="w-full h-96 md:h-[44rem] object-cover transform group-hover:scale-110 transition-transform duration-700"
              />
            </div>
          </div>
          <div
            data-aos="fade-up-left"
            data-aos-duration="1200"
            data-aos-delay="200"
            className="space-y-8"
          >
            <h3 className="text-3xl md:text-4xl lg:text-5xl font-extrabold bg-gradient-to-r from-green-400 via-emerald-300 to-green-500 bg-clip-text text-transparent drop-shadow-2xl leading-tight">
              {images[2]?.title || 'Innovation terrain'}
            </h3>
            <p className="text-2xl md:text-3xl lg:text-4xl text-gray-200 leading-relaxed font-light drop-shadow-lg">
              {images[2]?.description || 'Nos stations de recherche à travers le pays permettent des essais en conditions réelles pour des résultats concrets.'}
            </p>
          </div>
        </div>

        {/* Section 4 - Texte gauche, Image droite */}
  <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-center p-8 md:p-12 rounded-3xl bg-gradient-to-br from-black/40 via-green-900/20 to-black/40 backdrop-blur-md border border-green-500/20 shadow-2xl hover:shadow-green-500/10 transition-all duration-500">
          <div
            data-aos="fade-up-right"
            data-aos-duration="1200"
            data-aos-delay="200"
            className="space-y-8 order-2 lg:order-1"
          >
            <h3 className="text-3xl md:text-4xl lg:text-5xl font-extrabold bg-gradient-to-r from-green-400 via-emerald-300 to-green-500 bg-clip-text text-transparent drop-shadow-2xl leading-tight">
              {images[3]?.title || 'Formation continue'}
            </h3>
            <p className="text-2xl md:text-3xl lg:text-4xl text-gray-200 leading-relaxed font-light drop-shadow-lg">
              {images[3]?.description || 'Nous formons la nouvelle génération d\'agronomes et accompagnons les agriculteurs dans l\'adoption de pratiques modernes.'}
            </p>
          </div>
          <div
            data-aos="fade-up-left"
            data-aos-duration="1200"
            className="relative group order-1 lg:order-2"
          >
            <div className="overflow-hidden rounded-2xl shadow-2xl ring-2 ring-green-500/30 hover:ring-green-400/50 transition-all duration-300">
              <Image
                src={images[3]?.url || '/logo.svg'}
                alt={images[3]?.title || 'Image 4'}
                width={600}
                height={400}
                className="w-full h-96 md:h-[44rem] object-cover transform group-hover:scale-110 transition-transform duration-700"
              />
            </div>
          </div>
        </div>

        {/* Section 5 - Image gauche, Texte droite */}
  <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-center p-8 md:p-12 rounded-3xl bg-gradient-to-br from-black/40 via-green-900/20 to-black/40 backdrop-blur-md border border-green-500/20 shadow-2xl hover:shadow-green-500/10 transition-all duration-500">
          <div
            data-aos="zoom-in-right"
            data-aos-duration="800"
            className="relative group"
          >
            <div className="overflow-hidden rounded-2xl shadow-2xl ring-2 ring-green-500/30 hover:ring-green-400/50 transition-all duration-300">
              <Image
                src={images[4]?.url || '/hero-farm.svg'}
                alt={images[4]?.title || 'Image 5'}
                width={600}
                height={400}
                className="w-full h-96 md:h-[44rem] object-cover transform group-hover:scale-110 transition-transform duration-700"
              />
            </div>
          </div>
          <div
            data-aos="zoom-in-left"
            data-aos-duration="800"
            data-aos-delay="200"
            className="space-y-8"
          >
            <h3 className="text-3xl md:text-4xl lg:text-5xl font-extrabold bg-gradient-to-r from-green-400 via-emerald-300 to-green-500 bg-clip-text text-transparent drop-shadow-2xl leading-tight">
              {images[4]?.title || 'Réseau de stations'}
            </h3>
            <p className="text-2xl md:text-3xl lg:text-4xl text-gray-200 leading-relaxed font-light drop-shadow-lg">
              {images[4]?.description || 'Sept stations de recherche réparties stratégiquement couvrent toutes les zones agro-écologiques du pays.'}
            </p>
          </div>
        </div>

        {/* Section 6 - Texte gauche, Image droite */}
  <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-center p-8 md:p-12 rounded-3xl bg-gradient-to-br from-black/40 via-green-900/20 to-black/40 backdrop-blur-md border border-green-500/20 shadow-2xl hover:shadow-green-500/10 transition-all duration-500">
          <div
            data-aos="zoom-out-right"
            data-aos-duration="800"
            data-aos-delay="200"
            className="space-y-8 order-2 lg:order-1"
          >
            <h3 className="text-3xl md:text-4xl lg:text-5xl font-extrabold bg-gradient-to-r from-green-400 via-emerald-300 to-green-500 bg-clip-text text-transparent drop-shadow-2xl leading-tight">
              {images[5]?.title || 'Partenariats stratégiques'}
            </h3>
            <p className="text-2xl md:text-3xl lg:text-4xl text-gray-200 leading-relaxed font-light drop-shadow-lg">
              {images[5]?.description || 'Collaborations internationales et locales pour maximiser l\'impact de nos recherches et assurer le transfert de technologies.'}
            </p>
          </div>
          <div
            data-aos="zoom-out"
            data-aos-duration="800"
            className="relative group order-1 lg:order-2"
          >
            <div className="overflow-hidden rounded-2xl shadow-2xl ring-2 ring-green-500/30 hover:ring-green-400/50 transition-all duration-300">
              <Image
                src={images[5]?.url || '/logo.svg'}
                alt={images[5]?.title || 'Image 6'}
                width={600}
                height={400}
                className="w-full h-72 md:h-[32rem] object-cover transform group-hover:scale-110 transition-transform duration-700"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}