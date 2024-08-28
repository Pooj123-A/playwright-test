
import { test, expect } from "@playwright/experimental-ct-react";
import App191 from "./App191.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App191 />);
  await expect(component).toContainText("Learn React");
});
