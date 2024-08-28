
import { test, expect } from "@playwright/experimental-ct-react";
import App1673 from "./App1673.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App1673 />);
  await expect(component).toContainText("Learn React");
});
