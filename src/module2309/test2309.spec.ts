
import { test, expect } from "@playwright/experimental-ct-react";
import App2309 from "./App2309.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App2309 />);
  await expect(component).toContainText("Learn React");
});
