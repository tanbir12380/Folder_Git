// we learn here about dot notation and bracket notation and "Optional chaining means adding a ? when accessing an object's property that may not exist, to prevent errors."

const user = {
  name: "Tanbir",
  profile: {
    personal: {
      address: {
        city: "Dhaka",
        zip: "1207",
      },
      contacts: {
        email: "tanbir@example.com",
      },
    },
    preferences: {
      theme: "dark",
    },
  },
};

//Chain that gets values properly (all properties exist)
console.log(user.profile.personal.address.city);
// Output: "Dhaka"

//Chain where some properties do not exist (use ? to prevent error)
console.log(user.profile?.personal?.contacts?.phone);
//// Output: "undefined"
