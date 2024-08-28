
import { test, expect } from "@playwright/experimental-ct-react";
import App2068 from "./App2068.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App2068 />);
  await expect(component).toContainText("Learn React");
});
