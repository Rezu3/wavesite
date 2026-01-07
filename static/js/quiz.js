// ========= QUIZ DATA ========
const quizData =[
  {
    "question": "1. Which of the following is a valid identifier in Java?",
    "options": ["2variable", "my-variable", "_myVariable", "class"],
    "answer": 2
  },
  {
    "question": "2. What is the output of System.out.println(5 + 2 + '3');?",
    "options": ["523", "55", "73", "10"],
    "answer": 2
  },
  {
    "question": "3. The Math.sqrt(64) method returns a value of which data type?",
    "options": ["int", "float", "double", "long"],
    "answer": 2
  },
  {
    "question": "4. Which loop is guaranteed to execute at least once?",
    "options": ["for loop", "while loop", "do-while loop", "if-else loop"],
    "answer": 2
  },
  {
    "question": "5. In Java, methods are invoked using the:",
    "options": ["Dot (.) operator", "Comma (,) operator", "Semicolon (;) operator", "Colon (:) operator"],
    "answer": 0
  },
  {
    "question": "6. A constructor is used to:",
    "options": ["Create a subclass", "Initialize a newly created object", "Destroy an object", "Handle exceptions"],
    "answer": 1
  },
  {
    "question": "7. Which keyword is used to prevent a method from being overridden?",
    "options": ["static", "final", "private", "native"],
    "answer": 1
  },
  {
    "question": "8. The String class in Java is:",
    "options": ["Mutable", "Final", "Both a and b", "Neither a nor b"],
    "answer": 1
  },
  {
    "question": "9. Which concept allows a method to have multiple definitions with different parameters?",
    "options": ["Method Overriding", "Method Hiding", "Method Overloading", "Method Casting"],
    "answer": 2
  },
  {
    "question": "10. Which keyword is used to refer to the immediate parent class object?",
    "options": ["this", "super", "parent", "static"],
    "answer": 1
  },
  {
    "question": "11. An interface in Java can contain:",
    "options": ["Method signatures and static constants", "Method implementations", "Instance variables", "Constructors"],
    "answer": 0
  },
  {
    "question": "12. The state of a thread in which it is ready to run but waiting for the CPU scheduler is called:",
    "options": ["New State", "Runnable State", "Blocked State", "Terminated State"],
    "answer": 1
  },
  {
    "question": "13. Which keyword is used to explicitly throw an exception?",
    "options": ["throws", "throw", "try", "catch"],
    "answer": 1
  },
  {
    "question": "14. The ArrayList class in Java is part of which package?",
    "options": ["java.lang", "java.io", "java.util", "java.awt"],
    "answer": 2
  },
  {
    "question": "15. Which of the following is a characteristic of a JavaBean?",
    "options": ["It must be an abstract class.", "It must have a public default constructor.", "It must implement the Runnable interface.", "It must be declared as final."],
    "answer": 1
  },
  {
    "question": "16. Java is a ______ language.",
    "options": ["Procedural", "Object-Oriented", "Functional", "Assembly"],
    "answer": 1
  },
  {
    "question": "17. Which data type is used to store a single character?",
    "options": ["int", "String", "char", "float"],
    "answer": 2
  },
  {
    "question": "18. Which operator is used to add two numbers?",
    "options": ["+", "-", "*", "/"],
    "answer": 0
  },
  {
    "question": "19. The if-else statement is used for:",
    "options": ["Looping", "Selection", "Method definition", "Creating objects"],
    "answer": 1
  },
  {
    "question": "20. Which loop is used when the number of iterations is known?",
    "options": ["while loop", "for loop", "do-while loop", "if loop"],
    "answer": 1
  },
  {
    "question": "21. A blueprint for creating objects is called a:",
    "options": ["Method", "Variable", "Class", "Array"],
    "answer": 2
  },
  {
    "question": "22. A special method that has the same name as the class is called a:",
    "options": ["Destructor", "Finalizer", "Constructor", "Variable"],
    "answer": 2
  },
  {
    "question": "23. Which keyword is used to create an object in Java?",
    "options": ["create", "object", "new", "class"],
    "answer": 2
  },
  {
    "question": "24. The string class is defined in which package?",
    "options": ["java.util", "java.io", "java.lang", "java.avt"],
    "answer": 2
  },
  {
    "question": "25. What is the process of defining multiple methods with the same name but different parameters called?",
    "options": ["Overriding", "Overloading", "Hiding", "Inheriting"],
    "answer": 1
  },
  {
    "question": "26. Which keyword is used to achieve inheritance in Java?",
    "options": ["super", "extends", "implements", "inherit"],
    "answer": 1
  },
  {
    "question": "27. A class that cannot be instantiated is called a/an ______ class.",
    "options": ["Final", "Static", "Abstract", "Private"],
    "answer": 2
  },
  {
    "question": "28. Which keyword is used to implement an interface?",
    "options": ["extends", "implements", "interface", "abstract"],
    "answer": 1
  },
  {
    "question": "29. The try-catch block is used for:",
    "options": ["Multithreading", "Exception Handling", "Inheritance", "Polymorphism"],
    "answer": 1
  },
  {
    "question": "30. Which collection class is used to create a resizable array?",
    "options": ["Vector", "Array", "ArrayList", "String"],
    "answer": 2
  },
  {
    "question": "31. Which of the following is a valid data type in Java?",
    "options": ["real", "float", "number", "doubleint"],
    "answer": 1
  },
  {
    "question": "32. Which keyword is used to define a class in Java?",
    "options": ["define", "structure", "class", "object"],
    "answer": 2
  },
  {
    "question": "33. In Java, variables must be:",
    "options": ["Declared before use", "Used before declaration", "Initialized automatically", "Declared only inside loops"],
    "answer": 0
  },
  {
    "question": "34. Which of the following is not a Java control structure?",
    "options": ["if", "for", "switch", "include"],
    "answer": 3
  },
  {
    "question": "35. The default value of an uninitialized int variable in Java is:",
    "options": ["1", "0", "null", "undefined"],
    "answer": 1
  },
  {
    "question": "36. The method overloading in Java is based on:",
    "options": ["Return type only", "Method name only", "Method name and parameter list", "Parameter names"],
    "answer": 2
  },
  {
    "question": "37. Which class is used for mathematical operations like square root and power in Java?",
    "options": ["Math", "Number", "Calc", "Compute"],
    "answer": 0
  },
  {
    "question": "38. Arrays in Java are:",
    "options": ["Objects", "Primitive data types", "Keywords", "References only"],
    "answer": 0
  },
  {
    "question": "39. Which method acts as a constructor in Java?",
    "options": ["Must have a return type", "Has the same name as the class", "Must be static", "Declared with void"],
    "answer": 1
  },
  {
    "question": "40. Which of the following refers to the current object in Java?",
    "options": ["super", "this", "me", "self"],
    "answer": 1
  },
  {
    "question": "41. Which of these is not an OOP concept?",
    "options": ["Inheritance", "Polymorphism", "Compilation", "Encapsulation"],
    "answer": 2
  },
  {
    "question": "42. The instanceof operator is used to:",
    "options": ["Compare two numbers", "Check type of an object", "Create a new object", "Destroy an object"],
    "answer": 1
  },
  {
    "question": "43. Which keyword is used to inherit a class in Java?",
    "options": ["extends", "inherits", "subclass", "implements"],
    "answer": 0
  },
  {
    "question": "44. The Runnable interface is used for:",
    "options": ["File handling", "Exception handling", "Thread creation", "Database connection"],
    "answer": 2
  },
  {
    "question": "45. The block that always executes, whether exception occurs or not, is:",
    "options": ["try", "catch", "throw", "finally"],
    "answer": 3
  },
  {
    "question": "1. Java was originally developed by:",
    "options": ["Microsoft", "Sun Microsystems", "IBM", "Oracle"],
    "answer": 1
  },
  {
    "question": "2. Java is a ______ language.",
    "options": ["Compiled", "Interpreted", "Both Compiled and Interpreted", "Neither"],
    "answer": 2
  },
  {
    "question": "3. The Java compiler translates source code into:",
    "options": ["Machine code", "Bytecode", "Assembly code", "Object code"],
    "answer": 1
  },
  {
    "question": "4. Which of the following is a valid Java identifier?",
    "options": ["2variable", "my-variable", "__myVar", "class"],
    "answer": 2
  },
  {
    "question": "5. Which of these is a primitive data type in Java?",
    "options": ["String", "Integer", "boolean", "Array"],
    "answer": 2
  },
  {
    "question": "6. What is the size of an 'int' in Java?",
    "options": ["16 bits", "32 bits", "64 bits", "Depends on the operating system"],
    "answer": 1
  },
  {
    "question": "7. Which of these is a reference data type?",
    "options": ["float", "char", "int", "String"],
    "answer": 3
  },
  {
    "question": "8. The '++' operator is used for:",
    "options": ["Addition", "Increment", "Decrement", "Multiplication"],
    "answer": 1
  },
  {
    "question": "9. What is the output of System.out.println(10 + 20 + '30'):?",
    "options": ["3030", "102030", "60", "30"],
    "answer": 0
  },
  {
    "question": "10. Which operator is used to compare two values for equality?",
    "options": ["=", "==", "!=", "&&"],
    "answer": 1
  },
  {
    "question": "11. The '&&' operator represents:",
    "options": ["Logical OR", "Logical AND", "Logical NOT", "Bitwise AND"],
    "answer": 1
  },
  {
    "question": "12. Which statement is used for simple conditional branching?",
    "options": ["for", "if", "while", "switch"],
    "answer": 1
  },
  {
    "question": "13. The 'switch' statement can be used with which of these data types?",
    "options": ["int", "String", "Both int and String", "float"],
    "answer": 2
  },
  {
    "question": "14. Which loop is guaranteed to execute at least once?",
    "options": ["for", "while", "do-while", "if-else"],
    "answer": 2
  },
  {
    "question": "15. What is the purpose of the 'break' statement in a loop?",
    "options": ["Skip current iteration", "Exit the loop", "Continue to next iteration", "Restart the loop"],
    "answer": 1
  },
  {
    "question": "16. A method in Java is defined with:",
    "options": ["Parentheses ()", "Curly braces {}", "Square brackets []", "Angle brackets <>"],
    "answer": 0
  },
  {
    "question": "17. What is the return type of a method that doesn't return any value?",
    "options": ["null", "void", "0", "empty"],
    "answer": 1
  },
  {
    "question": "18. Method overloading means:",
    "options": ["Same method name, different return types", "Same method name, different parameters", "Different method name, same parameters", "Same method name in different classes"],
    "answer": 1
  },
  {
    "question": "19. Which class contains mathematical operations like sqrt() and pow()?",
    "options": ["Math", "Calculator", "Arithmetic", "System"],
    "answer": 0
  },
  {
    "question": "20. Math.sqrt(16) returns:",
    "options": ["4", "8", "4.0", "256"],
    "answer": 2
  },
  {
    "question": "21. An array in Java is:",
    "options": ["A collection of different data types", "A collection of similar data types", "A primitive data type", "A class"],
    "answer": 1
  },
  {
    "question": "22. How do you declare an array of integers?",
    "options": ["int array[]", "int[] array", "Array int[]", "Both a and b"],
    "answer": 3
  },
  {
    "question": "23. What is the index of the first element in an array?",
    "options": ["0", "1", "-1", "null"],
    "answer": 0
  },
  {
    "question": "24. Which keyword is used to create an object in Java?",
    "options": ["create", "new", "object", "class"],
    "answer": 1
  },
  {
    "question": "25. A class is:",
    "options": ["An instance of an object", "A blueprint for objects", "A primitive data type", "A method"],
    "answer": 1
  },
  {
    "question": "26. Which of these is a special method that has the same name as the class?",
    "options": ["Destructor", "Constructor", "Finalizer", "Initializer"],
    "answer": 1
  },
  {
    "question": "27. A constructor is called when:",
    "options": ["A class is defined", "An object is created", "A method is called", "A program ends"],
    "answer": 1
  },
  {
    "question": "28. Which method is called before an object is garbage collected?",
    "options": ["constructor()", "finalize()", "garbage()", "destroy()"],
    "answer": 1
  },
  {
    "question": "29. The most restrictive access modifier is:",
    "options": ["public", "private", "protected", "default"],
    "answer": 1
  },
  {
    "question": "30. Which access modifier allows access from any other class?",
    "options": ["private", "protected", "default", "public"],
    "answer": 3
  },
  {
    "question": "31. The 'String' class in Java is:",
    "options": ["Mutable", "Immutable", "Final and Immutable", "Abstract"],
    "answer": 2
  },
  {
    "question": "32. Which method is used to find the length of a String?",
    "options": ["length()", "size()", "length", "getSize()"],
    "answer": 0
  },
  {
    "question": "33. 'StringBuffer' is preferred over 'String' when:",
    "options": ["We need immutable strings", "We need to modify strings frequently", "We need thread safety", "We need better performance for read operations"],
    "answer": 1
  },
  {
    "question": "34. The 'this' keyword refers to:",
    "options": ["The parent class object", "The current class object", "The child class object", "Any object"],
    "answer": 1
  },
  {
    "question": "35. Which package contains the 'String' class?",
    "options": ["java.util", "java.lang", "java.io", "java.awt"],
    "answer": 1
  },
  {
    "question": "36. Inheritance represents:",
    "options": ["HAS-A relationship", "IS-A relationship", "USES-A relationship", "DOES-A relationship"],
    "answer": 1
  },
  {
    "question": "37. Which keyword is used to inherit a class?",
    "options": ["super", "this", "extends", "implements"],
    "answer": 2
  },
  {
    "question": "38. Method overriding occurs when:",
    "options": ["Same method name, different parameters", "Same method name, same parameters in different classes", "Different method name, same parameters", "Same method name in same class"],
    "answer": 1
  },
  {
    "question": "39. All classes in Java implicitly extend which class?",
    "options": ["Root", "Base", "Object", "Main"],
    "answer": 2
  },
  {
    "question": "40. Polymorphism means:",
    "options": ["One name, multiple forms", "Multiple names, one form", "One name, one form", "Multiple names, multiple forms"],
    "answer": 0
  },
  {
    "question": "41. Compile-time polymorphism is achieved through:",
    "options": ["Method overriding", "Method overloading", "Inheritance", "Interfaces"],
    "answer": 1
  },
  {
    "question": "42. Run-time polymorphism is achieved through:",
    "options": ["Method overloading", "Method overriding", "Constructors", "Arrays"],
    "answer": 1
  },
  {
    "question": "43. Dynamic binding means:",
    "options": ["Method call resolved at compile time", "Method call resolved at runtime", "Variable binding at compile time", "Class loading at runtime"],
    "answer": 1
  },
  {
    "question": "44. Generic programming in Java is implemented using:",
    "options": ["Templates", "Generics", "Wildcards", "AnyType"],
    "answer": 1
  },
  {
    "question": "45. Upeasting is:",
    "options": ["Casting superclass to subclass", "Casting subclass to superclass", "Casting to same class", "Casting to interface"],
    "answer": 1
  },
  {
    "question": "46. The 'instanceof' operator is used to:",
    "options": ["Create instances", "Check object type", "Compare instances", "Destroy instances"],
    "answer": 1
  },
  {
    "question": "47. An abstract class:",
    "options": ["Cannot have any methods", "Must have all abstract methods", "Can have both abstract and concrete methods", "Cannot be extended"],
    "answer": 2
  },
  {
    "question": "48. Which keyword is used to define an abstract method?",
    "options": ["abstract", "virtual", "interface", "abstract method"],
    "answer": 0
  },
  {
    "question": "49. An interface contains:",
    "options": ["Method implementations", "Method signatures and constants", "Constructors", "Instance variables"],
    "answer": 1
  },
  {
    "question": "50. Which keyword is used to implement an interface?",
    "options": ["extends", "implements", "interface", "abstract"],
    "answer": 1
  },
  {
    "question": "51. A package is used for:",
    "options": ["Code organization", "Name space management", "Access control", "All of the above"],
    "answer": 3
  },
  {
    "question": "52. Which package is automatically imported?",
    "options": ["java.util", "java.io", "java.lang", "java.awt"],
    "answer": 2
  },
  {
    "question": "53. The 'ArrayList' class is part of which package?",
    "options": ["java.lang", "java.util", "java.io", "java.collection"],
    "answer": 1
  },
  {
    "question": "54. A thread in Java is:",
    "options": ["A lightweight process", "A heavy process", "A program", "A method"],
    "answer": 0
  },
  {
    "question": "55. The thread life cycle starts with:",
    "options": ["Runnable state", "Running state", "New state", "Blocked state"],
    "answer": 2
  },
  {
    "question": "56. Which interface is used to create a thread?",
    "options": ["Thread", "Runnable", "Both Thread and Runnable", "Executable"],
    "answer": 2
  },
  {
    "question": "57. The 'run()' method contains:",
    "options": ["Thread creation code", "Thread execution code", "Thread destruction code", "Thread synchronization code"],
    "answer": 1
  },
  {
    "question": "58. Thread synchronization is needed when:",
    "options": ["Multiple threads access shared resources", "Single thread runs", "No threads are running", "Program starts"],
    "answer": 0
  },
  {
    "question": "59. Which keyword is used for synchronization?",
    "options": ["sync", "synchronized", "lock", "threadlock"],
    "answer": 1
  },
  {
    "question": "60. Exception handling is done using:",
    "options": ["try-catch", "if-else", "switch", "for loop"],
    "answer": 0
  },
  {
    "question": "61. The 'try' block contains:",
    "options": ["Exception handling code", "Code that might throw exception", "Code that always executes", "Exception declaration"],
    "answer": 1
  },
  {
    "question": "62. The 'finally' block executes:",
    "options": ["Only when exception occurs", "Only when no exception occurs", "Always", "Never"],
    "answer": 2
  },
  {
    "question": "63. Which of these is a checked exception?",
    "options": ["RuntimeException", "IOException", "NullPointerException", "ArrayIndexOutOfBoundsException"],
    "answer": 1
  },
  {
    "question": "64. The 'Collections' framework is used for:",
    "options": ["Storing and managing groups of objects", "Mathematical operations", "String operations", "File operations"],
    "answer": 0
  },
  {
    "question": "65. 'ArrayList' is preferred over array when:",
    "options": ["Fixed size is needed", "Dynamic size is needed", "Better performance for primitives", "Memory efficiency is critical"],
    "answer": 1
  },
  {
    "question": "66. A JavaBean must have:",
    "options": ["Public constructor with arguments", "Private default constructor", "Public default constructor", "No constructor"],
    "answer": 2
  },
  {
    "question": "67. Which of these is a feature of JavaBean?",
    "options": ["Public instance variables", "Private instance variables with getters/setters", "Protected instance variables", "Static methods only"],
    "answer": 1
  },
  {
    "question": "68. The 'char' data type can store:",
    "options": ["Only letters", "Only numbers", "Unicode characters", "ASCII characters only"],
    "answer": 2
  },
  {
    "question": "69. Which operator has the highest precedence?",
    "options": ["+", "*", "()", "="],
    "answer": 2
  },
  {
    "question": "70. What does JVM stand for?",
    "options": ["Java Virtual Machine", "Java Variable Method", "Java Verified Machine", "Java Virtual Memory"],
    "answer": 0
  },
  {
    "question": "71. Which of these is NOT a Java keyword?",
    "options": ["class", "interface", "method", "public"],
    "answer": 2
  },
  {
    "question": "72. The 'default' value of a boolean variable is:",
    "options": ["true", "false", "null", "0"],
    "answer": 1
  },
  {
    "question": "73. Which loop is best when the number of iterations is unknown?",
    "options": ["for", "while", "do-while", "enhanced for"],
    "answer": 1
  },
  {
    "question": "74. The 'continue' statement is used to:",
    "options": ["Exit the loop", "Skip current iteration", "Restart the program", "Break out of method"],
    "answer": 1
  },
  {
    "question": "75. A method signature includes:",
    "options": ["Method name and return type", "Method name and parameters", "Return type and parameters", "Access modifier and return type"],
    "answer": 1
  },
  {
    "question": "76. Which Math method returns the absolute value?",
    "options": ["abs()", "absolute()", "mod()", "value()"],
    "answer": 0
  },
  {
    "question": "77. What is the output of Math.cell(5.3)?",
    "options": ["5.0", "5.3", "6.0", "5.0"],
    "answer": 2
  },
  {
    "question": "78. Which method is used to sort an array?",
    "options": ["Arrays.sort()", "Array.sort()", "Collection.sort()", "System.sort()"],
    "answer": 0
  },
  {
    "question": "79. Garbage Collection in Java is:",
    "options": ["Manual process", "Automatic process", "Semi-automatic process", "Not supported"],
    "answer": 1
  },
  {
    "question": "80. The 'super' keyword is used to:",
    "options": ["Refer to current class", "Refer to parent class", "Refer to child class", "Refer to any class"],
    "answer": 1
  },
  {
    "question": "81. Composition represents:",
    "options": ["IS-A relationship", "HAS-A relationship", "USES-A relationship", "DOES-A relationship"],
    "answer": 1
  },
  {
    "question": "82. Which method is used to compare two strings for equality?",
    "options": ["==", "equals()", "compare()", "same()"],
    "answer": 1
  },
  {
    "question": "83. 'StringBuilder' is preferred over 'StringBuffer' when:",
    "options": ["thread safety is needed", "Better performance in single-threaded environment", "Immutable strings are needed", "Synchronization is required"],
    "answer": 1
  },
  {
    "question": "84. The 'File' class is used for:",
    "options": ["Reading file contents", "Writing to files", "File and directory operations", "File compression"],
    "answer": 3
  },
  {
    "question": "85. Which method is used to create a directory?",
    "options": ["mkdir()", "createDir()", "makeDirectory()", "newDir()"],
    "answer": 0
  },
  {
    "question": "86. A static method:",
    "options": ["Can access instance variables", "Cannot access instance variables", "Requires object creation to call", "Is associated with objects"],
    "answer": 1
  },
  {
    "question": "87. The 'final' keyword can be applied to:",
    "options": ["Variables only", "Methods only", "Classes only", "Variables, methods and classes"],
    "answer": 3
  },
  {
    "question": "88. An abstract method:",
    "options": ["Has implementation", "Has no implementation", "Is always private", "Is always public"],
    "answer": 1
  },
  {
    "question": "89. Multiple inheritance is achieved in Java through:",
    "options": ["Extending multiple classes", "Implementing multiple interfaces", "Using abstract classes", "Using final classes"],
    "answer": 1
  },
  {
    "question": "90. Which package contains the 'Scanner' class?",
    "options": ["java.lang", "java.util", "java.io", "java.text"],
    "answer": 1
  },
  {
    "question": "91. Which collection maintains insertion order?",
    "options": ["HashSet", "TreeSet", "LinkedHashSet", "HashMap"],
    "answer": 2
  },
  {
    "question": "92. Which method is used to start a thread?",
    "options": ["run()", "start()", "execute()", "begin()"],
    "answer": 1
  },
  {
    "question": "93. The 'wait()' method is used for:",
    "options": ["Thread creation", "Thread synchronization", "Thread termination", "Thread priority"],
    "answer": 1
  },
  {
    "question": "94. 'InterruptedException' is thrown when:",
    "options": ["A thread is interrupted", "A thread starts", "A thread ends", "A thread is created"],
    "answer": 0
  },
  {
    "question": "95. The 'throws' keyword is used to:",
    "options": ["Handle exceptions", "Declare exceptions", "Ignore exceptions", "Create exceptions"],
    "answer": 1
  },
  {
    "question": "96. Which of these is an unchecked exception?",
    "options": ["IOException", "SQLException", "NullPointerException", "ClassNotFoundException"],
    "answer": 2
  },
  {
    "question": "97. 'HashMap' stores data as:",
    "options": ["Key-Value pairs", "Only values", "Only keys", "Sorted pairs"],
    "answer": 0
  },
  {
    "question": "98. A JavaBean property must have:",
    "options": ["Public access", "Private access with public getters/setters", "Protected access", "Package-private access"],
    "answer": 1
  },
  {
    "question": "99. The 'transient' keyword is used to:",
    "options": ["Make variable persistent", "Exclude variable from serialization", "Make variable volatile", "Make variable constant"],
    "answer": 1
  },
  {
    "question": "100. Which method is used to get the class of an object?",
    "options": ["getClass()", "getType()", "getObjectClass()", "getClassName()"],
    "answer": 0
  }
]


