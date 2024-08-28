
import { test, expect } from "@playwright/experimental-ct-react";
import App2835 from "./App2835.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App2835 />);
  await expect(component).toContainText("Learn React");
});
