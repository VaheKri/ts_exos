class Queue<T> {
    private elements: T[] = [];
  
    constructor() {
      this.elements = [];
    }
  
    isEmpty(): boolean {
      return this.elements.length === 0;
    }

    enqueue(element: T) {
        this.elements.push(element);
    }
  
    dequeue(): any {
      if (this.isEmpty()) {
        return null;
      } else {
        return this.elements.shift();
      }
    }

    size(): number {
        return this.elements.length;
    }
}