import { Model } from "@vuex-orm/core";
import { uuid } from "lodash";
import Manager from "./Manager";

export default class Todo extends Model {
  // This is the name used as module name of the Vuex Store.
  static entity = "todos";

  // List of all fields (schema) of the post model. `this.attr` is used
  // for the generic field type. The argument is the default value.
  static fields() {
    return {
      id: this.attr(uuid),
      task: this.attr(""),
      hours: this.attr(1),
      manager: this.belongsTo(Manager, "manager_id"),
    };
  }
}
