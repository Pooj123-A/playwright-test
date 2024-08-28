
import { test, expect } from "@playwright/experimental-ct-react";
import App1129 from "./App1129.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App1129 />);
  await expect(component).toContainText("Learn React");
});
