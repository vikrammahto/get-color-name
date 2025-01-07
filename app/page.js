export default function Home() {
  const features = [
    'Create beautiful tints, shades, and gradients in seconds.',
    'Get color names, formats, and details instantly from Hex codes.',
    'Generate TailwindCSS palettes and web-ready color schemes.',
    'Extract colors and palettes from images with ease.',
  ];
  return (
    <div>
      <main className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20 text-center flex justify-center flex-col items-center">
        <span className="border rounded-2xl py-1 px-4 text-slate-500 text-sm mb-5 hover:scale-105 transition duration-300 ease-in-out">
          Free color tools for your next big ideas.
        </span>
        <h1 className="mx-auto max-w-4xl text-5xl font-bold tracking-normal">
          All-in-One Color Toolkit
          <span className="relative whitespace-nowrap text-lime-600">
            <svg
              aria-hidden="true"
              viewBox="0 0 418 42"
              className="absolute top-2/3 left-0 h-[0.58em] w-full fill-lime-600/70"
              preserveAspectRatio="none"
            >
              <path d="M203.371.916c-26.013-2.078-76.686 1.963-124.73 9.946L67.3 12.749C35.421 18.062 18.2 21.766 6.004 25.934 1.244 27.561.828 27.778.874 28.61c.07 1.214.828 1.121 9.595-1.176 9.072-2.377 17.15-3.92 39.246-7.496C123.565 7.986 157.869 4.492 195.942 5.046c7.461.108 19.25 1.696 19.17 2.582-.107 1.183-7.874 4.31-25.75 10.366-21.992 7.45-35.43 12.534-36.701 13.884-2.173 2.308-.202 4.407 4.442 4.734 2.654.187 3.263.157 15.593-.78 35.401-2.686 57.944-3.488 88.365-3.143 46.327.526 75.721 2.23 130.788 7.584 19.787 1.924 20.814 1.98 24.557 1.332l.066-.011c1.201-.203 1.53-1.825.399-2.335-2.911-1.31-4.893-1.604-22.048-3.261-57.509-5.556-87.871-7.36-132.059-7.842-23.239-.254-33.617-.116-50.627.674-11.629.54-42.371 2.494-46.696 2.967-2.359.259 8.133-3.625 26.504-9.81 23.239-7.825 27.934-10.149 28.304-14.005.417-4.348-3.529-6-16.878-7.066Z"></path>
            </svg>
            <span className="relative">for Designers and Creators</span>
          </span>
        </h1>
        <p className="mx-auto mt-12 max-w-2xl text-lg text-slate-700 leading-7">
          Transform the way you work with colors! Generate tints, shades,
          gradients, and palettes. Explore color meanings, formats, and more -
          all in one powerful tool.
        </p>
        <a
          className="bg-lime-600 rounded-lg text-white font-medium px-4 py-3 sm:mt-10 mt-8 hover:bg-lime-700"
          href="#"
        >
          Explore all amazing tools →
        </a>
      </main>
      <section className="px-4 pb-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl">
        <ul className="flex list-disc bg-lime-50 rounded-lg px-10 gap-6 py-10">
          {features.map((feature, index) => (
            <li key={index}>{feature}</li>
          ))}
        </ul>
      </section>
    </div>
  );
}
