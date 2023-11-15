import reactImage from '../assets/react.png'
import mongodbImage from '../assets/mongodb.png'
import pythonImage from '../assets/python.png'
import nodeImage from '../assets/node.png'
import reduxImage from '../assets/redux.png'
import github from '../assets/github.png'
import gmail from '../assets/gmail.png'
import linkedin from '../assets/linkedin.png'
import twitter from '../assets/twitter.png'

interface ImageMap {
  [key: string]: string
}



export const images: ImageMap = {
  react: reactImage,
  mongodb: mongodbImage,
  python: pythonImage,
  node: nodeImage,
  redux: reduxImage,
  Github:github , 
  Linkedin:linkedin , 
  Twitter:twitter , 
  Gmail:gmail
}
