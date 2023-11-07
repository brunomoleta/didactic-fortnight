export default {
  userComplete: {
    name: "Robertón",
    email: "roberton@vanvan.com.br",
    phoneNumber: "+55 11 999754850",
    annual: true,
    plan: "ultimate",
    company: "vale do silicone",
  },
  userIncomplete: {
    name: "Jonas"
  },
  userRepeated: {
    name: "Robertón",
    email: "roberton@vanvan.com.br",
    phoneNumber: "+55 11 999754850",
    plan: "pro",
    company: "vale do silicone",
  },
  userInvalidBody: {
    name: 321,
    email: ["nummer@vanvan.com.br"],
    phoneNumber: "+1 942 999754850",
    plan: "pro",
  },
  userInvalidBody2: {
    name: "José",
    email: "AninfinitelylargeEmailThatWillFailOnTheTestMadeByJestJSSir@SoLongEmail.com.sweden",
    phoneNumber: true,
    plan: "pro",
    company: "vale do silicone",
  },
}
