import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  ManyToOne,
  JoinColumn,
} from "typeorm";
import RentalStatus from "../enum/rental-status.enum";
import { Product } from "./product.entity";
import Timestamp from "./timestamp";
import { User } from "./user.entity";

@Entity()
export class Rental extends Timestamp {
  @PrimaryGeneratedColumn("uuid")
  id!: string;

  @Column("enum", {
    name: "rental_status",
    enum: RentalStatus,
  })
  rentalStatus!: RentalStatus;

  @Column("timestamp", {
    name: "return_date",
  })
  returnDate!: Date;

  @ManyToOne(() => User, (user) => user.rentals, {
    onDelete: "SET NULL",
    nullable: true,
  })
  @JoinColumn({ name: "user_id" })
  user!: User | null;

  @ManyToOne(() => Product, (product) => product.rentals, {
    onDelete: "SET NULL",
    nullable: true,
  })
  @JoinColumn({ name: "product_id" })
  product!: Product | null;

  @ManyToOne(() => User, (user) => user.assignedRentals, {
    onDelete: "SET NULL",
    nullable: true,
  })
  @JoinColumn({ name: "assignee_id" })
  assignee!: User | null;
}
