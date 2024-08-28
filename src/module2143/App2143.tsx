
import { test, expect } from "@playwright/experimental-ct-react";
import App2143 from "./App2143.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App2143 />);
  await expect(component).toContainText("Learn React");
});
