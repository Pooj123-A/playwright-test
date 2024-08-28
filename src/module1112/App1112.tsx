
import { test, expect } from "@playwright/experimental-ct-react";
import App1112 from "./App1112.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App1112 />);
  await expect(component).toContainText("Learn React");
});
