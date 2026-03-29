const AvisoLegal = () => (
  <div className="min-h-screen bg-background py-20">
    <div className="container mx-auto px-4 max-w-3xl">
      <h1 className="text-3xl font-bold text-foreground mb-8">Aviso Legal</h1>
      <div className="prose prose-sm text-muted-foreground space-y-6">
        <section>
          <h2 className="text-xl font-semibold text-foreground">1. Datos identificativos</h2>
          <p>En cumplimiento con el deber de información recogido en artículo 10 de la Ley 34/2002, de 11 de julio, de Servicios de la Sociedad de la Información y del Comercio Electrónico, DigitalBoost informa que es titular del presente sitio web.</p>
        </section>
        <section>
          <h2 className="text-xl font-semibold text-foreground">2. Propiedad intelectual</h2>
          <p>El sitio web, incluyendo a título enunciativo pero no limitativo su programación, edición, compilación y demás elementos necesarios para su funcionamiento, los diseños, logotipos, texto y/o gráficos son propiedad del prestador.</p>
        </section>
        <section>
          <h2 className="text-xl font-semibold text-foreground">3. Condiciones de uso</h2>
          <p>El usuario se compromete a hacer un uso adecuado de los contenidos y servicios que DigitalBoost ofrece a través de su sitio web y a no emplearlos para actividades ilícitas o contrarias a la buena fe.</p>
        </section>
        <section>
          <h2 className="text-xl font-semibold text-foreground">4. Legislación aplicable</h2>
          <p>Para la resolución de todas las controversias o cuestiones relacionadas con el presente sitio web, será de aplicación la legislación española.</p>
        </section>
      </div>
      <div className="mt-8">
        <a href="/" className="text-gold hover:underline text-sm">← Volver al inicio</a>
      </div>
    </div>
  </div>
);

export default AvisoLegal;
