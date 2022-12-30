import KUTE from 'kute.js'
const tween = KUTE.fromTo(
    '#blob1',
    {path: '#blob1'}, 
    {path: '#blob2'},
    {repeat:0, duration: 6000, morphPrecision: 3}
    )
    const tween2 = KUTE.fromTo(
        '#blob1',
        {path: '#blob2'}, 
        {path: '#blob3'},
        {repeat:0, duration: 6000, morphPrecision: 3}
    )
    const tween3 = KUTE.fromTo(
        '#blob1',
        {path: '#blob3'}, 
        {path: '#blob1'},
        {repeat:0, duration: 6000, morphPrecision: 3}
    )
    // const tween4 = KUTE.fromTo(
    //     '#blob1',
    //     {path: '#blob4'}, 
    //     {path: '#blob1'},
    //     {repeat:0, duration: 6000, morphPrecision: 3}
    // )
    tween.chain(tween2)
    tween2.chain(tween3)
    tween3.chain(tween)
    // tween4.chain(tween)
    tween.start()


//     <!-- <svg id="visual" stroke='black' stroke-width="1" viewBox="0 0 900 600" width="900"
//     xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1">
//     <g transform="translate(447.7935713208648 264.81707631318375)">
//         <path id="blob1"
//             d="M105.7 -107.9C140.7 -70.7 175.4 -35.4 177.2 1.9C179.1 39.1 148.3 78.3 113.3 128.3C78.3 178.3 39.1 239.1 -14 253.2C-67.2 267.2 -134.4 234.4 -159.7 184.4C-185 134.4 -168.5 67.2 -154.6 13.9C-140.7 -39.4 -129.4 -78.7 -104.1 -115.9C-78.7 -153.1 -39.4 -188 -2 -186C35.4 -184 70.7 -145 105.7 -107.9"
//             fill="#F5F4FF"></path>
//     </g>
//     <g transform="translate(451.69695346965307 251.46711582994442)" style="visibility: hidden">
//         <path id="blob2"
//             d="M134.7 -112.3C184 -85.3 240 -42.7 249.2 9.2C258.4 61 220.8 122.1 171.4 167.4C122.1 212.8 61 242.4 -2.2 244.6C-65.5 246.9 -131.1 221.7 -181.1 176.4C-231.1 131.1 -265.5 65.5 -250.4 15.1C-235.4 -35.4 -170.7 -70.7 -120.7 -97.7C-70.7 -124.7 -35.4 -143.4 3.7 -147C42.7 -150.7 85.3 -139.3 134.7 -112.3"
//             fill="#F5F4FF"></path>
//     </g>
//     <g transform="translate(486.0750939813049 241.04246863860283)" style="visibility: hidden">
//         <path id="blob3"
//             d="M115.5 -116.7C140.5 -90.5 145.3 -45.3 158 12.7C170.7 70.7 191.4 141.4 166.4 190.8C141.4 240.1 70.7 268 2.2 265.8C-66.2 263.6 -132.5 231.1 -181 181.8C-229.5 132.5 -260.2 66.2 -247.4 12.8C-234.5 -40.5 -178.1 -81.1 -129.6 -107.2C-81.1 -133.4 -40.5 -145.2 2.4 -147.6C45.3 -149.9 90.5 -142.8 115.5 -116.7"
//             fill="#F5F4FF"></path>
//     </g>
//     <g transform="translate(447.22591350112583 257.7011114059696)" style="visibility: hidden">
//         <path id="blob4"
//             d="M99.7 -110.2C135.2 -89.1 174 -63.3 193.2 -23.7C212.5 15.8 212.4 69.2 191.2 114.6C170 160 127.7 197.4 75.3 224C22.8 250.6 -39.9 266.2 -93.4 249.8C-146.9 233.3 -191.2 184.6 -200.1 133.1C-208.9 81.5 -182.3 27 -169.3 -27C-156.4 -81.1 -157.3 -134.8 -131.4 -157.5C-105.4 -180.3 -52.7 -172.1 -10.3 -159.9C32.1 -147.6 64.3 -131.3 99.7 -110.2"
//             fill="#F5F4FF"></path>
//     </g>
// </svg>