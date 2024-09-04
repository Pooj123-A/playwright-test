
import { test, expect } from "@playwright/experimental-ct-react";
import App1693 from "./App1693.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App1693 />);
  await expect(component).toContainText("Learn React");
});
