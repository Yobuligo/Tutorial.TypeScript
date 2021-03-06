// An intersection type is a type that contains other types
// Works also for interfaces

type Index = string | number;
type Passed = boolean;
type InterceptionType = Index & Passed;

type User = {
  firstname: string;
  lastname: string;
};

type Address = {
  street: string;
};

type UserAddress = User & Address;

const userAddress: UserAddress = {
  firstname: "Stacey",
  lastname: "Starfish",
  street: "Any Street",
};
