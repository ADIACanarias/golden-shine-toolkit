const Privacidad = () => (
  <div className="min-h-screen bg-background py-20">
    <div className="container mx-auto px-4 max-w-3xl">
      <h1 className="text-3xl font-bold text-foreground mb-8">Política de Privacidad</h1>
      <div className="prose prose-sm text-muted-foreground space-y-6">
        <section>
          <h2 className="text-xl font-semibold text-foreground">1. Responsable del tratamiento</h2>
          <p>DigitalBoost es responsable del tratamiento de los datos personales del usuario y le informa que estos datos serán tratados de conformidad con lo dispuesto en el Reglamento (UE) 2016/679 (RGPD).</p>
        </section>
        <section>
          <h2 className="text-xl font-semibold text-foreground">2. Finalidad del tratamiento</h2>
          <p>Los datos personales recabados a través de los formularios del sitio web se utilizarán con la finalidad de gestionar su solicitud de información, presupuesto o contacto comercial.</p>
        </section>
        <section>
          <h2 className="text-xl font-semibold text-foreground">3. Legitimación</h2>
          <p>La base legal para el tratamiento de sus datos es el consentimiento del interesado y el interés legítimo del responsable.</p>
        </section>
        <section>
          <h2 className="text-xl font-semibold text-foreground">4. Conservación de datos</h2>
          <p>Los datos personales proporcionados se conservarán mientras se mantenga la relación comercial o durante los años necesarios para cumplir con las obligaciones legales.</p>
        </section>
        <section>
          <h2 className="text-xl font-semibold text-foreground">5. Derechos del usuario</h2>
          <p>El usuario podrá ejercer sus derechos de acceso, rectificación, supresión, oposición, limitación del tratamiento y portabilidad de datos dirigiéndose a DigitalBoost mediante email.</p>
        </section>
        <section>
          <h2 className="text-xl font-semibold text-foreground">6. Cookies</h2>
          <p>Este sitio web utiliza cookies propias y de terceros para mejorar la experiencia de navegación. El usuario puede configurar su navegador para ser avisado de la recepción de cookies.</p>
        </section>
      </div>
      <div className="mt-8">
        <a href="/" className="text-gold hover:underline text-sm">← Volver al inicio</a>
      </div>
    </div>
  </div>
);

export default Privacidad;
