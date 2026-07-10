import Image from "next/image";

// Sample initial data for the dashboard
const candidates = [
  {
    id: 1,
    name: "Jane Doe",
    role: "Senior Backend Engineer",
    stage: "Technical Test",
    status: "High Priority",
  },
  {
    id: 2,
    name: "John Smith",
    role: "Product Designer",
    stage: "Initial Screen",
    status: "Pending",
  },
  {
    id: 3,
    name: "Avery Johnson",
    role: "HR Specialist",
    stage: "Panel Interview",
    status: "Scheduled",
  },
];

export default function Home() {
  return (
    <div className="grid grid-rows-[60px_1fr_40px] items-center justify-items-center min-h-screen p-6 pb-12 gap-8 sm:p-12 font-[family-name:var(--font-geist-sans)] bg-neutral-50 dark:bg-neutral-950 text-neutral-900 dark:text-neutral-100">
      {/* HEADER */}
      <header className="row-start-1 w-full max-w-5xl flex items-center justify-between border-b border-solid border-black/[0.08] dark:border-white/[0.08] pb-4">
        <div className="flex items-center gap-3">
          <Image
            className="dark:invert"
            src="/next.svg"
            alt="Company Logo"
            width={110}
            height={24}
            priority
          />
          <span className="text-xs uppercase tracking-widest font-semibold px-2 py-0.5 rounded bg-blue-500/10 text-blue-600 dark:text-blue-400">
            ATS Onboard
          </span>
        </div>
        <div className="flex items-center gap-2 text-sm font-medium opacity-80">
          <span>Admin Workspace</span>
        </div>
      </header>

      {/* MAIN DASHBOARD */}
      <main className="flex flex-col gap-8 row-start-2 w-full max-w-5xl items-stretch">
        {/* Dashboard Intro */}
        <div className="flex flex-col gap-2 text-center sm:text-left">
          <h1 className="text-2xl sm:text-3xl font-bold tracking-tight">
            Candidate Pipeline
          </h1>
          <p className="text-sm text-neutral-500 dark:text-neutral-400">
            Track, review, and onboard your active job applicants across all
            open roles.
          </p>
        </div>

        {/* Pipeline Metrics Quick Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          <div className="p-4 rounded-xl border border-solid border-black/[.08] dark:border-white/[.08] bg-white dark:bg-neutral-900">
            <span className="text-xs font-semibold uppercase text-neutral-400">
              Active Applications
            </span>
            <p className="text-2xl font-bold mt-1">14</p>
          </div>
          <div className="p-4 rounded-xl border border-solid border-black/[.08] dark:border-white/[.08] bg-white dark:bg-neutral-900">
            <span className="text-xs font-semibold uppercase text-neutral-400">
              Interviews This Week
            </span>
            <p className="text-2xl font-bold mt-1 text-blue-500">5</p>
          </div>
          <div className="p-4 rounded-xl border border-solid border-black/[.08] dark:border-white/[.08] bg-white dark:bg-neutral-900">
            <span className="text-xs font-semibold uppercase text-neutral-400">
              Ready to Onboard
            </span>
            <p className="text-2xl font-bold mt-1 text-green-500">2</p>
          </div>
        </div>

        {/* Main Content Area: Table / List */}
        <div className="rounded-xl border border-solid border-black/[.08] dark:border-white/[.08] bg-white dark:bg-neutral-900 overflow-hidden">
          <div className="p-4 border-b border-solid border-black/[.08] dark:border-white/[.08] flex justify-between items-center bg-neutral-50/[0.5] dark:bg-neutral-900/[0.5]">
            <h2 className="font-semibold text-sm">Recent Applicants</h2>
            <button className="text-xs font-medium text-blue-600 dark:text-blue-400 hover:underline">
              + Add Candidate
            </button>
          </div>

          <div className="divide-y divide-solid divide-black/[.08] dark:divide-white/[.08]">
            {candidates.map((candidate) => (
              <div
                key={candidate.id}
                className="p-4 flex flex-col sm:flex-row sm:items-center justify-between gap-4 hover:bg-neutral-50 dark:hover:bg-neutral-800/30 transition-colors"
              >
                <div className="flex flex-col gap-0.5">
                  <span className="font-medium text-base">
                    {candidate.name}
                  </span>
                  <span className="text-xs text-neutral-500 dark:text-neutral-400">
                    {candidate.role}
                  </span>
                </div>

                <div className="flex flex-wrap items-center gap-3 sm:gap-6">
                  <div className="flex flex-col sm:items-end gap-1">
                    <span className="text-xs text-neutral-400">
                      Current Stage
                    </span>
                    <span className="text-xs font-mono bg-black/[.05] dark:bg-white/[.06] px-2 py-0.5 rounded font-semibold">
                      {candidate.stage}
                    </span>
                  </div>
                  <div className="flex flex-col sm:items-end gap-1">
                    <span className="text-xs text-neutral-400">Priority</span>
                    <span
                      className={`text-xs font-medium ${
                        candidate.status === "High Priority"
                          ? "text-red-500"
                          : "text-neutral-500"
                      }`}
                    >
                      ● {candidate.status}
                    </span>
                  </div>
                  <a
                    className="rounded-full border border-solid border-black/[.08] dark:border-white/[.145] transition-colors flex items-center justify-center hover:bg-[#f2f2f2] dark:hover:bg-[#1a1a1a] font-medium text-xs h-8 px-3 ml-auto sm:ml-0"
                    href={`/candidates/${candidate.id}`}
                  >
                    View Profile
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>

      {/* SYSTEM FOOTER */}
      <footer className="row-start-3 w-full max-w-5xl flex gap-6 flex-wrap items-center justify-center border-t border-solid border-black/[0.08] dark:border-white/[0.08] pt-4 text-xs text-neutral-400">
        <a className="flex items-center gap-1.5 hover:underline" href="#docs">
          <Image
            aria-hidden
            src="/file.svg"
            alt="File icon"
            width={14}
            height={14}
          />
          ATS Documentation
        </a>
        <a
          className="flex items-center gap-1.5 hover:underline"
          href="#pipeline"
        >
          <Image
            aria-hidden
            src="/window.svg"
            alt="Window icon"
            width={14}
            height={14}
          />
          Configure Stages
        </a>
        <a
          className="flex items-center gap-1.5 hover:underline"
          href="#settings"
        >
          <Image
            aria-hidden
            src="/globe.svg"
            alt="Globe icon"
            width={14}
            height={14}
          />
          HR Integrations
        </a>
      </footer>
    </div>
  );
}
