
import { test, expect } from "@playwright/experimental-ct-react";
import App2954 from "./App2954.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App2954 />);
  await expect(component).toContainText("Learn React");
});
