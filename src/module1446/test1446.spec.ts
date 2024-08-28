
import { test, expect } from "@playwright/experimental-ct-react";
import App1446 from "./App1446.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App1446 />);
  await expect(component).toContainText("Learn React");
});
