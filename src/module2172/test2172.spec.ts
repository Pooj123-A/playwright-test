
import { test, expect } from "@playwright/experimental-ct-react";
import App2172 from "./App2172.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App2172 />);
  await expect(component).toContainText("Learn React");
});
