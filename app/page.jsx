"use client";

import Link from 'next/link'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'
import Testimonials from '@/components/Testimonials'
import FAQ from "@/components/FAQ";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white via-gray-50 to-gray-100">
      <main className="max-w-7xl mx-auto px-6 py-12 grid lg:grid-cols-2 gap-10 items-center">
        <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.6 }}>
          <p className="text-sm text-emerald-600 font-medium">Medically Led • Personalised Plans</p>
          <h2 className="text-4xl md:text-5xl font-extrabold mt-3">Rediscover Your Confidence</h2>
          <p className="text-gray-600 mt-4 max-w-xl">Personalised hair transplant and growth plans — easy sign-up, tailored stages, and a dedicated hair coach to guide your journey.</p>

          <div className="mt-6 flex items-center gap-4">
            <Link href="/register"><Button className="shadow-lg">Book Your Free Assessment</Button></Link>
            <a href="#how" className="text-sm font-medium text-indigo-600 hover:underline">How it works</a>
          </div>

          <div className="mt-6 flex gap-3 text-sm">
            <div className="bg-white p-3 rounded-lg shadow-sm">97% patient satisfaction</div>
            <div className="bg-white p-3 rounded-lg shadow-sm">Average recovery 7–10 days</div>
          </div>
        </motion.div>

        <motion.div initial={{ opacity: 0, scale: 0.98 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.6 }} className="relative">
          <div className="rounded-2xl overflow-hidden shadow-2xl bg-white">
            <div className="aspect-[4/3] relative">
              <Image src="/images/hero-hair.svg" alt="hero" fill style={{ objectFit: 'cover' }} />
            </div>
          </div>
        </motion.div>
      </main>
      <section id="how" className="max-w-7xl mx-auto px-6 py-12">
        <h3 className="text-2xl font-bold">How it works</h3>
        <p className="text-gray-600 mt-2">Simple 3-step flow: Register → Select stage → Choose plan → Meet your coach.</p>

        <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            { title: 'Register', desc: 'Share basic details and hair history.' },
            { title: 'Choose stage', desc: 'Select the visual stage that matches you.' },
            { title: 'Get personalised plan', desc: 'Pick a plan and meet your hair coach.' }
          ].map((s) => (
            <div key={s.title} className="p-6 bg-white rounded-2xl shadow">
              <h4 className="font-semibold">{s.title}</h4>
              <p className="text-gray-600 mt-2">{s.desc}</p>
            </div>
          ))}
        </div>
      </section>
      <Testimonials />
      <FAQ />
    </div>
  )
}
