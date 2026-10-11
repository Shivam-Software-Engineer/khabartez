import React from 'react'

export default function Advertisement() {
  return (
    <section className="w-full bg-white">
      <div className="mx-auto w-full max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
        
        {/* Advertisement Label */}
        <div className="mb-2 text-center">
          <span className="text-[10px] font-medium uppercase tracking-[0.2em] text-gray-400">
            Advertisement
          </span>
        </div>

        {/* Advertisement Box */}
        <div
          className="
            relative flex w-full items-center justify-center
            overflow-hidden
            rounded-md
            border border-gray-200
            bg-gray-50
            shadow-sm
            min-h-[100px]
            sm:min-h-[120px]
            lg:min-h-[140px]
          "
        >
          {/* Decorative Background */}
          <div className="absolute inset-0 opacity-40">
            <div className="absolute -left-10 -top-10 h-32 w-32 rounded-full bg-red-100 blur-2xl" />
            <div className="absolute -bottom-10 -right-10 h-32 w-32 rounded-full bg-yellow-100 blur-2xl" />
          </div>

          {/* Ad Content */}
          <div className="relative z-10 text-center">
            <img src="/Adv.png" alt="" />
          </div>
        </div>

      </div>
    </section>
  )
}
