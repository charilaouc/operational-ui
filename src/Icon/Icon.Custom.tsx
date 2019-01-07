import * as React from "react"

export interface IconProps {
  color?: string
  size?: number
  className?: string
}

export const Add: React.SFC<IconProps> = ({ size, color, ...props }) => (
  <svg viewBox="0 0 360 360" fill={color} width={size} height={size} {...props}>
    <path d="M200,160.188l120,-0.001l0,40l-120,0l0,120l-40,0l0,-120l-120,0l0,-40l120,0l0,-120l40,0l0,120Z" />
  </svg>
)

export const Admin: React.SFC<IconProps> = ({ size, color, ...props }) => (
  <svg viewBox="0 0 360 360" fill={color} width={size} height={size} {...props}>
    <path d="M169.77,200.187c21.217,0.001 41.565,8.429 56.568,23.432c15.003,15.003 23.432,35.351 23.432,56.568c0,22.032 0,40 0,40l-240,0c0,0 0,-17.968 0,-40c0,-21.217 8.428,-41.565 23.431,-56.568c15.003,-15.003 35.351,-23.431 56.569,-23.432l80,0Zm50.23,-80l70,-20l70,20c0,0 -5.511,55.969 -20,80c-15.002,24.883 -50,35 -50,35c0,0 -35.254,-10.36 -50,-35c-14.45,-24.144 -20,-80 -20,-80Zm69.958,6l10.713,25.255l27.329,2.385l-20.708,17.993l6.177,26.728l-23.511,-14.134l-23.512,14.134l6.177,-26.728l-20.708,-17.993l27.33,-2.385l10.713,-25.255Zm-160.188,-86c41.393,0 75,33.607 75,75c0,41.394 -33.607,75 -75,75c-41.394,0 -75,-33.606 -75,-75c0,-41.393 33.606,-75 75,-75Z" />
  </svg>
)

export const Building: React.SFC<IconProps> = ({ size, color, ...props }) => (
  <svg viewBox="0 0 360 360" fill={color} width={size} height={size} {...props}>
    <path d="M280,340.187l-80,0l0,-60l-40,0l0,60l-80,0l0,-320l200,0l0,320Zm-20,-80l0,-40l-40,0l0,40l40,0Zm-60,0l0,-40l-40,0l0,40l40,0Zm-60,0l0,-40l-40,0l0,40l40,0Zm120,-60l0,-40l-40,0l0,40l40,0Zm-60,0l0,-40l-40,0l0,40l40,0Zm-60,0l0,-40l-40,0l0,40l40,0Zm0,-60l0,-40l-40,0l0,40l40,0Zm60,0l0,-40l-40,0l0,40l40,0Zm60,0l0,-40l-40,0l0,40l40,0Zm-120,-60l0,-40l-40,0l0,40l40,0Zm120,0l0,-40l-40,0l0,40l40,0Zm-60,0l0,-40l-40,0l0,40l40,0Z" />
  </svg>
)

export const Bundle: React.SFC<IconProps> = ({ size, color, ...props }) => (
  <svg viewBox="0 0 360 360" fill={color} width={size} height={size} {...props}>
    <path d="M320,160.187l0,160l-280,0l0,-160l0,-100l280,0l0,100Zm-40,0.001l-200,0l0,120l200,0l0,-120Zm-60,60l-80,0l0,-40l80,0l0,40Z" />
  </svg>
)

export const CaretDown: React.SFC<IconProps> = ({ size, color, ...props }) => (
  <svg viewBox="0 0 360 360" fill={color} width={size} height={size} {...props}>
    <path d="M320,120.187l-140,140l-140,-140l280,0Z" />
  </svg>
)

export const CaretLeft: React.SFC<IconProps> = ({ size, color, ...props }) => (
  <svg viewBox="0 0 360 360" fill={color} width={size} height={size} {...props}>
    <path d="M240,320.187l-140,-140l140,-140l0,280Z" />
  </svg>
)

export const CaretRight: React.SFC<IconProps> = ({ size, color, ...props }) => (
  <svg viewBox="0 0 360 360" fill={color} width={size} height={size} {...props}>
    <path d="M120,40.187l140,140l-140,140l0,-280Z" />
  </svg>
)

export const CaretUp: React.SFC<IconProps> = ({ size, color, ...props }) => (
  <svg viewBox="0 0 360 360" fill={color} width={size} height={size} {...props}>
    <path d="M40,240.187l140,-140l140,140l-280,0Z" />
  </svg>
)

export const Catalog: React.SFC<IconProps> = ({ size, color, ...props }) => (
  <svg viewBox="0 0 360 360" fill={color} width={size} height={size} {...props}>
    <path d="M20,60.188c0,0 129.492,-0.003 130,-0.001c19.813,0.085 29.778,10.314 30,30c0.003,0.268 0,220 0,220c0,0 -9.994,-29.902 -30,-30c-0.183,0 -130,0.001 -130,0.001l0,-220Zm340,-0.001c0,0 -129.492,-0.002 -130,0c-19.797,0.085 -29.775,10.074 -30,30c-0.003,0.268 0,220 0,220c0,0 10.302,-29.873 30,-30c0.183,-0.001 130,0 130,0l0,-220Zm-40,79.999l0,-40l-80,0l0,40l80,0Z" />
  </svg>
)

export const ChevronDown: React.SFC<IconProps> = ({ size, color, ...props }) => (
  <svg viewBox="0 0 360 360" fill={color} width={size} height={size} {...props}>
    <path d="M334.142,124.33l-154.142,154.142l-154.142,-154.142l28.284,-28.285l125.858,125.858l125.858,-125.858c9.428,9.428 18.856,18.857 28.284,28.285Z" />
  </svg>
)

export const ChevronLeft: React.SFC<IconProps> = ({ size, color, ...props }) => (
  <svg viewBox="0 0 360 360" fill={color} width={size} height={size} {...props}>
    <path d="M264.142,54.33l-125.858,125.858l125.858,125.857l-28.284,28.285l-154.142,-154.142l154.142,-154.143c9.428,9.428 18.856,18.857 28.284,28.285Z" />
  </svg>
)

export const ChevronRight: React.SFC<IconProps> = ({ size, color, ...props }) => (
  <svg viewBox="0 0 360 360" fill={color} width={size} height={size} {...props}>
    <path d="M278.284,180.187l-154.142,154.143l-28.284,-28.285l125.858,-125.858l-125.858,-125.857l28.284,-28.285c51.381,51.381 102.762,102.762 154.142,154.142Z" />
  </svg>
)

