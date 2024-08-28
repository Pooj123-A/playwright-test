
import { test, expect } from "@playwright/experimental-ct-react";
import App2320 from "./App2320.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App2320 />);
  await expect(component).toContainText("Learn React");
});
