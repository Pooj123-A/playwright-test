
import { test, expect } from "@playwright/experimental-ct-react";
import App2092 from "./App2092.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App2092 />);
  await expect(component).toContainText("Learn React");
});