export const ChevronUp: React.SFC<IconProps> = ({ size, color, ...props }) => (
  <svg viewBox="0 0 360 360" fill={color} width={size} height={size} {...props}>
    <path d="M334.142,236.045l-28.284,28.285l-125.858,-125.858l-125.858,125.858l-28.284,-28.285l154.142,-154.142c51.381,51.381 102.761,102.762 154.142,154.142Z" />
  </svg>
)

export const ChevronUpDown: React.SFC<IconProps> = ({ size, color, ...props }) => (
  <svg viewBox="0 0 360 360" fill={color} width={size} height={size} {...props}>
    <path d="M306.642,231.83l-126.642,126.642l-126.642,-126.642l28.284,-28.285l98.358,98.358l98.358,-98.358c9.428,9.428 18.856,18.857 28.284,28.285Zm0,-103.285l-28.284,28.285l-98.358,-98.358l-98.358,98.358l-28.284,-28.285l126.642,-126.642c42.214,42.214 84.428,84.428 126.642,126.642Z" />
  </svg>
)

export const Copy: React.SFC<IconProps> = ({ size, color, ...props }) => (
  <svg viewBox="0 0 360 360" fill={color} width={size} height={size} {...props}>
    <path d="M80,160.188l-20,-0.001l0,140l140,0l0,-19.999l40,0l0,60l-220,0l0,-220.001l60,0l0,40.001Zm240,99.999l-220,0l0,-220l220,0l0,220Zm-40,-180l-140,0l0,140.001l140,0l0,-140.001Z" />
  </svg>
)

export const Database: React.SFC<IconProps> = ({ size, color, ...props }) => (
  <svg viewBox="0 0 360 360" fill={color} width={size} height={size} {...props}>
    <path d="M59.308,307.571l0,-59.548c0,13.607 54.08,36.617 120.692,36.617c66.612,0 120.692,-23.281 120.692,-36.617l0,59.548c0,13.336 -54.08,36.616 -120.692,36.616c-66.611,0 -120.691,-23.009 -120.692,-36.616Zm0,-76.309l0,-59.548c0,13.606 54.08,36.616 120.692,36.616c66.612,0 120.692,-23.28 120.692,-36.616l0,59.548c0,13.336 -54.08,36.616 -120.692,36.616c-66.611,0 -120.691,-23.01 -120.692,-36.616Zm0,-78.179l0,-59.548c0,13.606 54.08,36.616 120.692,36.616c66.612,0 120.692,-23.28 120.692,-36.616l0,59.548c0,13.336 -54.08,36.616 -120.692,36.616c-66.611,0 -120.691,-23.01 -120.692,-36.616Zm120.692,-131.555c66.612,0 120.692,20.28 120.692,45.26c0,24.979 -54.08,45.259 -120.692,45.259c-66.612,0 -120.692,-20.28 -120.692,-45.259c0,-24.98 54.08,-45.26 120.692,-45.26Z" />
  </svg>
)

export const Deploy: React.SFC<IconProps> = ({ size, color, ...props }) => (
  <svg viewBox="0 0 360 360" fill={color} width={size} height={size} {...props}>
    <path d="M320,320.188l-280,0l0,-100.001l40,0l0,60.001l200,0l0,-60.001l40,0l0,100.001Zm-160,-191.716l-25.858,25.858l-28.284,-28.285l74.142,-74.142c24.714,24.714 49.428,49.428 74.142,74.142l-28.284,28.285l-25.858,-25.858l0,111.716l-40,0l0,-111.716Z" />
  </svg>
)

export const Document: React.SFC<IconProps> = ({ size, color, ...props }) => (
  <svg viewBox="0 0 360 360" fill={color} width={size} height={size} {...props}>
    <path d="M320,340.187l-280,0l0,-320l280,0l0,320Zm-120,-59.999l0,-40l-120,0l0,40l120,0Zm80,-80l0,-40l-200,0l0,40l200,0Zm0,-80l0,-40l-200,0l0,40l200,0Z" />
  </svg>
)

export const EmptyCircle: React.SFC<IconProps> = ({ size, color, ...props }) => (
  <svg viewBox="0 0 360 360" fill={color} width={size} height={size} {...props}>
    <path d="M180.465,70.236c39.89,0.189 78.628,23.457 97.298,59.348c18.549,35.658 15.663,81.525 -8.344,114.849c-24.164,33.542 -68.192,51.739 -109.784,43.897c-44.272,-8.349 -81.753,-45.94 -88.409,-92.378c-5.794,-40.43 12.637,-83.426 47.4,-106.92c17.733,-11.984 38.916,-18.553 60.418,-18.792c0.474,-0.004 0.948,-0.005 1.421,-0.004Zm-0.595,40c-25.871,0.125 -51.138,15.724 -62.69,39.318c-9.245,18.882 -9.328,42.011 -0.183,60.985c11.292,23.432 36.257,39.604 62.893,39.696c17.737,0.061 35.341,-6.886 48.355,-19.206c17.165,-16.249 25.233,-41.561 20.443,-64.921c-6.332,-30.881 -35.239,-55.49 -67.9,-55.87c-0.306,-0.002 -0.612,-0.003 -0.918,-0.002Z" />
  </svg>
)

export const Endpoint: React.SFC<IconProps> = ({ size, color, ...props }) => (
  <svg viewBox="0 0 360 360" fill={color} width={size} height={size} {...props}>
    <path d="M180.582,0.188c55.578,0.265 110.039,27.414 143.639,72.331c33.388,44.634 44.535,105.228 28.167,159.582c-15.266,50.696 -54.189,93.897 -103.363,114.356c-53.792,22.381 -118.328,16.56 -167.379,-15.528c-49.682,-32.5 -81.646,-90.214 -81.646,-150.742c0,-58.807 30.6,-116.696 80.289,-149.845c29.175,-19.463 63.895,-29.986 99.129,-30.154c0.388,0 0.776,0 1.164,0Zm-1.038,40c-41.321,0.191 -82.101,19.559 -108.37,51.971c-27.861,34.376 -38.172,82.036 -26.099,125.512c11.299,40.691 42.002,75.513 81.27,91.857c41.195,17.146 90.356,13.101 128.341,-10.933c39.392,-24.925 65.163,-70.163 65.313,-117.952c0.125,-39.632 -17.403,-78.789 -47.157,-105.199c-25.166,-22.337 -58.47,-35.099 -92.386,-35.256c-0.304,0 -0.608,0 -0.912,0Zm0.779,40c25.076,0.119 49.792,9.953 68.003,27.008c15.204,14.239 25.833,33.305 29.824,53.765c7.5,38.449 -9.586,80.635 -43.257,102.807c-32.005,21.074 -76.407,21.694 -109.282,0.329c-23.813,-15.475 -40.551,-41.398 -44.596,-69.621c-2.899,-20.231 0.537,-41.329 9.794,-59.528c16.496,-32.43 51.865,-54.352 88.222,-54.756c0.431,-0.003 0.861,-0.005 1.292,-0.004Zm-0.53,40c-23.047,0.111 -45.305,14.67 -54.659,35.683c-7.489,16.822 -6.609,37.093 2.262,53.183c13.971,25.342 47.544,38.243 75.584,26.575c29.012,-12.072 45.665,-48.806 31.886,-79.758c-9.329,-20.956 -31.295,-35.57 -54.659,-35.683c-0.138,0 -0.276,0 -0.414,0Zm0.207,39.999c11.038,0 20,8.962 20,20c0,11.039 -8.962,20 -20,20c-11.038,0 -20,-8.961 -20,-20c0,-11.038 8.962,-20 20,-20Z" />
  </svg>
)

