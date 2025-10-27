import { useState } from 'react'
import { Button } from '@/components/ui/button.jsx'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card.jsx'
import { Badge } from '@/components/ui/badge.jsx'
import { Menu, X, ChevronRight, Bot, Database, Zap, Target, Cog, Users, Mail, Phone, MapPin, Shield, ArrowLeft } from 'lucide-react'
import lumenLogo from './assets/lumen_ai_logo_final.png'
import brandLogo1 from './assets/brand_logo_1.png'
import brandLogo2 from './assets/brand_logo_2.png'
import brandLogo3 from './assets/brand_logo_3.png'
import brandLogo4 from './assets/brand_logo_4.png'
import brandLogo5 from './assets/brand_logo_5.png'
import brandLogo6 from './assets/brand_logo_6.png'
import brandLogo7 from './assets/brand_logo_7.png'
import brandLogo8 from './assets/brand_logo_8.png'
import brandLogo9 from './assets/brand_logo_9.png'
import brandLogo10 from './assets/brand_logo_10.png'
import './App.css'

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [currentPage, setCurrentPage] = useState('home')

  const services = [
    {
      icon: <Bot className="h-8 w-8 text-blue-600" />,
      title: "KI-gesteuerte Prozessautomatisierung",
      description: "Optimieren Sie Ihre Abläufe, reduzieren Sie manuelle Arbeit und steigern Sie die Genauigkeit in allen Abteilungen."
    },
    {
      icon: <Database className="h-8 w-8 text-blue-600" />,
      title: "Intelligente Datenlösungen",
      description: "Verwandeln Sie Rohdaten in verwertbare Erkenntnisse mit automatisierten Datenpipelines und fortschrittlicher Analytik."
    },
    {
      icon: <Zap className="h-8 w-8 text-blue-600" />,
      title: "Generative KI & Content-Automatisierung",
      description: "Nutzen Sie die Kraft der Generativen KI für automatisierte Content-Erstellung und personalisierte Kommunikation."
    },
    {
      icon: <Target className="h-8 w-8 text-blue-600" />,
      title: "KI-Strategie & Readiness Assessment",
      description: "Bewerten Sie die KI-Reife Ihres Unternehmens und entwickeln Sie eine klare, umsetzbare KI-Roadmap."
    },
    {
      icon: <Cog className="h-8 w-8 text-blue-600" />,
      title: "Maßgeschneiderte KI-Tool-Entwicklung",
      description: "Entwickeln Sie individuelle KI-Anwendungen für Ihre einzigartigen Geschäftsherausforderungen."
    },
    {
      icon: <Shield className="h-8 w-8 text-blue-600" />,
      title: "KI-Sicherheit & Compliance",
      description: "Gewährleisten Sie sichere KI-Implementierungen mit umfassenden Governance-Frameworks und Compliance-Standards."
    }
  ]

  const benefits = [
    "Expertise durch fortschrittliche KI-Fähigkeiten",
    "Maßgeschneiderte Lösungen für Ihre spezifischen Bedürfnisse",
    "Messbare ROI-Ergebnisse",
    "Zukunftssichere intelligente Systeme",
    "Partnerschaftlicher Ansatz"
  ]

 // LegalPage Component – ersetzt AGBPage
