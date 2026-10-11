/* ============================================================
   NovaCut site copy
   Swap any string here — the UI reads from this file.
   ============================================================ */

export const brand = {
  name: 'NovaCut',
  legalName: 'NovaCut Labs, Inc.',
  tagline: 'AI-Powered Photo & Video Editor for Everyone',
}

export const nav = {
  links: [
    { label: 'Home', to: '/' },
    { label: 'Video Studio', to: '/services/video-studio' },
    { label: 'Image Studio', to: '/services/image-studio' },
    { label: 'Templates', to: '/services/templates' },
    { label: 'About', to: '/about' },
    { label: 'Contact', to: '/contact' },
  ],
  cta: { label: 'Start for free', to: '/contact' },
}

export const home = {
  hero: {
    eyebrow: 'Now with Auto Director 2.0',
    title: 'AI-Powered Photo & Video Editor for Everyone',
    subtitle:
      'NovaCut has everything you need to create trending content for YouTube, Instagram, and beyond — auto-cut, captions, effects, and 4K export. No watermark. No learning curve.',
    primary: { label: 'Try online for free', to: '/contact' },
    secondary: { label: 'Explore the tools', to: '/services/video-studio' },
    note: 'No credit card required · Export in 4K · Works in the browser',
    stats: [
      { value: '80M+', label: 'Creators' },
      { value: '1.2B', label: 'Videos exported' },
      { value: '4.9', label: 'App rating' },
    ],
  },
  platforms: ['YouTube', 'TikTok', 'Instagram', 'Reels', 'Shorts', 'LinkedIn', 'X'],
  generators: {
    eyebrow: 'Smart editor & generator',
    title: 'One studio. Every format.',
    subtitle: 'Chat with NovaCut and it builds the cut — style, captions, avatar, soundtrack, export.',
    items: [
      {
        title: 'Video Studio',
        text: 'A quick chat with NovaCut and it will build a video from scratch — pacing, style, avatar, everything.',
        to: '/services/video-studio',
        image: '/images/feature-video.jpg',
        tag: 'AI',
      },
      {
        title: 'Image Studio',
        text: 'Turn text or a reference photo into custom, campaign-ready visuals with the online photo editor.',
        to: '/services/image-studio',
        image: '/images/feature-image.jpg',
        tag: 'AI',
      },
      {
        title: 'Voice & Captions',
        text: 'Natural text-to-speech, noise removal, and auto-captions in 40+ languages — ready for Reels.',
        to: '/services/video-studio',
        image: '/images/feature-audio.jpg',
        tag: 'Audio',
      },
    ],
  },
  tools: {
    eyebrow: 'AI editing tools',
    title: 'The essentials, done properly.',
    subtitle: 'Reliable AI for image, video, text, and audio — the features teams actually ship with.',
    groups: [
      {
        id: 'image',
        label: 'Image',
        items: [
          { title: 'Background Remover', text: 'Knock out backgrounds in one click. Product shots, portraits, ads — no halo, no watermark.', to: '/services/image-studio' },
          { title: 'Image Enhancer', text: 'Lift resolution and detail so everyday photos hold up on a 4K timeline.', to: '/services/image-studio' },
          { title: 'Image Resizer', text: 'Hit every aspect ratio for stories, thumbnails, ads, and print without stretching.', to: '/services/image-studio' },
          { title: 'Photo Editor', text: 'Crop, grade, retouch, and composite in the browser. No install required.', to: '/services/image-studio' },
        ],
      },
      {
        id: 'video',
        label: 'Video',
        items: [
          { title: 'Online Video Editor', text: 'Cut, trim, transitions, captions, and HD export for YouTube, TikTok, and Reels.', to: '/services/video-studio' },
          { title: 'Remove Video Background', text: 'Green-screen without the screen. Swap scenes in one pass.', to: '/services/video-studio' },
          { title: 'Video Converter', text: 'MP4, MOV, WebM — convert without cooking the quality.', to: '/services/video-studio' },
          { title: 'Auto Subtitles', text: 'Accurate captions in multiple languages, styled for the feed.', to: '/services/video-studio' },
        ],
      },
      {
        id: 'audio',
        label: 'Text & Audio',
        items: [
          { title: 'Text to Speech', text: 'Natural AI voices for narration, ads, and explainers — no booth required.', to: '/services/video-studio' },
          { title: 'Extract Audio', text: 'Pull clean MP3 or WAV from any clip in seconds.', to: '/services/video-studio' },
          { title: 'Remove Noise', text: 'Strip hiss, hum, and room tone so dialogue sits forward.', to: '/services/video-studio' },
          { title: 'Enhance Voice', text: 'Clarity, presence, and level — podcast-ready vocals from a phone mic.', to: '/services/video-studio' },
        ],
      },
    ],
  },
  templates: {
    eyebrow: 'Templates for everything',
    title: 'Start with a cut that already works.',
    subtitle: 'From AI-generated looks to timeless classics — one-click starts for Reels, ads, and films.',
    items: [
      { title: 'Reels & TikTok', uses: '873K uses', image: '/images/template-reels.jpg', text: 'Viral short-form with modern type, music, and punch-ins.' },
      { title: 'Travel stories', uses: '934K uses', image: '/images/template-travel.jpg', text: 'Cinematic travel recaps with map beats and color science.' },
      { title: 'Business & ads', uses: '243K uses', image: '/images/template-business.jpg', text: 'Promo spots, product films, and launch films that convert.' },
    ],
  },
  quotes: {
    eyebrow: 'Voice of our users',
    title: 'Loved by people who ship every day.',
    items: [
      {
        quote:
          'The auto-edit is like magic. I dropped in ten clips from a trip and it built a cut with music and pacing. Saved me a full evening.',
        name: 'Ayesha Rahman',
        role: 'Travel creator',
        avatar: '/images/avatar-1.jpg',
      },
      {
        quote:
          'We moved our social team off three different tools. Captions, resize, and export actually hold up on paid ads — that never used to be true.',
        name: 'Jordan Blake',
        role: 'Head of content, Northline',
        avatar: '/images/avatar-2.jpg',
      },
      {
        quote:
          'Templates that do not look like templates. I can restyle type and color in a minute and it still feels like our brand.',
        name: 'Mei Chen',
        role: 'Brand designer',
        avatar: null,
        initials: 'MC',
      },
    ],
  },
  faq: [
    { q: 'Is NovaCut free to try?', a: 'Yes. Start in the browser with no credit card. Paid plans unlock 4K, brand kits, and team seats — you can swap this copy later.' },
    { q: 'Do exports have a watermark?', a: 'No watermark on standard exports. That is a core promise of the product story — update this when you confirm plan rules.' },
    { q: 'Does it work on mobile and desktop?', a: 'Yes. Edit in the browser on desktop, and continue on iOS and Android. Projects sync to your account.' },
    { q: 'Can I use NovaCut for client work?', a: 'Yes. Commercial use is allowed on creator and team plans. See Terms for the full license language.' },
  ],
  cta: {
    title: 'Your next video is already cut.',
    subtitle: 'Open the studio, drop in clips, and let Auto Director take the first pass. You keep the taste. We handle the timeline.',
    primary: { label: 'Start for free', to: '/contact' },
    secondary: { label: 'Talk to us', to: '/contact' },
  },
}