export const Entity: React.SFC<IconProps> = ({ size, color, ...props }) => (
  <svg viewBox="0 0 360 360" fill={color} width={size} height={size} {...props}>
    <path d="M320,300.187l-280,0l0,-240l85,0l0,0l20,0l0,0l70,0l0,0l20,0l0,0l85,0l0,240Zm-195,-20l0,-61l-65,0l0,61l65,0Zm20,-61l0,61l70,0l0,-61l-70,0Zm155,0l-65,0l0,61l65,0l0,-61Zm-240,-79l0,59l65,0l0,-59l-65,0Zm85,0l0,59l70,0l0,-59l-70,0Zm90,0l0,59l65,0l0,-59l-65,0Z" />
  </svg>
)

export const Function: React.SFC<IconProps> = ({ size, color, ...props }) => (
  <svg viewBox="0 0 360 360" fill={color} width={size} height={size} {...props}>
    <path d="M63.242,331.073l-58.242,0l38.145,-180.264l-32.608,0l8.818,-41.221l31.993,0l3.076,-14.355c5.058,-23.926 12.578,-40.4 22.558,-49.424c11.348,-13.398 33.223,-20.097 65.625,-20.097c3.692,0 7.007,0.102 9.947,0.307c2.939,0.205 7.007,0.513 12.202,0.923l-10.254,47.578c-3.145,-0.41 -8.545,-0.718 -16.201,-0.923c-7.656,-0.205 -13.364,1.504 -17.124,5.127c-3.76,3.623 -6.05,7.622 -6.87,11.997c-0.957,4.375 -2.325,10.664 -4.102,18.867l38.35,0l-8.819,41.221l-38.349,0l-38.145,180.264Zm123.227,-19l-20.606,0l-6.933,-9.473c-4.492,-5.729 -9.278,-14.258 -14.356,-25.586c-9.049,-20.247 -13.574,-40.169 -13.574,-59.765c0,-17.839 3.809,-35.547 11.426,-53.125c5.143,-11.98 12.663,-24.87 22.558,-38.672l20.996,0l-5.957,10.937c-8.203,15.039 -13.899,30.795 -17.089,47.266c-2.084,10.807 -3.125,22.591 -3.125,35.351c0,19.922 2.897,38.249 8.691,54.981c3.385,9.896 9.375,22.591 17.969,38.086Zm136.328,0l-20.606,0c8.594,-15.495 14.584,-28.19 17.969,-38.086c5.794,-16.732 8.692,-35.059 8.692,-54.981c0,-12.76 -1.042,-24.544 -3.125,-35.351c-3.191,-16.471 -8.887,-32.227 -17.09,-47.266l-5.957,-10.937l20.996,0c9.896,13.802 17.415,26.692 22.558,38.672c7.618,17.578 11.426,35.286 11.426,53.125c0,19.596 -4.525,39.518 -13.574,59.765c-5.078,11.328 -9.863,19.857 -14.356,25.586l-6.933,9.473Zm-97.559,-40.332l-33.789,0l36.328,-53.906l-34.765,-52.344l34.082,0l17.773,30.859l17.383,-30.859l33.105,0l-34.96,51.855l36.328,54.395l-34.668,0l-18.36,-31.934l-18.457,31.934Z" />
  </svg>
)

export const Funnel: React.SFC<IconProps> = ({ size, color, ...props }) => (
  <svg viewBox="0 0 360 360" fill={color} width={size} height={size} {...props}>
    <path d="M40,60.187l280,0l-120,120l0,100l-40,40l0,-140l-120,-120Z" />
  </svg>
)

export const Grid: React.SFC<IconProps> = ({ size, color, ...props }) => (
  <svg viewBox="0 0 360 360" fill={color} width={size} height={size} {...props}>
    <path d="M320,200.187l0,120l-120,0l0,-120l120,0Zm-160,0l0,120l-120,0l0,-120l120,0Zm0,-160l0,120l-120,0l0,-120l120,0Zm160,0l0,120l-120,0l0,-120l120,0Z" />
  </svg>
)

export const Home: React.SFC<IconProps> = ({ size, color, ...props }) => (
  <svg viewBox="0 0 360 360" fill={color} width={size} height={size} {...props}>
    <path d="M179.959,50.187l-123.808,92.853l0,167.147l83.573,0l0,-86.661l80.552,0l0,86.661l83.573,0l0,-167.147l-123.89,-92.853Z" />
  </svg>
)

