
import { test, expect } from "@playwright/experimental-ct-react";
import App1555 from "./App1555.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App1555 />);
  await expect(component).toContainText("Learn React");
});
