import reactImage from '../assets/react.png'
import mongodbImage from '../assets/mongodb.png'
import pythonImage from '../assets/python.png'
import nodeImage from '../assets/node.png'
import reduxImage from '../assets/redux.png'

interface ImageMap {
  [key: string]: string
}

export const imageName: string[] = [
  'react',
  'mongodb',
  'node',
  'redux',
  'python',
  'SystemDesign',
  'SQL',
  'AWS',
  'Javascript',
  'typescript',
  'c/c++',
  'ML',
  'NLP',
]

export const images: ImageMap = {
  react: reactImage,
  mongodb: mongodbImage,
  python: pythonImage,
  node: nodeImage,
  redux: reduxImage,
}
