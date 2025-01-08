import { type SchemaTypeDefinition } from "sanity";
import herosection from "./herosection";
import post from "./post";
import about from "./about";

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [herosection, post, about],
};
