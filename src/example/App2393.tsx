
import { test, expect } from "@playwright/experimental-ct-react";
import App2393 from "./App2393.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App2393 />);
  await expect(component).toContainText("Learn React");
});
