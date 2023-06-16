const posts = [
  {
    slug: 'introduction-to-experimental-features-in-nextjs',
    title: 'Introduction to Experimental Features in Next.js',
    content:
      'In this post, I am going to introduce the concept of experimental features in Next.js and explain how they can help in enhancing web development experience.'
  },
  {
    slug: 'exploring-react-server-components',
    title: 'Exploring React Server Components in Next.js',
    content:
      'React Server Components is an experimental feature in Next.js that allows you to write components that render on the server, I share my experiences and lessons learned in this post.'
  },
  {
    slug: 'trying-out-concurrent-mode',
    title: 'Trying Out Concurrent Mode',
    content:
      'Concurrent Mode is an exciting experimental feature in Next.js that allows for a more responsive UI. I tried it out and here’s what happened.'
  },
  {
    slug: 'nextjs-and-webassembly',
    title: 'Next.js and WebAssembly: A Powerful Combination',
    content:
      'In this post, I explore how combining Next.js with WebAssembly can drastically improve performance and open new possibilities for web applications.'
  },
  {
    slug: 'experimenting-with-middlewares',
    title: 'Experimenting with Middlewares in Next.js',
    content:
      'Middlewares are functions that have access to the request and response objects. In this post, I share my experience with using experimental middlewares in Next.js.'
  },
  {
    slug: 'live-reloading-in-nextjs',
    title: 'Live Reloading in Next.js: A Game Changer',
    content:
      'The experimental live reloading feature in Next.js is incredibly helpful in development. Here, I share my experiences and how it changed my workflow.'
  },
  {
    slug: 'css-modules-in-nextjs',
    title: 'Trying Out CSS Modules in Next.js',
    content:
      'CSS Modules are an experimental feature in Next.js. In this post, I talk about how I used them to style my components in a maintainable way.'
  },
  {
    slug: 'swc-compiler-and-nextjs',
    title: 'SWC Compiler and Next.js: A Speedy Pair',
    content:
      'SWC is an experimental super-fast JavaScript/TypeScript compiler. In this post, I discuss how I integrated SWC with Next.js and the impact it had on my project.'
  },
  {
    slug: 'using-flight-in-nextjs',
    title: 'Using React Flight in Next.js',
    content:
      'React Flight is an experimental feature for efficient data fetching. I experimented with integrating it into Next.js and in this post, I share what I learned.'
  },
  {
    slug: 'conclusion-experimental-features-nextjs',
    title:
      'Conclusion: The Power of Experimental Features in Next.js',
    content:
      'After trying out various experimental features in Next.js, here’s my conclusion on how they can empower developers and change the way we build web applications.'
  }
];

// import { getServerSession } from 'next-auth';
import { NextResponse } from 'next/server';

export async function GET() {
  // const session = await getServerSession();
  return NextResponse.json(posts);
}
