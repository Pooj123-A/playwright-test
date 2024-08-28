
import { test, expect } from "@playwright/experimental-ct-react";
import App2764 from "./App2764.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App2764 />);
  await expect(component).toContainText("Learn React");
});
