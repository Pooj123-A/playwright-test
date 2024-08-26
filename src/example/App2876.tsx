
import { test, expect } from "@playwright/experimental-ct-react";
import App2876 from "./App2876.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App2876 />);
  await expect(component).toContainText("Learn React");
});
