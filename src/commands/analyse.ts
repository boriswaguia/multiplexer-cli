import {Command, flags} from '@oclif/command'
import {extname, basename} from 'path'
import {analyseFile} from '../app/commands-services/anaylse.service'
import {decisionModelToCsvString} from '../app/export/csv-exporter.service'
import {writeFileSync} from 'fs'

export default class Analyse extends Command {
  static description = 'Analyse a given logic file and print a csv result'

  static examples = [
    `$ multiplexer analyse
  analyse world from ./src/hello.ts!
`,
  ]

  static flags = {
    help: flags.help({char: 'h'}),
    format: flags.string({char: 'o', description: 'A preferred output result of the analysis. Default is .csv'}),
    name: flags.string({char: 'n', description: 'A preferred output file name'}),
  }

  static args = [{name: 'file', required: true, description: 'A .logic file to analyse'}];

  private supported = ['csv', 'json'];

  async run() {
    const {args, flags} = this.parse(Analyse)

    // read and validate file Name
    const file = args.file
    console.log('file', file)
    console.log('extname(file)', extname(file))
    if (extname(file) !== '.logic') {
      throw new Error('Please provide a .logic file')
    }
    const inputFileBaseName = basename(file)
    const outputFormat = this.supported.find(f => f === flags.format) ?? 'csv'
    console.log('Selected output format:', outputFormat)
    const outputName = flags.name || `${inputFileBaseName}.${outputFormat}`

    console.log('analysing...')
    const verificationModel = analyseFile(file)
    let fileBody: string | undefined
    console.log('generating output...')
    if (outputFormat === 'csv') {
      fileBody = decisionModelToCsvString(verificationModel)
    }

    if (outputFormat === 'json') {
      fileBody = JSON.stringify(verificationModel)
    }

    writeFileSync(outputName, fileBody, {encoding: 'UTF-8'})
    console.log(`Execution completed. File '${outputName}' was created.`)
  }
}
