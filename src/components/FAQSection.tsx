import { useState } from "react"
import { ChevronDown } from "lucide-react"
import { motion } from "framer-motion"

export function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  const faqs = [
    {
      question: "Какой диаметр шнура выбрать для макраме?",
      answer:
        "Для настенных панно и крупных изделий рекомендуем шнур 3-5 мм. Для мелких деталей и узоров подойдёт 1-2 мм. Если сомневаетесь — напишите нам, расскажите что хотите сплести, и мы подберём оптимальный вариант.",
    },
    {
      question: "Сколько метров шнура нужно на изделие?",
      answer:
        "Это зависит от типа изделия. На небольшой браслет хватит 2-3 метров тонкого шнура. На настенное панно 50×50 см потребуется примерно 50-80 метров. Кашпо среднего размера — около 30-40 метров шнура 3 мм.",
    },
    {
      question: "Как быстро доставят мой заказ?",
      answer:
        "Отправляем заказы в течение 1-2 рабочих дней после оплаты. Срок доставки зависит от региона: Москва и СПб — 2-3 дня, другие регионы — 3-7 дней. Работаем с СДЭК и Почтой России.",
    },
    {
      question: "Можно ли заказать оптом?",
      answer:
        "Да, принимаем оптовые заказы! При заказе от 500 метров действует скидка. Для постоянных оптовых покупателей — индивидуальные условия. Напишите нам для расчёта стоимости.",
    },
    {
      question: "Шнуры подходят для детских игрушек?",
      answer:
        "Да, наши шнуры гипоаллергенные и безопасны для создания детских игрушек. Краситель устойчив к стирке и не вызывает аллергии. Рекомендуем шнур диаметром 2-3 мм для вязаных кукол и игрушек.",
    },
    {
      question: "Можно ли вернуть товар?",
      answer:
        "Принимаем возврат товара надлежащего качества в течение 14 дней с момента получения при условии сохранения упаковки. Если получили товар с браком — заменим или вернём деньги без вопросов.",
    },
  ]

  return (
    <section className="py-24 px-6 bg-background">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="font-serif text-4xl md:text-5xl font-bold mb-4"
          >
            Частые вопросы
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg text-muted-foreground"
          >
            Всё, что нужно знать перед покупкой атласных шнуров.
          </motion.p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              className="border border-border rounded-xl overflow-hidden bg-secondary"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full px-6 py-5 flex items-center justify-between text-left hover:bg-background/50 transition-colors"
              >
                <span className="font-semibold text-lg pr-8">{faq.question}</span>
                <ChevronDown
                  className={`w-5 h-5 flex-shrink-0 transition-transform ${openIndex === index ? "rotate-180" : ""}`}
                />
              </button>
              {openIndex === index && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.3 }}
                  className="px-6 pb-5 text-muted-foreground leading-relaxed"
                >
                  {faq.answer}
                </motion.div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}