export const Jobs: React.SFC<IconProps> = ({ size, color, ...props }) => (
  <svg viewBox="0 0 360 360" fill={color} width={size} height={size} {...props}>
    <path d="M190.444,306.133l8.69,-8.69c3.807,-3.806 4.337,-9.854 1.25,-14.265l-8.439,-12.04c3.274,-5.653 5.796,-11.71 7.501,-18.016l14.453,-2.5c5.333,-0.893 9.285,-5.545 9.302,-10.953l0,-12.402c-0.017,-5.407 -3.969,-10.06 -9.302,-10.952l-14.453,-2.501c-1.705,-6.306 -4.227,-12.363 -7.501,-18.016l8.439,-11.877c3.087,-4.411 2.557,-10.459 -1.25,-14.266l-8.69,-8.689c-3.806,-3.807 -9.854,-4.337 -14.265,-1.25l-12.04,8.439c-5.652,-3.275 -11.709,-5.797 -18.016,-7.501l-2.5,-14.453c-0.892,-5.333 -5.545,-9.285 -10.953,-9.302l-12.452,0c-5.369,0.036 -9.986,3.949 -10.902,9.239l-2.501,14.453c-6.306,1.705 -12.363,4.227 -18.016,7.502l-11.877,-8.44c-4.411,-3.086 -10.459,-2.556 -14.265,1.251l-8.69,8.689c-3.775,3.832 -4.263,9.878 -1.15,14.265l8.439,12.04c-3.275,5.653 -5.797,11.71 -7.501,18.016l-14.453,2.501c-5.333,0.892 -9.285,5.545 -9.302,10.952l0,12.402c0.017,5.408 3.969,10.061 9.302,10.953l14.453,2.5c1.704,6.307 4.226,12.364 7.501,18.016l-8.439,11.878c-3.087,4.41 -2.557,10.459 1.25,14.265l8.69,8.689c3.806,3.807 9.854,4.337 14.265,1.25l12.04,-8.439c5.653,3.275 11.71,5.796 18.016,7.502l2.5,14.453c0.892,5.333 5.545,9.284 10.953,9.301l12.402,0c5.407,-0.017 10.06,-3.968 10.952,-9.301l2.501,-14.453c6.306,-1.705 12.363,-4.227 18.016,-7.502l11.79,8.339c4.387,3.113 10.433,2.626 14.265,-1.15l-0.013,0.063Zm-63.962,-39.521c-18.176,0 -33.132,-14.956 -33.132,-33.131c0,-18.176 14.956,-33.132 33.132,-33.132c18.175,0 33.131,14.956 33.131,33.132c0,0.012 0,0.025 0,0.037c-0.02,18.161 -14.97,33.094 -33.131,33.094Zm199.827,-183.536c-1.403,-5.189 -6.372,-8.659 -11.727,-8.189l-13.153,1.15c-4.585,-6.917 -10.512,-12.843 -17.428,-17.429l1.137,-13.165c0.48,-5.371 -3.005,-10.357 -8.214,-11.752l-11.852,-3.101c-5.247,-1.357 -10.76,1.301 -12.965,6.251l-5.589,11.79c-8.267,0.494 -16.348,2.659 -23.755,6.364l-10.827,-7.601c-4.41,-3.087 -10.459,-2.557 -14.265,1.25l-8.689,8.689c-3.807,3.806 -4.337,9.855 -1.251,14.265l7.689,10.828c-3.705,7.406 -5.87,15.488 -6.363,23.754l-12.103,5.701c-4.95,2.206 -7.608,7.719 -6.251,12.966l3.101,11.852c1.393,5.199 6.365,8.681 11.727,8.214l13.153,-1.15c4.585,6.916 10.512,12.843 17.428,17.428l-1.15,13.153c-0.394,5.347 3.124,10.257 8.314,11.602l11.852,3.101c5.247,1.357 10.76,-1.301 12.965,-6.251l5.589,-12.003c8.314,-0.437 16.453,-2.564 23.917,-6.251l10.828,7.689c4.41,3.087 10.459,2.557 14.265,-1.25l8.689,-8.69c3.807,-3.806 4.337,-9.854 1.25,-14.265l-7.601,-10.827c3.705,-7.407 5.87,-15.488 6.364,-23.755l12.002,-5.588c4.95,-2.206 7.608,-7.719 6.251,-12.965l-3.338,-11.815Zm-59.562,43.146c-4.343,4.301 -10.215,6.717 -16.328,6.717c-12.73,0 -23.205,-10.475 -23.205,-23.205c0,-12.73 10.475,-23.204 23.205,-23.204c12.728,0 23.203,10.473 23.205,23.201c0,6.192 -2.477,12.134 -6.877,16.491Z" />
  </svg>
)

export const Lock: React.SFC<IconProps> = ({ size, color, ...props }) => (
  <svg viewBox="0 0 360 360" fill={color} width={size} height={size} {...props}>
    <path d="M100.695,120.188c3.976,-29.098 24.601,-55.567 52.722,-65.472c8.693,-3.062 18.003,-4.558 27.102,-4.527c32.682,0.316 64.207,22.291 75.114,53.879c1.805,5.225 3.045,10.637 3.731,16.12l0.636,0l0,9.968l0.063,19.968l-0.063,0.001l0,30.062l40,0l0,140l-240,0l0,-140l40,0l0,-30.062l-0.063,-0.001l0.063,-19.968l0,-9.969l0.695,0Zm119.305,8.246c-0.34,-4.306 -1.081,-8.482 -2.591,-12.454c-5.943,-15.627 -22.503,-26.495 -39.225,-25.751c-20.107,0.893 -37.986,18.78 -38.183,39.697l-0.001,0.294l0,49.968l80,0l0,-51.754Z" />
  </svg>
)

export const Menu: React.SFC<IconProps> = ({ size, color, ...props }) => (
  <svg viewBox="0 0 360 360" fill={color} width={size} height={size} {...props}>
    <path d="M320,280.187l-280,0l0,-40l280,0l0,40Zm0,-80l-280,0l0,-40l280,0l0,40Zm0,-80l-280,0l0,-40l280,0l0,40Z" />
  </svg>
)

export const No: React.SFC<IconProps> = ({ size, color, ...props }) => (
  <svg viewBox="0 0 360 360" fill={color} width={size} height={size} {...props}>
    <path d="M180,151.903l105.858,-105.858c9.428,9.428 18.856,18.856 28.284,28.285l-105.858,105.857l105.858,105.858l-28.284,28.285l-105.858,-105.858l-105.858,105.858l-28.284,-28.285l105.858,-105.858l-105.858,-105.857l28.284,-28.285l105.858,105.858Z" />
  </svg>
)

export const Olap: React.SFC<IconProps> = ({ size, color, ...props }) => (
  <svg viewBox="0 0 360 360" fill={color} width={size} height={size} {...props}>
    <path d="M43.868,114.989l0,143.206l126.468,71.992l0,-143.445l-126.468,-71.753Zm272.234,0l-126.438,71.753l0,143.325l126.468,-71.992l-0.03,-143.086Zm-136.117,-87.802l-126.227,71.723l125.987,71.603l126.227,-71.723l-125.987,-71.603Z" />
  </svg>
)

export const Open: React.SFC<IconProps> = ({ size, color, ...props }) => (
  <svg viewBox="0 0 360 360" fill={color} width={size} height={size} {...props}>
    <path d="M300,320.187l-260,0l0,-260l160,0l0,40l-120,0l0,180l180,0l0,-120l40,0l0,160Zm40,-200l-40,0l0,-31.715l-85.858,85.858l-28.284,-28.285l85.858,-85.858l-31.716,0l0,-40l100,0l0,100Z" />
  </svg>
)

export const Pause: React.SFC<IconProps> = ({ size, color, ...props }) => (
  <svg viewBox="0 0 360 360" fill={color} width={size} height={size} {...props}>
    <path d="M140,40.187l0,280l-40,0l0,-280l40,0Zm120,0l0,280l-40,0l0,-280l40,0Z" />
  </svg>
)

