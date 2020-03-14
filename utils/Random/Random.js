class Random{
    // sets the seed for the random generator
    constructor(seed=null){
        this.seed = (seed) ? this.xmur3(seed.toString()): this.xmur3("apple");
    }

    // generates a random decimal.
    random(){
        let rand = this.mulberry32(this.seed());
        return rand();
    }

    // generates a integer within a range
    randomInt(min, max){
        return Math.floor(this.random() * (max - min + 1)) + min
    }

    // geneate a decimal in a range
    randomDecimal(min, max){
        return this.random() * (max - min) + min
    }

    static randomArrayOfIntegers(seed, N, min, max){
        let arr = [];
        const rand = new Random(seed);
        for(let i=0; i<N; i++){
            arr.push(rand.randomInt(min, max))
        }
        return arr;
    }

    static randomArrayOfDecimals(seed, N, min, max){
        let arr = [];
        const rand = new Random(seed);
        for(let i=0; i<N; i++){
            arr.push(rand.randomDecimal(min, max))
        }
        return arr;
    }

    static randomElementFromArray(array, seed=null, generator=null){
        console.log(array.length)
        if(array.length == 0) throw new Error("Empty Array");
        if(!generator){
            generator = new Random(seed)
        }
        let index = generator.randomInt(0, array.length-1)
        return array[index]
    }

    static nRandomElementsFromArray(array, N, seed=null){        
        const arr = []
        const generator = new Random(seed)
        try {
            for(let i=0; i<N; i++){
                arr.push(Random.randomElementFromArray(array, seed, generator))
            }
        } catch (error) {
            throw error
        }      
        return arr
    }

    xmur3(str) {
        for(var i = 0, h = 1779033703 ^ str.length; i < str.length; i++)
            h = Math.imul(h ^ str.charCodeAt(i), 3432918353),
            h = h << 13 | h >>> 19;
        return function() {
            h = Math.imul(h ^ h >>> 16, 2246822507);
            h = Math.imul(h ^ h >>> 13, 3266489909);
            return (h ^= h >>> 16) >>> 0;
        }
    }

    mulberry32(a) {
        return function() {
          var t = a += 0x6D2B79F5;
          t = Math.imul(t ^ t >>> 15, t | 1);
          t ^= t + Math.imul(t ^ t >>> 7, t | 61);
          return ((t ^ t >>> 14) >>> 0) / 4294967296;
        }
    }

}

module.exports = Random;