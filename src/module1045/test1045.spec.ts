
import { test, expect } from "@playwright/experimental-ct-react";
import App1045 from "./App1045.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App1045 />);
  await expect(component).toContainText("Learn React");
});
