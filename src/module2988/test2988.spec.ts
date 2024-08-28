
import { test, expect } from "@playwright/experimental-ct-react";
import App2988 from "./App2988.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App2988 />);
  await expect(component).toContainText("Learn React");
});
