function List() {
  this.listSize = 0;
  this.pos = 0;
  this.dataStore = []; // initializes an empty array to store list elements
  this.clear = clear;
  this.find = find;
  this.toString = toString;
  this.insert = insert;
  this.append = append;
  this.remove = remove;
  this.front = front;
  this.end = end;
  this.prev = prev;
  this.next = next;
  this.length = length;
  this.currPos = currPos;
  this.moveTo = moveTo;
  this.getElement = getElement;
  this.length = length;
  this.contains = contains;
}


function append(element){
  this.dataStore[this.listSize++] = element
}

function find(element){
  for (let i = 0 ; i < this.dataStore.length; i++){
    if (this.dataStore[i] == element){
      return i
    }
  }
  return -1;
}

function remove(element){
  var foundA
}
































//
