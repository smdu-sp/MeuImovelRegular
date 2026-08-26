export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-background text-foreground">
      <section className="mx-auto flex w-full max-w-6xl flex-1 flex-col justify-center px-6 py-16 sm:px-10">
        <p className="text-sm font-medium uppercase tracking-wide text-amber-50">
          Meu Imovel Regular
        </p>
        <h1 className="mt-4 max-w-3xl text-4xl font-semibold leading-tight text-amber-50 sm:text-5xl">
          Regularizacao imobiliaria com informacao clara e acessivel.
        </h1>
        <p className="mt-6 max-w-2xl text-lg leading-8 text-amber-50">
          Base limpa para a construcao da experiencia do projeto.
        </p>
      </section>
    </main>
  );
}
