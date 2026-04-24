export const COLORS = {
  black: '#000000',
  white: '#FFFFFF',
  charcoal: '#1A1A1A',
  softGrey: '#F5F5F5',
  deepOlive: '#3A3F33', // Subtle accent
  mutedGold: '#C5A059', // Subtle accent
};

/**
 * RECOMMENDED IMAGE NAMING CONVENTION:
 * To keep your files organized, rename your images before uploading:
 * - {project_name}_main.jpg (Main facade/intro)
 * - {project_name}_interior_living.jpg (Living area)
 * - {project_name}_interior_kitchen.jpg (Kitchen/Dining)
 * - {project_name}_exterior_detail.jpg (Architectural details)
 * - {project_name}_blueprint.jpg (Drawings/Sketches)
 */

export const PROJECTS = [
  {
    id: 'casa-maputo-01',
    slug: 'residencia-maputo',
    title: {
      pt: 'Residência Maputo — A Harmonia Urbana',
      en: 'Maputo Residence — Urban Harmony',
    },
    location: 'Maputo, MZ',
    year: '2023',
    image: '/images/maputo_residence.jpg',
    description: {
      pt: 'Uma obra-prima de arquitetura de interiores que redefine o conceito de santuário urbano no coração da capital.',
      en: 'An interior architecture masterpiece redefining the urban sanctuary concept in the heart of the capital.',
    },
    story: {
      pt: 'Localizada no bairro do Alto-Maé, esta residência foi concebida como um santuário urbano. O uso de betão aparente, madeira local e grandes superfícies de vidro cria um diálogo constante com a paisagem urbana da capital Moçambicana. O desafio era criar um espaço que fosse simultaneamente aberto e privado, utilizando pátios internos para garantir frescura e serenidade.',
      en: 'Located in the Alto-Maé neighborhood, this residence was conceived as an urban sanctuary. The use of exposed concrete, local wood, and large glass surfaces creates a constant dialogue with the urban landscape of the Mozambican capital. The challenge was to create a space that was both open and private, using internal courtyards to ensure freshness and serenity.',
    },
    details: [
      { label: { pt: 'Área', en: 'Area' }, value: '450m²' },
      { label: { pt: 'Tipologia', en: 'Typology' }, value: { pt: 'Residência Unifamiliar T4', en: '4-Bedroom Private Villa' } },
      { label: { pt: 'Design de Interiores', en: 'Interior Design' }, value: { pt: 'Minimalismo Moderno', en: 'Modern Minimalism' } },
      { label: { pt: 'Localização', en: 'Location' }, value: 'Maputo, Alto-Maé' },
    ],
    gallery: [
      '/images/maputo_1.jpg',
      '/images/maputo_2.jpg',
      '/images/maputo_3.jpg',
    ]
  },
  {
    id: 'loft-polana-02',
    slug: 'loft-luxo-polana',
    title: {
      pt: 'Loft Polana — Elegância Vertical',
      en: 'Polana Loft — Vertical Elegance',
    },
    location: 'Polana, Maputo',
    year: '2024',
    image: '/images/polana_loft.jpg',
    description: {
      pt: 'Um loft duplex que redefine o luxo urbano com vistas panorâmicas e um design interior minimalista e sofisticado.',
      en: 'A duplex loft redefining urban luxury with panoramic views and a sophisticated minimalist interior design.',
    },
    story: {
      pt: 'O Loft Polana é um exercício de contenção e elegância. O design interior prioriza a fluidez espacial, eliminando barreiras visuais desnecessárias. A paleta de cores é composta por tons de cinza e carvão, acentuados por detalhes em latão e móveis de design personalizado da Simione Studio.',
      en: 'The Polana Loft is an exercise in restraint and elegance. The interior design prioritizes spatial fluidity, eliminating unnecessary visual barriers. The color palette comprises shades of grey and charcoal, accented by brass details and custom design furniture by Simione Studio.',
    },
    details: [
      { label: { pt: 'Área', en: 'Area' }, value: '280m²' },
      { label: { pt: 'Conceito', en: 'Concept' }, value: { pt: 'Luxo Industrial-Chic', en: 'Industrial-Chic Luxury' } },
      { label: { pt: 'Vistas', en: 'Views' }, value: { pt: 'Baía de Maputo', en: 'Maputo Bay' } },
      { label: { pt: 'Mobiliário', en: 'Furniture' }, value: { pt: 'Customizado Simione', en: 'Custom Simione Designs' } },
    ],
    gallery: [
      '/images/polana_1.jpg',
      '/images/polana_2.jpg',
      '/images/polana_3.jpg',
    ]
  },
  {
    id: 'villa-malanga-03',
    slug: 'residencia-malanga-premium',
    title: {
      pt: 'Villa Malanga — Retiro Tropical',
      en: 'Malanga Villa — Tropical Retreat',
    },
    location: 'Malanga, Maputo',
    year: '2023',
    image: '/images/villa_malanga.jpg',
    description: {
      pt: 'Uma simbiose entre o design mediterrânico moderno e o clima tropical moçambicano, criando um refúgio de paz.',
      en: 'A symbiosis between modern Mediterranean design and the Mozambican tropical climate, creating a haven of peace.',
    },
    story: {
      pt: 'Em Malanga, criámos uma residência que celebra a vida ao ar livre. O projeto desenrola-se em torno de uma piscina central infinita que parece fundir-se com o horizonte. O design de interiores é leve e arejado, utilizando fibras naturais e texturas orgânicas para criar um ambiente de relaxamento absoluto.',
      en: 'In Malanga, we created a residence that celebrates outdoor living. The project unfolds around a central infinity pool that seems to merge with the horizon. The interior design is light and airy, using natural fibers and organic textures to create an environment of absolute relaxation.',
    },
    details: [
      { label: { pt: 'Destaque', en: 'Highlight' }, value: { pt: 'Piscina Infinita', en: 'Infinity Pool' } },
      { label: { pt: 'Estilo', en: 'Style' }, value: { pt: 'Mediterrâneo Tropical', en: 'Tropical Mediterranean' } },
      { label: { pt: 'Quartos', en: 'Rooms' }, value: '5 Suítes' },
      { label: { pt: 'Área Exterior', en: 'Outdoor' }, value: '1,200m²' },
    ],
    gallery: [
      '/images/malanga_1.jpg',
      '/images/malanga_2.jpg',
      '/images/malanga_3.jpg',
    ]
  },
  {
    id: 'studio-minimal-04',
    slug: 'estudio-zen',
    title: {
      pt: 'Estúdio Zen',
      en: 'Zen Studio',
    },
    location: 'Alto-Maé, Maputo',
    year: '2022',
    image: '/images/zen_studio.jpg',
    description: {
      pt: 'O essencial como prioridade absoluta. Um espaço de trabalho e reflexão onde cada elemento tem um propósito.',
      en: 'The essential as absolute priority. A space for work and reflection where every element has a purpose.',
    },
    story: {
      pt: 'Este estúdio no Alto-Maé reflete a filosofia central da Simione Studio: menos é mais. Com uma planta aberta e mobiliário minimalista, o espaço convida à criatividade e ao foco. A iluminação zenital controlada garante uma luz suave durante todo o dia.',
      en: 'This studio in Alto-Maé reflects Simione Studio\'s core philosophy: less is more. With an open floor plan and minimalist furniture, the space invites creativity and focus. Controlled zenithal lighting ensures soft light throughout the day.',
    },
    details: [
      { label: { pt: 'Área', en: 'Area' }, value: '120m²' },
      { label: { pt: 'Tipologia', en: 'Typology' }, value: { pt: 'Estúdio Profissional', en: 'Professional Studio' } },
      { label: { pt: 'Conclusão', en: 'Completion' }, value: 'Maio 2022' },
    ],
    gallery: [
      '/images/zen_1.jpg',
      '/images/zen_2.jpg',
      '/images/zen_3.jpg',
    ]
  },
  {
    id: 'penthouse-mar-05',
    slug: 'penthouse-mar',
    title: {
      pt: 'Penthouse Mar',
      en: 'Sea Penthouse',
    },
    location: 'Costa do Sol, Maputo',
    year: '2023',
    image: '/images/sea_penthouse.jpg',
    description: {
      pt: 'Sofisticação à beira-mar. Uma penthouse que utiliza a cor azul do oceano como pano de fundo para um design interior arrojado.',
      en: 'Sophistication by the sea. A penthouse that uses the ocean\'s blue color as a backdrop for a bold interior design.',
    },
    story: {
      pt: 'A Penthouse Mar é um projeto de alto luxo localizado na Costa do Sol. O design foca na transparência e no reflexo. Utilizamos espelhos de grandes dimensões e superfícies polidas para trazer o mar para dentro de cada divisão. O resultado é uma experiência de vida fluida e luxuosa.',
      en: 'The Sea Penthouse is a high-luxury project located on the Costa do Sol. The design focuses on transparency and reflection. We used large mirrors and polished surfaces to bring the sea into every room. The result is a fluid and luxurious living experience.',
    },
    details: [
      { label: { pt: 'Área', en: 'Area' }, value: '350m²' },
      { label: { pt: 'Tipologia', en: 'Typology' }, value: { pt: 'Penthouse T3', en: '3-Bedroom Penthouse' } },
      { label: { pt: 'Conclusão', en: 'Completion' }, value: 'Dezembro 2023' },
    ],
    gallery: [
      '/images/sea_1.jpg',
      '/images/sea_2.jpg',
      '/images/sea_3.jpg',
    ]
  },
  {
    id: 'apartamento-lux-06',
    slug: 'apartamento-lux',
    title: {
      pt: 'Apartamento Lux',
      en: 'Lux Apartment',
    },
    location: 'Baixa, Maputo',
    year: '2024',
    image: '/images/lux_apartment.jpg',
    description: {
      pt: 'Elegância clássica encontra o minimalismo moderno num apartamento histórico recuperado na Baixa de Maputo.',
      en: 'Classic elegance meets modern minimalism in a restored historical apartment in downtown Maputo.',
    },
    story: {
      pt: 'Resgatando a glória de um edifício colonial, o Apartamento Lux combina pé-direitos altos e molduras originais com uma curadoria de mobiliário contemporâneo. A iluminação foi cuidadosamente planeada para destacar as obras de arte moçambicanas que pontuam o espaço.',
      en: 'Rescuing the glory of a colonial building, the Lux Apartment combines high ceilings and original moldings with a curation of contemporary furniture. The lighting was carefully planned to highlight the Mozambican artworks that dot the space.',
    },
    details: [
      { label: { pt: 'Área', en: 'Area' }, value: '220m²' },
      { label: { pt: 'Tipologia', en: 'Typology' }, value: { pt: 'Apartamento T3', en: '3-Bedroom Apartment' } },
      { label: { pt: 'Conclusão', en: 'Completion' }, value: 'Fevereiro 2024' },
    ],
    gallery: [
      '/images/lux_1.jpg',
      '/images/lux_2.jpg',
      '/images/lux_3.jpg',
    ]
  }
];

