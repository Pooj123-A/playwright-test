
import { test, expect } from "@playwright/experimental-ct-react";
import App2386 from "./App2386.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App2386 />);
  await expect(component).toContainText("Learn React");
});
