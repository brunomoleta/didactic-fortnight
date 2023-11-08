export default {
  userComplete: {
    name: "Robertón",
    email: "roberton@vanvan.com.br",
    phoneNumber: "+55 11 999754850",
    annual: true,
    plan: "enterprise",
    company: "vale do silicone",
  },
  userIncomplete: {
    name: "Jonas"
  },
  userRepeated: {
    name: "Robertón",
    email: "roberton@vanvan.com.br",
    phoneNumber: "+55 11 999754850",
    plan: "business",
    company: "vale do silicone",
  },
  userInvalidBody: {
    name: 321,
    email: ["nummer@vanvan.com.br"],
    phoneNumber: "+1 942 999754850",
    plan: "business",
  },
  userInvalidBody2: {
    name: "José",
    email: "AninfinitelylargeEmailThatWillFailOnTheTestMadeByJestJSSir@SoLongEmail.com.sweden",
    phoneNumber: true,
    plan: "business",
    company: "vale do silicone",
  },
}
