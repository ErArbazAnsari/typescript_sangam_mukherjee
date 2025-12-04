const Roles = ["Admin", "User", "Guest"] as const;

// derive a union type from the array
type Role = (typeof Roles)[number];

function setRole(r: Role) {
    console.log(`Role set to: ${r}`);
}
setRole("Admin");
setRole("Guest");
// setRole("SuperAdmin"); // Error: Argument of type '"SuperAdmin"' is not assignable to parameter of type 'Role'.
