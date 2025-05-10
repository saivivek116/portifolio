class MaxHeap{
    constructor(maxSize){
        this.arr = new Array(maxSize).fill(null);
        this.maxSize = maxSize;
        this.heapSize = 0;
    }

    lChild(i){
        return 2*i+1
    }
    rChild(i){
        return 2*i+2
    }

    parent(i){
        return Math.floor((i-1)/2)
    }

    maxHeapify(i){
        const l = this.lChild(i);
        const r = this.rChild(i);
        let largest = i;
        if(l<this.heapSize && this.arr[l]>this.arr[largest]){
            largest = l;
        }
        if(r<this.heapSize && this.arr[r]>this.arr[largest]){
            largest = r
        }
        if(largest!==i){
            let temp = this.arr[i]
            this.arr[i] = this.arr[largest];
            this.arr[largest] = temp;
            this.maxHeapify(largest);
        }
    }

    insertKey(x){
        if(this.heapSize === this.maxSize){
            console.log("size is full")
            return;
        }
        
        let i = this.heapSize;
        this.arr[i] = x;
        this.heapSize+=1

        while(i!==0 && this.arr[this.parent(i)]<this.arr[i]){
            const temp = this.arr[i];
            this.arr[i] = this.arr[this.parent(i)]
            this.arr[this.parent(i)] = temp;
            i = this.parent(i);
        }

    }

    deleteKey(i){
        this.increaseKey(i, Infinity);
        this.removeMax();
    }

    getMax(){
        return this.arr[0];
    }

    currSize(){
        return this.heapSize;
    }

    removeMax(){
        if(this.heapSize===0){
            return;
        }
        let i = this.heapSize-1;
        if(i===0){
            this.heapSize-=1
            return this.heapSize[0];
        }

        let value = this.arr[0];
        this.arr[0] = this.arr[this.heapSize-1];
        this.heapSize-=1
        this.maxHeapify(0);
        return value;
    }

    increaseKey(i, newVal){
        this.arr[i] = newVal;
        // this.maxHeapify(i)
        while(i!==0 && this.arr[i]>this.arr[this.parent(i)]){
            let temp = this.arr[i];
            this.arr[i] = this.arr[this.parent(i)]
            this.arr[this.parent(i)] = temp;
            i = this.parent(i);
        }
    }

}

const h = new MaxHeap(15);

// Asking the user to input the keys:
console.log("Entered 6 keys:- 3, 10, 12, 8, 2, 14 \n");

h.insertKey(3);
h.insertKey(10);
h.insertKey(12);
h.insertKey(8);
h.insertKey(2);
h.insertKey(14);

console.log(
    "The current size of the heap is " + h.currSize() + "\n"
);


// Printing the root element which is
// actually the maximum element.
console.log(
    "The current maximum element is " + h.getMax() + "\n"
);


// Deleting key at index 2.
h.deleteKey(2);


// Printing the size of the heap
// after deletion.
console.log(
    "The current size of the heap is " + h.currSize() + "\n"
);


// Inserting 2 new keys into the heap.
h.insertKey(15);
h.insertKey(5);

console.log(
    "The current size of the heap is " + h.currSize() + "\n"
);

console.log(
    "The current maximum element is " + h.getMax() + "\n"
);