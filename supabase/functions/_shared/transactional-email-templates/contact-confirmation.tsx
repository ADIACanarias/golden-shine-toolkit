/// <reference types="npm:@types/react@18.3.1" />
import * as React from 'npm:react@18.3.1'
import {
  Body, Container, Head, Heading, Html, Preview, Text, Hr, Section,
} from 'npm:@react-email/components@0.0.22'
import type { TemplateEntry } from './registry.ts'

const SITE_NAME = "AD IA Canarias"

interface ContactConfirmationProps {
  name?: string
  service?: string
}

const ContactConfirmationEmail = ({ name, service }: ContactConfirmationProps) => (
  <Html lang="es" dir="ltr">
    <Head />
    <Preview>Hemos recibido tu solicitud — {SITE_NAME}</Preview>
    <Body style={main}>
      <Container style={container}>
        <Section style={headerSection}>
          <Heading style={logo}>{SITE_NAME}</Heading>
        </Section>
        <Hr style={hr} />
        <Heading style={h1}>
          {name ? `¡Gracias, ${name}!` : '¡Gracias por contactarnos!'}
        </Heading>
        <Text style={text}>
          Hemos recibido tu solicitud de diagnóstico gratuito
          {service ? ` sobre <strong>${service}</strong>` : ''} y nuestro equipo ya está
          trabajando en ella.
        </Text>
        <Text style={text}>
          En las próximas 24-48 horas nos pondremos en contacto contigo para analizar
          tu caso y proponerte un plan de acción personalizado, sin compromiso.
        </Text>
        <Hr style={hr} />
        <Text style={footer}>
          Un saludo,<br />El equipo de {SITE_NAME}
        </Text>
        <Text style={footerSmall}>
          📞 +34 660 833 897 · 📧 info@adiacanarias.es
        </Text>
      </Container>
    </Body>
  </Html>
)

export const template = {
  component: ContactConfirmationEmail,
  subject: 'Hemos recibido tu solicitud — AD IA Canarias',
  displayName: 'Confirmación de contacto',
  previewData: { name: 'María', service: 'Agentes de IA' },
} satisfies TemplateEntry

// Brand: navy=#1a2640 (hsl 215 55% 12%), gold=#e8a020 (hsl 37 93% 54%)
const main = { backgroundColor: '#ffffff', fontFamily: "'Inter', Arial, sans-serif" }
const container = { padding: '30px 25px', maxWidth: '560px', margin: '0 auto' }
const headerSection = { padding: '10px 0' }
const logo = { fontSize: '18px', fontWeight: '700' as const, color: '#1a2640', margin: '0' }
const hr = { borderColor: '#e5e7eb', margin: '20px 0' }
const h1 = { fontSize: '22px', fontWeight: '700' as const, color: '#1a2640', margin: '0 0 16px' }
const text = { fontSize: '15px', color: '#55575d', lineHeight: '1.6', margin: '0 0 16px' }
const footer = { fontSize: '14px', color: '#1a2640', margin: '20px 0 8px', fontWeight: '500' as const }
const footerSmall = { fontSize: '13px', color: '#888888', margin: '0' }