// ========= GLOBAL VARIABLES =========
let currentQuestion = 0;
let score = 0;
let answered = false;
let timeLeft = 60;
let timerInterval = null;

// ========= DOM ELEMENTS =========
const questionEl = document.getElementById('question');
const optionsEl = document.getElementById('options');
const nextButton = document.getElementById('next-btn');
const progressBar = document.getElementById('progress-bar');
const questionCounter = document.getElementById('question-counter');
const timeEl = document.getElementById('time');
const scoreEl = document.getElementById('score');
const resultModal = document.getElementById('result-modal');
const finalScoreEl = document.getElementById('final-score');
const totalQuestionsEl = document.getElementById('total-questions');
const percentageEl = document.getElementById('percentage');
const performanceText = document.getElementById('performance-text');
const restartBtn = document.getElementById('restart-btn');

// ========= INITIALIZE QUIZ =========
function initQuiz() {
    console.log("Quiz initialized");
    currentQuestion = 0;
    score = 0;
    loadQuestion();
    updateScore();
}

// ========= LOAD QUESTION =========
function loadQuestion() {
    console.log("Loading question:", currentQuestion);
    
    if (currentQuestion >= quizData.length) {
        console.log("No more questions");
        return;
    }
    
    const currentQuiz = quizData[currentQuestion];
    answered = false;
    
    // Reset timer
    clearInterval(timerInterval);
    timeLeft = 60;
    updateTimer();
    
    // Load question text
    questionEl.textContent = currentQuiz.question;
    
    // Clear previous options
    optionsEl.innerHTML = '';
    
    // Load new options
    currentQuiz.options.forEach((option, index) => {
        const optionBtn = document.createElement('div');
        optionBtn.className = 'option-btn';
        optionBtn.textContent = `${String.fromCharCode(65 + index)}. ${option}`;
        optionBtn.dataset.index = index;
        
        optionBtn.addEventListener('click', () => selectAnswer(index, optionBtn));
        optionsEl.appendChild(optionBtn);
    });
    
    // Update UI elements
    updateProgress();
    updateQuestionCounter();
    nextButton.disabled = true;
    nextButton.textContent = 'পরবর্তী প্রশ্ন →';
    
    // Start timer
    startTimer();
    console.log("Question loaded successfully");
}

