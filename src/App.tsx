import React, { useEffect, useState } from 'react';
import { Check, User } from 'lucide-react';
import { CERTIFICATES, CERTIFICATE_LIST, CertificateRecord } from './data/certificates';

function getSlugFromPath(pathname: string): string {
  const cleaned = pathname.replace(/^\/+|\/+$/g, '').toLowerCase();
  if (cleaned && CERTIFICATES[cleaned]) {
    return cleaned;
  }
  return 'deena';
}

export function App() {
  const [slug, setSlug] = useState<string>(() => getSlugFromPath(window.location.pathname));

  useEffect(() => {
    const handlePopState = () => {
      setSlug(getSlugFromPath(window.location.pathname));
    };
    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  const record: CertificateRecord = CERTIFICATES[slug] || CERTIFICATES.deena;

  useEffect(() => {
    document.title = `${record.name} • MSAJCE Certificate Registry`;
  }, [record.name]);

  const navigateTo = (targetSlug: string) => {
    const nextPath = `/${targetSlug}`;
    if (window.location.pathname !== nextPath) {
      window.history.pushState({}, '', nextPath);
    }
    setSlug(targetSlug);
  };

  const detailRows: { label: string; value: string; mono?: boolean }[] = [
    { label: 'PROJECT', value: record.project },
    { label: 'PROJECT ID', value: record.projectId, mono: true },
    { label: 'DURATION', value: record.duration },
    { label: 'DEPARTMENT', value: record.department },
    { label: 'BATCH', value: record.batch },
    { label: 'COLLEGE', value: record.college },
    { label: 'JOINING DATE', value: record.joiningDate },
    { label: 'OFFER LETTER ISSUED', value: record.offerLetterIssued },
    { label: 'EMAIL', value: record.email },
  ];

  return (
    <div className="min-h-screen w-full bg-[#070E1D] bg-[radial-gradient(ellipse_at_top,_#112244_0%,_#070E1D_65%)] px-4 py-10 sm:px-6 sm:py-14 flex flex-col items-center justify-center">
      {/* Top Registry Header */}
      <header className="mb-14 text-center">
        <p className="text-[11px] sm:text-xs font-semibold uppercase tracking-[0.24em] text-[#7D95B8]">
          MSAJCE &bull; CERTIFICATE REGISTRY
        </p>
      </header>

      {/* Main Cream-White Verification Card */}
      <main className="relative w-full max-w-[540px] rounded-[24px] bg-[#FDFCF7] px-6 pt-14 pb-9 sm:px-10 sm:pt-16 sm:pb-11 shadow-[0_28px_70px_-15px_rgba(0,0,0,0.65),0_0_48px_rgba(59,130,246,0.10)] border border-white/60">
        {/* Floating Green Circular Verification Badge */}
        <div
          className="absolute -top-9 left-1/2 -translate-x-1/2 flex h-[72px] w-[72px] items-center justify-center rounded-full bg-[#16A34A] text-white ring-[6px] ring-[#FDFCF7] shadow-[0_10px_25px_-5px_rgba(22,163,74,0.55)]"
          aria-hidden="true"
        >
          <Check className="h-9 w-9 stroke-[3.2]" />
        </div>

        {/* Authenticity Check Heading */}
        <section className="text-center border-b border-[#E8E4D9] pb-7">
          <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#7A8494]">
            AUTHENTICITY CHECK
          </p>
          <h1 className="mt-2 text-2xl sm:text-[28px] font-extrabold tracking-tight text-[#15803D]">
            Certificate Verified
          </h1>
          <p className="mt-2 text-sm leading-relaxed text-[#5B6472] max-w-sm mx-auto">
            This internship certificate was issued by MSAJCE and matches our records.
          </p>
        </section>

        {/* Profile Header Section */}
        <section className="py-7 border-b border-[#E8E4D9] flex items-center gap-5">
          {/* Profile Picture Frame */}
          <div
            className={`relative flex h-20 w-20 sm:h-[88px] sm:w-[88px] shrink-0 items-center justify-center rounded-2xl border-2 border-[#E2DDD0] ${record.accentBg} ${record.accentText} shadow-sm overflow-hidden`}
            aria-label={`${record.name} profile frame`}
          >
            <div className="flex flex-col items-center justify-center">
              <span className="text-xl sm:text-2xl font-bold tracking-tight">
                {record.initials}
              </span>
            </div>
            <User className="absolute -bottom-2 -right-2 h-8 w-8 opacity-10" aria-hidden="true" />
          </div>

          {/* Name, ID, Role */}
          <div className="min-w-0 flex-1">
            <h2 className="text-xl sm:text-2xl font-bold tracking-tight text-[#111827] truncate">
              {record.name}
            </h2>
            <p className="mt-0.5 text-sm font-medium text-[#6B7280] font-mono-tabular">
              {record.id}
            </p>
            <p className="mt-1.5 text-xs font-bold uppercase tracking-[0.12em] text-[#1E3A5F]">
              {record.role}
            </p>
          </div>
        </section>

        {/* Key-Value Details Grid */}
        <section className="pt-2" aria-label="Certificate Details">
          <dl className="divide-y divide-[#ECE8DF]">
            {detailRows.map((row) => (
              <div
                key={row.label}
                className="py-3.5 flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1 sm:gap-6"
              >
                <dt className="text-[11px] font-semibold uppercase tracking-[0.1em] text-[#8A92A0] shrink-0">
                  {row.label}
                </dt>
                <dd
                  className={`text-sm font-semibold text-[#1F2937] sm:text-right break-words ${
                    row.mono ? 'font-mono-tabular' : ''
                  }`}
                >
                  {row.value}
                </dd>
              </div>
            ))}
          </dl>
        </section>
      </main>

      {/* Registry Member Switcher */}
      <nav
        aria-label="Verified Team Members"
        className="mt-8 flex flex-wrap items-center justify-center gap-x-5 gap-y-2 max-w-[540px]"
      >
        {CERTIFICATE_LIST.map((member) => {
          const isActive = member.slug === record.slug;
          return (
            <button
              key={member.slug}
              type="button"
              onClick={() => navigateTo(member.slug)}
              className={`text-xs font-medium transition-colors whitespace-nowrap cursor-pointer pb-0.5 border-b ${
                isActive
                  ? 'text-white border-[#4ADE80]'
                  : 'text-[#7D95B8] border-transparent hover:text-[#C4D4EB]'
              }`}
            >
              /{member.slug}
            </button>
          );
        })}
      </nav>
    </div>
  );
}

export default App;
