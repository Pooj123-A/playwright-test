
import { test, expect } from "@playwright/experimental-ct-react";
import App2355 from "./App2355.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App2355 />);
  await expect(component).toContainText("Learn React");
});
