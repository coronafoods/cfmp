// const {PHASE_DEVELOPMENT_SERVER} = require('next/constants')
// // @ts-check

// /**
//  * @type {import('next').NextConfig}
//  **/

// if (phase != PHASE_DEVELOPMENT_SERVER) {

//   const nextConfig = {
//     output: 'export',
//     basePath: '/cfmp',
//     experimental: {
//       appDir: true,
//     },
//     images: {
//       loader: 'imgix',
//       path: '/',
//     }
//   }
// }

// module.exports = nextConfig


const { PHASE_DEVELOPMENT_SERVER } = require('next/constants')

module.exports = (phase, { defaultConfig }) => {
  if (phase === PHASE_DEVELOPMENT_SERVER) {
    return {
      /* development only config options here */
    }
  }

  return {
    output: 'export',
        basePath: '/cfmp',
        images: {
          loader: 'akamai',
          path: '/',
        }  
  }
}
