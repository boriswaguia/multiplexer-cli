# Compiler

[[Compiler](https://en.wikipedia.org/wiki/Compiler)](https://en.wikipedia.org/wiki/Compiler)

A parser is a software that take input text and generate a data structure.

This package contains sources for parsing the `logic` language.

There are three phasis executed in the following order:

1. Preprocessing
2. Lexical analysis
3. Syntactic analysis
4. Semantic analysis

## Preprocessing

* Remove comment
* Remove empty lines

## Lexical Analysis

* Transform the results of the preprocessing into tokens
* Verify the grammar is correct


## Syntactic analysis

* Transform the created tokens into an Abstract Syntax Three (AST)

## Semantic analysis

* Validate the abstract syntax three correctness
