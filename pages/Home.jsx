import { useState, useEffect } from "react";
import React from "react";
import appwriteService from "../appwrite/config";
import { Container, PostCard } from "../components";

function Home() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    appwriteService.getPosts().then((posts) => {
      if (posts) {
        setPosts(posts.documents);
      }
    });
  }, []);
  if (posts.length === 0) {
    return (
      <div className="w-full py-8 mt-4 text-center">
        <Container>
          <div className="flex flex-wrap">
            <div className="p-2  w-full">
              <h1 className="text-2xl text-white font-bold   font-sans hover:text-gray-500">
                Postify is a web app that lets you share your aesthetic pictures
                along with your thoughts. Express yourself creatively and
                connect with others through visual storytelling.
                <h1 className="flex justify-center items-center">
                  Note: Login to read and view posts.
                </h1>
              </h1>
              <div className="flex justify-center items-center">
                <object
                  data="/home-page.svg"
                  width="300"
                  height="300"
                  className="mt-8 "
                >
                  {" "}
                </object>
              </div>
            </div>
          </div>
        </Container>
      </div>
    );
  }
  return (
    <div className="w-full py-8">
      <Container>
        <div className="flex flex-wrap">
          {posts.map((post) => {
            <div key={post.$id} className="p-2 w-1/4">
              <PostCard post={post} />
            </div>;
          })}
        </div>
      </Container>
    </div>
  );
}

export default Home;
