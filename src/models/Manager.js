import { Model } from "@vuex-orm/core";
import { uuid } from "lodash";

export default class Manager extends Model {
  // This is the name used as module name of the Vuex Store.
  static entity = "managers";

  // List of all fields (schema) of the post model. `this.attr` is used
  // for the generic field type. The argument is the default value.
  static fields() {
    return {
      id: this.attr(uuid),
      name: this.attr(""),
    };
  }
}
