
import { test, expect } from "@playwright/experimental-ct-react";
import App2368 from "./App2368.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App2368 />);
  await expect(component).toContainText("Learn React");
});
