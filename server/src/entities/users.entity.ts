import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
} from "typeorm";

enum AllowedValues {
  Q = "starter",
  J = "pro",
  K = "ultimate",
}

@Entity("users")
export class User {
  @PrimaryGeneratedColumn("increment")
  id: number;

  @Column({ type: "varchar", length: 64 })
  name: string;

  @Column({ type: "varchar", length: 64, unique: true })
  email: string;

  @Column({ type: "varchar", length: 24 })
  phoneNumber: string;

  @Column({ default: true })
  annual: boolean;

  @Column({
    type: "enum",
    enum: AllowedValues,
  })
  plan: AllowedValues;

  @Column({ type: "varchar", length: 64 })
  company: string;

  @CreateDateColumn({ type: "date" })
  createdAt: string;
}

export default User;
