
import { test, expect } from "@playwright/experimental-ct-react";
import App2161 from "./App2161.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App2161 />);
  await expect(component).toContainText("Learn React");
});
