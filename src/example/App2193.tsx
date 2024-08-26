
import { test, expect } from "@playwright/experimental-ct-react";
import App2193 from "./App2193.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App2193 />);
  await expect(component).toContainText("Learn React");
});
