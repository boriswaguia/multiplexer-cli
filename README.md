multiplexer
===========

Systems specifications correctness verifier

[![oclif](https://img.shields.io/badge/cli-oclif-brightgreen.svg)](https://oclif.io)
[![Version](https://img.shields.io/npm/v/multiplexer.svg)](https://npmjs.org/package/multiplexer)
[![CircleCI](https://circleci.com/gh/boriswaguia/multiplexer/tree/master.svg?style=shield)](https://circleci.com/gh/boriswaguia/multiplexer/tree/master)
[![Codecov](https://codecov.io/gh/boriswaguia/multiplexer/branch/master/graph/badge.svg)](https://codecov.io/gh/boriswaguia/multiplexer)
[![Downloads/week](https://img.shields.io/npm/dw/multiplexer.svg)](https://npmjs.org/package/multiplexer)
[![License](https://img.shields.io/npm/l/multiplexer.svg)](https://github.com/boriswaguia/multiplexer/blob/master/package.json)

<!-- toc -->
* [Usage](#usage)
* [Commands](#commands)
<!-- tocstop -->
# Usage
<!-- usage -->
```sh-session
$ npm install -g multiplexer
$ multiplexer COMMAND
running command...
$ multiplexer (-v|--version|version)
multiplexer/0.0.1 darwin-x64 node-v12.13.0
$ multiplexer --help [COMMAND]
USAGE
  $ multiplexer COMMAND
...
```
<!-- usagestop -->
# Commands
<!-- commands -->
* [`multiplexer hello [FILE]`](#multiplexer-hello-file)
* [`multiplexer help [COMMAND]`](#multiplexer-help-command)

## `multiplexer hello [FILE]`

describe the command here

```
USAGE
  $ multiplexer hello [FILE]

OPTIONS
  -f, --force
  -h, --help       show CLI help
  -n, --name=name  name to print

EXAMPLE
  $ multiplexer hello
  hello world from ./src/hello.ts!
```

_See code: [src/commands/hello.ts](https://github.com/boriswaguia/multiplexer/blob/v0.0.1/src/commands/hello.ts)_

## `multiplexer help [COMMAND]`

display help for multiplexer

```
USAGE
  $ multiplexer help [COMMAND]

ARGUMENTS
  COMMAND  command to show help for

OPTIONS
  --all  see all commands in CLI
```

_See code: [@oclif/plugin-help](https://github.com/oclif/plugin-help/blob/v2.2.3/src/commands/help.ts)_
<!-- commandsstop -->
