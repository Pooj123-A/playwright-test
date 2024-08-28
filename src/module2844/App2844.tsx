
import { test, expect } from "@playwright/experimental-ct-react";
import App2844 from "./App2844.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App2844 />);
  await expect(component).toContainText("Learn React");
});
