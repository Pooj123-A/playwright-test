
import { test, expect } from "@playwright/experimental-ct-react";
import App1631 from "./App1631.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App1631 />);
  await expect(component).toContainText("Learn React");
});
