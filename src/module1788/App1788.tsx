
import { test, expect } from "@playwright/experimental-ct-react";
import App1788 from "./App1788.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App1788 />);
  await expect(component).toContainText("Learn React");
});
