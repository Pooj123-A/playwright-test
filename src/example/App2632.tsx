
import { test, expect } from "@playwright/experimental-ct-react";
import App2632 from "./App2632.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App2632 />);
  await expect(component).toContainText("Learn React");
});
