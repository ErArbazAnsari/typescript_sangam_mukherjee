// optional default

function greeting(name?: string): string {
    return name ? `Hello, ${name?.toUpperCase()}!` : `Hello, Guest!`;
}

console.log(greeting("Alice")); // Output: Hello, ALICE!
console.log(greeting()); // Output: Hello, Guest!