export const TRANSLATIONS = {
  pt: {
    nav: {
      home: 'Início',
      projects: 'Projetos',
      about: 'Estúdio',
      services: 'Serviços',
      contact: 'Contacto',
      policy: 'Privacidade',
      cookies: 'Cookies'
    },
    hero: {
       subtitle: 'Arquitetura de Interiores & Design Minimalista',
       cta: 'Explorar Projetos',
    },
    about: {
      title: 'A Essência do Design',
      description: 'Na Simione Arquitectus, acreditamos que o luxo reside na simplicidade. Somos um estúdio de arquitetura de interiores baseado em Maputo, dedicado a criar espaços que transcendem tendências passageiras.',
      quote: '"O espaço deve ser uma extensão da alma, um convite ao silêncio e à clareza."',
    },
    services: {
      title: 'O Que Fazemos',
      list: [
        { title: 'Design de Interiores', desc: 'Conceitos personalizados para residências e espaços comerciais de alto padrão.' },
        { title: 'Planeamento Espacial', desc: 'Otimização inteligente de layouts para máxima funcionalidade e fluxo.' },
        { title: 'Consultoria de Estilo', desc: 'Curadoria de mobiliário, iluminação e acabamentos exclusivos.' },
      ]
    },
    contact: {
      title: 'Entre em Contacto',
      location: 'Localização',
      phone: 'Telefone',
      follow: 'Siga-nos',
      architect: 'Arquitecto Simione',
    },
    project: {
       back: 'Voltar',
       next: 'PROJETOS QUE LHE PODEM INTERESSAR',
       details: 'Detalhes do Projeto',
       concept: 'O Conceito',
       start: 'INICIAR UM PROJETO',
       go: 'GO',
    },
    policies: {
      privacy: 'Política de Privacidade',
      cookies: 'Política de Cookies',
    }
  },
  en: {
    nav: {
      home: 'Home',
      projects: 'Projects',
      about: 'Studio',
      services: 'Services',
      contact: 'Contact',
      policy: 'Privacy',
      cookies: 'Cookies'
    },
    hero: {
       subtitle: 'Interior Architecture & Minimalist Design',
       cta: 'Explore Projects',
    },
    about: {
      title: 'The Essence of Design',
      description: 'At Simione Arquitectus, we believe luxury resides in simplicity. We are a Maputo-based interior architecture studio dedicated to creating spaces that transcend fleeting trends.',
      quote: '"Space should be an extension of the soul, an invitation to silence and clarity."',
    },
    services: {
      title: 'Our Services',
      list: [
        { title: 'Interior Design', desc: 'Bespoke concepts for high-end residential and commercial spaces.' },
        { title: 'Space Planning', desc: 'Intelligent layout optimization for maximum functionality and flow.' },
        { title: 'Style Consultation', desc: 'Curation of exclusive furniture, lighting, and finishes.' },
      ]
    },
    contact: {
      title: 'Get in Touch',
      location: 'Location',
      phone: 'Phone',
      follow: 'Follow Us',
      architect: 'Architect Simione',
    },
    project: {
       back: 'Back',
       next: 'PROJECTS YOU MIGHT LIKE',
       details: 'Project Details',
       concept: 'The Concept',
       start: 'STARTING A PROJECT',
       go: 'GO',
    },
    policies: {
      privacy: 'Privacy Policy',
      cookies: 'Cookie Policy',
    }
  }
};
