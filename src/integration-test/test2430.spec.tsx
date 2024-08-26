
import { test, expect } from "@playwright/experimental-ct-react";
import App2430 from "../example/App2430.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App2430 />);
  await expect(component).toContainText("Learn React");
});
