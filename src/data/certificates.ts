export interface CertificateRecord {
  slug: string;
  name: string;
  id: string;
  role: string;
  email: string;
  initials: string;
  accentBg: string;
  accentText: string;
  project: string;
  projectId: string;
  duration: string;
  department: string;
  batch: string;
  college: string;
  joiningDate: string;
  offerLetterIssued: string;
}

const SHARED_DETAILS = {
  project: 'College ERP Management System',
  projectId: 'MSAJCE-DT-CEM-001',
  duration: '17 Jul 2026 – 01 Oct 2026',
  department: 'B.E. CSE (AIML)',
  batch: '2024–2028',
  college: 'Mohamed Sathak A J College of Engineering',
  joiningDate: '17 Jul 2026',
  offerLetterIssued: '10 Jul 2026',
};

export const CERTIFICATES: Record<string, CertificateRecord> = {
  deena: {
    slug: 'deena',
    name: 'Deena V',
    id: '1000032000',
    role: 'FULL STACK DEVELOPER',
    email: 'deenavenkatesan2006@gmail.com',
    initials: 'DV',
    accentBg: 'bg-[#102A43]',
    accentText: 'text-[#F0F4F8]',
    ...SHARED_DETAILS,
  },
  baifin: {
    slug: 'baifin',
    name: 'Mohammed Baifin',
    id: '1000032001',
    role: 'FULL STACK DEVELOPER',
    email: 'baifin@msajce.edu.in',
    initials: 'MB',
    accentBg: 'bg-[#1B365D]',
    accentText: 'text-[#F0F4F8]',
    ...SHARED_DETAILS,
  },
  fadhil: {
    slug: 'fadhil',
    name: 'Mohamed Fadhil',
    id: '1000032002',
    role: 'BACKEND DEVELOPER',
    email: 'fadhil@msajce.edu.in',
    initials: 'MF',
    accentBg: 'bg-[#133C38]',
    accentText: 'text-[#F0F4F8]',
    ...SHARED_DETAILS,
  },
  mishal: {
    slug: 'mishal',
    name: 'Mishal N',
    id: '1000032003',
    role: 'FRONTEND DEVELOPER',
    email: 'mishal@msajce.edu.in',
    initials: 'MN',
    accentBg: 'bg-[#2C254A]',
    accentText: 'text-[#F0F4F8]',
    ...SHARED_DETAILS,
  },
  eshwar: {
    slug: 'eshwar',
    name: 'Pitche Eshwar R',
    id: '1000032004',
    role: 'UI/UX DESIGNER',
    email: 'eshwar@msajce.edu.in',
    initials: 'PE',
    accentBg: 'bg-[#3D241C]',
    accentText: 'text-[#F0F4F8]',
    ...SHARED_DETAILS,
  },
};

export const CERTIFICATE_LIST = Object.values(CERTIFICATES);
