# React + TypeScript + Vite


# TypeScript React Demo

This project demonstrates the use of **TypeScript** features within a React application. Below are the key concepts and their implementations in the code.

## 🚀 Types & Interfaces

### Type Definitions

```typescript
type Person = {
  name: string;
  age: number;
  city: string;
  location?: string; // Optional
};

type Student = Person & {
  grade: number;
  subjects: string[];
  degree: Degree;
  level?: number | string; // Optional
};
```

### Interface (Optional)

```typescript
interface Person {
  name: string;
  age: number;
  city: string;
}

interface Student extends Person {
  grade: number;
  subjects: string[];
}
```

## 🚀 Enums

```typescript
enum Degree {
  Bachelor,
  PhD,
  Master = "Master",
}
```

## 🚀 Generic Types

### Basic Generic Example

```typescript
type ApiResponse = {
  data: { id: number; name: string };
  status: "success" | "failure";
};

type ApiResponseX<DataType> = {
  data: DataType;
  status: "success" | "failure";
};
```

## 🚀 Key Examples

### Example Objects

```typescript
const person: Person = {
  name: "John Doe",
  age: 30,
  city: "New York",
};

const student: Student = {
  name: "Jane Smith",
  age: 25,
  city: "Los Angeles",
  grade: 12,
  subjects: ["Math", "Science"],
  degree: Degree.Master,
};

const students: Student[] = [
  {
    name: "Tran Vu",
    age: 22,
    city: "HCM",
    grade: 12,
    subjects: ["Math", "Code"],
    degree: Degree.Master,
  },
  {
    name: "Alice Johnson",
    age: 20,
    city: "Chicago",
    grade: 10,
    subjects: ["English", "History"],
    degree: Degree.Bachelor,
    level: 1,
  },
];
```

### Union & Intersection Types

```typescript
let value: number | string;
value = 10;
value = "Hello";

// Intersection
type A = { name: string };
type B = { age: number };
type C = A & B;
const c: C = { name: "helloX", age: 20 };
```

### Generics

```typescript
function Book<DataType>(value: DataType): DataType {
  return value;
}

console.log(Book("book")); // Generic (string)
console.log(Book(100)); // Generic (number)
```

### Class Example

```typescript
class PersonC {
  constructor(public name: string, private age: number) {}
  greet() {
    return `Hello, my name is ${this.name}, my age is ${this.age}`;
  }
}
```

### Mapped Types

```typescript
type ReadonlyPerson = Readonly<{ name: string; age: number }>;
const readonlyPerson: ReadonlyPerson = { name: "John Doe", age: 30 };
```

### Conditional Types

```typescript
type IsArray<T> = T extends string[] ? true : false;

function checkArray<T>(value: T): IsArray<T> {
  return Array.isArray(value) as IsArray<T>;
}
```

### Utility Types

#### Partial

```typescript
const partialPerson: Partial<Person> = { name: "John" };
```

#### Pick

```typescript
type NameOnly = Pick<Person, "name">;
const nameOnly: NameOnly = { name: "John" };
```

## 🚀 Rendering

The component renders the list of students dynamically:

```tsx
return (
  <div>
    <h1>Students List</h1>
    <ul>
      {students.map((student, index) => (
        <li key={index}>
          <span>Name: {student.name}</span>
          <span> | Age: {student.age}</span>
          <span> | City: {student.city}</span>
          <span> | Grade: {student.grade}</span>
          <span> | Subjects: {student.subjects.join(", ")}</span>
          <span> | Degree: {student.degree}</span>
        </li>
      ))}
    </ul>
  </div>
);
```

## 🚀 Console Logs

The following outputs will be logged to the console:

- Person and Student objects.
- Union and intersection type examples.
- Generic examples.
- Class and mapped types.
- Utility types like `Partial` and `Pick`.

## Usage

To use this component, simply add it to your React project and run it. The code demonstrates various TypeScript features and their integration in a React environment.

