
import { test, expect } from "@playwright/experimental-ct-react";
import App1135 from "./App1135.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App1135 />);
  await expect(component).toContainText("Learn React");
});
