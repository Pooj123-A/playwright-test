
import { test, expect } from "@playwright/experimental-ct-react";
import App1774 from "./App1774.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App1774 />);
  await expect(component).toContainText("Learn React");
});
