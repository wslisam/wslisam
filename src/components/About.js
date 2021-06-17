import React, { useEffect, useState } from "react";
import sanityClient from "../client.js";
import imageUrlBuilder from "@sanity/image-url";
import image from "../manything.png";

const builder = imageUrlBuilder(sanityClient);
function urlFor(source) {
  return builder.image(source);
}

export default function About() {
  const [author, setAuthor] = useState(null);

  useEffect(() => {
    sanityClient
      .fetch(
        `*[_type == "author"]{
          name,
          "bio": bio[0].children[0].text,
          "authorImage": image.asset->url
      }`
      )
      .then((data) => setAuthor(data[0]))
      .catch(console.error);
  }, []);

  if (!author)
    return (
      <div>
        <img
          src={image}
          alt="manything"
          className="absolute object-cover w-full"
        />
      </div>
    );

  return (
    <main className="relative">
      <img
        src={image}
        alt="manything"
        className="absolute object-cover w-full"
      />

      <div className="p-10 lg:pt-48 container mx-auto relative">
        <section className="bg-green-800 rounded-lg shadow-2xl lg:flex p-20">
          <img
            src={urlFor(author.authorImage).url()}
            className="rounded w-32 h-32 lg:w-64 lg:h-64 mr-8"
            alt="Sam"
          />
          <div className="text-lg flex flex-col justify-center pl-20">
            <h1 className="cursive text-6xl text-green-300 mb-4">
              I&apos;m <span className="text-green-100">{author.name}</span>
            </h1>
            <p className="text-green-200 text-lg">{author.bio}</p>
          </div>
        </section>
      </div>
    </main>
  );
}
