import {Property} from "@tsed/common";
import {Model, ObjectID} from "@tsed/mongoose";

@Model({
  connection: "db2"
})
export class MyModel {
  @ObjectID("id")
  _id: string;

  @Property()
  unique: string;
}