const LegalPage = () => {
  const [activeTab, setActiveTab] = useState("datenschutz");

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      {/* Navigation */}
      <nav className="bg-white/80 backdrop-blur-md border-b border-gray-200 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-3">
              <img loading="lazy" 
                src={lumenLogo} 
                alt="Lumen AI Logo" 
                className="h-[80px] w-auto max-h-none max-w-none bg-transparent" 
              />
              <span className="text-2xl font-bold text-gray-900">Lumen AI</span>
            </div>

            <div className="flex items-center space-x-4">
              <Button 
                variant="outline" 
                onClick={() => setCurrentPage('home')}
                className="flex items-center space-x-2"
              >
                <ArrowLeft className="h-4 w-4" />
                <span>Zurück zur Startseite</span>
              </Button>
            </div>
          </div>
        </div>
      </nav>

      {/* Tabs */}
      <div className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="flex gap-4 mb-8 justify-center flex-wrap">
            <button
              onClick={() => setActiveTab("datenschutz")}
              className={`px-6 py-3 rounded-xl shadow ${activeTab === "datenschutz" ? "bg-blue-600 text-white" : "bg-white text-gray-800"}`}
            >
              Datenschutz
            </button>
            <button
              onClick={() => setActiveTab("agb")}
              className={`px-6 py-3 rounded-xl shadow ${activeTab === "agb" ? "bg-blue-600 text-white" : "bg-white text-gray-800"}`}
            >
              AGB
            </button>
            <button
              onClick={() => setActiveTab("impressum")}
              className={`px-6 py-3 rounded-xl shadow ${activeTab === "impressum" ? "bg-blue-600 text-white" : "bg-white text-gray-800"}`}
            >
              Impressum
            </button>
          </div>

          {/* Inhalt */}
          <div className="bg-white rounded-2xl shadow-lg p-8 md:p-12">
            
            {/* Datenschutz */}
            {activeTab === "datenschutz" && (
              <div>
                <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">
                  Datenschutzerklärung
                </h1>
                <p className="text-sm text-gray-600 mb-8">Stand: Januar 2025</p>
                <p className="text-gray-700">
                  Datenschutzerklärung

                  Verantwortlich:
                  Andic und Ardeshirzadeh Pudami GbR
                  Wörthstraße 44
                  72764 Reutlingen
                  E-Mail: pudami.resales@gmail.com
                  Website: https://www.lumen-ai.de

                  1. Allgemeine Hinweise
                  Wir nehmen den Schutz Ihrer persönlichen Daten ernst. Personenbezogene Daten werden gemäß DSGVO und BDSG verarbeitet.

                  2. Erhebung und Verarbeitung personenbezogener Daten
                  Wir erheben und verarbeiten personenbezogene Daten (Name, E-Mail, Telefonnummer), wenn Sie uns diese über das Kontaktformular oder per E-Mail zur Verfügung stellen.

                  3. Cookies
                  Unsere Website verwendet Cookies, um die Nutzung zu erleichtern. Sie können Cookies jederzeit in den Browsereinstellungen deaktivieren.

                  4. Server-Logfiles
                  Beim Aufruf der Website werden automatisch Informationen (IP-Adresse, Browsertyp, Datum und Uhrzeit) gespeichert. Diese Daten dienen der Sicherheit und werden nicht mit anderen Datenquellen zusammengeführt.

                  5. Kontaktformular
                  Wenn Sie uns per Kontaktformular Anfragen zukommen lassen, werden Ihre Angaben zwecks Bearbeitung der Anfrage und für Anschlussfragen gespeichert.

                  6. Rechtsgrundlage der Verarbeitung
                  Die Verarbeitung Ihrer Daten erfolgt nach Art. 6 Abs. 1 lit. b DSGVO zur Vertragserfüllung und nach Art. 6 Abs. 1 lit. f DSGVO aufgrund berechtigter Interessen.

                  7. Ihre Rechte
                  Sie haben das Recht auf Auskunft, Berichtigung, Löschung und Einschränkung der Verarbeitung sowie das Recht auf Widerspruch und Datenübertragbarkeit.

                  8. Speicherdauer
                  Wir speichern Ihre Daten nur so lange, wie es für die Bearbeitung Ihrer Anfrage und zur Vertragserfüllung notwendig ist.

                  9. SSL- bzw. TLS-Verschlüsselung
                  Unsere Website nutzt SSL- bzw. TLS-Verschlüsselung, um Ihre Daten zu schützen.

                  10. Ansprechpartner
                  Bei Fragen zum Datenschutz wenden Sie sich bitte an pudami.resales@gmail.com.

                </p>
              </div>
            )}

            {/* AGB */}
            {activeTab === "agb" && (
              <div>
                <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">
                  Allgemeine Geschäftsbedingungen (AGB)
                </h1>
                <p className="text-sm text-gray-600 mb-8">Stand: Januar 2025</p>
                <p className="text-gray-700">
                  AGB der Andic und Ardeshirzadeh Pudami GbR (Lumen-AI)

                  § 1 Geltungsbereich
                  (1) Diese Allgemeinen Geschäftsbedingungen (AGB) gelten für alle Verträge zwischen der Andic und Ardeshirzadeh Pudami GbR (im Folgenden „Lumen-AI“) und ihren Kunden.
                  (2) Unsere Leistungen richten sich ausschließlich an Unternehmer im Sinne des § 14 BGB. Ein Widerrufsrecht nach § 355 BGB besteht daher nicht.

                  § 2 Vertragsgegenstand
                  Lumen-AI bietet Dienstleistungen im Bereich KI-Beratung, Prozessautomatisierung, generative KI-Lösungen, Content-Automatisierung, KI-Strategie & Readiness Assessment, maßgeschneiderte KI-Tool-Entwicklung sowie KI-Sicherheit & Compliance.

                  § 3 Vertragsschluss
                  Der Vertrag kommt zustande, wenn der Kunde ein schriftliches Angebot per E-Mail bestätigt oder eine Beauftragung in Textform erteilt.

                  § 4 Leistungsumfang
                  (1) Der konkrete Leistungsumfang wird individuell mit dem Kunden vereinbart.
                  (2) Anpassungen und Erweiterungen bedürfen einer schriftlichen Vereinbarung.

                  § 5 Vergütung
                  (1) Die Abrechnung erfolgt nach Stunden- oder Tagessätzen bzw. zu einem vereinbarten Festpreis.
                  (2) Alle Preise verstehen sich netto zuzüglich der gesetzlichen Umsatzsteuer.
                  (3) Rechnungen sind innerhalb von 14 Tagen nach Erhalt ohne Abzug fällig.

                  § 6 Mitwirkungspflichten
                  Der Kunde stellt alle notwendigen Informationen und Daten rechtzeitig und vollständig zur Verfügung, die für die Erbringung der vereinbarten Leistungen erforderlich sind.

                  § 7 Haftung
                  (1) Lumen-AI haftet nur für Vorsatz und grobe Fahrlässigkeit. 
                  (2) Für leichte Fahrlässigkeit haften wir nur bei Verletzung wesentlicher Vertragspflichten (Kardinalpflichten).
                  (3) Die Haftung ist auf den vertragstypischen, vorhersehbaren Schaden begrenzt.

                  § 8 Vertraulichkeit
                  Alle im Rahmen der Zusammenarbeit erlangten Informationen werden vertraulich behandelt.

                  § 9 Datenschutz
                  Personenbezogene Daten werden ausschließlich gemäß der Datenschutz-Grundverordnung (DSGVO) verarbeitet. Details siehe Datenschutzerklärung.

                  § 10 Schlussbestimmungen
                  (1) Es gilt das Recht der Bundesrepublik Deutschland.
                  (2) Gerichtsstand für alle Streitigkeiten ist Reutlingen, sofern der Kunde Kaufmann ist.
                  (3) Änderungen und Ergänzungen des Vertrags bedürfen der Schriftform.

                </p>
              </div>
            )}

            {/* Impressum */}
{activeTab === "impressum" && (
  <div>
    <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">
      Impressum
    </h1>
    <p className="text-sm text-gray-600 mb-8">Stand: Januar 2025</p>

    <div className="text-gray-700 space-y-4">
      <p><strong>Angaben gemäß § 5 TMG:</strong></p>
      <p>
        Andic und Ardeshirzadeh Pudami GbR<br />
        Wörthstraße 44<br />
        72764 Reutlingen<br />
        Deutschland
      </p>

      <p><strong>Vertreten durch:</strong><br />
        Herr Andic und Herr Ardeshirzadeh Pudami
      </p>

      <p><strong>Kontakt:</strong><br />
        E-Mail:{" "}
        <a href="mailto:pudami.resales@gmail.com" className="text-blue-600 underline">
          pudami.resales@gmail.com
        </a><br />
        Website:{" "}
        <a href="https://www.lumen-ai.de" className="text-blue-600 underline">
          www.lumen-ai.de
        </a>
      </p>

      <p><strong>Umsatzsteuer-ID:</strong><br />
        (Falls vorhanden, hier eintragen – ansonsten diesen Abschnitt entfernen oder durch „nicht vorhanden“ ersetzen.)
      </p>

      <p><strong>Verantwortlich für den Inhalt nach § 55 Abs. 2 RStV:</strong><br />
        Andic und Ardeshirzadeh Pudami GbR<br />
        Wörthstraße 44<br />
        72764 Reutlingen
      </p>

      <p>
        <em>
          Haftungsausschluss: Trotz sorgfältiger inhaltlicher Kontrolle übernehmen wir keine Haftung für die Inhalte externer Links. 
          Für den Inhalt der verlinkten Seiten sind ausschließlich deren Betreiber verantwortlich.
        </em>
      </p>
    </div>
  </div>
)}


            {/* Kontaktblock – immer sichtbar */}
            <div className="border-t border-gray-200 pt-8 mt-8">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Kontakt</h3>
              <p className="text-gray-700">
                Lumen AI<br />
                E-Mail: kontakt@lumen-ai.de<br />
                Telefon: +49 152 08572973
              </p>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};




