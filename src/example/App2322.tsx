
import { test, expect } from "@playwright/experimental-ct-react";
import App2322 from "./App2322.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App2322 />);
  await expect(component).toContainText("Learn React");
});
