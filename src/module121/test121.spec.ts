
import { test, expect } from "@playwright/experimental-ct-react";
import App121 from "./App121.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App121 />);
  await expect(component).toContainText("Learn React");
});