// Main ContactPage Component
const ContactPage = () => (
  <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
    {/* Navigation wie gewohnt */}
    <nav className="bg-white/80 backdrop-blur-md border-b border-gray-200 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center space-x-3">
            <img loading="lazy" src={lumenLogo} alt="Lumen AI Logo" className="h-[80px] w-auto bg-transparent" />
            <span className="text-2xl font-bold text-gray-900">Lumen AI</span>
          </div>
          <div className="flex items-center space-x-4">
            <Button
              variant="outline"
              onClick={() => setCurrentPage('home')}
              className="flex items-center space-x-2"
            >
              <ArrowLeft className="h-4 w-4" />
              <span>Zurück zur Startseite</span>
            </Button>
          </div>
        </div>
      </div>
    </nav>

    {/* Inhalt */}
    <div className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto bg-white rounded-2xl shadow-lg p-8 md:p-12">
        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">
          Beratung anfragen
        </h1>
        <p className="text-gray-600 mb-8">
          Wir melden uns in der Regel innerhalb von 24 Stunden.
        </p>

        {/* Netlify-Form mit Honeypot + Redirect */}
        <form
          name="beratung"
          method="POST"
          data-netlify="true"
          data-netlify-honeypot="bot-field"
          action="/thank-you"
          acceptCharset="UTF-8"
          className="space-y-6"
        >
          <input type="hidden" name="form-name" value="beratung" />
          {/* Honeypot */}
          <p className="hidden" aria-hidden="true">
            <label> Lassen Sie dieses Feld leer:
              <input name="bot-field" />
            </label>
          </p>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Name
            </label>
            <input
              name="name"
              required
              className="w-full rounded-xl border border-gray-300 px-4 py-3 outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              E-Mail
            </label>
            <input
              type="email"
              name="email"
              required
              className="w-full rounded-xl border border-gray-300 px-4 py-3 outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Nachricht
            </label>
            <textarea
              name="message"
              rows="5"
              required
              className="w-full rounded-xl border border-gray-300 px-4 py-3 outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* DSGVO-Checkbox */}
          <div className="flex items-start gap-3">
            <input
              id="privacy"
              type="checkbox"
              name="privacy"
              required
              className="mt-1 h-4 w-4 rounded border-gray-300"
            />
            <label htmlFor="privacy" className="text-sm text-gray-700">
              Ich stimme der Verarbeitung meiner Daten gemäß der{" "}
              <button
                type="button"
                className="text-blue-600 hover:underline"
                onClick={() => setCurrentPage('legal')}
                title="Datenschutzerklärung anzeigen"
              >
                Datenschutzerklärung
              </button>{" "}
              zu.
            </label>
          </div>

          <Button type="submit" className="bg-blue-600 hover:bg-blue-700">
            Nachricht senden
          </Button>
        </form>

        {/* Alternativen */}
        <div className="mt-10 border-t pt-6">
          <p className="text-gray-700">
            Oder direkt per E-Mail:{" "}
            <a
              href="mailto:kontakt@lumen-ai.de"
              className="text-blue-600 hover:underline"
            >
              kontakt@lumen-ai.de
            </a>
            <br />
            Telefon:{" "}
            <a
              href="tel:+4915208572973"
              className="text-blue-600 hover:underline"
            >
              +49 152 08572973
            </a>
          </p>
        </div>
      </div>
    </div>
  </div>
);



  // Main Homepage Component
  const HomePage = () => (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      {/* Navigation */}
      <nav className="bg-white/80 backdrop-blur-md border-b border-gray-200 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-3">
              <img loading="lazy" src={lumenLogo} alt="Lumen AI Logo" className="h-22 w-auto bg-transparent" />
              <span className="text-2xl font-bold text-gray-900">Lumen AI</span>
            </div>
            
            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              <a href="#home" className="text-gray-700 hover:text-blue-600 transition-colors">Startseite</a>
              <a href="#services" className="text-gray-700 hover:text-blue-600 transition-colors">Leistungen</a>
              <a href="#about" className="text-gray-700 hover:text-blue-600 transition-colors">Über uns</a>
              <a href="#contact" className="text-gray-700 hover:text-blue-600 transition-colors">Kontakt</a>
              <button onClick={() => setCurrentPage("legal")} className="text-gray-700 hover:text-blue-600 transition-colors">Rechtliches</button>
              <Button className="bg-blue-600 hover:bg-blue-700" onClick={() => setCurrentPage('contact')}>Beratung anfragen</Button>
            </div>


            {/* Mobile menu button */}
            <div className="md:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-gray-700 hover:text-blue-600"
              >
                {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </button>
            </div>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <div className="md:hidden py-4 border-t border-gray-200">
              <div className="flex flex-col space-y-4">
                <a href="#home" className="text-gray-700 hover:text-blue-600 transition-colors">Startseite</a>
                <a href="#services" className="text-gray-700 hover:text-blue-600 transition-colors">Leistungen</a>
                <a href="#about" className="text-gray-700 hover:text-blue-600 transition-colors">Über uns</a>
                <a href="#contact" className="text-gray-700 hover:text-blue-600 transition-colors">Kontakt</a>
                <button onClick={() => setCurrentPage("legal")} className="text-gray-700 hover:text-blue-600 transition-colors">Rechtliches</button>
                <Button className="bg-blue-600 hover:bg-blue-700 w-fit">Beratung anfragen</Button>
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <div className="mb-8">
          </div>
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
            Intelligente Automatisierung für ein{' '}
            <span className="text-blue-600">smarteres Unternehmen</span>
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Lumen AI ist Ihr strategischer Partner für die Navigation durch die Komplexitäten der Künstlichen Intelligenz. 
            Wir erschließen transformative Kraft durch maßgeschneiderte Automatisierungs- und Optimierungslösungen.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-blue-600 hover:bg-blue-700" onClick={() => setCurrentPage('contact')}>
           Kostenlose Beratung <ChevronRight className="ml-2 h-4 w-4" />
            </Button>
            <a href="#services" className="scroll-smooth">
           <Button size="lg" variant="outline">
                Mehr erfahren
            </Button>
           </a>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Unsere Kernleistungen
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Wir bieten umfassende KI-Beratungsdienstleistungen, die darauf ausgelegt sind, 
              Ihr Unternehmen voranzubringen und messbare Ergebnisse zu liefern.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow duration-300">
                <CardHeader>
                  <div className="mb-4">{service.icon}</div>
                  <CardTitle className="text-xl">{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-gray-600">
                    {service.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Brand Carousel Section */}
      <section className="py-12 px-4 sm:px-6 lg:px-8 bg-gray-100">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
            Ausgewählte Marken, mit denen wir im Austausch stehen
          </h2>
          <div className="overflow-hidden relative">
            <div className="flex animate-marquee whitespace-nowrap">
              <img loading="lazy" src={brandLogo1} alt="Brand Logo 1" className="h-16 mx-8" />
              <img loading="lazy" src={brandLogo2} alt="Brand Logo 2" className="h-16 mx-8" />
              <img loading="lazy" src={brandLogo3} alt="Brand Logo 3" className="h-16 mx-8" />
              <img loading="lazy" src={brandLogo4} alt="Brand Logo 4" className="h-16 mx-8" />
              <img loading="lazy" src={brandLogo5} alt="Brand Logo 5" className="h-16 mx-8" />
              <img loading="lazy" src={brandLogo6} alt="Brand Logo 6" className="h-16 mx-8" />
              <img loading="lazy" src={brandLogo7} alt="Brand Logo 7" className="h-16 mx-8" />
              <img loading="lazy" src={brandLogo8} alt="Brand Logo 8" className="h-16 mx-8" />
              <img loading="lazy" src={brandLogo9} alt="Brand Logo 9" className="h-16 mx-8" />
              <img loading="lazy" src={brandLogo10} alt="Brand Logo 10" className="h-16 mx-8" />
              {/* Duplicate logos for seamless loop */}
              <img loading="lazy" src={brandLogo1} alt="Brand Logo 1" className="h-16 mx-8" />
              <img loading="lazy" src={brandLogo2} alt="Brand Logo 2" className="h-16 mx-8" />
              <img loading="lazy" src={brandLogo3} alt="Brand Logo 3" className="h-16 mx-8" />
              <img loading="lazy" src={brandLogo4} alt="Brand Logo 4" className="h-16 mx-8" />
              <img loading="lazy" src={brandLogo5} alt="Brand Logo 5" className="h-16 mx-8" />
              <img loading="lazy" src={brandLogo6} alt="Brand Logo 6" className="h-16 mx-8" />
              <img loading="lazy" src={brandLogo7} alt="Brand Logo 7" className="h-16 mx-8" />
              <img loading="lazy" src={brandLogo8} alt="Brand Logo 8" className="h-16 mx-8" />
              <img loading="lazy" src={brandLogo9} alt="Brand Logo 9" className="h-16 mx-8" />
              <img loading="lazy" src={brandLogo10} alt="Brand Logo 10" className="h-16 mx-8" />
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-blue-50 to-indigo-50">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Warum Lumen AI wählen?
              </h2>
              <p className="text-lg text-gray-600 mb-8">
                In der heutigen schnelllebigen Geschäftswelt bedeutet Wettbewerbsfähigkeit, Innovation zu umarmen. 
                Lumen AI ist Ihr strategischer Partner bei der Navigation durch die Komplexitäten der Künstlichen Intelligenz.
              </p>
              <div className="space-y-4">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                    <span className="text-gray-700">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Unsere Mission</h3>
              <p className="text-gray-600 mb-6">
                Wir beleuchten den Weg zu beispielloser Effizienz, fördern Innovation und treiben messbares Wachstum voran, 
                indem wir fortschrittliche KI nahtlos in Ihre Kernoperationen integrieren.
              </p>
              <div className="flex items-center space-x-4">
                <Users className="h-8 w-8 text-blue-600" />
                <div>
                  <p className="font-semibold text-gray-900">Partnerschaftlicher Ansatz</p>
                  <p className="text-sm text-gray-600">Wir arbeiten kollaborativ mit Ihrem Team</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Bereit, Ihr Unternehmen zu transformieren?
            </h2>
            <p className="text-xl text-gray-600">
              Kontaktieren Sie Lumen AI noch heute für eine Beratung.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
  {/* E-Mail */}
  <Card className="text-center hover:shadow-lg transition-shadow">
    <CardHeader>
      <Mail className="h-8 w-8 text-blue-600 mx-auto mb-4" />
      <CardTitle>E-Mail</CardTitle>
    </CardHeader>
    <CardContent>
      <a
        href="mailto:kontakt@lumen-ai.de"
        className="text-gray-600 hover:underline break-all"
      >
        kontakt@lumen-ai.de
      </a>
    </CardContent>
  </Card>

  {/* Telefon */}
  <Card className="text-center hover:shadow-lg transition-shadow">
    <CardHeader>
      <Phone className="h-8 w-8 text-blue-600 mx-auto mb-4" />
      <CardTitle>Telefon</CardTitle>
    </CardHeader>
    <CardContent>
      <a
        href="tel:+4915208572973"
        className="text-gray-600 hover:underline"
      >
        +49 152 08572973
      </a>
    </CardContent>
  </Card>

  {/* Standort */}
  <Card className="text-center hover:shadow-lg transition-shadow">
    <CardHeader>
      <MapPin className="h-8 w-8 text-blue-600 mx-auto mb-4" />
      <CardTitle>Standort</CardTitle>
    </CardHeader>
    <CardContent>
      <p className="text-gray-600">Deutschland</p>
    </CardContent>
  </Card>
</div>


          <div className="text-center mt-12">
            <Button size="lg" className="bg-blue-600 hover:bg-blue-700" onClick={() => setCurrentPage('contact')}>
            Kostenlose Beratung vereinbaren
          </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center space-x-3 mb-4 md:mb-0">
              <img loading="lazy" src={lumenLogo} alt="Lumen AI Logo" className="h-20 w-auto bg-transparent" />
              <span className="text-xl font-bold">Lumen AI</span>
            </div>
            <div className="flex flex-col md:flex-row items-center space-y-2 md:space-y-0 md:space-x-6">
              <button 
                 onClick={() => setCurrentPage('legal')}
                 className="text-gray-400 hover:text-white transition-colors text-sm"
                  >
                     Rechtliches
                  </button>

              <p className="text-gray-400 text-center md:text-right text-sm">
                © 2025 Lumen AI. Alle Rechte vorbehalten.
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )

  // Main App Return
  return (
    <>
      {currentPage === 'home' && <HomePage />}
      {currentPage === 'legal' && <LegalPage />}
      {currentPage === 'contact' && <ContactPage />}

    </>
  )
}


export default App

