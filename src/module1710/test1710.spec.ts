
import { test, expect } from "@playwright/experimental-ct-react";
import App1710 from "./App1710.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App1710 />);
  await expect(component).toContainText("Learn React");
});