export const services = {
  video: {
    eyebrow: 'Service · Video Studio',
    title: 'A video studio that directs with you.',
    subtitle:
      'From a messy camera roll to a finished story. Auto-cut, captions, B-roll, soundtrack, and 4K export — in the browser or on your phone.',
    image: '/images/hero-editor.jpg',
    intro:
      'Video Studio is NovaCut’s flagship editor. It is built for people who need a finished piece today — creators, social teams, and in-house studios who cannot wait on a timeline specialist.',
    points: [
      { title: 'Auto Director', text: 'Drop in clips. NovaCut finds the beats, trims the dead air, and lays a first cut with music.' },
      { title: 'Captions that perform', text: 'Word-accurate subtitles, styled for silent autoplay, in 40+ languages.' },
      { title: 'Background replace', text: 'Pull a subject off a messy room and drop them on a set, a gradient, or a city night.' },
      { title: 'Export that holds up', text: 'H.264 / H.265, up to 4K, no watermark — ready for ads, YouTube, and broadcast proxies.' },
    ],
    steps: [
      { n: '01', title: 'Drop footage', text: 'Phone clips, screen recordings, or a full card dump. We ingest fast.' },
      { n: '02', title: 'Direct the cut', text: 'Chat the brief or pick a template. Auto Director proposes a timeline.' },
      { n: '03', title: 'Finish & ship', text: 'Tweak type, grade, captions. Export 9:16, 1:1, and 16:9 in one pass.' },
    ],
  },
  image: {
    eyebrow: 'Service · Image Studio',
    title: 'Photos that look art-directed.',
    subtitle:
      'Background removal, enhancement, resize, and a full photo editor — built for product, portrait, and social stills.',
    image: '/images/feature-image.jpg',
    intro:
      'Image Studio is the stills half of NovaCut. Use it to clean a catalog, build a campaign key, or generate a thumbnail that actually stops the scroll.',
    points: [
      { title: 'Clean cutouts', text: 'Hair, glass, and product edges that do not look like a cheap mask.' },
      { title: 'Enhance & upscale', text: 'Recover detail for print, billboards, and 4K end cards.' },
      { title: 'Ratio library', text: 'Every social crop, ad unit, and thumbnail size — one master, many outputs.' },
      { title: 'Generate from text', text: 'Brief a look, lock a reference, and iterate without leaving the studio.' },
    ],
    steps: [
      { n: '01', title: 'Upload or generate', text: 'Start from a photo, a product packshot, or a text brief.' },
      { n: '02', title: 'Retouch the frame', text: 'Cutout, grade, type, and layout in a single canvas.' },
      { n: '03', title: 'Export the set', text: 'Download every crop your channels need, named and sharp.' },
    ],
  },
  templates: {
    eyebrow: 'Service · Templates',
    title: 'Cuts that already know the algorithm.',
    subtitle:
      'Reels, TikTok, ads, and brand films — restyle type, music, and color in minutes without looking templated.',
    image: '/images/template-reels.jpg',
    intro:
      'Templates are not a shortcut around taste. They are a head start on pacing, type, and structure — so your team spends time on the story, not the first 40 minutes of setup.',
    points: [
      { title: 'Short-form native', text: 'Hook, hold, payoff. Built for silent autoplay and on-screen type.' },
      { title: 'Brand kits', text: 'Lock fonts, colors, and logos so every edit comes out on-brand.' },
      { title: 'AI restyle', text: 'Swap a look — film, street, luxury, UGC — without rebuilding the timeline.' },
      { title: 'Team libraries', text: 'Share approved templates across markets and agencies.' },
    ],
    steps: [
      { n: '01', title: 'Pick a start', text: 'Browse Reels, ads, recaps, explainers, and product films.' },
      { n: '02', title: 'Drop your footage', text: 'Slots fill automatically. Type and music stay locked to the beat.' },
      { n: '03', title: 'Make it yours', text: 'Restyle, recaption, export. Save the result as a team template.' },
    ],
  },
}

