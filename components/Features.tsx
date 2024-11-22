import { Sparkles, Layout, BarChart2, Zap } from 'lucide-react'

const features = [
  {
    icon: Sparkles,
    title: 'Analyse de contenu',
    description: 'Notre IA analyse en profondeur le contenu de votre présentation'
  },
  {
    icon: Layout,
    title: 'Amélioration du design',
    description: 'Suggestions de mise en page et de design professionnel'
  },
  {
    icon: BarChart2,
    title: 'Optimisation de la structure',
    description: 'Recommandations pour une structure plus impactante'
  },
  {
    icon: Zap,
    title: "Score d'impact",
    description: 'Évaluation de l'impact potentiel sur votre audience'
  }
]

export function Features() {
  return (
    <div className="grid md:grid-cols-2 gap-6 mt-12">
      {features.map((feature, index) => (
        <div
          key={index}
          className="p-6 rounded-lg bg-white shadow-sm border border-neutral-200"
        >
          <feature.icon className="h-8 w-8 text-orange-500 mb-4" />
          <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
          <p className="text-neutral-600">{feature.description}</p>
        </div>
      ))}
    </div>
  )
}