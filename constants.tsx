
import { Service, NewsItem, FAQ, Testimonial } from './types';

export const SERVICES: Service[] = [
  { id: '1', title: 'Court Marriage (Special Marriage Act)', description: 'Full legal assistance for couples marrying under the Special Marriage Act 1954.', duration: '30-45 Days', priceEstimate: 'Contact for Quote' },
  { id: '2', title: 'Marriage Registration (HMA)', description: 'Registration of existing marriages under Hindu Marriage Act.', duration: '7-15 Days', priceEstimate: 'Competitive Rates' },
  { id: '3', title: 'Police Verification Assistance', description: 'Streamlined process for mandatory police verification steps.', duration: '3-5 Days', priceEstimate: 'Included in Packages' },
  { id: '4', title: 'Name Change & Gazette', description: 'Post-marriage name change documentation and Gazette publication.', duration: '10-20 Days', priceEstimate: 'Affordable' },
  { id: '5', title: 'Memorandum of Marriage', description: 'Preparation and filing of Form A for Pune Municipal Corporation.', duration: '1-2 Days', priceEstimate: 'Minimal Fee' },
];

export const NEWS: NewsItem[] = [
  {
    id: 'n1',
    title: 'Pune RMO Office Updates Registration Slots',
    image: 'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?q=80&w=2070&auto=format&fit=crop',
    summary: 'The Pune Registrar of Marriages has announced a new online slot booking system to reduce wait times and improve efficiency.',
    date: 'Oct 24, 2023',
    content: 'The new system aims to eliminate the long queues seen at the Haveli sub-registrar offices. Starting next Monday, all couples are required to book their time slots at least 48 hours in advance through the official MahaMarriage portal. This move is expected to streamline the physical verification process significantly.'
  },
  {
    id: 'n2',
    title: 'New Digital Signature Requirements for Witnesses',
    image: 'https://images.unsplash.com/photo-1589829545856-d10d557cf95f?q=80&w=2070&auto=format&fit=crop',
    summary: 'Starting next month, all witnesses must provide digital consent for marriage registration in Pune as part of the new security protocol.',
    date: 'Sep 15, 2023',
    content: 'The Maharashtra government has introduced an Aadhaar-linked digital signature for all marriage witnesses. This enhancement ensures that the identity of the witnesses is verified in real-time, reducing the risk of fraudulent registrations. Our office provides full support in managing these digital requirements during your application.'
  },
  {
    id: 'n3',
    title: 'Advocate Shinde Honored for Outstanding Legal Service',
    image: 'https://images.unsplash.com/photo-1521791136064-7986c2920216?q=80&w=2069&auto=format&fit=crop',
    summary: 'Recognized for helping over 5000 couples navigate complex legal marriage hurdles in Maharashtra with integrity and professional excellence.',
    date: 'Aug 30, 2023',
    content: 'At a ceremony held at the Pune District Court complex, Advocate Shinde was lauded for maintaining high ethical standards in family law. The recognition highlights the firm’s commitment to providing accessible legal services to citizens from all walks of life, making marriage registration a stress-free experience for the Pune community.'
  }
];

export const FAQS: FAQ[] = [
  { id: 'f1', question: 'What documents are required for Court Marriage in Pune?', answer: 'Age proof (Birth Cert/LC), Address proof (Aadhar/Passport), 3 Witnesses with IDs, and Passport size photographs.' },
  { id: 'f2', question: 'How long does the process take?', answer: 'A traditional Court Marriage requires a 30-day notice period. Regular registration of an already performed marriage takes about 7-10 days.' },
  { id: 'f3', question: 'Can foreigners register marriage in Pune?', answer: 'Yes, under the Special Marriage Act. Additional documents like NOC from their embassy and valid Visa are required.' },
  { id: 'f4', question: 'Is the physical presence of witnesses mandatory?', answer: 'Yes, both parties and three witnesses must be present before the Registrar of Marriages to sign the documents.' },
];

export const TESTIMONIALS: Testimonial[] = [
  { id: 't1', name: 'Rahul & Priya', location: 'Kothrud, Pune', comment: 'Extremely professional service. Advocate was very helpful and managed everything from documentation to registration.', rating: 5 },
  { id: 't2', name: 'Amit Verma', location: 'Baner, Pune', comment: 'I was worried about the complexity, but they made it look easy. Highly recommended for anyone looking for hassle-free registration.', rating: 5 },
  { id: 't3', name: 'Sneha Patil', location: 'Hinjewadi, Pune', comment: 'Transparent pricing and clear communication throughout the process.', rating: 4 },
];