export const about = {
  eyebrow: 'About NovaCut',
  title: 'Editing should feel like taste, not software.',
  subtitle:
    'We build the AI editor we wanted when a deadline was tonight and the timeline was a mess. Powerful enough for studios. Simple enough for a first video.',
  story: [
    'NovaCut started as a small lab of editors, designers, and researchers who were tired of tools that made you earn the right to a decent cut. Professional software asked for a career. Mobile apps asked you to live with watermarks and plastic templates.',
    'We took a different bet: cinema-grade finishing, directed by AI, finished by you. Auto Director takes the first pass. You keep authorship. The software gets out of the way.',
    'Today NovaCut is used by independent creators, social teams, and in-house studios. The product is still the same idea — a studio that thinks with you, not over you. Replace this story with yours whenever you are ready.',
  ],
  values: [
    { title: 'Taste over features', text: 'A tool is only as good as the work that leaves it. We ship fewer things, finished.' },
    { title: 'Authorship stays human', text: 'AI proposes. You decide. No black-box cut you cannot undo.' },
    { title: 'Speed without cheapness', text: 'Fast exports, no watermark theater, no surprise quality cliff.' },
    { title: 'Built for the feed and the film', text: '9:16 and 16:9 are first-class. Ads and essays share a timeline.' },
  ],
  stats: [
    { value: '2019', label: 'Lab founded' },
    { value: '80M+', label: 'Creators' },
    { value: '42', label: 'Countries on the team' },
    { value: '24/7', label: 'Studio uptime target' },
  ],
}

export const contact = {
  eyebrow: 'Contact',
  title: 'Tell us what you are cutting next.',
  subtitle: 'Sales, partnerships, press, or a product question — send a note. We read everything.',
  reasons: ['Sales & plans', 'Partnerships', 'Press', 'Support', 'Careers', 'Other'],
}

export const legal = {
  updated: 'October 11, 2026',
  termsIntro:
    'These Terms of Use are a working draft for the NovaCut marketing site. Replace this language with counsel-reviewed terms before you go live. They describe how visitors may use the website and, at a high level, the product.',
  privacyIntro:
    'This Privacy Policy is a working draft. Replace it with counsel-reviewed policy text, a real list of processors, and your lawful bases before launch. It explains how NovaCut Labs, Inc. intends to handle personal information collected through this website.',
}

export const footer = {
  blurb: 'AI-powered photo and video editing for creators, teams, and brands that need to ship.',
  columns: [
    {
      title: 'Product',
      links: [
        { label: 'Video Studio', to: '/services/video-studio' },
        { label: 'Image Studio', to: '/services/image-studio' },
        { label: 'Templates', to: '/services/templates' },
      ],
    },
    {
      title: 'Company',
      links: [
        { label: 'Home', to: '/' },
        { label: 'About', to: '/about' },
        { label: 'Contact', to: '/contact' },
      ],
    },
    {
      title: 'Legal',
      links: [
        { label: 'Terms & Conditions', to: '/terms' },
        { label: 'Privacy Policy', to: '/privacy' },
      ],
    },
  ],
}
