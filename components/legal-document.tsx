'use client'

import Header from '@/components/header'
import Footer from '@/components/footer'
import type { LegalDoc } from '@/lib/legal-content'

/** Convierte URLs sueltas del texto legal en enlaces clicables. */
function withLinks(text: string) {
  const parts = text.split(/(https?:\/\/[^\s,)]+)/g)
  return parts.map((part, index) =>
    /^https?:\/\//.test(part) ? (
      <a
        key={index}
        href={part}
        target="_blank"
        rel="noopener noreferrer"
        className="text-yellow-400 underline break-words hover:text-yellow-300 transition-colors"
      >
        {part}
      </a>
    ) : (
      <span key={index}>{part}</span>
    )
  )
}

export default function LegalDocument({ doc }: { doc: LegalDoc }) {
  return (
    <div className="min-h-screen bg-black">
      <Header />

      <section className="py-16 bg-black border-b border-gray-800">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-yellow-400 mb-4">{doc.title}</h1>
          <p className="text-gray-400 text-sm">{doc.updated}</p>
          {doc.prevalenceNote && (
            <p className="text-gray-500 text-xs italic max-w-2xl mx-auto mt-4">
              {doc.prevalenceNote}
            </p>
          )}
        </div>
      </section>

      <section className="py-16 bg-gray-900">
        <div className="container mx-auto px-4">
          <article className="max-w-3xl mx-auto space-y-10">
            {doc.sections.map((section, index) => (
              <div key={section.title ?? `section-${index}`} className="space-y-4">
                {section.title && (
                  <h2 className="text-2xl font-bold text-white border-l-4 border-yellow-400 pl-4">
                    {section.title}
                  </h2>
                )}

                {section.paragraphs?.map((paragraph, i) => (
                  <p key={i} className="text-gray-300 leading-relaxed">
                    {withLinks(paragraph)}
                  </p>
                ))}

                {section.list && (
                  <ul className="list-disc list-outside pl-6 space-y-2 text-gray-300">
                    {section.list.map((item, i) => (
                      <li key={i} className="leading-relaxed">
                        {withLinks(item)}
                      </li>
                    ))}
                  </ul>
                )}

                {section.table && (
                  <div className="overflow-x-auto rounded-lg border border-gray-700">
                    <table className="w-full text-left text-sm">
                      <thead className="bg-gray-800">
                        <tr>
                          {section.table.headers.map((header) => (
                            <th key={header} className="px-4 py-3 font-semibold text-yellow-400">
                              {header}
                            </th>
                          ))}
                        </tr>
                      </thead>
                      <tbody>
                        {section.table.rows.map((row, rowIndex) => (
                          <tr key={rowIndex} className="border-t border-gray-700 align-top">
                            {row.map((cell, cellIndex) => (
                              <td key={cellIndex} className="px-4 py-3 text-gray-300">
                                {withLinks(cell)}
                              </td>
                            ))}
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                )}
              </div>
            ))}
          </article>
        </div>
      </section>

      <Footer />
    </div>
  )
}
