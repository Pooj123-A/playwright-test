
import { test, expect } from "@playwright/experimental-ct-react";
import App2703 from "./App2703.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App2703 />);
  await expect(component).toContainText("Learn React");
});