# TypeScript React Demo

This project demonstrates the use of **TypeScript** features within a React application. Below are the key concepts and their implementations in the code.

## 🚀 Types & Interfaces

### Type Definitions

```typescript
type Person = {
  name: string;
  age: number;
  city: string;
  location?: string; // Optional
};

type Student = Person & {
  grade: number;
  subjects: string[];
  degree: Degree;
  level?: number | string; // Optional
};
```

### Interface (Optional)

```typescript
interface Person {
  name: string;
  age: number;
  city: string;
}

interface Student extends Person {
  grade: number;
  subjects: string[];
}

## 🚀 Enums

```typescript
enum Degree {
  Bachelor,
  PhD,
  Master = "Master",
}
```

## 🚀 Generic Types

### Basic Generic Example

```typescript
type ApiResponse = {
  data: { id: number; name: string };
  status: "success" | "failure";
};

type ApiResponseX<DataType> = {
  data: DataType;
  status: "success" | "failure";
};
```

## 🚀 Key Examples

### Example Objects

```typescript
const person: Person = {
  name: "John Doe",
  age: 30,
  city: "New York",
};

const student: Student = {
  name: "Jane Smith",
  age: 25,
  city: "Los Angeles",
  grade: 12,
  subjects: ["Math", "Science"],
  degree: Degree.Master,
};

const students: Student[] = [
  {
    name: "Tran Vu",
    age: 22,
    city: "HCM",
    grade: 12,
    subjects: ["Math", "Code"],
    degree: Degree.Master,
  },
  {
    name: "Alice Johnson",
    age: 20,
    city: "Chicago",
    grade: 10,
    subjects: ["English", "History"],
    degree: Degree.Bachelor,
    level: 1,
  },
];
```

### Union & Intersection Types

```typescript
let value: number | string;
value = 10;
value = "Hello";

// Intersection
type A = { name: string };
type B = { age: number };
type C = A & B;
const c: C = { name: "helloX", age: 20 };
```

### Generics

```typescript
function Book<DataType>(value: DataType): DataType {
  return value;
}

console.log(Book("book")); // Generic (string)
console.log(Book(100)); // Generic (number)
```

### Class Example

```typescript
class PersonC {
  constructor(public name: string, private age: number) {}
  greet() {
    return `Hello, my name is ${this.name}, my age is ${this.age}`;
  }
}
```

### Mapped Types

```typescript
type ReadonlyPerson = Readonly<{ name: string; age: number }>;
const readonlyPerson: ReadonlyPerson = { name: "John Doe", age: 30 };
```

### Conditional Types

```typescript
type IsArray<T> = T extends string[] ? true : false;

function checkArray<T>(value: T): IsArray<T> {
  return Array.isArray(value) as IsArray<T>;
}
```

### Utility Types

#### Partial

```typescript
const partialPerson: Partial<Person> = { name: "John" };
```

#### Pick

```typescript
type NameOnly = Pick<Person, "name">;
const nameOnly: NameOnly = { name: "John" };
```

## 🚀 Rendering

The component renders the list of students dynamically:

```tsx
return (
  <div>
    <h1>Students List</h1>
    <ul>
      {students.map((student, index) => (
        <li key={index}>
          <span>Name: {student.name}</span>
          <span> | Age: {student.age}</span>
          <span> | City: {student.city}</span>
          <span> | Grade: {student.grade}</span>
          <span> | Subjects: {student.subjects.join(", ")}</span>
          <span> | Degree: {student.degree}</span>
        </li>
      ))}
    </ul>
  </div>
);
```

## 🚀 Console Logs

The following outputs will be logged to the console:

- Person and Student objects.
- Union and intersection type examples.
- Generic examples.
- Class and mapped types.
- Utility types like `Partial` and `Pick`.

## Usage

To use this component, simply add it to your React project and run it. The code demonstrates various TypeScript features and their integration in a React environment.
