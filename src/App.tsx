import React, { useState, useEffect } from "react";
import { Wifi, ChevronRight, Globe, MessageCircle, ClipboardList, Mail } from "lucide-react";

// Tipo genérico para aceptar 'size' en íconos custom
interface CustomIconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
}

// Íconos SVG para redes sociales
const Linkedin = ({ size = 24, ...props }: CustomIconProps) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect x="2" y="9" width="4" height="12" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

const Instagram = ({ size = 24, ...props }: CustomIconProps) => (
  <svg 
    width={size} 
    height={size} 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="2" 
    strokeLinecap="round" 
    strokeLinejoin="round" 
    {...props}
  >
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
  </svg>
);

const Facebook = ({ size = 24, ...props }: CustomIconProps) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
  </svg>
);

const Twitter = ({ size = 24, ...props }: CustomIconProps) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
  </svg>
);

export default function CloudTappProfile() {
  // Configuración de los enlaces para renderizado dinámico
  const links = [
    { id: 1, title: "Sitio Web Oficial", icon: Globe, url: "https://cloudtapp.com" },
    { id: 2, title: "Instagram", icon: Instagram, url: "https://instagram.com/cloudtapp" },
    {
      id: 3,
      title: "Contacto Directo / WhatsApp",
      icon: MessageCircle,
      url: "https://wa.me/573054331313", 
    },
    { id: 4, title: "Correo Electrónico", icon: Mail, url: "mailto:ventas.cloudtapp@gmail.com" },
    { id: 5, title: "Nuestros Servicios", icon: ClipboardList, url: "#" },
  ];

  const socialLinks = [
    { id: "linkedin", icon: Linkedin, url: "#" },
    { id: "instagram", icon: Instagram, url: "#" },
    { id: "facebook", icon: Facebook, url: "#" },
    { id: "twitter", icon: Twitter, url: "#" },
  ];

  return (
    <>
      {/* Importamos la fuente Poppins y añadimos las animaciones CSS para el fondo y botones */}
      <style>
        {`
          @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;600;700&display=swap');
          
          body {
            font-family: 'Poppins', sans-serif;
            background-color: #020617; /* slate-950 */
            margin: 0;
            overflow-x: hidden;
          }
          
          .glass-panel {
            background: rgba(26, 77, 140, 0.15); /* #1A4D8C con transparencia */
            backdrop-filter: blur(12px);
            -webkit-backdrop-filter: blur(12px);
            border: 1px solid rgba(0, 212, 255, 0.2);
            box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
          }

          .link-button {
            transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
          }
          
          .link-button:hover {
            background: rgba(0, 212, 255, 0.1);
            border-color: rgba(0, 212, 255, 0.8);
            box-shadow: 0 0 20px rgba(0, 212, 255, 0.3), inset 0 0 10px rgba(0, 212, 255, 0.1);
            transform: translateY(-2px);
          }

          /* Animaciones CSS del Fondo Tecnológico Animado */
          @keyframes floatOrb1 {
            0%, 100% { transform: translate(0px, 0px) scale(1); }
            50% { transform: translate(50px, -60px) scale(1.15); }
          }
          @keyframes floatOrb2 {
            0%, 100% { transform: translate(0px, 0px) scale(1); }
            50% { transform: translate(-60px, 40px) scale(1.2); }
          }
          @keyframes bubbleRise {
            0% { transform: translateY(100vh) scale(0.5); opacity: 0; }
            50% { opacity: 0.6; }
            100% { transform: translateY(-10vh) scale(1.2); opacity: 0; }
          }

          .animate-orb-1 {
            animation: floatOrb1 12s ease-in-out infinite;
          }
          .animate-orb-2 {
            animation: floatOrb2 15s ease-in-out infinite;
          }
          .animate-bubble-1 { animation: bubbleRise 8s linear infinite; }
          .animate-bubble-2 { animation: bubbleRise 12s linear infinite 2s; }
          .animate-bubble-3 { animation: bubbleRise 10s linear infinite 4s; }
          .animate-bubble-4 { animation: bubbleRise 14s linear infinite 1s; }
          .animate-bubble-5 { animation: bubbleRise 9s linear infinite 5s; }
        `}
      </style>

      {/* Contenedor Principal */}
      <div className="relative min-h-screen w-full flex justify-center text-white overflow-hidden selection:bg-cyan-500 selection:text-white">
        
        {/* FONDO ANIMADO TECNOLÓGICO */}
        <div className="fixed inset-0 z-0 pointer-events-none w-full h-full overflow-hidden bg-[#020617]">
          {/* Orbes de luz azul y cian flotantes */}
          <div className="absolute top-[-10%] left-[-10%] w-[28rem] h-[28rem] bg-[#1A4D8C] rounded-full mix-blend-screen filter blur-[110px] opacity-50 animate-orb-1"></div>
          <div className="absolute bottom-[-10%] right-[-10%] w-[26rem] h-[26rem] bg-cyan-600 rounded-full mix-blend-screen filter blur-[100px] opacity-40 animate-orb-2"></div>

          {/* Burbujas / partículas sutiles ascendentes */}
          <div className="absolute left-[15%] w-3 h-3 bg-cyan-400 rounded-full filter blur-[1px] animate-bubble-1"></div>
          <div className="absolute left-[35%] w-5 h-5 bg-[#1A4D8C] rounded-full filter blur-[2px] animate-bubble-2"></div>
          <div className="absolute left-[55%] w-2 h-2 bg-cyan-300 rounded-full animate-bubble-3"></div>
          <div className="absolute left-[75%] w-4 h-4 bg-blue-500 rounded-full filter blur-[1px] animate-bubble-4"></div>
          <div className="absolute left-[90%] w-3 h-3 bg-cyan-400 rounded-full animate-bubble-5"></div>

          {/* Overlay de malla de puntos sutil */}
          <div className="absolute inset-0 bg-[radial-gradient(#1A4D8C_1px,transparent_1px)] [background-size:24px_24px] opacity-25"></div>
        </div>

        {/* Contenedor del Perfil (Simulación Mobile Centrada) */}
        <div className="relative z-10 w-full max-w-md flex flex-col items-center pt-12 pb-8 px-6 min-h-screen">
          {/* LOGO CUSTOM CLOUD TAPP SVG */}
          <div className="mb-4 flex flex-col items-center">
            <svg
              width="100"
              height="80"
              viewBox="0 0 120 100"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="drop-shadow-[0_0_15px_rgba(26,77,140,0.5)]"
            >
              {/* Nube Base (#1A4D8C) */}
              <path
                d="M93.3333 46.6667C93.3333 30.125 79.8833 16.6667 63.3333 16.6667C52.1 16.6667 42.3 22.8417 37.0333 31.9583C35.0333 31.3333 32.9 31 30.6667 31C20.55 31 12.3333 39.2167 12.3333 49.3333C12.3333 58.7417 19.3833 66.5 28.5167 67.5L90.8167 67.4333C99.2833 65.55 105.667 58.1167 105.667 49.1667C105.667 41.7 100.35 35.5 93.3333 34.25V46.6667Z"
                fill="#1A4D8C"
              />

              {/* Celular Inclinado (#FFFFFF) */}
              <g transform="translate(45, 30) rotate(25)">
                <rect
                  x="0"
                  y="0"
                  width="28"
                  height="48"
                  rx="6"
                  fill="#FFFFFF"
                  stroke="#1A4D8C"
                  strokeWidth="2"
                />
                <rect
                  x="3"
                  y="4"
                  width="22"
                  height="34"
                  rx="2"
                  fill="#E2E8F0"
                />
                <circle cx="14" cy="43" r="2" fill="#1A4D8C" />
              </g>

              {/* Ondas NFC (Cyan) */}
              <g transform="translate(75, 20)">
                <path
                  d="M0 20C4 16 6 11 6 5"
                  stroke="#00D4FF"
                  strokeWidth="3"
                  strokeLinecap="round"
                />
                <path
                  d="M6 23C11 18 13 12 13 4"
                  stroke="#00D4FF"
                  strokeWidth="3"
                  strokeLinecap="round"
                />
                <path
                  d="M12 26C18 20 20 13 20 3"
                  stroke="#00D4FF"
                  strokeWidth="3"
                  strokeLinecap="round"
                />
              </g>
            </svg>

            <h1 className="text-3xl font-bold tracking-tight text-white mt-2 mb-1 flex items-center gap-2">
              CLOUD TAPP
            </h1>
            <p className="text-[#B0BCC5] text-xs font-semibold tracking-[0.15em] uppercase text-center mb-4">
              NFC Technology Solutions
            </p>

            <span className="bg-[#1A4D8C]/40 text-cyan-400 px-4 py-1 rounded-full text-sm font-medium border border-[#1A4D8C] backdrop-blur-sm">
              @cloudtapp
            </span>
          </div>

          <p className="text-center text-sm text-[#B0BCC5] mb-8 max-w-sm font-light">
            Conectamos el mundo físico al digital con un solo toque 📱
          </p>

          {/* Lista de Links */}
          <div className="w-full flex flex-col gap-4 mb-8">
            {links.map((link) => {
              const Icon = link.icon;
              return (
                <a
                  key={link.id}
                  href={link.url}
                  className="link-button glass-panel relative w-full flex items-center justify-between p-4 rounded-xl text-white group cursor-pointer overflow-hidden"
                >
                  {/* Hover Background Accent */}
                  <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/0 via-cyan-400/10 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700 ease-out"></div>

                  <div className="flex items-center gap-4 relative z-10">
                    <div className="bg-[#1A4D8C]/50 p-2 rounded-lg group-hover:bg-cyan-500/20 group-hover:text-cyan-300 transition-colors">
                      <Icon size={20} className="text-cyan-400" />
                    </div>
                    <span className="font-semibold text-sm sm:text-base tracking-wide">
                      {link.title}
                    </span>
                  </div>
                  <ChevronRight
                    size={18}
                    className="text-[#B0BCC5] group-hover:text-cyan-400 transition-colors relative z-10"
                  />
                </a>
              );
            })}
          </div>

          {/* Badge NFC Ready */}
          <div className="mt-2 mb-10 w-full">
            <div className="glass-panel mx-auto w-max px-6 py-2.5 rounded-full flex items-center gap-3 border-cyan-500/30 animate-pulse">
              <Wifi size={16} className="text-cyan-400" />
              <span className="text-xs font-medium tracking-wide text-gray-200">
                NFC Tap Ready • Toca para conectar
              </span>
            </div>
          </div>

          {/* Espaciador flexible para empujar el footer hacia abajo */}
          <div className="flex-grow"></div>

          {/* Footer & Redes Sociales */}
          <div className="w-full flex flex-col items-center mt-8 pt-6 border-t border-white/10">
            <div className="flex items-center gap-6 mb-6">
              {socialLinks.map((social) => {
                const SocialIcon = social.icon;
                return (
                  <a
                    key={social.id}
                    href={social.url}
                    className="text-[#B0BCC5] hover:text-cyan-400 hover:scale-110 transition-all duration-300 drop-shadow-md"
                    aria-label={social.id}
                  >
                    <SocialIcon size={24} strokeWidth={1.5} />
                  </a>
                );
              })}
            </div>
            <p className="text-[10px] text-[#B0BCC5]/60 font-light tracking-widest uppercase">
              Powered by{" "}
              <span className="font-semibold text-[#B0BCC5]">CLOUD TAPP</span>
            </p>
          </div>
        </div>
      </div>
    </>
  );
}