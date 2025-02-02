import { describe, it, expect } from "vitest";
import {reverse, isPalindrome, wordCount, characterFrequency, toTitleCase, trim} from ".";

describe('reverse', ()=>{
    it('should return pass a valid argument if nothing is passed', ()=>{
        expect(reverse()).toBe('pass a valid argument')
    })
    it('should return the character if it is only one letter', ()=>{
        expect(reverse('a')).toBe('a')
    })
    it('should return the reverse of words or statement if it is more than one letter', ()=>{
        expect(reverse('Ada is a girl')).toBe('lrig a si adA')
    })
})

describe('isPalindrome', ()=>{
    it('should return pass a valid argument if nothing is passed', ()=>{
        expect(isPalindrome()).toBe('pass a valid argument')
    })
    it('should return the false if world does not mean the same when spelt backword', ()=>{
        expect(isPalindrome('ador')).toBe(false)
    })
    it('should return the true if world mean the same if spelt backword', ()=>{
        expect(isPalindrome('ada')).toBe(true)
    })
})

describe('wordCount', ()=>{
    it('should return 0 if nothing is passed', ()=>{
        expect(wordCount()).toBe('pass a valid argument')
    })
    it('should return number of words if statement is passed', ()=>{
        expect(wordCount('ada is a girl')).toBe(4)
    })
})

describe('characterFrequency', ()=>{
    it('should return pass a valid argument if nothing is passed', ()=>{
        expect(characterFrequency()).toBe('pass a valid argument')
    })
    it('should return number of words if statement is passed', ()=>{
        expect(characterFrequency('adaaad')).toStrictEqual({a: 4, d: 2})
    })
})

describe('toTitleCase', () => {
    it('should return pass a valid argument if nothing is passed', () => {
        expect(toTitleCase()).toBe('pass a valid argument')
    })
    it('should return string with capitalization', () => {
        expect(toTitleCase('Hello an word umunne')).toBe('Hello an Word Umunne')
    })
})

describe('trim', () => {
    it('should return pass a valid argument if nothing is passed', () => {
        expect(trim()).toBe('pass a valid argument')
    })
    it('should return string with capitalization', () => {
        expect(trim('    Ada is a girl   ')).toBe('Ada is a girl')
    })
})