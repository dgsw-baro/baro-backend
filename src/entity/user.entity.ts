import { Entity, Column, PrimaryColumn, OneToMany } from "typeorm";
import AccessLevel from "../enum/access-level.enum";
import { ProductDemand } from "./product-demand.entity";
import { Rental } from "./rental.entity";
import Timestamp from "./timestamp";

@Entity()
export class User extends Timestamp {
  @PrimaryColumn()
  id!: string;

  @Column("tinyint", { nullable: true })
  grade!: number | null;

  @Column("tinyint", { nullable: true })
  room!: number | null;

  @Column("tinyint", { nullable: true })
  number!: number | null;

  @Column()
  name!: string;

  @Column({ name: "profile_image" })
  profileImage!: string;

  @Column("enum", {
    enum: AccessLevel,
    name: "access_level",
  })
  accessLevel!: AccessLevel;

  @OneToMany(() => Rental, (rental) => rental.user)
  rentals!: Rental[];

  @OneToMany(() => Rental, (rental) => rental.user)
  assignedRentals!: Rental[];

  @OneToMany(() => ProductDemand, (productDemand) => productDemand.demandedUser)
  demandedProducts!: ProductDemand[];
}