// ========= SELECT ANSWER =========
function selectAnswer(selectedIndex, selectedBtn) {
    console.log("Answer selected:", selectedIndex);
    if (answered) return;
    
    answered = true;
    const correctIndex = quizData[currentQuestion].answer;
    const allOptions = document.querySelectorAll('.option-btn');
    
    // Disable all options
    allOptions.forEach(option => {
        option.classList.add('disabled');
        option.style.pointerEvents = 'none';
    });
    
    // Show correct/wrong answers
    if (selectedIndex === correctIndex) {
        selectedBtn.classList.add('correct');
        score++;
        updateScore();
        console.log("Correct answer!");
    } else {
        selectedBtn.classList.add('wrong');
        allOptions[correctIndex].classList.add('correct');
        console.log("Wrong answer!");
    }
    
    // Enable next button
    nextButton.disabled = false;
    
    // Change button text if last question
    if (currentQuestion === quizData.length - 1) {
        nextButton.textContent = 'ফলাফল দেখুন →';
    }
    
    // Stop timer
    clearInterval(timerInterval);
}

// ========= NEXT QUESTION =========
nextButton.addEventListener('click', () => {
    console.log("Next button clicked");
    if (!answered) {
        alert('দয়া করে প্রথমে একটি উত্তর নির্বাচন করুন।');
        return;
    }
    
    currentQuestion++;
    
    if (currentQuestion < quizData.length) {
        loadQuestion();
    } else {
        showResults();
    }
});

