
import { test, expect } from "@playwright/experimental-ct-react";
import App906 from "./App906.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App906 />);
  await expect(component).toContainText("Learn React");
});
