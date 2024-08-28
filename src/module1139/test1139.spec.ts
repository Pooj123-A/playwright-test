
import { test, expect } from "@playwright/experimental-ct-react";
import App1139 from "./App1139.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App1139 />);
  await expect(component).toContainText("Learn React");
});
