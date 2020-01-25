const Heap = require('collections/heap'); //http://www.collectionsjs.com


class Point {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }

    // used for max-heap
    compare(other) {
        return this.distance_from_origin() - other.distance_from_origin();
    }

    distance_from_origin() {
        // ignoring sqrt to calculate the distance
        return (this.x * this.x) + (this.y * this.y);
    }

    print_point() {
        process.stdout.write(`[${this.x}, ${this.y}] `);
    }
}


function find_closest_points(points, k) {
    const maxHeap = new Heap();

    for(let i = 0; i < k; i ++) {
        maxHeap.push(points[i])
    }

    for(let i = k; i < points.length; i ++) {
        let p1 = points[i];
        let p2 = maxHeap.peek();
        if (p1.compare(p2) < 0) {
            maxHeap.pop();
            maxHeap.push(p1);
        }
    }

    return maxHeap.toArray();
}

const result = find_closest_points([new Point(1, 3), new Point(3, 4), new Point(2, -1)], 2);
process.stdout.write('Here are the k points closest the origin: ');
result.forEach(p => p.print_point());
