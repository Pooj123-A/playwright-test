
import { test, expect } from "@playwright/experimental-ct-react";
import App2487 from "./App2487.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App2487 />);
  await expect(component).toContainText("Learn React");
});
