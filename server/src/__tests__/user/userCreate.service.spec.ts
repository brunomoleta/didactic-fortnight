import { createUserService } from "../../services/createUser.service";
import { DataSource, Repository } from "typeorm";
import { AppDataSource } from "../../data-source";
import { User } from "../../entities";
import supertest from "supertest";
import app from "../../app";
import createUserRouteMock from "../mocks/users/createUser.route.mock";
import { userRepo } from "../../repositories";

describe("POST /users", () => {
  let connection: DataSource;

  const userRepo: Repository<User> = AppDataSource.getRepository(User);

  beforeEach(async () => {
    const users: Array<User> = await userRepo.find();
    await userRepo.remove(users);
  });
  afterAll(async () => {
    await connection.destroy();
  });
});

it("Success: Able to create a user - Full body", async () => {
  const userInput = createUserRouteMock.userComplete;
  const response = await supertest(app).post("/users").send(userInput);

  const expectResults = {
    status: 201,
  };

  expect(response.status).toBe(expectResults.status);
  expect(response.body).toEqual(expect.objectContaining(userInput));

  expect(response.body).toEqual(
    expect.objectContaining({
      id: expect.any(Number),
      createdAt: expect.any(String),
    })
  );
});

it("Error: Must not be able to create a user - Email already exists", async () => {
  await userRepo.save(createUserRouteMock.userRepeated);

  const response = await supertest(app)
    .post("/users")
    .send(createUserRouteMock.userRepeated);

  const expectResults = {
    status: 409,
    bodyMessage: { message: "Email already exists" },
  };

  expect(response.status).toBe(expectResults.status);
  expect(response.body).toStrictEqual(expectResults.bodyMessage);
});

it("Error: Unable to create user - Invalid body 01", async () => {
  const response = await supertest(app)
    .post("/users")
    .send(createUserRouteMock.userInvalidBody);

  const expectResults = {
    status: 400,
    bodyMessage: {
      flattenMessage: {
        message: {
          name: ["Expected string, received number"],
          email: ["Expected string, received array"],
          company: ["Required"],
        },
      },
      errorsMessage: {
        message: [
          {
            code: "invalid_type",
            expected: "string",
            received: "number",
            path: ["name"],
            message: "Expected string, received number",
          },
          {
            code: "invalid_type",
            expected: "string",
            received: "array",
            path: ["email"],
            message: "Expected string, received array",
          },
          {
            code: "invalid_type",
            expected: "string",
            received: "undefined",
            path: ["company"],
            message: "Required",
          },
        ],
      },
    },
  };

  if (Array.isArray(response.body.message)) {
    expect(response.body).toStrictEqual(
      expectResults.bodyMessage.errorsMessage
    );
  } else {
    expect(response.body).toStrictEqual(
      expectResults.bodyMessage.flattenMessage
    );
  }
  expect(response.status).toBe(expectResults.status);
});
it("Error: Unable to create user - Invalid body 02", async () => {
  const response = await supertest(app)
    .post("/users")
    .send(createUserRouteMock.userInvalidBody2);

  const expectResults = {
    status: 400,
    bodyMessage: {
      flattenMessage: {
        message: {
          email: ["String must contain at most 64 character(s)"],
          phoneNumber: ["Expected string, received boolean"],
        },
      },
      errorsMessage: {
        message: [
          {
            code: "too_big",
            maximum: 64,
            type: "string",
            inclusive: true,
            exact: false,
            message: "String must contain at most 64 character(s)",
            path: ["email"],
          },
          {
            code: "invalid_type",
            expected: "string",
            received: "boolean",
            path: ["phoneNumber"],
            message: "Expected string, received boolean",
          },
        ],
      },
    },
  };

  if (Array.isArray(response.body.message)) {
    expect(response.body).toStrictEqual(
      expectResults.bodyMessage.errorsMessage
    );
  } else {
    expect(response.body).toStrictEqual(
      expectResults.bodyMessage.flattenMessage
    );
  }
  expect(response.status).toBe(expectResults.status);
});
