
import { test, expect } from "@playwright/experimental-ct-react";
import App1767 from "./App1767.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App1767 />);
  await expect(component).toContainText("Learn React");
});