export const Play: React.SFC<IconProps> = ({ size, color, ...props }) => (
  <svg viewBox="0 0 360 360" fill={color} width={size} height={size} {...props}>
    <path d="M121.796,40.268c1.219,0.153 1.532,0.16 2.731,0.438c1.348,0.314 2.663,0.767 3.918,1.352c1.254,0.584 2.419,1.337 3.555,2.129l160,120c0.95,0.765 1.21,0.934 2.078,1.795c7.438,7.371 7.655,20.826 0,28.411c-0.868,0.861 -1.128,1.029 -2.078,1.794l-160,120c-1.008,0.703 -1.245,0.907 -2.322,1.503c-9.2,5.087 -22.292,1.475 -27.377,-8.189c-1.075,-2.042 -1.792,-4.269 -2.11,-6.555c-0.17,-1.219 -0.149,-1.53 -0.191,-2.759l0,-240c0.042,-1.228 0.021,-1.539 0.191,-2.759c1.205,-8.653 8.594,-16.054 17.461,-17.102c2.646,-0.313 3.288,-0.105 4.144,-0.058Zm18.204,219.919l106.667,-80l-106.667,-80c0,53.334 0,106.667 0,160Z" />
  </svg>
)

export const Project: React.SFC<IconProps> = ({ size, color, ...props }) => (
  <svg viewBox="0 0 360 360" fill={color} width={size} height={size} {...props}>
    <path d="M40,300.187l280,0l0,-180l-180,0l-20,-40l-80,0l0,220Z" />
  </svg>
)

export const Redo: React.SFC<IconProps> = ({ size, color, ...props }) => (
  <svg viewBox="0 0 360 360" fill={color} width={size} height={size} {...props}>
    <path d="M247.077,204.888c-14.633,-23.734 -38.564,-42.044 -66.403,-48.722c-30.693,-7.363 -64.487,-0.135 -89.779,19.358c-18.376,14.163 -31.893,34.431 -37.931,56.808l-38.619,-10.42c12.675,-46.978 49.902,-86.585 97.153,-101.717c14.477,-4.636 29.595,-6.959 44.869,-6.942c49.204,0.169 97.253,26.696 123.658,68.469c0.519,0.821 1.03,1.647 1.532,2.478l27.828,-44.534c11.307,7.065 22.615,14.131 33.922,21.197l-54.395,87.049l-102.396,-7.161l2.791,-39.902l57.77,4.039Z" />
  </svg>
)

export const Remove: React.SFC<IconProps> = ({ size, color, ...props }) => (
  <svg viewBox="0 0 360 360" fill={color} width={size} height={size} {...props}>
    <path d="M180.517,20.188c49.669,0.242 98.192,24.628 127.956,64.662c34.449,46.333 41.41,111.431 15.728,164.696c-21.715,45.039 -65.622,78.831 -114.93,87.962c-9.648,1.787 -19.459,2.68 -29.271,2.68c-50.638,0 -100.412,-25.423 -130.174,-66.993c-33.202,-46.377 -39.195,-110.969 -13.603,-163.239c16.321,-33.335 44.525,-60.611 78.379,-75.813c20.341,-9.134 42.633,-13.847 64.881,-13.955c0.345,0 0.689,0 1.034,0Zm-0.905,40c-54.765,0.266 -106.946,41.515 -117.533,97.647c-7.327,38.849 5.815,81.058 34.891,108.952c27.377,26.264 67.464,38.343 105.018,31.39c53.785,-9.959 97.644,-59.622 98.009,-117.212c0.206,-32.467 -13.36,-64.73 -36.967,-87.378c-21.838,-20.949 -51.802,-33.167 -82.249,-33.397c-0.39,-0.002 -0.779,-0.002 -1.169,-0.002Zm80.388,140l-160,0l0,-40l160,0l0,40Z" />
  </svg>
)

export const Resume: React.SFC<IconProps> = ({ size, color, ...props }) => (
  <svg viewBox="0 0 360 360" fill={color} width={size} height={size} {...props}>
    <path d="M100,50.187c0,-5.522 -4.477,-10 -10,-10c-6.108,0 -13.892,0 -20,0c-5.523,0 -10,4.478 -10,10c0,43.553 0,216.448 0,260c0,5.523 4.477,10 10,10c6.108,0 13.892,0 20,0c5.523,0 10,-4.477 10,-10c0,-43.552 0,-216.447 0,-260Zm61.796,-9.919c2.76,0.346 5.469,1.083 7.882,2.417c1.077,0.596 1.314,0.8 2.322,1.502l160,120c0.95,0.765 1.21,0.934 2.078,1.795c7.411,7.343 7.7,20.781 0,28.411c-0.868,0.861 -1.128,1.029 -2.078,1.794l-160,120c-1.008,0.703 -1.245,0.907 -2.322,1.503c-9.233,5.106 -22.322,1.418 -27.377,-8.189c-1.075,-2.042 -1.791,-4.269 -2.11,-6.555c-0.17,-1.219 -0.148,-1.53 -0.191,-2.759l0,-240c0.043,-1.228 0.021,-1.539 0.191,-2.759c1.205,-8.652 8.594,-16.054 17.461,-17.102c2.647,-0.313 3.288,-0.105 4.144,-0.058Zm18.204,219.919l106.667,-80l-106.667,-80c0,53.334 0,106.667 0,160Z" />
  </svg>
)

export const Question: React.SFC<IconProps> = ({ size, color, ...props }) => (
  <svg viewBox="0 0 360 360" fill={color} width={size} height={size} {...props}>
    <path d="M180.517,20.188c49.403,0.235 97.812,24.368 127.679,64.294c34.51,46.134 41.779,111.614 16.016,165.046c-21.564,44.725 -64.887,78.385 -113.94,87.794c-49.927,9.577 -104.031,-6.223 -140.987,-41.669c-43.238,-41.473 -60.706,-108.199 -40.872,-166.759c21.154,-62.459 83.332,-108.384 151.07,-108.706c0.345,0 0.689,0 1.034,0Zm-0.912,40c-42.701,0.202 -84.582,24.763 -105.31,63.18c-21.308,39.493 -18.17,90.837 8.892,127.691c22.11,30.112 58.669,49.002 96.428,49.128c50.825,0.169 99.906,-34.804 115.212,-85.04c9.113,-29.907 5.956,-63.434 -8.778,-91.137c-20.13,-37.848 -61.219,-63.342 -104.877,-63.817c-0.522,-0.004 -1.044,-0.006 -1.567,-0.005Zm0.395,159.999c13.798,0 25,11.203 25,25c0,13.798 -11.202,25 -25,25c-13.798,0 -25,-11.202 -25,-25c0,-13.797 11.202,-25 25,-25Zm-2.252,-125.996c21.028,0.307 41.652,12.203 49.05,33.006c6.87,19.32 1.875,42.161 -12.005,57.202c-5.64,6.112 -13.282,11.235 -14.449,18.92c-0.277,1.82 -0.352,3.666 -0.346,5.505l0.002,0.227l-39.999,0.273c-0.085,-12.419 2.843,-25.063 10.008,-35.17c4.741,-6.688 11.353,-11.875 16.557,-18.191c0.345,-0.419 0.663,-0.86 0.956,-1.316c3.607,-5.616 4.218,-14.794 -1.759,-18.312c-5.283,-3.11 -12.719,-3.043 -17.152,0.619c-4.809,3.972 -6.595,10.737 -7.919,16.922l-39.114,-8.371c3.921,-18.323 13.332,-36.044 29.75,-44.909c7.786,-4.204 16.679,-6.33 25.491,-6.408c0.465,-0.001 0.464,-0.001 0.929,0.003Z" />
  </svg>
)

