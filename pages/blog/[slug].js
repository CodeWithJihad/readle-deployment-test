import React from "react";
import { useRouter } from "next/router";
import { sanityClient, urlFor } from "../../sanity"; // SanityClient and urlFor from sanity.js file
import PortableText from "react-portable-text";

const slug = ({ blog }) => {
  const router = useRouter();
  console.log(blog);
  return (
    <main>
      <artical>
        <div className="flex justify-center items-center">
          {blog && (
            <div className="px-4">
              <h3 className="mt-12 text-xl text-gray-900">
                {new Date(blog.publishedAt).toDateString()} -{" "}
                <span className="text-green-500"> Blog </span>{" "}
              </h3>
              <h1 className="font-League  max-w-4xl mt-7 text-6xl md:text-8xl">
                {blog.title}
              </h1>
              <div className="flex items-center">
                <img
                  className="h-14 w-14 md:h-16 md:w-16 rounded-full my-2 object-cover"
                  src={urlFor(blog.author.image).url()}
                  alt=""
                />
                <h3 className="mx-5 text-xl md:text-2xl font-Poppins text-gray-900">
                  {blog.author.name}
                </h3>
              </div>
            </div>
          )}
        </div>
        <div className="max-w-4xl mx-auto px-4 md:px-1 my-10 text-lg text-gray-900 font-Poppins">
          <PortableText
            dataset={process.env.NEXT_PUBLIC_SANITY_DATASET}
            projectId={process.env.NEXT_PUBLIC_SANITY_PROJECT_ID}
            content={blog.body}
            serializers={{
              h1: (props) => (
                <h1 className="text-2xl font-bold my-7" {...props} />
              ),
              h2: (props) => (
                <h2 className="text-xl font-bold my-5" {...props} />
              ),
              li: ({ children }) => (
                <li className="ml-4 list-disc">{children}</li>
              ),
              link: ({ href, children }) => (
                <a className="text-blue-500 hover:underline" href={href}>
                  {children}
                </a>
              ),
            }}
          />
        </div>
      </artical>
    </main>
  );
};

export default slug;

export const getServerSideProps = async (context) => {
  const { slug } = context.query;
  const blog = await sanityClient.fetch(
    `*[_type == "blog" && slug.current == "${slug}"][0]{
      _id,
      title,
      author->{
        name,
        image
      },
      description,
      mainImage,
      slug,
      publishedAt,
      body,
    }`
  );
  return {
    props: {
      blog,
    },
  };
};
