
import { test, expect } from "@playwright/experimental-ct-react";
import App907 from "./App907.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App907 />);
  await expect(component).toContainText("Learn React");
});
