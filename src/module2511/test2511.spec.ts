
import { test, expect } from "@playwright/experimental-ct-react";
import App2511 from "./App2511.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App2511 />);
  await expect(component).toContainText("Learn React");
});
