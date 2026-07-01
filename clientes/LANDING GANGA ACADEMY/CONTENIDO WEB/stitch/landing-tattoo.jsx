import React, { useState } from 'react';
import { ChevronDown, Check, Edit2, Save } from 'lucide-react';

export default function LandingTattoo() {
  const [content, setContent] = useState({
    // HERO
    heroHeadline: "Conviértete en tatuador profesional en 2 semanas",
    heroSubtitle: "Curso 100% presencial en titulación universitaria oficial UCAM. Sin experiencia previa.",
    heroCTA: "Solicitar Información",
    heroMetrics: [
      "1000+ alumnos",
      "Título UCAM",
      "Alojamiento Incluido"
    ],
    
    // NAVBAR
    navItems: ["UCAM", "Requisitos", "Segura"],
    
    // BENEFITS SECTION
    benefits: [
      { 
        icon: "👥", 
        title: "80h presenciales", 
        desc: "En un estudio real, de lunes a viernes" 
      },
      { 
        icon: "🎓", 
        title: "Acceso a cabinas", 
        desc: "Máximo 5 alumnos por cabina" 
      },
      { 
        icon: "📅", 
        title: "Tallás desde día 1", 
        desc: "Con supervisión directa" 
      }
    ],
    
    // CHECKLIST
    checklist: [
      "80h formación presencial",
      "Kit profesional completo",
      "X4 profesional completo",
      "Higienio-Sanitario UE",
      "Seguimiento post-curso",
      "Alojamiento 2 semanas",
      "Material de prácticas",
      "Título universitario UCAM",
      "2 masterclasses bonus",
      "Financiación Segura"
    ],
    
    checklistCTA: "Quiero mi plaza",
    
    // PROFESOR
    profesor: {
      nombre: "Zeus Gris",
      especialidad: "Fine Art",
      experiencia: [
        "x10 años tatuando",
        "Studio en 5 países",
        "6 años en Italia",
        "Premios internacionales"
      ],
      quote: "\"Aquí no enseño teoría. Enseño lo que yo hago cada día en mi cabina.\""
    },
    
    // TESTIMONIOS (PARA AGREGAR DESPUÉS)
    testimonios: [
      { name: "Salto 1", subtitle: "Testimonio en vídeo (15-30s)" },
      { name: "Salto 2", subtitle: "Testimonio en vídeo (15-30s)" },
      { name: "Salto 3", subtitle: "Testimonio en vídeo (15-30s)" },
      { name: "Salto 4", subtitle: "Testimonio en vídeo (15-30s)" },
      { name: "Salto 5", subtitle: "Testimonio en vídeo (15-30s)" },
      { name: "Salto 6", subtitle: "Testimonio en vídeo (15-30s)" }
    ],
    
    testimonioSubtitle: "Testimonio en vídeo (15-30s) · Ciudad",
    
    // DOBLE CTA
    ctas: [
      {
        title: "✓ Sí es para ti",
        items: ["Quieres ser el patrón profesional", "Tienes dedicación real", "Quieres mejorar técnica"]
      },
      {
        title: "✗ No es para ti",
        items: ["Buscas un hobby de fin de semana", "No puedes dedicarte 2 semanas", "Solo quieres teórico"]
      }
    ],
    
    // FAQ
    faqs: [
      { q: "¿Hay que saber dibujar?", a: "No, enseñamos desde cero. Lo importante es tu dedicación." },
      { q: "¿Puedo hacerlo sin experiencia previa?", a: "Sí, todos nuestros alumnos empiezan sin experiencia." },
      { q: "¿Qué incluye el alojamiento?", a: "Hotel 4 estrellas, desayuno y acceso 24/7." },
      { q: "¿Cuáles es el próximo curso?", a: "Consulta disponibilidad en el formulario." },
      { q: "¿Hay plaza disponible ahora?", a: "Limitado a 17 plazas mensuales. Verifica disponibilidad." }
    ],
    
    // CTA FINAL
    finalCTA: "Solo 17 plazas al mes. Reserva la tuya.",
    finalSubtitle: "Referencia al formulario y Paula te llamará en menos de 24h.",
    formFields: [
      { placeholder: "Nombre", type: "text" },
      { placeholder: "Email", type: "email" },
      { placeholder: "Teléfono", type: "tel" }
    ]
  });

  const [editMode, setEditMode] = useState(null);
  const [tempValue, setTempValue] = useState("");
  const [expandedFaq, setExpandedFaq] = useState(null);

  const handleEdit = (key, value) => {
    setEditMode(key);
    setTempValue(value);
  };

  const handleSave = (key) => {
    setContent({ ...content, [key]: tempValue });
    setEditMode(null);
  };

  const EditableText = ({ value, keyName, className = "" }) => (
    <span
      className={`cursor-pointer hover:opacity-80 inline-block ${className}`}
      onClick={() => handleEdit(keyName, value)}
      title="Click para editar"
    >
      {editMode === keyName ? (
        <input
          autoFocus
          type="text"
          value={tempValue}
          onChange={(e) => setTempValue(e.target.value)}
          onBlur={() => handleSave(keyName)}
          onKeyDown={(e) => e.key === 'Enter' && handleSave(keyName)}
          className="bg-gray-700 text-white p-2 rounded border border-blue-500"
        />
      ) : value}
    </span>
  );

  return (
    <div className="bg-gray-950 text-white font-sans">
      {/* ===== NAVBAR ===== */}
      <nav className="border-b border-gray-800 px-6 py-4 flex justify-between items-center sticky top-0 bg-gray-950 z-50">
        <div className="text-lg font-bold">LOGO</div>
        <div className="flex gap-6 text-sm">
          {content.navItems.map((item, i) => (
            <span key={i} className="cursor-pointer hover:text-blue-400">{item}</span>
          ))}
        </div>
        <div className="text-xs text-gray-500">EN | ES</div>
      </nav>

      {/* ===== HERO SECTION ===== */}
      <section className="px-6 py-20 md:py-32 max-w-4xl mx-auto">
        <div className="text-xs text-gray-400 mb-4">CURSO ONLINE EN MURCIA • ALOJAMIENTO INCLUIDO</div>
        
        <h1 className="text-4xl md:text-5xl font-bold mb-4 leading-tight">
          <EditableText value={content.heroHeadline} keyName="heroHeadline" />
        </h1>
        
        <p className="text-gray-300 mb-8 leading-relaxed">
          <EditableText value={content.heroSubtitle} keyName="heroSubtitle" />
        </p>
        
        <button className="bg-white text-black px-6 py-3 rounded font-semibold hover:bg-gray-100 transition">
          {content.heroCTA}
        </button>
        
        <div className="flex gap-6 mt-8 text-xs text-gray-400">
          {content.heroMetrics.map((m, i) => (
            <div key={i}>✓ {m}</div>
          ))}
        </div>
      </section>

      {/* ===== SECCIÓN TUTORIALES ===== */}
      <section className="px-6 py-16 bg-gray-900 border-y border-gray-800">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold mb-4">Llevas meses viendo tutoriales y sigues sin saber tatuar.</h2>
          <p className="text-gray-400">
            El problema no es tu dedicación. Es que ves tutoriales bonitos, pero sin supervisión real y con experiencias tan dispares.
          </p>
        </div>
      </section>

      {/* ===== BENEFITS (3 COLUMNAS) ===== */}
      <section className="px-6 py-16 max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold mb-12 text-center">Aprende tatuando. Desde el día 1.</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {content.benefits.map((b, i) => (
            <div key={i} className="border border-gray-800 p-6 rounded hover:border-gray-600 transition">
              <div className="text-4xl mb-3">{b.icon}</div>
              <h3 className="font-bold mb-2 text-lg">{b.title}</h3>
              <p className="text-gray-400 text-sm">{b.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ===== CHECKLIST 2 COLUMNAS ===== */}
      <section className="px-6 py-16 bg-gray-900">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl font-bold mb-8">Todo lo que necesitas para empezar a tatuar</h2>
          <div className="grid grid-cols-2 md:grid-cols-2 gap-6">
            {content.checklist.map((item, i) => (
              <div key={i} className="flex gap-3">
                <Check size={20} className="text-green-400 flex-shrink-0 mt-0.5" />
                <span className="text-sm text-gray-200">{item}</span>
              </div>
            ))}
          </div>
          <button className="w-full mt-8 bg-white text-black py-3 rounded font-semibold hover:bg-gray-100 transition">
            {content.checklistCTA}
          </button>
        </div>
      </section>

      {/* ===== PROFESOR ===== */}
      <section className="px-6 py-16 max-w-4xl mx-auto">
        <h2 className="text-2xl font-bold mb-12">Aprende de un tatuador en activo, no de un profesor</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h3 className="font-bold text-lg mb-1">{content.profesor.nombre}</h3>
            <p className="text-gray-400 text-sm mb-4">{content.profesor.especialidad}</p>
            <ul className="text-sm space-y-2">
              {content.profesor.experiencia.map((exp, i) => (
                <li key={i} className="text-gray-300">✓ {exp}</li>
              ))}
            </ul>
          </div>
          <div className="bg-gray-800 p-6 rounded italic text-gray-300 flex items-center">
            <p>{content.profesor.quote}</p>
          </div>
        </div>
      </section>

      {/* ===== TESTIMONIOS GRID ===== */}
      <section className="px-6 py-16 bg-gray-900">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl font-bold mb-4">Así tatúan nuestros alumnos al terminar</h2>
          <p className="text-gray-400 mb-12 text-sm">{content.testimonioSubtitle}</p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {content.testimonios.map((t, i) => (
              <div key={i} className="aspect-square bg-gray-700 rounded flex items-center justify-center border border-gray-600 hover:border-gray-500 transition cursor-pointer">
                <div className="text-center">
                  <div className="text-gray-400">[Vídeo]</div>
                  <p className="text-sm mt-2">{t.name}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== DOBLE CTA ===== */}
      <section className="px-6 py-16 max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold mb-12 text-center">Este curso es para ti si...</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {content.ctas.map((cta, i) => (
            <div key={i} className={`p-6 rounded ${i === 0 ? 'bg-green-900 border border-green-700' : 'bg-red-900 border border-red-700'}`}>
              <h3 className="font-bold mb-4">{cta.title}</h3>
              <ul className="space-y-2">
                {cta.items.map((item, j) => (
                  <li key={j} className="text-sm">• {item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* ===== FAQ ===== */}
      <section className="px-6 py-16 bg-gray-900">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl font-bold mb-8">Preguntas frecuentes</h2>
          <div className="space-y-3">
            {content.faqs.map((faq, i) => (
              <div key={i} className="border border-gray-800 rounded overflow-hidden">
                <button
                  onClick={() => setExpandedFaq(expandedFaq === i ? null : i)}
                  className="w-full flex justify-between items-center p-4 hover:bg-gray-800 transition"
                >
                  <p className="font-semibold text-left">{faq.q}</p>
                  <ChevronDown size={20} className={`transition ${expandedFaq === i ? 'rotate-180' : ''}`} />
                </button>
                {expandedFaq === i && (
                  <div className="px-4 py-3 bg-gray-800 text-sm text-gray-300 border-t border-gray-700">
                    {faq.a}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== CTA FINAL CON FORMULARIO ===== */}
      <section className="px-6 py-16 max-w-3xl mx-auto">
        <h2 className="text-3xl font-bold mb-4 text-center">{content.finalCTA}</h2>
        <p className="text-gray-400 text-center mb-8">{content.finalSubtitle}</p>
        
        <form className="space-y-4">
          {content.formFields.map((field, i) => (
            <input
              key={i}
              type={field.type}
              placeholder={field.placeholder}
              className="w-full bg-gray-800 p-3 rounded text-white placeholder-gray-500 border border-gray-700 focus:border-blue-500 focus:outline-none"
            />
          ))}
          
          <label className="flex gap-2 text-sm py-2">
            <input type="checkbox" className="cursor-pointer" />
            <span className="text-gray-400">Tengo experiencia previa ✓</span>
          </label>
          
          <button className="w-full bg-white text-black py-3 rounded font-bold hover:bg-gray-100 transition">
            Quiero mi plaza →
          </button>
          
          <p className="text-xs text-gray-500 text-center">Sin compromiso. Cancelación en 24h.</p>
        </form>
      </section>

      {/* ===== FOOTER ===== */}
      <footer className="border-t border-gray-800 px-6 py-8 text-xs text-gray-500">
        <div className="max-w-4xl mx-auto flex justify-between items-center">
          <div>LOGO</div>
          <div className="flex gap-6">
            <span className="cursor-pointer hover:text-gray-400">Política de privacidad</span>
            <span className="cursor-pointer hover:text-gray-400">Contacto</span>
          </div>
        </div>
      </footer>
    </div>
  );
}
