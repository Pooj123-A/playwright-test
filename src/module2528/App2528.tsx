
import { test, expect } from "@playwright/experimental-ct-react";
import App2528 from "./App2528.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App2528 />);
  await expect(component).toContainText("Learn React");
});
