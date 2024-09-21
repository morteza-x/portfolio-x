import { v4 as uuidv4 } from "uuid";

/**
 * A helper object with various utility methods and properties.
 *
 */
export type THelper = {
  username: string;
  /**
   * a method to generate a unique identifier
   *
   * @returns {string} - a unique identifier
   */
  generateId: () => string;
};

let helper: THelper = {
  username: "",

  generateId(): string {
    return uuidv4();
  },
};

export default helper;
