
import { test, expect } from "@playwright/experimental-ct-react";
import App2806 from "./App2806.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App2806 />);
  await expect(component).toContainText("Learn React");
});
