
import { test, expect } from "@playwright/experimental-ct-react";
import App2533 from "./App2533.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App2533 />);
  await expect(component).toContainText("Learn React");
});
