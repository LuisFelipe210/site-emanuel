# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Users
Mixed audience, no single dominant profile:
- The insured person: rural workers, elderly people, people with disabilities or illness in the interior of Bahia and nearby states, often with little familiarity with the internet, mostly on a phone.
- Their family: sons, daughters and grandchildren researching on behalf of a parent or grandparent.

Both arrive mostly from Instagram and WhatsApp. The job: understand whether they have a right to an INSS benefit (or to reverse a denial) and start a conversation with the lawyer.

## Product Purpose
Website of Dr. Emanuel Silvestre, a lawyer focused on social-security law (Direito Previdenciário). It explains which INSS benefits he handles, builds enough trust for the visitor to reach out, and converts that trust into a WhatsApp conversation, a contact-form message, or a lead for the free document checklist. Success = a visitor opens WhatsApp or submits a form.

## Positioning
A single named lawyer from Campo Formoso (BA) who speaks plainly ("sem juridiquês"), focuses on reversing INSS denials, and handles the rural insured (segurado especial) in particular; serves all of Brazil digitally.

## Operating Context
- Primary channel: WhatsApp (5587996128608). Prefilled messages per service.
- Secondary: contact form (currently simulated, no backend) and lead-magnet form posting to `/api/send-email` (nodemailer), redirecting to `/obrigado`.
- Lead magnet: `public/checklist-inss-2025.pdf` ("Checklist Blindado" for rural retirement).
- Office hours: Mon–Fri, 08h–18h. Email: emanuelsilvestre.adv@gmail.com. Instagram: @emanuelsilvestre.adv.

## Capabilities and Constraints
- Next.js 16 App Router, React 19, Tailwind v4, framer-motion available, shadcn/ui components present.
- Services: Aposentadoria Rural, Aposentadoria por Idade, BPC/LOAS, Auxílio-doença/Invalidez, Revisão de Benefício, Planejamento Previdenciário.
- OAB ethics: no promise of results; mandatory disclaimer that the site is informative and has no link to the INSS. Advertising must be sober (Provimento 205/2021).

## Brand Commitments
- The gold "EE" monogram logo (`public/logo.png`, `public/lg.svg`) stays. Colors, type and layout are free.
- OAB/BA 79.803.

## Evidence on Hand
- Photos of Dr. Emanuel: `public/manel.jpg` (close portrait, light suit, blue tie), `public/manel2.png` (standing at desk, marble wall), `public/manel3.png` (navy blazer, smiling, white background).
- NOT confirmed (must not be shown as fact until the client confirms): "+100 benefícios concedidos", "R$ 1 Mi+ recuperados", "3 anos de atuação", "500 downloads" of the checklist, and the three testimonials (Sr. Roberto Mendes, Dona Maria José, Cláudia Ferreira).

## Product Principles
1. WhatsApp is the front door; every section leads there in one tap.
2. Plain Portuguese a 65-year-old reads without help, legible at phone size.
3. Trust comes from a real person and real process, not from unverified numbers.
4. Respect OAB advertising rules: inform, never promise.

## Accessibility & Inclusion
Older readers with low vision and low digital literacy: large body text, high contrast, big tap targets, no information carried only by motion; respect reduced motion.
