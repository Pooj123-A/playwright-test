
import { test, expect } from "@playwright/experimental-ct-react";
import App2137 from "./App2137.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App2137 />);
  await expect(component).toContainText("Learn React");
});
