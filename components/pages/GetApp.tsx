"use client"

import React from 'react'


import Button from './../Button'
import Image from 'next/image'
import {motion} from "framer-motion";
import {LampContainer} from "@/components/ui/lamp";

const GetApp = () => {
  return (
      <div className="mb-24">
          <LampContainer>
              <motion.h1
                  initial={{ opacity: 0.5, y: 100 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{
                      delay: 0.3,
                      duration: 0.8,
                      ease: "easeInOut",
                  }}
                  className="mt-8 bg-section py-4 bg-clip-text text-center text-4xl font-medium tracking-tight text-transparent md:text-7xl"
              >
                  Get Started <br /> with Queek App
              </motion.h1>

              <div className="flex mt-28 w-full flex-col gap-3 whitespace-nowrap xl:flex-row">

                  <Button
                      type="button"
                      title="Play Store"
                      icon="/images/android.svg"
                      variant="btn_green"
                      full
                  />

                  <Button
                      type="button"
                      title="App Store"
                      icon="/images/apple.svg"
                      variant="btn_dark_green_outline"
                      full
                  />

              </div>

          </LampContainer>
      </div>

  )
}
export default GetApp
