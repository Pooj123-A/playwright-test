
import { test, expect } from "@playwright/experimental-ct-react";
import App2704 from "./App2704.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App2704 />);
  await expect(component).toContainText("Learn React");
});
