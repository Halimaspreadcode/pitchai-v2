import { FileUpload } from '@/components/FileUpload'
import { Features } from '@/components/Features'
import { Header } from '@/components/Header'

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-neutral-50 to-neutral-100">
      <Header />
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto space-y-8">
          <div className="text-center space-y-4">
            <h1 className="text-4xl font-bold text-neutral-900">
              Rendez vos <span className="text-orange-600">Pitch Decks sublimes</span> !
            </h1>
            <p className="text-lg text-neutral-600">
              Téléchargez votre présentation et laissez notre IA l'améliorer
            </p>
          </div>
          
          <FileUpload />
          <Features />
        </div>
      </div>
    </main>
  )
}