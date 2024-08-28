
import { test, expect } from "@playwright/experimental-ct-react";
import App2230 from "./App2230.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App2230 />);
  await expect(component).toContainText("Learn React");
});
