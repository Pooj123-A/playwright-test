
import { test, expect } from "@playwright/experimental-ct-react";
import App2223 from "./App2223.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App2223 />);
  await expect(component).toContainText("Learn React");
});
