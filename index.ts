import * as cheerio from 'cheerio'
import leftPadOnce from './myMod'

function greet(name: string) {
    console.log(`Hello ${name} via Bun!`);
}

greet("Ernie")

// not allowed to pass void or undefined
// greet(greet("Bert"))
// greet(undefined)

// functions in our modules are checked
greet(leftPadOnce("Count"))

// but builtin modules aren't
const person = JSON.parse('{"name": null}')
greet(person)
greet(person.name)

// and neither are external dependencies
greet(cheerio.load("<div>hiii</div>").root().data())
