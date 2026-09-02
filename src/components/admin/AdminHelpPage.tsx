import {
  adminHelpBlockGuides,
  adminHelpSections,
} from "../../admin/help-content";

export function AdminHelpPage() {
  return (
    <main className="admin-help">
      <header className="admin-help__header">
        <p className="admin-help__eyebrow">Ajuda</p>
        <h1>Documentação do Admin</h1>
        <p>
          Guia rapido para Editor e Admin criarem, revisarem e publicarem
          conteudo institucional com seguranca.
        </p>
      </header>

      <nav aria-label="Topicos da ajuda" className="admin-help__nav">
        {adminHelpSections.map((section) => (
          <a href={`#${section.id}`} key={section.id}>
            {section.title}
          </a>
        ))}
        <a href="#blocks">Blocks</a>
      </nav>

      <section className="admin-help__sections">
        {adminHelpSections.map((section) => (
          <article className="admin-help__section" id={section.id} key={section.id}>
            <h2>{section.title}</h2>
            {section.body.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </article>
        ))}
      </section>

      <section className="admin-help__section" id="blocks">
        <h2>Blocks</h2>
        <div className="admin-help__blocks">
          {adminHelpBlockGuides.map((block) => (
            <article className="admin-help__block" key={block.name}>
              <h3>{block.name}</h3>
              <p>{block.purpose}</p>
              <dl>
                <div>
                  <dt>Campos principais</dt>
                  <dd>{block.fields.join(", ")}</dd>
                </div>
                <div>
                  <dt>Quando usar</dt>
                  <dd>{block.useWhen}</dd>
                </div>
                <div>
                  <dt>Quando nao usar</dt>
                  <dd>{block.avoidWhen}</dd>
                </div>
              </dl>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}
