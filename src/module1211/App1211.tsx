
import { test, expect } from "@playwright/experimental-ct-react";
import App1211 from "./App1211.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App1211 />);
  await expect(component).toContainText("Learn React");
});