export const SavedQuery: React.SFC<IconProps> = ({ size, color, ...props }) => (
  <svg viewBox="0 0 360 360" fill={color} width={size} height={size} {...props}>
    <path d="M320,320.188l-280,0l0,-280l196.569,0c27.81,27.81 55.621,55.62 83.431,83.431l0,196.569Zm-240,-240.001l0,200l200,0l0,-140l-60,-60c-46.667,0 -93.333,0 -140,0Zm115.001,140.715c-12.959,7.08 -28.287,10.008 -43.336,7.121c-19.985,-3.833 -37.755,-17.657 -46.48,-36.039c-8.613,-18.146 -8.14,-40.363 1.235,-58.121c10.904,-20.654 33.429,-34.511 57.129,-34.736c0.28,-0.001 0.56,-0.001 0.84,0c23.492,0.223 46.2,14.035 57.129,34.736c9.366,17.742 9.869,39.932 1.235,58.121c-0.374,0.789 -0.766,1.57 -1.174,2.34l0.421,-0.421c15.095,15.095 30.19,30.19 45.284,45.284l-28.284,28.285l-45.284,-45.285l1.285,-1.285Zm-31.201,-81.776c-10.957,0.106 -21.331,8.1 -24.077,18.762c-4.433,17.214 13.623,37.661 33.682,29.464c10.957,-4.478 17.927,-17.36 14.81,-29.464c-2.684,-10.422 -12.57,-18.513 -23.744,-18.757c-0.224,-0.004 -0.447,-0.005 -0.671,-0.005Z" />
  </svg>
)

export const Schema: React.SFC<IconProps> = ({ size, color, ...props }) => (
  <svg viewBox="0 0 360 360" fill={color} width={size} height={size} {...props}>
    <path d="M300,220.187l40,0l0,120l-120,0l0,-39.999l-80,0l0,-40l80,0l0,-40.001l40,0l0,-120l-120,0l0,-40l160,0l0,160Zm-160,120l-120,0l0,-120l120,0l0,120Zm0,-200l-120,0l0,-120l120,0l0,120Z" />
  </svg>
)

export const Search: React.SFC<IconProps> = ({ size, color, ...props }) => (
  <svg viewBox="0 0 360 360" fill={color} width={size} height={size} {...props}>
    <path d="M209.467,237.939c-26.237,18.443 -59.93,26.18 -91.803,20.17c-48.297,-9.107 -89.185,-50.116 -96.446,-100.775c-6.34,-44.238 14.102,-91.39 52.008,-116.843c19.387,-13.017 42.525,-20.115 65.998,-20.301c0.388,-0.002 0.776,-0.003 1.164,-0.002c49.06,0.233 96.258,32.682 112.944,80.486c12.503,35.82 6.427,77.42 -15.614,108.948l100.566,100.565l-28.284,28.285l-100.533,-100.533Zm-69.739,-177.751c-35.643,0.172 -69.703,26.403 -77.791,62.405c-3.871,17.232 -1.888,35.738 5.73,51.8c14.764,31.129 50.791,50.813 86.278,44.587c35.839,-6.289 65.56,-39.047 66.048,-77.747c0.389,-30.889 -18.778,-61.066 -46.898,-73.895c-10.421,-4.755 -21.729,-7.161 -33.367,-7.15Z" />
  </svg>
)

export const Share: React.SFC<IconProps> = ({ size, color, ...props }) => (
  <svg viewBox="0 0 360 360" fill={color} width={size} height={size} {...props}>
    <path d="M184.673,95.322c-7.066,-18.563 -5.895,-40.169 3.391,-57.761c11.681,-22.128 36.122,-36.982 61.038,-37.368c0.449,-0.004 0.898,-0.006 1.347,-0.004c25.571,0.248 50.278,15.496 61.875,38.119c9.724,18.969 10.155,42.423 0.946,61.842c-13.153,27.735 -45.779,44.879 -76.928,38.7c-9.796,-1.943 -19.078,-6.082 -27.162,-11.915l-34.463,26.584c6.752,16.521 6.95,35.657 0.388,52.387l34.733,27.291c11.5,-8.032 25.308,-12.788 39.264,-13.004c0.449,-0.004 0.898,-0.006 1.347,-0.004c25.571,0.248 50.278,15.496 61.875,38.119c9.724,18.969 10.155,42.423 0.946,61.842c-13.153,27.735 -45.779,44.879 -76.928,38.7c-21.038,-4.173 -39.704,-18.476 -49.234,-37.917c-8.538,-17.417 -9.235,-38.416 -2.202,-56.456l-34.821,-27.359c-15.321,10.624 -34.805,15.489 -53.743,11.732c-21.038,-4.173 -39.704,-18.476 -49.234,-37.917c-9.656,-19.697 -9.283,-43.974 0.956,-63.372c11.681,-22.128 36.122,-36.982 61.038,-37.368c0.449,-0.004 0.898,-0.006 1.347,-0.004c13.859,0.134 27.464,4.675 38.865,12.408l35.359,-27.275Zm65.13,164.866c-19.584,0.19 -36.658,22.284 -26.928,42.827c6.371,13.453 23.665,21.002 38.451,14.961c12.828,-5.241 21.096,-19.981 17.989,-34.205c-2.86,-13.088 -15.121,-23.367 -28.921,-23.581c-0.197,-0.002 -0.394,-0.002 -0.591,-0.002Zm-140,-110c-16.953,0.164 -32.231,16.5 -29.457,34.582c2.689,17.528 23.059,30.788 41.316,23.066c12.914,-5.462 21.012,-20.737 17.44,-34.971c-3.23,-12.874 -15.623,-22.717 -29.299,-22.677Zm140,-110c-19.584,0.19 -36.658,22.284 -26.928,42.827c6.371,13.453 23.665,21.002 38.451,14.961c12.828,-5.241 21.096,-19.981 17.989,-34.205c-2.86,-13.088 -15.121,-23.367 -28.921,-23.581c-0.197,-0.002 -0.394,-0.002 -0.591,-0.002Z" />
  </svg>
)

