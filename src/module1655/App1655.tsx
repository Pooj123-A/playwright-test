
import { test, expect } from "@playwright/experimental-ct-react";
import App1655 from "./App1655.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App1655 />);
  await expect(component).toContainText("Learn React");
});
