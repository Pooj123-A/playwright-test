
import { test, expect } from "@playwright/experimental-ct-react";
import App2184 from "./App2184.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App2184 />);
  await expect(component).toContainText("Learn React");
});