// ========= TIMER FUNCTIONS =========
function startTimer() {
    timerInterval = setInterval(() => {
        timeLeft--;
        updateTimer();
        
        if (timeLeft <= 0) {
            clearInterval(timerInterval);
            if (!answered) {
                autoSkipQuestion();
            }
        }
    }, 1000);
}

function updateTimer() {
    const minutes = Math.floor(timeLeft / 60);
    const seconds = timeLeft % 60;
    timeEl.textContent = `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
    
    // Change color when time is running out
    if (timeLeft <= 10) {
        timeEl.style.color = '#e74c3c';
        timeEl.style.animation = 'pulse 0.5s infinite alternate';
    } else {
        timeEl.style.color = '';
        timeEl.style.animation = '';
    }
}

function autoSkipQuestion() {
    if (!answered) {
        const correctIndex = quizData[currentQuestion].answer;
        const allOptions = document.querySelectorAll('.option-btn');
        
        allOptions.forEach(option => {
            option.classList.add('disabled');
            option.style.pointerEvents = 'none';
        });
        
        // Mark correct answer
        allOptions[correctIndex].classList.add('correct');
        
        answered = true;
        nextButton.disabled = false;
        
        // Change button text if last question
        if (currentQuestion === quizData.length - 1) {
            nextButton.textContent = 'ফলাফল দেখুন →';
        }
    }
}

// ========= UPDATE UI =========
function updateProgress() {
    const progress = ((currentQuestion + 1) / quizData.length) * 100;
    progressBar.style.width = `${progress}%`;
}

function updateQuestionCounter() {
    questionCounter.textContent = `প্রশ্ন ${currentQuestion + 1}/${quizData.length}`;
}

function updateScore() {
    scoreEl.textContent = score;
}

// ========= SHOW RESULTS =========
function showResults() {
    console.log("Showing results");
    const percentage = Math.round((score / quizData.length) * 100);
    
    finalScoreEl.textContent = score;
    totalQuestionsEl.textContent = quizData.length;
    percentageEl.textContent = `${percentage}%`;
    
    // Set performance text based on score
    if (percentage >= 80) {
        performanceText.textContent = 'অসাধারণ! আপনি একজন জ্ঞানী ব্যক্তি।';
        performanceText.style.color = '#2ecc71';
    } else if (percentage >= 60) {
        performanceText.textContent = 'ভালো হয়েছে! আপনার জ্ঞান প্রশংসনীয়।';
        performanceText.style.color = '#3498db';
    } else if (percentage >= 40) {
        performanceText.textContent = 'সাধারণ। আরও পড়াশুনা করুন।';
        performanceText.style.color = '#f39c12';
    } else {
        performanceText.textContent = 'আপনাকে আরও বেশি করে পড়াশুনা করতে হবে।';
        performanceText.style.color = '#e74c3c';
    }
    
    // Show modal
    resultModal.style.display = 'flex';
}

// ========= MODAL CONTROLS =========
if (restartBtn) {
    restartBtn.addEventListener('click', () => {
        resultModal.style.display = 'none';
        initQuiz();
    });
}

// ========= KEYBOARD CONTROLS =========
document.addEventListener('keydown', (e) => {
    // A, B, C, D keys for options
    if (e.key >= 'a' && e.key <= 'd' && !answered) {
        const optionIndex = e.key.charCodeAt(0) - 97; // a=0, b=1, c=2, d=3
        const options = document.querySelectorAll('.option-btn');
        if (optionIndex < options.length) {
            options[optionIndex].click();
        }
    }
    
    // Enter for next button
    if (e.key === 'Enter' && !nextButton.disabled) {
        nextButton.click();
    }
    
    // Escape to close modal
    if (e.key === 'Escape' && resultModal && resultModal.style.display === 'flex') {
        resultModal.style.display = 'none';
    }
    
    // 1,2,3,4 keys for options
    if (e.key >= '1' && e.key <= '4' && !answered) {
        const optionIndex = parseInt(e.key) - 1;
        const options = document.querySelectorAll('.option-btn');
        if (optionIndex < options.length) {
            options[optionIndex].click();
        }
    }
});

// ========= INITIALIZE =========
document.addEventListener('DOMContentLoaded', function() {
    console.log("DOM loaded, initializing quiz...");
    initQuiz();
});


