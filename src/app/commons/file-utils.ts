import {FileExtention} from './constant'
import {writeFileSync} from 'fs'

export const saveToFile = (filename: string, body: string, extension: FileExtention) => {
  writeFileSync(`${filename}.${extension}`, body, {encoding: 'UTF-8'})
}
