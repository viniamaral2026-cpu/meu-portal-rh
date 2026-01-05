import { stats } from "@/lib/data";

export function Stats() {
  return (
    <section className="py-20">
      <div className="container">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <h2 className="text-3xl font-bold font-headline">A gestão de pessoas não integrada sai caro!</h2>
          <p className="text-muted-foreground mt-2">Não sofra por causa de processos manuais, riscos de segurança e perda de talentos.</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="text-center p-6 rounded-lg bg-secondary">
              <p className="text-5xl font-extrabold text-primary font-headline">{stat.percentage}</p>
              <p className="mt-2 text-sm text-muted-foreground">{stat.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
