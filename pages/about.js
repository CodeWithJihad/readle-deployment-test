import React from "react";

const about = () => {
  return (
    <div>
      <div className="flex justify-center items-center my-20 flex-col">
        <h1 className=" px-5 text-7xl font-Inter">Welcome to Readle</h1>
        <div className=" mt-20 m-auto px-5 lg:px-40">
          <h3 className=" text-green-500  text-4xl">Introduction</h3>
          <h4 className="text-xl font-Poppins my-2">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repellendus obcaecati modi voluptate minima voluptates doloremque. Impedit iusto vero nesciunt repudiandae distinctio veritatis inventore temporibus facere voluptate similique enim reprehenderit
          </h4>
        </div>
        <div className="mt-20 m-auto px-5 lg:px-40">
        <h3 className=" text-green-500 text-4xl">About Author</h3>
          <h4 className="text-xl font-Poppins my-2">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repellendus obcaecati modi voluptate minima voluptates doloremque. Impedit iusto vero nesciunt repudiandae distinctio veritatis inventore temporibus facere voluptate similique enim reprehenderit
          </h4>
        </div>
      </div>
    </div>
  );
};

export default about;
