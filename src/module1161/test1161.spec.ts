
import { test, expect } from "@playwright/experimental-ct-react";
import App1161 from "./App1161.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App1161 />);
  await expect(component).toContainText("Learn React");
});