export const SortAscending: React.SFC<IconProps> = ({ size, color, ...props }) => (
  <svg viewBox="0 0 360 360" fill={color} width={size} height={size} {...props}>
    <path d="M100,243.903l22.858,-22.858c9.428,9.428 18.856,18.856 28.284,28.285l-71.142,71.142l-71.142,-71.142l28.284,-28.285l22.858,22.858l0,-203.716l40,0.001l0,203.715Zm240,76.285l-160,0l0,-40l160,0l0,40Zm-40,-80.001l-120,0l0,-40l120,0l0,40Zm-40,-79.999l-80,0l0,-40l80,0l0,40Zm-40,-80l-40,0l0,-40l40,0l0,40Z" />
  </svg>
)

export const SortDescending: React.SFC<IconProps> = ({ size, color, ...props }) => (
  <svg viewBox="0 0 360 360" fill={color} width={size} height={size} {...props}>
    <path d="M60,116.472l-22.858,22.858l-28.284,-28.285l71.142,-71.142c23.714,23.714 47.428,47.428 71.142,71.142l-28.284,28.285l-22.858,-22.858l0,203.716l-40,0l0,-203.716Zm160,203.716l-40,0l0,-40l40,0l0,40Zm40,-80l-80,0l0,-40l80,0l0,40Zm40,-80l-120,0l0,-40l120,0l0,40Zm40,-80l-160,0l0,-40l160,0l0,40Z" />
  </svg>
)

export const Sql: React.SFC<IconProps> = ({ size, color, ...props }) => (
  <svg viewBox="0 0 360 360" fill={color} width={size} height={size} {...props}>
    <path d="M215.733,235.537c-8.52,4.92 -18.9,7.38 -31.14,7.38c-9.84,0 -18.69,-1.71 -26.55,-5.13c-7.86,-3.42 -14.49,-8.13 -19.89,-14.13c-5.4,-6 -9.54,-13.05 -12.42,-21.15c-2.88,-8.1 -4.32,-16.83 -4.32,-26.19c0,-9.6 1.44,-18.51 4.32,-26.73c2.88,-8.22 7.02,-15.39 12.42,-21.51c5.4,-6.12 12.03,-10.92 19.89,-14.4c7.86,-3.48 16.71,-5.22 26.55,-5.22c9.96,0 18.84,1.74 26.64,5.22c7.8,3.48 14.4,8.28 19.8,14.4c5.4,6.12 9.54,13.29 12.42,21.51c2.88,8.22 4.32,17.13 4.32,26.73c0,9.36 -1.44,18.06 -4.32,26.1c-2.88,8.04 -7.02,15.12 -12.42,21.24l16.02,14.58l-13.14,13.68l-18.18,-16.38Zm-186.3,-38.16c0.001,4.321 0.781,7.981 2.34,10.98c1.56,3 3.63,5.43 6.21,7.29c2.58,1.86 5.61,3.24 9.09,4.14c3.48,0.9 7.08,1.35 10.8,1.35c2.52,0 5.22,-0.21 8.1,-0.63c2.88,-0.42 5.58,-1.23 8.1,-2.43c2.52,-1.2 4.62,-2.85 6.3,-4.95c1.68,-2.1 2.52,-4.77 2.52,-8.01c0,-3.48 -1.11,-6.3 -3.33,-8.46c-2.22,-2.16 -5.13,-3.96 -8.73,-5.4c-3.6,-1.44 -7.68,-2.7 -12.24,-3.78c-4.56,-1.08 -9.18,-2.28 -13.86,-3.6c-4.8,-1.2 -9.48,-2.67 -14.04,-4.41c-4.56,-1.74 -8.64,-3.99 -12.24,-6.75c-3.6,-2.76 -6.51,-6.21 -8.73,-10.35c-2.22,-4.14 -3.33,-9.15 -3.33,-15.03c0,-6.6 1.41,-12.33 4.23,-17.19c2.82,-4.86 6.51,-8.91 11.07,-12.15c4.56,-3.24 9.72,-5.64 15.48,-7.2c5.76,-1.56 11.52,-2.34 17.28,-2.34c6.72,0 13.17,0.75 19.35,2.25c6.18,1.5 11.67,3.93 16.47,7.29c4.8,3.36 8.61,7.65 11.43,12.87c2.82,5.22 4.23,11.55 4.23,18.99l-27.36,0c-0.24,-3.84 -1.05,-7.02 -2.43,-9.54c-1.38,-2.52 -3.21,-4.5 -5.49,-5.94c-2.28,-1.44 -4.89,-2.46 -7.83,-3.06c-2.94,-0.6 -6.15,-0.9 -9.63,-0.9c-2.28,0 -4.56,0.24 -6.84,0.72c-2.28,0.48 -4.35,1.32 -6.21,2.52c-1.86,1.2 -3.39,2.7 -4.59,4.5c-1.2,1.8 -1.8,4.08 -1.8,6.84c0,2.52 0.48,4.56 1.44,6.12c0.96,1.56 2.85,3 5.67,4.32c2.82,1.32 6.72,2.64 11.7,3.96c4.98,1.32 11.49,3 19.53,5.04c2.4,0.48 5.73,1.35 9.99,2.61c4.26,1.26 8.49,3.27 12.69,6.03c4.2,2.76 7.83,6.45 10.89,11.07c3.06,4.62 4.59,10.53 4.59,17.73c0,5.88 -1.14,11.34 -3.42,16.38c-2.28,5.04 -5.67,9.39 -10.17,13.05c-4.5,3.66 -10.08,6.51 -16.74,8.55c-6.66,2.04 -14.37,3.06 -23.13,3.06c-7.08,0 -13.95,-0.87 -20.61,-2.61c-6.66,-1.74 -12.54,-4.47 -17.64,-8.19c-5.1,-3.72 -9.15,-8.46 -12.15,-14.22c-2.999,-5.759 -4.439,-12.599 -4.32,-20.52l27.36,0Zm265.86,-85.86l0,104.76l62.64,0l0,23.76l-90.9,0l0,-128.52l28.26,0Zm-83.7,94.32c2.4,-3.24 4.32,-7.26 5.76,-12.06c1.44,-4.8 2.16,-10.62 2.16,-17.46c0,-5.64 -0.63,-11.1 -1.89,-16.38c-1.26,-5.28 -3.27,-9.99 -6.03,-14.13c-2.76,-4.14 -6.36,-7.44 -10.8,-9.9c-4.44,-2.46 -9.84,-3.69 -16.2,-3.69c-6.36,0 -11.76,1.23 -16.2,3.69c-4.44,2.46 -8.04,5.76 -10.8,9.9c-2.76,4.14 -4.77,8.85 -6.03,14.13c-1.26,5.28 -1.89,10.74 -1.89,16.38c0,5.4 0.63,10.65 1.89,15.75c1.26,5.1 3.27,9.69 6.03,13.77c2.76,4.08 6.36,7.35 10.8,9.81c4.44,2.46 9.84,3.69 16.2,3.69c3,0 5.28,-0.12 6.84,-0.36c1.56,-0.24 3.06,-0.72 4.5,-1.44l-12.06,-10.98l13.14,-14.04l14.58,13.32Z" />
  </svg>
)

