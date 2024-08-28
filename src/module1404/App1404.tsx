
import { test, expect } from "@playwright/experimental-ct-react";
import App1404 from "./App1404.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App1404 />);
  await expect(component).toContainText("Learn React");
});
