
import React from 'react'
import Button from "@/components/Button";
import ExternalLinkButton from "@/components/ExternalLinkButton";
import {siteConfig} from "@/config/site";

const DownloadApp = () => {
  return (
      <div className="flex mt-6 w-full flex-col gap-3 whitespace-nowrap xl:flex-row">

          <ExternalLinkButton
              href={ siteConfig.ios }
              type="button"
              title="App Store"
              icon="/images/apple.svg"
              variant="btn_green"
          />

          <ExternalLinkButton
              href={ siteConfig.android }
              type="button"
              title="Play Store"
              icon="/images/android.svg"
              variant="btn_dark_green_outline"
          />

        {/*<Button*/}
        {/*    type="button"*/}
        {/*    title="Play Store"*/}
        {/*    icon="/images/android.svg"*/}
        {/*    variant="btn_green"*/}
        {/*    full*/}
        {/*/>*/}

        {/*<Button*/}
        {/*    type="button"*/}
        {/*    title="App Store"*/}
        {/*    icon="/images/apple.svg"*/}
        {/*    variant="btn_dark_green_outline"*/}
        {/*    full*/}
        {/*/>*/}

      </div>
  )
}

export default DownloadApp
