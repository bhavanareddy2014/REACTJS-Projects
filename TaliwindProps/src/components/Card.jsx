import React from 'react'

function Card({name="reddy"}) {
  return (
    <div><figure class="bg-slate-100 rounded-xl p-8 dark:bg-slate-800">
    <img class="w-24 h-24 rounded-full mx-auto" src="https://cdn.britannica.com/38/111338-050-D23BE7C8/Stars-NGC-290-Hubble-Space-Telescope.jpg" alt="" width="384" height="512"/>
    <div class="pt-6 space-y-4">
      <blockquote>
        <p class="text-lg font-medium">
          “Tailwind CSS is the only framework that I've seen scale
          on large teams. It’s easy to customize, adapts to any design,
          and the build size is tiny.”
        </p>
      </blockquote>
      <figcaption class="font-medium">
        <div>
          {name}
        </div>
        <div>
          Staff Engineer, Algolia
        </div>
      </figcaption>
    </div>
  </figure>
    </div>
  )
}

export default Card