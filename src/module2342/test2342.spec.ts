
import { test, expect } from "@playwright/experimental-ct-react";
import App2342 from "./App2342.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App2342 />);
  await expect(component).toContainText("Learn React");
});
