
import { test, expect } from "@playwright/experimental-ct-react";
import App1911 from "./App1911.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App1911 />);
  await expect(component).toContainText("Learn React");
});
