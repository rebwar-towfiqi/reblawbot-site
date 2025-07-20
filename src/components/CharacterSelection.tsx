'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { useRouter } from 'next/router'
import { useState } from 'react'

const characters = {
  plaintiff: [
    {
      id: 'char1',
      name: 'وکیل عدالت',
      image: '/images/characters/plaintiff.png',
    },
  ],
  defender: [
    {
      id: 'char2',
      name: 'مدافع قانون',
      image: '/images/characters/defender.png',
    },
  ],
  judge: [
    {
      id: 'char3',
      name: 'قاضی هوشمند',
      image: '/images/characters/judge.png',
    },
  ],
}

export default function CharacterSelection() {
  const router = useRouter()
  const { role, telegram_id, name } = router.query

  const [selectedCharacter, setSelectedCharacter] = useState<string | null>(null)

  const handleNext = () => {
    if (!selectedCharacter || !role || !telegram_id || !name) {
      alert('لطفاً ابتدا یک شخصیت انتخاب کرده و وارد بازی شده باشید.')
      return
    }

    router.push({
      pathname: '/game/case-selection',
      query: {
        role,
        telegram_id,
        name,
        character_id: selectedCharacter,
      },
    })
  }

  const availableCharacters = characters[role as keyof typeof characters] || []

  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-4 bg-background text-center">
      <motion.h1
        className="text-2xl md:text-4xl font-bold mb-10"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        شخصیت خود را انتخاب کنید
      </motion.h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
        {availableCharacters.map((char) => (
          <motion.div
            key={char.id}
            className={`border-4 rounded-xl p-4 cursor-pointer transition-all ${
              selectedCharacter === char.id ? 'border-blue-500 scale-105' : 'border-transparent'
            }`}
            whileHover={{ scale: 1.05 }}
            onClick={() => setSelectedCharacter(char.id)}
          >
            <Image
              src={char.image}
              alt={char.name}
              width={180}
              height={180}
              className="mx-auto rounded-lg"
            />
            <p className="mt-4 font-bold text-lg">{char.name}</p>
          </motion.div>
        ))}
      </div>

      <motion.button
        onClick={handleNext}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-8 py-3 rounded-lg shadow-lg"
      >
        مرحله بعد
      </motion.button>
    </div>
  )
}