export const Sync: React.SFC<IconProps> = ({ size, color, ...props }) => (
  <svg viewBox="0 0 360 360" fill={color} width={size} height={size} {...props}>
    <path d="M244.928,256.084l-28.413,-3.489l4.875,-39.701c26.138,3.209 52.277,6.418 78.415,9.628l17.772,76.979l-38.975,8.998l-5.499,-23.822c-13.317,11.965 -28.854,21.393 -45.639,27.518c-37.75,13.774 -81.377,10.21 -116.43,-9.46c-21.78,-12.222 -40.151,-30.379 -52.712,-52.034l34.6,-20.071c19.451,33.533 59.37,54.234 99.035,49.261c19.508,-2.445 38.08,-11.008 52.971,-23.807Zm-158.898,-179.243c24.304,-21.626 56.016,-34.998 88.841,-36.097c1.752,-0.059 3.506,-0.08 5.26,-0.077c47.58,0.308 93.509,25.894 118.56,66.485c0.709,1.149 1.399,2.31 2.077,3.478l-34.6,20.071c-22.056,-38.021 -70.544,-58.733 -114.259,-46.131c-13.92,4.013 -26.883,11.182 -37.838,20.667l28.504,3.499l-4.875,39.702l-78.415,-9.628l-17.773,-76.979l38.975,-8.998l5.543,24.008Z" />
  </svg>
)

export const Unlock: React.SFC<IconProps> = ({ size, color, ...props }) => (
  <svg viewBox="0 0 360 360" fill={color} width={size} height={size} {...props}>
    <path d="M90.69,88c3.905,-28.803 24.022,-55.156 52.26,-65.305c8.799,-3.163 18.049,-4.726 27.564,-4.693c32.922,0.302 64.025,22.372 74.958,53.416c2.941,8.352 4.442,17.158 4.526,26.068l0.065,20.451l-40,0.126c-0.038,-11.915 1.325,-23.803 -2.655,-34.273c-5.933,-15.606 -22.445,-26.491 -39.229,-25.75c-20.086,0.887 -37.981,18.781 -38.178,39.698l-0.001,0.293l0,79.969l160,0l0,140l-240,0l0,-140l40,0l0,-60.063l-0.063,0l0.063,-19.968l0,-9.969l0.69,0Z" />
  </svg>
)

export const User: React.SFC<IconProps> = ({ size, color, ...props }) => (
  <svg viewBox="0 0 360 360" fill={color} width={size} height={size} {...props}>
    <path d="M300,280.187c0,-21.217 -8.429,-41.565 -23.431,-56.568c-15.003,-15.003 -35.352,-23.432 -56.569,-23.432c-25.742,0 -54.258,0 -80,0c-21.217,0 -41.566,8.429 -56.569,23.432c-15.002,15.003 -23.431,35.351 -23.431,56.568c0,22.032 0,40 0,40l240,0c0,0 0,-17.968 0,-40Zm-120,-240c41.394,0 75,33.607 75,75c0,41.394 -33.606,75 -75,75c-41.394,0 -75,-33.606 -75,-75c0,-41.393 33.606,-75 75,-75Z" />
  </svg>
)

export const Undo: React.SFC<IconProps> = ({ size, color, ...props }) => (
  <svg viewBox="0 0 360 360" fill={color} width={size} height={size} {...props}>
    <path d="M78.588,184.432c25.536,-41.571 71.855,-70.576 123.881,-71.171c0.642,-0.006 1.283,-0.008 1.924,-0.008c49.195,0.169 97.496,26.852 123.857,68.783c7.741,12.315 13.605,25.791 17.405,39.876l-38.619,10.42c-9.72,-36.026 -39.576,-66.151 -76.479,-75.704c-40.104,-10.381 -85.749,5.027 -111.516,38.902c-2.288,3.008 -4.412,6.139 -6.364,9.376l58.016,-4.057l2.791,39.902l-102.397,7.161l-54.394,-87.049l33.922,-21.197l27.973,44.766Z" />
  </svg>
)

export const Users: React.SFC<IconProps> = ({ size, color, ...props }) => (
  <svg viewBox="0 0 360 360" fill={color} width={size} height={size} {...props}>
    <path d="M259.172,308.973l-160,0c0,0 0,-11.239 0,-25.571c0,-33.137 26.863,-60 60,-60c13.079,0 26.921,0 40,0c33.137,0 60,26.863 60,60l0,25.571Zm-160.845,-63l-98.327,0c0,0 0,-11.239 0,-25.571c0,-33.137 26.863,-60 60,-60c13.079,0 26.921,0 40,0c6.73,0 13.202,1.108 19.192,3.192l-0.02,0.808c0,23.393 13.416,43.676 32.967,53.571l-3.119,0c-21.354,0 -40.102,11.155 -50.693,28Zm261.673,0l-99.984,0c-10.59,-16.845 -29.338,-28 -50.692,-28l-3.119,0c19.551,-9.894 32.967,-30.178 32.967,-53.571l-0.005,-0.208c6.467,-2.475 13.496,-3.792 20.833,-3.792c13.079,0 26.921,0 40,0c33.137,0 60,26.863 60,60l0,25.571Zm-180.828,-131.571c27.596,0 50,22.404 50,50c0,27.596 -22.404,50 -50,50c-27.596,0 -50,-22.404 -50,-50c0,-27.596 22.404,-50 50,-50Zm100.828,-63c27.596,0 50,22.404 50,50c0,27.596 -22.404,50 -50,50c-27.596,0 -50,-22.404 -50,-50c0,-27.596 22.404,-50 50,-50Zm-200,0c27.596,0 50,22.404 50,50c0,27.596 -22.404,50 -50,50c-27.596,0 -50,-22.404 -50,-50c0,-27.596 22.404,-50 50,-50Z" />
  </svg>
)

export const Yes: React.SFC<IconProps> = ({ size, color, ...props }) => (
  <svg viewBox="0 0 360 360" fill={color} width={size} height={size} {...props}>
    <path d="M343.142,83.33l-214.142,214.142l-114.142,-114.142l28.284,-28.285l85.858,85.858l185.858,-185.858c9.428,9.428 18.856,18.857 28.284,28.285Z" />
  </svg>
)
