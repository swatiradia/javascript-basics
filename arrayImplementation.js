

class arrayImplementation{
    constructor(){
        this.length = 0;
        this. data = {};
    }

    get(index){
        return this.data[index];
    }

    push(item){
        this.data[this.length] = item;
        this.length++;
        return this.length;
    }

    pop(item){
        const lastItem = this.data[this.length-1];
        delete this.data[this.length-1];
        this.length--;
        return lastItem;
    }

    delete(index){
        for(let i = index ; i < this.length; i++){
            this.data[i] = this.data[i +1]
        }
        delete this.data[this.length-1];
        this.length--;
    }

    shiftItems(index){
        for(let i = index; i < this.length-1; i++){
            this.data[i] = this.data[i+1];
        }
       delete this.data[this.length -1];
       this.length--;
    }
}

const newArray = new arrayImplementation();
newArray.push('hi');
console.log(newArray)
newArray.push('you');
console.log(newArray)
newArray.push('!');
console.log(newArray)
newArray.delete(0);
console.log(newArray)

