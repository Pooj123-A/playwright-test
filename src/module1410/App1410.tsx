
import { test, expect } from "@playwright/experimental-ct-react";
import App1410 from "./App1410.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App1410 />);
  await expect(component).toContainText("Learn React");
});
