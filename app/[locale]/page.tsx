import Dashboard from "@/components/Dashboard";

export default function Home({ params: { locale } }: { params: { locale: string } }) {
  return <Dashboard params={{ locale }} />;
}
