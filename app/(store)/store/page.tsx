

import React, {Suspense} from 'react';
import {Header} from "@/components/store/layout/Header";
import {Categories} from "@/components/store/home/Categories";
import {Promotions} from "@/components/store/home/Promotions";

import {HomeData} from "@/components/store/home/HomeData";


const HomePage = () => {

  return (
      <div className="container mx-auto sm:max-w-6xl px-4 py-8">
          <Categories />

          <Promotions />


          <Suspense>
              <HomeData />
          </Suspense>
      </div>
  );
};

export default HomePage;
