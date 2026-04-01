const AvisoLegal = () => (
  <div className="min-h-screen bg-background py-20">
    <div className="container mx-auto px-4 max-w-3xl">
      <h1 className="text-3xl font-bold text-foreground mb-8">Aviso Legal</h1>
      <div className="prose prose-sm text-muted-foreground space-y-6">
        <section>
          <h2 className="text-xl font-semibold text-foreground">1. Datos identificativos</h2>
          <p>En cumplimiento con el deber de información recogido en el artículo 10 de la Ley 34/2002, de 11 de julio, de Servicios de la Sociedad de la Información y del Comercio Electrónico (LSSI-CE), el titular del presente sitio web es:</p>
          <ul className="list-disc pl-6 space-y-1">
            <li><strong>Denominación:</strong> AD IA Canarias</li>
            <li><strong>Domicilio:</strong> Islas Canarias, España</li>
            <li><strong>Correo electrónico:</strong> info@adiacanarias.es</li>
            <li><strong>Teléfono:</strong> +34 660 833 897</li>
            <li><strong>Sitio web:</strong> www.adiacanarias.es</li>
          </ul>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-foreground">2. Objeto</h2>
          <p>El presente aviso legal regula el uso y acceso al sitio web de AD IA Canarias, a través del cual se ofrece información sobre los servicios de inteligencia artificial, automatización, desarrollo web y marketing digital destinados a empresas y profesionales del archipiélago canario.</p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-foreground">3. Propiedad intelectual e industrial</h2>
          <p>Todos los contenidos del sitio web, incluyendo a título enunciativo pero no limitativo: textos, fotografías, gráficos, imágenes, iconos, tecnología, software, enlaces, diseños gráficos, código fuente y demás contenidos audiovisuales o sonoros, así como su diseño gráfico y códigos fuente, son propiedad intelectual de AD IA Canarias o de terceros que han autorizado su uso, sin que puedan entenderse cedidos al usuario ninguno de los derechos de explotación reconocidos por la normativa vigente en materia de propiedad intelectual sobre los mismos.</p>
          <p>Las marcas, nombres comerciales y signos distintivos son propiedad de AD IA Canarias, quedando prohibida su reproducción, imitación, utilización o inserción sin la debida autorización.</p>
          <p>Queda expresamente prohibida la reproducción total o parcial de los contenidos del sitio web sin el consentimiento expreso y por escrito de AD IA Canarias.</p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-foreground">4. Condiciones de uso</h2>
          <p>El usuario se compromete a utilizar el sitio web, sus servicios y contenidos de conformidad con la ley, el presente aviso legal, las buenas costumbres y el orden público. El usuario se obliga a no utilizar el sitio web o sus servicios con fines o efectos ilícitos, contrarios a lo establecido en el presente aviso legal, lesivos de los derechos e intereses de terceros, o que de cualquier forma puedan dañar, inutilizar, sobrecargar o deteriorar el sitio web o impedir su normal utilización.</p>
          <p>AD IA Canarias se reserva el derecho a denegar o retirar el acceso al sitio web en cualquier momento y sin necesidad de previo aviso a aquellos usuarios que incumplan las presentes condiciones.</p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-foreground">5. Exclusión de responsabilidad</h2>
          <p>AD IA Canarias no se hace responsable de los daños y perjuicios de cualquier naturaleza que pudieran ocasionarse por la falta de disponibilidad, mantenimiento o efectivo funcionamiento del sitio web o de sus servicios y contenidos; así como de la existencia de virus, programas maliciosos o lesivos en los contenidos, de la utilización ilícita, negligente, fraudulenta o contraria al presente aviso legal.</p>
          <p>AD IA Canarias no garantiza la ausencia de errores en el acceso al sitio web, en su contenido, ni que éste se encuentre actualizado, aunque se compromete a realizar los esfuerzos necesarios para evitar, subsanar o actualizar dichos errores.</p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-foreground">6. Enlaces a terceros</h2>
          <p>El sitio web puede contener enlaces a páginas de terceros. AD IA Canarias no asume ninguna responsabilidad por el contenido, informaciones o servicios que pudieran aparecer en dichos sitios, que tendrán exclusivamente carácter informativo y que en ningún caso implican relación alguna entre AD IA Canarias y las personas o entidades titulares de tales contenidos o titulares de los sitios donde se encuentren.</p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-foreground">7. Protección de datos</h2>
          <p>En relación con el tratamiento de datos personales que pudiera realizarse a través del sitio web, le invitamos a consultar nuestra <a href="/privacidad" className="text-gold hover:underline">Política de Privacidad</a>.</p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-foreground">8. Legislación aplicable y jurisdicción</h2>
          <p>Las presentes condiciones se rigen por la legislación española. Para la resolución de cualquier controversia que pudiera surgir en relación con el acceso o uso del sitio web, las partes se someten, con renuncia expresa a cualquier otro fuero que pudiera corresponderles, a la jurisdicción de los Juzgados y Tribunales de Las Palmas de Gran Canaria.</p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-foreground">9. Modificaciones</h2>
          <p>AD IA Canarias se reserva el derecho a realizar las modificaciones que considere oportunas, sin aviso previo, en el contenido del sitio web. Dichas modificaciones podrán realizarse a través de su sitio web por cualquier forma admisible en derecho y serán de obligado cumplimiento durante el tiempo en que se encuentren publicadas en el sitio web y hasta que no sean modificadas válidamente por otras posteriores.</p>
        </section>
      </div>
      <div className="mt-8">
        <a href="/" className="text-gold hover:underline text-sm">← Volver al inicio</a>
      </div>
    </div>
  </div>
);

export default AvisoLegal;
