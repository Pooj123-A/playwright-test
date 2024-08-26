
import { test, expect } from "@playwright/experimental-ct-react";
import App754 from "./App754.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App754 />);
  await expect(component).toContainText("Learn React");
});
