export class Matrix {
  private rows;
  private cols;

  public data;

  public static multiply(a, b) {
    if (a.cols !== b.rows) {
      console.error('Columns of A must match rows of B');
      return undefined;
    }

    const result = new Matrix(a.rows, b.cols);

    for (let i = 0; i < result.rows; i++) {
      for (let j = 0; j < result.cols; j++) {
        // Dot product of values in col

        let sum = 0;
        for (let k = 0; k < a.cols; k++) {
          sum += a.data[i][k] * b.data[k][j];
        }

        result.data[i][j] = sum;
      }
    }

    return result;
  }

  public static fromArray(arr) {
    const m = new Matrix(arr.length, 1);
    for (let i = 0; i < arr.length; i++) {
      m.data[i][0] = arr[i];
    }

    return m;
  }

  public static substract(a: Matrix, b: Matrix): Matrix {
    const result = new Matrix(a.rows, a.cols);

    for (let i = 0; i < result.rows; i++) {
      for (let j = 0; j < result.cols; j++) {
        result.data[i][j] = a.data[i][j] - b.data[i][j];
      }
    }

    return result;
  }

  public static transpose(matrix: Matrix) {
    const result = new Matrix(matrix.cols, matrix.rows);

    for (let i = 0; i < matrix.rows; i++) {
      for (let j = 0; j < matrix.cols; j++) {
        result.data[j][i] = matrix.data[i][j];
      }
    }

    return result;
  }

  public static map(
    matrix,
    predicate: (value: number, x?: number, y?: number) => number
  ) {
    const result = new Matrix(matrix.rows, matrix.cols);
    result.map((e, i, j) => predicate(matrix.data[i][j], i, j));

    return result;
  }

  constructor(rows, cols) {
    this.rows = rows;
    this.cols = cols;

    this.data = [];

    for (let i = 0; i < this.rows; i++) {
      this.data[i] = [];

      for (let j = 0; j < this.cols; j++) {
        this.data[i][j] = 0;
      }
    }
  }

  public randomize() {
    for (let i = 0; i < this.rows; i++) {
      for (let j = 0; j < this.cols; j++) {
        this.data[i][j] = Math.random() * 2 - 1;
      }
    }
  }

  public toArray() {
    const arr = [];

    for (let i = 0; i < this.rows; i++) {
      for (let j = 0; j < this.cols; j++) {
        arr.push(this.data[i][j]);
      }
    }

    return arr;
  }

  public map(predicate: (value: number, x?: number, y?: number) => number) {
    if (!(predicate instanceof Function)) {
      throw new Error('predicator must be a function');
    }

    for (let i = 0; i < this.rows; i++) {
      for (let j = 0; j < this.cols; j++) {
        this.data[i][j] = predicate(this.data[i][j], i, j);
      }
    }

    return this;
  }

  public multiply(n) {
    if (n instanceof Matrix) {
      // hadamard product
      return this.map((e, i, j) => e * n.data[i][j]);
    } else {
      // Scalar product
      for (let i = 0; i < this.rows; i++) {
        for (let j = 0; j < this.cols; j++) {
          this.data[i][j] *= n;
        }
      }
    }
  }

  public add(n) {
    if (n instanceof Matrix) {
      for (let i = 0; i < this.rows; i++) {
        for (let j = 0; j < this.cols; j++) {
          this.data[i][j] += n.data[i][j];
        }
      }
    } else {
      for (let i = 0; i < this.rows; i++) {
        for (let j = 0; j < this.cols; j++) {
          this.data[i][j] += n;
        }
      }
    }
  }

  public print() {
    console.table(this.data);
  }
}