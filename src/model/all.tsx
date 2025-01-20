// ===================================
// 🚀 TYPES & INTERFACES
// ===================================
// Type Definitions
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

// Interface Example (Optional)
// interface Person {
//   name: string;
//   age: number;
//   city: string;
// }

// interface Student extends Person {
//   grade: number;
//   subjects: string[];
// }

// ===================================
// 🚀 ENUMS
// ===================================
enum Degree {
  Bachelor,
  PhD,
  Master = "Master",
}

// ===================================
// 🚀 GENERIC TYPES
// ===================================
type ApiResponse = {
  data: { id: number; name: string };
  status: "success" | "failure";
};

type ApiResponseX<DataType> = {
  data: DataType;
  status: "success" | "failure";
};

// ===================================
// 🚀 COMPONENT
// ===================================
const All = () => {
  // 🚀 Example Objects
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

  console.log("Person:", person);
  console.log("Student:", student);
  console.log("Students:", students);

  // 🚀 API Responses
  const apiResponse: ApiResponse = {
    data: { id: 1, name: "Tran" },
    status: "success",
  };

  const apiResponseX: ApiResponseX<{ id: number; name: string }> = {
    data: { id: 1, name: "Tran" },
    status: "failure",
  };

  console.log("ApiResponse:", apiResponse);
  console.log("ApiResponseX:", apiResponseX);

  // ===================================
  // 🚀 UNION & INTERSECTION TYPES
  // ===================================
  let value: number | string;
  value = 10;
  console.log("Union Value (number):", value);
  value = "Hello";
  console.log("Union Value (string):", value);

  type A = { name: string };
  type B = { age: number };
  type C = A & B;
  const c: C = { name: "helloX", age: 20 };
  console.log("Intersection:", c);

  // ===================================
  // 🚀 GENERICS
  // ===================================
  function Book<DataType>(value: DataType): DataType {
    return value;
  }
  console.log("Generic (string):", Book("book"));
  console.log("Generic (number):", Book(100));

  // ===================================
  // 🚀 CLASS
  // ===================================
  class PersonC {
    constructor(public name: string, private age: number) {}
    greet() {
      return `Hello, my name is ${this.name}, my age is ${this.age}`;
    }
  }
  const personCInstance = new PersonC("Jane Doe", 28);
  console.log("Class Instance:", personCInstance.greet());

  // ===================================
  // 🚀 MAPPED TYPES
  // ===================================
  type ReadonlyPerson = Readonly<{ name: string; age: number }>;
  const readonlyPerson: ReadonlyPerson = { name: "John Doe", age: 30 };
  console.log("Mapped Types:", readonlyPerson);

  // ===================================
  // 🚀 CONDITIONAL TYPES
  // ===================================
  type IsArray<T> = T extends string[] ? true : false;

  function checkArray<T>(value: T): IsArray<T> {
    return Array.isArray(value) as IsArray<T>;
  }
  console.log("Conditional Types [array]:", checkArray([1, 2, 3]));
  console.log("Conditional Types [string]:", checkArray("hello"));

  // ===================================
  // 🚀 UTILITY TYPES
  // ===================================
  // 2 Optional Types
  // ===================================
  // 🚀 Partial
  // ===================================
  // Partial: Makes all properties optional

  const partialPerson: Partial<Person> = { name: "John" };
  console.log("Partial:", partialPerson);

  // ===================================
  // 🚀 Pick
  // ===================================
  // Pick: Select specific properties
  type NameOnly = Pick<Person, "name">;
  const nameOnly: NameOnly = { name: "John" };
  console.log("Pick:", nameOnly);

  // ===================================
  // 🚀 RENDERING
  // ===================================
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
};

export default All;
