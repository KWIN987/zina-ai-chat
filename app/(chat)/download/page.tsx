import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { Download, Github, Package, Box } from 'lucide-react';

export const metadata = {
  title: 'Télécharger Zina AI',
  description: 'Installation de Zina AI - Assistant tahitien local et gratuit',
};

export default function DownloadPage() {
  const installationOptions = [
    {
      title: 'Docker (Recommandé)',
      description: 'Installation rapide via Docker. Parfait pour commencer immédiatement.',
      icon: Box,
      steps: [
        'docker pull zina2026-03-1.0.1:latest',
        'docker run -d -p 3000:3000 zina2026-03-1.0.1:latest',
        'Accédez à http://localhost:3000',
      ],
      link: '#docker',
    },
    {
      title: 'Linux / macOS',
      description: 'Installation native sur votre système d\'exploitation.',
      icon: Package,
      steps: [
        'wget https://github.com/tutehau/zina-ai/releases/latest/download/zina-ai-linux.tar.gz',
        'tar xzf zina-ai-linux.tar.gz',
        './zina-ai start',
      ],
      link: '#linux',
    },
    {
      title: 'Windows',
      description: 'Installer Zina AI sur Windows.',
      icon: Package,
      steps: [
        'Télécharger zina-ai-windows.exe',
        'Double-cliquer pour lancer l\'installation',
        'Lancer Zina AI depuis le menu Démarrer',
      ],
      link: '#windows',
    },
    {
      title: 'Source',
      description: 'Compiler depuis les sources. Pour les développeurs.',
      icon: Github,
      steps: [
        'git clone https://github.com/tutehau/zina-ai.git',
        'cd zina-ai && pnpm install',
        'pnpm dev',
      ],
      link: 'https://github.com/tutehau/zina-ai',
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-950 dark:to-slate-900">
      {/* Header */}
      <header className="border-b bg-white dark:bg-slate-900 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <Link href="/" className="text-2xl font-bold text-blue-600 dark:text-blue-400">
            Zina AI
          </Link>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Hero Section */}
        <section className="text-center mb-16">
          <h1 className="text-4xl sm:text-5xl font-bold mb-4 text-slate-900 dark:text-white">
            Installer Zina AI
          </h1>
          <p className="text-lg text-slate-600 dark:text-slate-300 mb-8 max-w-2xl mx-auto">
            Assistant IA polynésien libre et gratuit créé par Tutehau Adams.
            <br />
            Tourne sur <code className="bg-slate-200 dark:bg-slate-800 px-2 py-1 rounded">
              zina2026-03-1.0.1:latest (llama3.2)
            </code>
          </p>
        </section>

        {/* Installation Options Grid */}
        <section className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          {installationOptions.map((option) => {
            const IconComponent = option.icon;
            const isExternal = option.link.startsWith('http');

            return (
              <div
                key={option.title}
                className="bg-white dark:bg-slate-800 rounded-lg border border-slate-200 dark:border-slate-700 p-6 hover:shadow-lg transition-shadow"
              >
                <div className="flex items-start gap-4 mb-4">
                  <div className="p-3 bg-blue-100 dark:bg-blue-900 rounded-lg">
                    <IconComponent className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-slate-900 dark:text-white">
                      {option.title}
                    </h3>
                    <p className="text-sm text-slate-600 dark:text-slate-400">
                      {option.description}
                    </p>
                  </div>
                </div>

                <div className="bg-slate-50 dark:bg-slate-900 rounded p-4 mb-4 font-mono text-sm">
                  {option.steps.map((step, idx) => (
                    <div key={idx} className="text-slate-700 dark:text-slate-300 mb-2">
                      {step}
                    </div>
                  ))}
                </div>

                <Button asChild className="w-full">
                  {isExternal ? (
                    <a href={option.link} target="_blank" rel="noopener noreferrer">
                      <Download className="w-4 h-4 mr-2" />
                      En savoir plus
                    </a>
                  ) : (
                    <a href={option.link}>En savoir plus</a>
                  )}
                </Button>
              </div>
            );
          })}
        </section>

        {/* Features Section */}
        <section className="bg-white dark:bg-slate-800 rounded-lg p-8 mb-12">
          <h2 className="text-2xl font-bold mb-6 text-slate-900 dark:text-white">
            Caractéristiques
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: '🎯 Local',
                description: 'Tourne entièrement chez vous. Vos données restent privées.',
              },
              {
                title: '💰 Gratuit',
                description: 'Libre et gratuit. Créé par la communauté tahitienne.',
              },
              {
                title: '⚡ Rapide',
                description: 'Basé sur llama3.2. Réponses ultra rapides.',
              },
              {
                title: '🔧 Personnalisable',
                description: 'Modifiez le LLM, les prompts, et plus encore.',
              },
              {
                title: '📱 Web & Desktop',
                description: 'Accédez depuis n\'importe quel appareil.',
              },
              {
                title: '🌍 Polynésien',
                description: 'Crée par Tutehau Adams pour la communauté.',
              },
            ].map((feature) => (
              <div key={feature.title} className="border-l-4 border-blue-500 pl-4">
                <h3 className="font-semibold text-slate-900 dark:text-white mb-2">
                  {feature.title}
                </h3>
                <p className="text-sm text-slate-600 dark:text-slate-400">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Support Section */}
        <section className="text-center">
          <h2 className="text-2xl font-bold mb-4 text-slate-900 dark:text-white">
            Besoin d&apos;aide?
          </h2>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild variant="outline">
              <a href="https://github.com/tutehau/zina-ai" target="_blank" rel="noopener noreferrer">
                <Github className="w-4 h-4 mr-2" />
                GitHub
              </a>
            </Button>
            <Button asChild>
              <a href="https://github.com/tutehau/zina-ai/issues" target="_blank" rel="noopener noreferrer">
                Signaler un problème
              </a>
            </Button>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t bg-white dark:bg-slate-900 mt-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 text-center text-sm text-slate-600 dark:text-slate-400">
          <p>
            Créé avec ❤️ par{' '}
            <a href="https://tutehau.dev" className="text-blue-600 dark:text-blue-400 hover:underline">
              Tutehau Adams
            </a>
          </p>
          <p className="mt-2">© 2026 Zina AI. Tous droits réservés.</p>
        </div>
      </footer>
    </div>
  );
}
