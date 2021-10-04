import React from 'react'
import { Helmet } from 'vtex.render-runtime'

const GoogleSiteVerification: React.FC = () => {
  return (
    <>
      <Helmet>
        <meta
          name="google-site-verification"
          content="YyuJl_yDEm75Lk8W3zyqTDU9cWmnvLPRsnPB9eZKfHU"
        />
      </Helmet>
    </>
  )
}

export default GoogleSiteVerification
