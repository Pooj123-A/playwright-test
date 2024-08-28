
import { test, expect } from "@playwright/experimental-ct-react";
import App1880 from "./App1880.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App1880 />);
  await expect(component).toContainText("Learn React");
});
