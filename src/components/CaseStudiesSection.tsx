import { motion } from "framer-motion"

export function CaseStudiesSection() {
  const caseStudies = [
    {
      client: "Макраме и панно",
      project: "Настенное панно в стиле бохо",
      metric: "Шнур 3 мм, цвет «Молоко»",
      description: "Мягкий атласный шнур идеально подходит для создания крупных настенных панно — легко завязывается в узлы и держит форму.",
      image: "/placeholder.svg?height=400&width=600",
    },
    {
      client: "Украшения и браслеты",
      project: "Браслеты с шармами",
      metric: "Шнур 1 мм, 20+ цветов",
      description: "Тонкий атласный шнур с шелковистой поверхностью — идеален для плетения браслетов, колье и украшений ручной работы.",
      image: "/placeholder.svg?height=400&width=600",
    },
    {
      client: "Интерьерный декор",
      project: "Корзины и подвесные кашпо",
      metric: "Шнур 5 мм, плотное плетение",
      description: "Толстый шнур для плетения объёмных изделий — корзин, кашпо, органайзеров. Прочный и эластичный.",
      image: "/placeholder.svg?height=400&width=600",
    },
    {
      client: "Игрушки и куклы",
      project: "Вязаные куклы-тильды",
      metric: "Шнур 2 мм, яркие цвета",
      description: "Яркий и безопасный атласный шнур для создания игрушек, кукольных волос и аксессуаров — гипоаллергенный материал.",
      image: "/placeholder.svg?height=400&width=600",
    },
  ]

  return (
    <section className="py-24 px-6 bg-background">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="font-serif text-4xl md:text-5xl font-bold mb-4"
          >
            Что можно сплести
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg text-muted-foreground max-w-2xl mx-auto"
          >
            Примеры изделий, которые мастера создают с нашими атласными шнурами.
          </motion.p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {caseStudies.map((study, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group bg-secondary rounded-2xl overflow-hidden border border-border hover:border-primary/50 transition-all duration-300"
            >
              <div className="aspect-[3/2] overflow-hidden">
                <img
                  src={study.image || "/placeholder.svg"}
                  alt={study.project}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-8">
                <div className="text-sm font-semibold text-primary mb-2">{study.client}</div>
                <h3 className="font-serif text-2xl font-bold mb-3">{study.project}</h3>
                <div className="text-3xl font-bold text-primary mb-4">{study.metric}</div>
                <p className="text-muted-foreground leading-relaxed">{study.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}