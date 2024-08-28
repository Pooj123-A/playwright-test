
import { test, expect } from "@playwright/experimental-ct-react";
import App2297 from "./App2297.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App2297 />);
  await expect(component).toContainText("Learn React");
});
