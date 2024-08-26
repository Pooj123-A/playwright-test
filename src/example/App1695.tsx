
import { test, expect } from "@playwright/experimental-ct-react";
import App1695 from "./App1695.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App1695 />);
  await expect(component).toContainText("Learn React");
});
