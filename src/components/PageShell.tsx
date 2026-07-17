import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

interface PageShellProps {
  title: string;
  description: string;
  activePath?: string;
}

export default function PageShell({
  title,
  description,
  activePath,
}: PageShellProps) {
  return (
    <>
      <Navbar activePath={activePath} />
      <main className="min-h-screen bg-white pt-[72px]">
        <div className="mx-auto max-w-content px-4 py-20 sm:px-6 lg:px-10">
          <h1 className="text-4xl font-bold text-navy">{title}</h1>
          <p className="mt-4 max-w-2xl text-gray-500">{description}</p>
        </div>
      </main>
      <Footer />
    </>
  );
}
