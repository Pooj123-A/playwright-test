
import { test, expect } from "@playwright/experimental-ct-react";
import App492 from "./App492.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App492 />);
  await expect(component).toContainText("Learn React");
});
