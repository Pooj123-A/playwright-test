
import { test, expect } from "@playwright/experimental-ct-react";
import App2557 from "./App2557.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App2557 />);
  await expect(component).toContainText("Learn React");
});
